import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  homeProducts: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '86%',
    margin: '0 auto'
  },
  price: {
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '30px',
    color: '#212121',
  },
  products: {
    padding: '10px 0px',
  }
}));

const HomeProducts = () => {
  const huyHome = [
    {
      id: 1,
      imgHome: 'https://sixdo.vn/images/products/2022/large/_1663061231VNQ09154_1.jpg',
      price: '2.296.000đ',
      title: 'Cream Shawl Lapel Neck Woven Vest'
    },
    {
      id: 2,
      imgHome: 'https://sixdo.vn/images/products/2022/large/VNQ08778.jpg',
      price: '1.596.000đ',
      title: 'Purple A-line Midi Brocade Skirt'
    },
    {
      id: 3,
      imgHome: 'https://sixdo.vn/images/products/2022/large/_1663039602VNQ08604_1.jpg',
      price: '2.296.000đ',
      title: 'White Long Sleeves Brocade Vest'
    },
    {
      id: 4,
      imgHome: 'https://sixdo.vn/images/products/2022/large/VNQ08360.jpg',
      price: '1.496.000đ',
      title: 'Dark Violet Midi Woven Skirt'
    },
    {
      id: 5,
      imgHome: 'https://sixdo.vn/images/products/2022/large/_1663038892VNQ08312_1.jpg',
      price: '1.396.000đ',
      title: 'Black Pleated Mini Woven Skirt'
    },
    {
      id: 6,
      imgHome: 'https://sixdo.vn/images/products/2022/large/_1663120325VNQ08825_1.jpg',
      price: '1.996.000đ',
      title: 'Mint Notch Lapel Collars Woven Vest'
    },
    {
      id: 7,
      imgHome: 'https://sixdo.vn/images/products/2022/large/VNQ08821.jpg',
      price: '996.000đ',
      title: 'Pleated Midi Mesh Skirt'
    },
    {
      id: 8,
      imgHome: 'https://sixdo.vn/images/products/2022/large/_1663118562VNQ08250_1.jpg',
      price: '1.996.000đ',
      title: 'Mallard Green Woven Vest'
    },
  ]
  const classes = useStyles();
  return (
    <section className={classes.homeProducts}>
      {huyHome.map((item) => (
        <div className={classes.products}>
          <div>
            <img className={classes.img} src={item.imgHome} alt="" width='311px' height='467px' />
          </div>
          <div className={classes.price}>
            {item.price}
          </div>
          <div className="title">
            {item.title}
          </div>
        </div>
      ))}
    </section>
  );
}

export default HomeProducts;