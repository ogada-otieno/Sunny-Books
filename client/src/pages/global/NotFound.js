import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const NotFound = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="warning">
        <AlertTitle>Sorry</AlertTitle>
        The page you are looking for does not exist. —{" "}
        <strong><Link to="/">Go back to Home</Link></strong>
      </Alert>
    </Box>
  );
};

export default NotFound;
