import "./home.css";

function Home() {
  return (
    <>
      <div className="header">
        <div
          style={{ width: 500, height: 300, position: "relative" }}
          className="header-photo-container"
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 25,
            }}
            src="../public/20250418_192309.jpg"
            alt="restaruan photo"
            className="header-photo"
          />
        </div>
        <div className="header-info">
          <p className="header-info-text">10:00 - 24:00</p>
          <p className="header-info-text">Bodomzor metro!</p>
          <a href="www.atmosfera.restaruan.uz" className="header-info-link">
            atmosfera.restaruan.uz
          </a>
          <p className="header-info-text">
            Tabiat bilan uyg‘unlashgan atmosfera — har bir mehmon uchun
            unutilmas damlar
          </p>
        </div>
      </div>
      <div className="department">
        <a href="" className="department-item">Tushlik</a>
        <a href="" className="department-item">Ichimliklar</a>
        <a href="" className="department-item">Kofe</a>
        <a href="" className="department-item">Shirinliklar</a>
      </div>
    </>
  );
}

export default Home;
