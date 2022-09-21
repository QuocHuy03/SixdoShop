
import { makeStyles } from '@material-ui/core/styles';
import Footers from '../Home/Footer/Footer';
import Information from '../Home/Information/Information';
import Huyit from './Huyit';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '86%',
    margin: '0 auto',
    gap: '14px',
    padding: '30px 0px',
  },
}));

export default function WWS() {
  const classes = useStyles();

  return (
    <div>
      <section className={classes.root}>
        <img width='1306px' height='700px' src="https://sixdo.vn/images/banners/original/banner-web-02-1609146470.jpg" alt="" />
      </section>
      <Huyit />
      <Information />
      <Footers />
    </div>
  );
}
