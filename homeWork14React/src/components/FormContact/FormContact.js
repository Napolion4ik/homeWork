import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createContact, getContact, updateContact } from "../../api/api";

import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import TextFieldCustom from "../TextField/TextField";

function FormContact() {
  const [formValue, setFormValue] = useState({});
  const [remove, setRemove] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getContact(id).then((data) => {
        setFormValue(data);
        setRemove(true);
      });
    } else {
      setFormValue({
        name: "",
        surname: "",
        phone: "",
      });
    }
  }, [id]);

  const handlerChang = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const goBack = () => {
    navigate(-1);
  };

  const handlerSubmit = () => {
    if (!id) {
      createContact(formValue).then(navigate("/contacts"));
    } else {
      updateContact(formValue).then(navigate("/contacts"));
    }
  };

  return (
    <>
      {Object.keys(formValue).length === 0 ? (
        <Box
          sx={{ display: "flex", position: "fixed", top: "45%", left: "47%" }}
        >
          <CircularProgress size="5rem" />
        </Box>
      ) : (
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
            width: "400px",
            margin: "0 auto",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h6" component="h6">
            {remove
              ? `Редактировать пользователя#${id}`
              : "Создать пользователя"}
          </Typography>
          <Divider />
          <TextFieldCustom
            name="Name"
            formValue={formValue.name}
            handlerChang={handlerChang}
          >
            <AccountCircle />
          </TextFieldCustom>
          <TextFieldCustom
            name="Surname"
            formValue={formValue.surname}
            handlerChang={handlerChang}
          >
            <AccountCircle />
          </TextFieldCustom>
          <TextFieldCustom
            name="Phone"
            formValue={formValue.phone}
            handlerChang={handlerChang}
          >
            <PhoneIcon />
          </TextFieldCustom>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Button
                onClick={handlerSubmit}
                variant="contained"
                color="success"
              >
                Submit
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={goBack} variant="contained" color="warning">
                Cansel
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default FormContact;
