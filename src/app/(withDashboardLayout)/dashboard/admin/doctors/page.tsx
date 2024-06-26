"use client";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorsQuery,
} from "@/redux/api/doctorApi";
import { useDebounced } from "@/redux/hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { toast } from "sonner";
import DoctorModal from "./commponents/DoctorModal";

const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedTerms = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerms) {
    query["searchTerm"] = searchTerm; // backend uses this word "searchTerm" to search data
  }

  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  const [deleteDoctor] = useDeleteDoctorMutation();

  const doctors = data?.doctors;
  const meta = data?.meta;

  const handleDelete = async (id: string) => {
    // console.log(id);
    try {
      const res = await deleteDoctor(id).unwrap();

      if (res?.id) {
        toast.success("Doctor deleted successfully");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "apointmentFee", headerName: "Appointment Fee", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create new doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="Search doctors"
        />
      </Stack>

      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={doctors} columns={columns} />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default DoctorsPage;
