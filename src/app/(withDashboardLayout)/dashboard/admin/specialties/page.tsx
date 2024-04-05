"use client";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SpecialtyModal from "./components/SpecialistModal";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 100 },
    {
      field: "icon",
      headerName: "Icon",
      width: 100,
      renderCell: ({ row }) => {
        return console.log(row);
      },
    },
  ];
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
      <Box>
        {!isLoading ? <DataGrid rows={data} columns={columns} /> : "Loading"}
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
