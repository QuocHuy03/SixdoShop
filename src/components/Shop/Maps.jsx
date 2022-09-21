import { makeStyles } from '@material-ui/core/styles';
import Iframe from 'react-iframe';
import Footers from '../Home/Footer/Footer';
import Information from '../Home/Information/Information';
import './style.css';

const useStyles = makeStyles((theme) => ({
  store: {
    textAlign: 'center',
    fontSize: '30px'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '80%',
    margin: '0 auto',
    gap: '14px',
    padding: '30px 0px',
  },
  sixdo: {
    padding: '20px 0px',
    lineHeight: '25px',
    fontSize: '20px'
  },
  hethong: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  flex: {
    display: 'flex',
    gap: '30px'
  },
  select: {
    margin: '20px 0px',
    background: 'transparent',
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    border: '1px solid #E3DDBB',
    fontFamily: '"Montserrat", sans-serif',
    outline: 'none',
  },
  shoppe: {
    fontWeight: 'bold',
  },
  listmaps: {
    borderTop: '1px solid #E3DDBB',
    marginTop: '20px'
  },

  title: {
    display: 'flex',
    lineHeight: '26px',
    margin: '0 0 8.5px'
  },
}));

const Maps = () => {
  const classes = useStyles();
  const listData = [
    {
      id: 1,
      content: 'SIXDO TIMES CITY',
      location: 'TD - 34 - 36, B1 TIMES CITY, Q. HAI BA TRUNG, HN',
      phone: '0247 3050 996'
    },
    {
      id: 2,
      content: 'SIXDO TRẦN DUY HƯNG',
      location: '108A TRAN DUY HUNG, Q. CAU GIAY, HN',
      phone: '0247 3030 996'
    },
    {
      id: 3,
      content: 'SIXDO ROYAL CITY',
      location: 'B2 - R6 - 43A, B2 ROYAL CITY, Q. THANH XUAN, HN',
      phone: '0247 3040 996'
    },
    {
      id: 4,
      content: 'SIXDO LÁNG HẠ',
      location: '12 LANG HA, Q. BA DINH, HN',
      phone: '0247 3020 996'
    },
    {
      id: 5,
      content: 'SIXDO HẢI DƯƠNG',
      location: '7c Trần Hưng Đạo, Phường Quang Trung',
      phone: '0220 7309 996'
    },
    {
      id: 6,
      content: 'SIXDO SIXDO SAIGON CENTRE',
      location: 'Lô L2 - 30/31, TTTM Saigon Centre, Số 67 Lê Lợi, Phường Bến Nghé, Quận 1, TP HCM',
      phone: '0287 301 1996'
    },

  ]
  const span = {
    width: '16px',
    marginRight: '10px',
    marginTop: '5px',
  }
  return (
    <section>
      <div className={classes.root}>
        <div>
          <h2 className={classes.store}>STORE</h2>
          <p className={classes.sixdo}>SIXDO hiện đã có mặt 50 showroom trên toàn quốc. Giờ hoạt động: 8:00 AM - 22:00 PM mỗi ngày, trừ các dịp lễ Tết (lịch hoạt động trong các dịp đặc biệt sẽ có thông báo riêng). Các showroom trong TTTM hoạt động theo giờ của TTTM.</p>
        </div>
        <div className={classes.flex}>
          <div className={classes.map}>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245368.2610494859!2d107.93803973954033!3d16.071763492683953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2zxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1663492017764!5m2!1svi!2s" width="644" height="770" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
          </div>
          <div className={classes.shop}>
            <div className={classes.hethong}>
              <img className={classes.img} src="https://sixdo.vn/images/ic-store.png" alt="" />
              <p className={classes.shoppe}>HỆ THỐNG CỬA HÀNG</p>
            </div>
            <div>
              <select className={classes.select} onChange={(e) => console.log(e.target.value)}>
                <option value="">--Chọn tỉnh/thành phố--</option>
                <option value="89">An Giang</option>
                <option value="77">Bà Rịa - Vũng Tàu</option>
                <option value="24">Bắc Giang</option>
                <option value="27">Bắc Ninh</option>
                <option value="74">Bình Dương</option>
                <option value="70">Bình Phước</option>
              </select>
            </div>
            <div className={classes.listmaps}>
              <div className='list'>
                {listData.map((items) => (
                  <div className='item_map'>
                    <div className={classes.content}>
                      <p className={classes.title}>
                        <strong>{items.content}</strong>
                      </p>
                      <p className={classes.title}>
                        <span style={span}>
                          <img src="https://sixdo.vn/images/ic-marker.png" alt="" />
                        </span>
                        {items.location}
                      </p>
                      <p className={classes.title}>
                        <span style={span}>
                          <img src="https://sixdo.vn/images/ic-phone.png" alt="" />
                        </span>
                        {items.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Information />
      <Footers />
    </section>
  );
}

export default Maps;