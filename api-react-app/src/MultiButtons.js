import {useNavigate} from 'react-router-dom'

export const MultipleButtons = () => {
    const navigate = useNavigate();

    const handleButtonClick = (event) => {
        const buttonId = event.target.id;

        switch(buttonId){
            case 'address':
                navigate("/address");
                break;
            case 'movie' :
                navigate("/movie");
            case 'map' :
                navigate("/map");
        };
    }

    return(
        <div>
            <button id="address" onClick={handleButtonClick}>
                주소찾기api
            </button>
            <button id="movie" onClick={handleButtonClick}>
                영화api
            </button>
             <button id="map" onClick={handleButtonClick}>
                지도api
            </button>
        </div>
    )
}