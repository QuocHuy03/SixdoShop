
import Footers from "./Footer/Footer";
import Information from "./Information/Information";
import InstagramsHome from "./Instagrams/Instagrams";
import HomeProducts from "./Layouts/HomeProducts";
import Slider from "./Slider/Slider";

const Home = () => {
  const arrival = {
    color: '#212121',
    padding: '20px 0px',
    textAlign: 'center',
    fontWeight: '600',
  }
  const xemthem = {
    width: '220px',
    height: '50px',
    background: 'rgba(255, 255, 255, 0)',
    border: '2px solid #212121',
    marginTop: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '14px',
    color: '#212121',
    textTransform: 'uppercase',
    textDecoration: 'none'
  }
  return (
    <section>
      <Slider />
      <h1 style={arrival}>NEW ARRIVAL</h1>
      <HomeProducts />
      <a style={xemthem} href="/products">Xem thêm</a>
      <InstagramsHome />
      <Information />
      <Footers />
    </section>
  );
}

export default Home;