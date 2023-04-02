import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Your book(s) purchase has been processed and is awaiting shipping —{" "}
        <strong>Thank you for choosing us!</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;