import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaHeart } from 'react-icons/fa';
import './style.css';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px'
  },
  jsx: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  price: {
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '30px',
    color: '#212121',
  },
  color: {
    display: 'flex',
    gap: '10px',
    paddingTop: '10px'
  }
}));

export default function Layouts() {
  const [loading, setLoading] = useState(true);
  const huyits = [
    {
      id: 1,
      imgUrl: 'https://sixdo.vn/images/products/2022/large/_DSC0818.jpg',
      title: 'Orange Boatneck Midi Woven Dress',
      gia_hien_tai: '1.127.000đ',
      gia_da_giam: '2.254.000đ',
      colorOne: 'Orange',
      colorTwo: 'Blue'
    },
    {
      id: 2,
      imgUrl: 'https://sixdo.vn/images/products/2022/large/_1648003574DSCF1965say_1.jpg',
      title: 'Long Sleeve Top With Bow',
      gia_hien_tai: '489.000đ',
      gia_da_giam: '978.000đ',
      colorOne: 'Orange',
      colorTwo: 'Blue'
    },
    {
      id: 3,
      imgUrl: 'https://sixdo.vn/images/products/2022/large/_DSC1312.jpg',
      title: 'Yellow Sheath Midi Woven Dress',
      gia_hien_tai: '1.117.000đ',
      gia_da_giam: '2.214.000đ',
      colorOne: 'Pink',
      colorTwo: 'Red'
    },
    {
      id: 4,
      imgUrl: 'https://sixdo.vn/images/products/2022/large/VNQ00224.jpg',
      title: 'Mint Short Sleeves Silk Top',
      gia_hien_tai: '587.000đ',
      gia_da_giam: '1.174.000đ',
      colorOne: 'Pink',
      colorTwo: 'Blue'
    },
    {
      id: 5,
      imgUrl: 'https://sixdo.vn/images/products/2022/large/_DSC1334.jpg',
      title: 'Red V-neck Midi Woven Dress',
      gia_hien_tai: '1.127.000đ',
      gia_da_giam: '2.254.000đ',
      colorOne: 'Orange',
      colorTwo: 'Black',
    },
    {
      id: 6,
      imgUrl: 'https://sixdo.vn/images/products/2022/large/NMD_6309.jpg',
      title: 'Orangish-beige Midi Silk Dress',
      gia_hien_tai: '1.323.000đ',
      gia_da_giam: '2.647.000đ',
      colorOne: 'Violet',
      colorTwo: 'White'
    }
  ]
  const classes = useStyles();
  const colorOne = {
    border: '1px solid #000',
    padding: '4px',
  }
  const colorTwo = {
    border: '1px solid #000',
    padding: '4px'
  }

  return (
    <div className={classes.root}>
      {huyits.map((item) => (
        <div className={classes.products}>
          <div>
            <img className={classes.img} src={item.imgUrl} alt="" width='330px' height='511px' />
          </div>
          <div className={classes.jsx}>
            <div className={classes.price}>
              {item.gia_hien_tai}
            </div>
            <div className={classes.icon}>
              <FaHeart />
            </div>
          </div>
          <div className="title">
            {item.title}
          </div>
          <div className={classes.color}>
            <div style={colorOne}>{item.colorOne}</div>
            <div style={colorTwo}>{item.colorTwo}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
