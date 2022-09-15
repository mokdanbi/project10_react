import { Map, MapMarker } from "react-kakao-maps-sdk";

const MainMap = () => {
    return (
        <section className="MainMap">
            <div className="container">
                <Map center={{ lat: 33.5563, lng: 126.79581 }}
                    style={{ width: "600px", height: "350px" }}>
                    <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                        <div style={{ color: "#000" }}>Hello World!</div>
                    </MapMarker>
                </Map>
                <div className="mapTxt">
                    <h2>MIDAS<br />OFFICE</h2>
                    <p>60, Yeoksam-ro 17-gil,<br />
                        Gangnam-gu,<br />
                        Seoul, Korea</p>
                </div>
            </div>
        </section>
    )
}

export default MainMap;