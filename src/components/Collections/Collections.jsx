import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Information from "../Home/Information/Information";
import Footers from "../Home/Footer/Footer";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth: '86%',
    margin: '0 auto',
    gap: '14px',
    padding: '30px 0px',
  },
  loadmore: {
    display: 'inline - block',
    maxWidth: '220px',
    width: '100%',
    height: '50px',
    color: '#212121',
    lineHeight: '50px',
    textAlign: 'center',
    textTransform: 'uppercase',
    border: '2px solid #212121',
    cursor: 'pointer',
    transition: 'ease-in-out 400ms',
    fontWeight: 'bold'
  }
}));


const Collections = () => {
  const [visible, setVisible] = useState(3);
  const classes = useStyles();
  const collections = [
    {
      id: 1,
      imgCollections: 'https://sixdo.vn/images/collection/2022/medium/doc-_1641177849.jpg',
    },
    {
      id: 2,
      imgCollections: 'https://sixdo.vn/images/collection/2022/medium/z3085938903822_69f79d297c2ed489825ead0d92dae5b2_1641451735.jpg',
    },
    {
      id: 3,
      imgCollections: 'https://sixdo.vn/images/collection/2022/medium/doc-tk-copy_1641450845.jpg',
    },
    {
      id: 4,
      imgCollections: 'https://sixdo.vn/images/collection/2021/medium/doc-tk-copy_1635317063.jpg',
    },
    {
      id: 5,
      imgCollections: 'https://sixdo.vn/images/collection/2021/medium/anh-doc_1634281046.png',
    },
    {
      id: 6,
      imgCollections: 'https://sixdo.vn/images/collection/2021/medium/doc-tk-copy_1634011950.jpg',
    },
    {
      id: 7,
      imgCollections: 'https://sixdo.vn/images/collection/2021/medium/doc-tk-copy_1632753237.jpg'
    },
    {
      id: 8,
      imgCollections: 'https://sixdo.vn/images/collection/2021/medium/doc-tk-copy_1629286514.jpg'
    },
    {
      id: 9,
      imgCollections: 'https://sixdo.vn/images/collection/2021/medium/doc-tk-copy_1626659109.jpg'
    },
    {
      id: 10,
      imgCollections: 'https://sixdo.vn/images/collection/2021/original/nh-web-doc_1625469762.jpg'
    },
    {
      id: 11,
      imgCollections: 'https://sixdo.vn/images/collection/2021/original/thiet-ke-cover-web-01_1624431110.jpg'
    },
    {
      id: 12,
      imgCollections: 'https://sixdo.vn/images/collection/2021/original/thiet-ke-story-01_1624344603.jpg'
    }
  ]
  const hanldeLoadMore = () => {
    setVisible((huyit) => huyit + 3)
  }
  return (
    <section>
      <div className={classes.root}>
        {collections.slice(0, visible).map((item, index) => (
          <div>
            <img src={item.imgCollections} alt="" width='422px' height='750px' />
          </div>
        ))}
        <div className={classes.loadmore} onClick={hanldeLoadMore}>
          view more +
        </div>
      </div>
      <Information />
      <Footers />
    </section>
  );
}

export default Collections;