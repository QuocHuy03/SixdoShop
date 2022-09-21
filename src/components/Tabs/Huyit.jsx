import { useState } from "react";
import "./tab.css";

function Huyit() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const favorite = [
    {
      id: 1,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/118354909_1560068317535170_4662163298470785814_o.jpg',
    },
    {
      id: 2,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/120556695_1591074094434592_2064913761598264036_o%20(1).jpg',
    },
    {
      id: 3,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/LINH4549.jpg',
    },
    {
      id: 4,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/LINH4464.jpg',
    },
    {
      id: 5,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/LINH4552.jpg',
    },
    {
      id: 6,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/LINH4509.jpg',
    },
    {
      id: 7,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/LINH4427.jpg',
    },

  ]
  const star = [
    {
      id: 1,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/_1603186725THH_0715_1.jpg',
    },
    {
      id: 2,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/_1603186725sao%2006_1.jpg',
    },
    {
      id: 3,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/_1603186725SIXDO_TANGTHANHHA2_1.jpg',
    },
    {
      id: 4,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/_1603186724sao%2002_1.jpg',
    },
    {
      id: 5,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/_1603186724sao%2005_1.jpg',
    },
    {
      id: 6,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/_1603186724SIXDO_TANGTHANHHA1_1.jpg',
    },
    {
      id: 7,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/_1603186724sao%2004_1.jpg',
    },
    {
      id: 8,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/_1603186724LINH2566_1.jpg',
    },
    {
      id: 9,
      imgWWS: 'https://sixdo.vn/images/image/2020/large/_1603186723LINH8219_1.jpg',
    },

  ]


  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          SIXDO STAR
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          SIXDO FAVORITE
        </button>

      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content active-content" : "content"}>
          {favorite.map((item) => (
            <div className="img">
              <img src={item.imgWWS} width='380px' height='507px' alt="" />
            </div>
          ))}

        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}>
          {star.map((item) => (
            <div className="img">
              <img src={item.imgWWS} width='380px' height='507px' alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className='loadmore'>
        view more +
      </div>
    </div >
  );
}

export default Huyit;