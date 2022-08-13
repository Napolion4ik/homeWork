import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import { useEffect, useState } from "react";
import { getContactsList } from "../../api/api";
import Contact from "../Contact/Contact";

function Contacts() {
  const [show, setShow] = useState({ showWarning: false, showSucces: false });
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContactsList().then(setContacts);
  }, []);

  return (
    <>
      {!contacts.length ? (
        <Box
          sx={{ display: "flex", position: "fixed", top: "45%", left: "47%" }}
        >
          <CircularProgress size="5rem" />
        </Box>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Имя</TableCell>
                <TableCell>Фамилия</TableCell>
                <TableCell align="right">Телефон</TableCell>
                <TableCell align="center">Удалить/Редактировать</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  {...contact}
                  setContacts={setContacts}
                  setShow={setShow}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Snackbar open={show.showWarning} autoHideDuration={5000}>
        <Alert
          severity={show.showSucces ? "success" : "warning"}
          sx={{ width: "100%" }}
        >
          {show.showSucces ? "Видавлено успішно" : "Зачекайте йде видалення"}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Contacts;
