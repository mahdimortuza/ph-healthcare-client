import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

const PHDatePicker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem label="Desktop variant">
        <DesktopDatePicker defaultValue={dayjs(new Date().toDateString())} />
      </DemoItem>
    </LocalizationProvider>
  );
};

export default PHDatePicker;
