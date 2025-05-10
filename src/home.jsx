import "./home.css";

function Home() {
  const menuItems = [
    {
      id: 1,
      name: "Pancakes with strawberries and sour cream",
      price: 20000,
      image: "../public/20250418_192309.jpg",
    },
    {
      id: 2,
      name: "Pancakes with apple, cinnamon, and honey",
      price: 25000,
      image: "../public/20250418_192309.jpg",
    },
    {
      id: 3,
      name: "All-in-one breakfast plate",
      price: 40000,
      image: "../public/20250418_192309.jpg",
    },
    {
      id: 4,
      name: "Morning panini",
      price: 28000,
      image: "../public/20250418_192309.jpg",
    },
  ];

  return (
    <>
      <div className="header">
        <div
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
      <div className="menu">
        <h3 className="menu-title">Tushlik</h3>
        <div className="menu-items">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h4>{item.name}</h4>
              <p>{item.price} UZS</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
