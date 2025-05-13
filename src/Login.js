import {Container,Grid,Typography,TextField,Button} from '@mui/material'
import { signin } from './service/APIService'
import { Link } from 'react-router-dom';
import { NagivationBar } from './Navigater';



export const Login = () => {

    //form
    const handleSubmit = (e) => {
        e.preventDefault(); //페이지가 전체 새로고침되지 않도록 막는다
        //React같은 SPA에서 태그 클릭시 전체 페이지가 새로고침되지 않고, 클라이언트 라우터로만 
        //경로를 변경하고 싶을 때 사용한다.

        //submit(제출, 버튼클릭) 시점에 데이터를 가져온다.
        const data = new FormData(e.target); //submit된 form데이터 가져오기.
        const username = data.get("username");  // username의 필드값 가져오기.
        const password = data.get("password"); //password 필드값 가져오기

        // //아이디,비밀번호 출력(디버깅용)
        console.log("아이디",username)
        console.log("비밀번호",password)

        //signin 호출 로직
        //APIService의 signin함수를 사용해 로그인 요청을 보낸다(매개변수 userDTO)
        signin({username : username, password : password})
    }



    return (
        
<>
        <NagivationBar></NagivationBar>
        <Container component="main" maxWidth="xs" style={{marginTop:"8%"}}>

            

            

            <Typography component="h1" variant='h3' align='center' gutterBottom>
                        로그인
            </Typography>

  

            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}  direction="column">
                    <Grid item xs ={12}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            id="username"
                            label="이메일 주소"
                            type='email'
                            name='username'
                            autoComplete='username'
                        />
                    </Grid>
                    <Grid item xs ={12}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            id="password"
                            label="패스워드"
                            name='password'
                            type='password'
                            autoComplete='password'
                        />

                    </Grid>
                    <Grid item xs={12}>
                        <Button 
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'>
                            로그인
                        </Button>
                    </Grid>
                </Grid>
                <Grid item direction='column'>
                    <Link to="/signup" >
                    계정이 없습니까? 여기서 회원가입하기
                    </Link>
                </Grid>
            </form>
        </Container>
</>
    )
}