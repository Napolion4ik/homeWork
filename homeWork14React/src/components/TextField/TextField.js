import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function TextFieldCustom({ handlerChang, name, children, formValue }) {
  return (
    <TextField
      id="outlined-basic"
      label={name}
      name={name.toLowerCase()}
      fullWidth="true"
      value={formValue}
      onChange={handlerChang}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{children}</InputAdornment>
        ),
      }}
    />
  );
}

export default TextFieldCustom;
