import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Recommend from "./components/recommendation/Recommend";
import Navbar from "./components/navbar/Navbar";
import img1 from "./images/bg_img1.avif";
import img2 from "./images/bg_img2.avif";
import img3 from "./images/bg_img3.jpg";
import img4 from "./images/bg_img4.jpeg";
import img5 from "./images/bg_img5.avif";
import img6 from "./images/bg_img6.avif";

function App() {
  const img_list = [img1, img2, img3, img4, img5, img6];
  const random_index = () => {
    const index = Math.floor(Math.random() * img_list.length);
    return index;
  };
  return (
    <div
      className="cover"
      style={{
        backgroundImage: `url(${img_list[random_index()]})`,
      }}
    >
      <div className="navbar">
        <Navbar />
      </div>
      <div className="info">
        <Home />
        <Recommend />
      </div>
      <Footer />
    </div>
  );
}

export default App;
