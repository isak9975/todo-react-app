import { useState } from "react";
import {Map, MapInfoWindow, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk"

export function MapContainer(){
    
    const [result,setResult] = useState('');
    const [positions,setPositions] = useState(null);


    //지도가 보여질 중심 좌표
    //lat(latitude) 위도 : 위도값이 높을 수록 북쪽
    //lng(longtitud) 경도 : 경도값이 높을 수록 동쪽
    const center = {
        lat : 33.450701,
        lng : 126.570667,
    }

    return(
        <div>
            <Map
                center ={center}
                style={{width:'600', height:'600px'}} //지도의 너비와 높이
                level ={3} 
                onClick={(event,mouseEvent)=>{
                        const latlng = mouseEvent.latLng;
                        setResult(`클릭한 위치의 위도는 ${latlng.getLat()}이고,
                         경도는 ${latlng.getLng()}입니다.`)
                        setPositions({lat:latlng.getLat(), lng:latlng.getLng()});
                        console.log(positions)
                }}

                >

             {/* 인포윈도우 
                텍스트를 올릴 수 있는 말풍선 모양의 이미지를 인포윈도우라고 한다.*/}
            {/* <MapInfoWindow
                position={{
                    lat : 33.450701,
                    lng : 126.570667,
                }}
                removable={true}>
        
            <div style={{padding:"5px", color:"#000"}}>hello world</div>

            </MapInfoWindow> */}

                {/* ?? : 널 병합 연산자
                    좌변이 null 또는 undefined면 우변값을 사용해라 */}
                <MapMarker position={positions??center}/>
                <MapInfoWindow position={positions??center}>
                <div><h6>위도 :{positions.lat} / 경도 : {positions.lng}</h6></div>
                </MapInfoWindow>
                
            </Map>

            <p>
                {result===""?"지도를 클릭해주세요!":result}
            </p>
            


            <h1>카카오지도 api 페이지</h1>
            <div id="map"  style={{width:'500px', height:'400px'}}></div>
            
    
        </div>
    )
}

