import {useNavigate} from 'react-router-dom'

export const MultipleButtons = () => {
    const navigate = useNavigate();

    const handleButtonClick = (event) => {
        const buttonId = event.target.id;

        switch(buttonId){
            case 'address':
                navigate("/address");
        }
    }

    return(
        <div>
            <button id="address" onClick={handleButtonClick}>
                주소찾기api
            </button>
        </div>
    )
}