import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
    background: '#212121',
    color: '#fff',
  },
  img: {
    marginBottom: '10px',
    height: '30px',
    width: '30px',
    objectFit: 'contain',
  },
  item: {
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    padding: '27px 0',
    borderRight: '1px solid rgba(246, 243, 228, 0.1)',
  }
}));

const Information = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.item}>
        <div>
          <img className={classes.img} src="https://sixdo.vn/images/banners/original/limited-time2x-1624335793.png" alt="" />
        </div>
        <div>
          <strong className={classes.title}>6 ngày đổi sản phẩm</strong>
          <p>Đổi trả sản phẩm trong 6 ngày</p>
        </div>
      </div>
      <div className={classes.item}>
        <div>
          <img className={classes.img} src="https://sixdo.vn/images/banners/original/group-242x-1624335840.png" alt="" />
        </div>
        <div>
          <strong className={classes.title}>Hotline 1800 6650</strong>
          <p>8h00 - 21h00, T2 - CN nghỉ Tết Âm lịch</p>
        </div>
      </div>
      <div className={classes.item}>
        <div>
          <img className={classes.img} src="https://sixdo.vn/images/banners/original/group-262x-1624335863.png" alt="" />
        </div>
        <div>
          <strong className={classes.title}>Hệ thống cửa hàng</strong>
          <p>Gần 60 cửa hàng trên toàn hệ thống</p>
        </div>
      </div>
      <div className={classes.item}>
        <div>
          <img className={classes.img} src="https://sixdo.vn/images/banners/original/path-833-1623718758-1624336147.png" alt="" />
        </div>
        <div>
          <strong className={classes.title}>VẬN CHUYỂN</strong>
          <p>Đồng giá 25K toàn quốc</p>
        </div>
      </div>
    </section>
  );
}

export default Information;