import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '86%',
    margin: '0 auto',
    marginTop: '40px',
    borderTop: '1px solid #e3ddbb'
  },
  Instagrams: {
    textAlign: 'center',
    padding: '30px 0',
  },
  sixdo: {
    fontWeight: 500,
    fontSize: '20px',
    textTransform: 'none',
  },
  imgHomes: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'space-around',
  }
}));

const InstagramsHome = () => {
  const classes = useStyles();
  const ig = [
    {
      id: 1,
      imgIG: 'https://sixdo.vn/images/banners/mresized/1-06-1663222435.png'
    },
    {
      id: 2,
      imgIG: 'https://sixdo.vn/images/banners/mresized/1-05-1663222452.png'
    },
    {
      id: 3,
      imgIG: 'https://sixdo.vn/images/banners/mresized/1-11-1663222481.png'
    },
    {
      id: 4,
      imgIG: 'https://sixdo.vn/images/banners/mresized/1-12-1663222510.png'
    },
    {
      id: 5,
      imgIG: 'https://sixdo.vn/images/banners/mresized/1-07-1663222534.png'
    },
    {
      id: 6,
      imgIG: 'https://sixdo.vn/images/banners/mresized/1-18-1663222553.png'
    },
    {
      id: 7,
      imgIG: 'https://sixdo.vn/images/banners/mresized/1-03-1663222344.png'
    },
    {
      id: 8,
      imgIG: 'https://sixdo.vn/images/banners/mresized/1-02-1663222362.png'
    },
    {
      id: 9,
      imgIG: 'https://sixdo.vn/images/banners/mresized/1-01-1663222374.png'
    },
  ]
  return (
    <section className={classes.root}>
      <div className={classes.Instagrams}>
        <h1>INSTAGRAM</h1>
        <span className={classes.sixdo}>@sixdo.vn</span>
      </div>
      <div className={classes.imgHomes}>
        {ig.map((item) => (
          <div>
            <img src={item.imgIG} alt="" width='400px' height='400px' />
          </div>
        ))}
      </div>
    </section>
  );
}

export default InstagramsHome;