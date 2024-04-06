import { Box, Button, Stack, TextField } from "@mui/material";

const DoctorsPage = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button>Create new doctor</Button>
        <TextField size="small" placeholder="Search doctors" />
      </Stack>
    </Box>
  );
};

export default DoctorsPage;
