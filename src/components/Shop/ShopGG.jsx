import { makeStyles } from '@material-ui/core/styles';
import Maps from './Maps';


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

const ShopGG = () => {
  const classes = useStyles();
  return (
    <section>
      <div className={classes.root}>
        <img width='1200px' height='642px' src="https://sixdo.vn/images/banners/original/7akthxy1-1603101178.png" alt="" />
      </div>
      <Maps />
    </section>
  );
}

export default ShopGG;