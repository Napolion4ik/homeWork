import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EditIcon from "@mui/icons-material/Edit";
import { deleteContact } from "../../api/api";
import { Link } from "react-router-dom";

function Contact({ name, surname, phone, id, setContacts, setShow }) {
  const handlerDelete = () => {
    setShow((prevShow) => {
      return { ...prevShow, showWarning: true, showSucces: false };
    });
    deleteContact(id).then(() => {
      setContacts((prev) => prev.filter((item) => item.id !== id));
      setShow((prevShow) => {
        return { ...prevShow, showSucces: true };
      });
    });
    setTimeout(() => {
      setShow((prevShow) => {
        return { ...prevShow, showWarning: false };
      });
    }, 4000);
  };

  return (
    <>
      <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{surname}</TableCell>
        <TableCell align="right">{phone}</TableCell>
        <TableCell align="center">
          <IconButton onClick={handlerDelete} color="error" sx={{ mt: "5px" }}>
            <HighlightOffIcon />
          </IconButton>
          <Link to={id}>
            <IconButton color="success" sx={{ mt: "5px", mr: "25px" }}>
              <EditIcon />
            </IconButton>
          </Link>
        </TableCell>
      </TableRow>
    </>
  );
}

export default Contact;
