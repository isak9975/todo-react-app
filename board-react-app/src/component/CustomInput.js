import { CustomButton } from "./CustomButton"
import { Input, TextField } from "@mui/material"

export const CustomInput = ({
    label,
    type="text",
    multiline=false,
    rows=1,
    value,
    onChange,
    readOnly=false,
    placeholder=""
}) => {
    return(
        <TextField
            fullWidth
            label={label}
            type={type}
            multiline={multiline}
            rows={rows}
            value={value}
            onChange={onChange}
            margin="normal"
            inputProps={{
                readOnly,
                placeholder,
            }}
                />
    )
}