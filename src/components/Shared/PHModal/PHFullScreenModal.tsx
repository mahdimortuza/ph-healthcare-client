import CloseIcon from "@mui/icons-material/Close";
import { DialogContent, DialogTitle } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import { BootstrapDialog, TModalProps } from "./PHModal";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PHFullScreenModal({
  open = false,
  setOpen,
  title = "",
  children,
  sx,
}: TModalProps) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        fullScreen
        onClose={handleClose}
        aria-labelledby="customize-dialog-title"
        open={open}
        sx={{ ...sx }}
        TransitionComponent={Transition}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>{children}</DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
