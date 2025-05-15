import {Grid,Button} from '@mui/material'

//값이 들어오지 않으면 default 값으로 사용하겠따는 의미
export const CustomButton = ({label,variant="contained",color="primary",onClick}) =>{
    return(
        <Grid>
            <Button variant={variant} color={color} onClick={onClick}>
                {label}
            </Button>
        </Grid>
    )
}