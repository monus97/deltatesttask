import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions/action";
import { successAlert } from "../utils/Swal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 27,
  p: 4,
};

const AddItem = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const initialState = {
    title: "",
    description: "",
  };
  const [formData, setFormData] = React.useState(initialState);

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const { title, description } = formData;
  const handleSubmit = () => {
    dispatch(addItem(formData));
    successAlert("Success", "Item Successfully Created");
    setOpen(false);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box className="add_form">Add Form</Box>
            <Typography>Title</Typography>
            <TextField
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Typography>Description</Typography>
            <TextField
              type="text"
              value={description}
              name="description"
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" onClick={() => handleSubmit()}>
                Add
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddItem;
