import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '75%',
    margin: '0 auto',
    textAlign: 'center',
    padding: '40px 0px'
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: '10px',
    fontWeight: 'bold',
    fontSize: '15px',
  },
  info: {
    fontSize: '14px',
    lineHeight: '25px'
  },
  copyright: {
    display: 'flex',
    marginBottom: '35px',
    justifyContent: 'center',
    borderTop: '1px solid #E3DDBB',
    paddingTop: '20px',
  }

}));


const Footers = () => {
  const classes = useStyles();
  return (
    <section>
      <div className={classes.root}>
        <div className={classes.sixdo}>
          <p className={classes.title}>SIXDO</p>
          <div className={classes.info}>
            <p>Sang trọng
              <br />
              Ứng dụng ở mức giá tầm trung
            </p>
          </div>
        </div>
        <div className={classes.sixdo}>
          <p className={classes.title}>HỖ TRỢ KHÁCH HÀNG</p>
          <div className={classes.info}>
            <li>CHÍNH SÁCH VẬN CHUYỂN</li>
            <li>CHÍNH SÁCH ĐỔI TRẢ</li>
            <li>PHƯƠNG THỨC THANH TOÁN</li>
          </div>
        </div>
        <div className={classes.sixdo}>
          <p className={classes.title}>SOCIAL NETWORK</p>
          <div className={classes.info}>
            <a href="https:/">
              <img src="https://sixdo.vn/images/ic-fb.svg" alt="" />
            </a>
            <a href="https:/">
              <img src="https://sixdo.vn/images/ic-instagram.svg" alt="" />
            </a>
            <a href="https:/">
              <img src="https://sixdo.vn/images/ic-yt.svg" alt="" />
            </a>
            <a href="https:/">
              <img src="https://sixdo.vn/images/ic-tictok.svg" alt="" />
            </a>
          </div>
          <div className={classes.uytin}>
            <img src="https://sixdo.vn/images/Thongbaobocongthuong.svg" alt="" />
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <span>©2020 Sixdo.vn</span>
      </div>
    </section>
  );
}

export default Footers;