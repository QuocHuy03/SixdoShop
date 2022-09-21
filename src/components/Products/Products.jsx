import { makeStyles } from "@material-ui/core";
import Footers from "../Home/Footer/Footer";
import Information from "../Home/Information/Information";
import SimpleAccordion from "./Accordion/Accordion";
import Banner from "./Banner/Banner";
import Category from "./Categorys/Category";
import Layouts from "./Layouts/Layouts";
import PaginationRounded from "./Pagination/Pagination";
// import Slider from "./Slider/Slider";
import WomenFashion from "./WomenFashion/WomenFashion";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: '1300px',
    margin: '0 auto',
    gap: '30px'
  },
  category: {
    flex: '0 0 214px'
  },
  womenfashion: {
    flexGrow: '1',
  }

}));

const Products = () => {
  const classes = useStyles();
  return (
    <div>
      <Banner />
      <div className={classes.root}>
        <div className={classes.category}>
          <Category />
          <SimpleAccordion />
        </div>
        <div className={classes.womenfashion}>
          <WomenFashion />
          <Layouts />
        </div>
      </div>
      <PaginationRounded />
      <Information />
      <Footers />
    </div>
  );
}

export default Products;