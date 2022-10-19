import { Map, MapMarker } from "react-kakao-maps-sdk";

const MainMap = () => {
  return (
    <section className="MainMap">
      <div className="container">
        {/* <Map center={{ lat: 37.4987, lng: 127.0365 }} style={{ width: "775px", height: "400px" }}>
          <MapMarker position={{ lat: 37.4987, lng: 127.0365 }} ></MapMarker>
        </Map> */}
        <div className="mapImg"></div>
        <div className="mapTxt">
          <h2>MIDAS<br />OFFICE</h2>
          <p>60, Yeoksam-ro 17-gil,<br />
            Gangnam-gu,<br />
            Seoul, Korea</p>
        </div>
      </div>
    </section >
  )
}

export default MainMap;