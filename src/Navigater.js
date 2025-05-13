import {AppBar, Button, Container,Grid,List, Paper, Toolbar, Typography} from '@mui/material'
import { Link } from 'react-router-dom'


export const NagivationBar = (props) => {

return(
  <AppBar position='static'>
    <Toolbar>
      <Grid justifyContent="space-between" container  sx={{flexGrow:1}}>
        <Grid item>
          <Typography variant='h5'><Link to='/' style={{textDecoration:"none",color:"white"}}>오늘의 할 일</Link></Typography>
        </Grid>
        <Grid item>
            <Button color='inherit' raised onClick={props.signout}>
              로그아웃
            </Button>
        </Grid>
        <Grid item>
            <Button color='inherit' raised onClick={()=>{window.location.href="/signup"}}>
              회원가입
            </Button>
        </Grid>
        <Grid item>
            <Button color='inherit' raised onClick={()=>{window.location.href="/"}}>
              홈
            </Button>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
  )
}