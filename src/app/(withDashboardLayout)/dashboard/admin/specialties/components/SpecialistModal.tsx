import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = (values: FieldValues) => {};
  return (
    <PHModal open={open} setOpen={setOpen} title="Create a new specialty">
      <PHForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item mb={6}>
            <PHInput name="title" label="Title" />
          </Grid>
          <Grid item mb={6}>
            <PHFileUploader name="file" label="Upload file" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialistModal;
