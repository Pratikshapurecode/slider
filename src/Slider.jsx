import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 8 // optional, default to 1.
  },
//   tablet: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 3,
//     slidesToSlide: 3 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 767, min: 464 },
//     items: 2,
//     slidesToSlide: 1 // optional, default to 1.
//   }
};
const sliderImageUrl = [
  //First image url
  {
    url:
      "https://assets.designhill.com/resize_img.php?atyp=st_page_file&pth=ad_bt_h1i1m6igs_org||BT837304||one_hd_1info_1multiple_image_slider_with_label_link_image2_img&flp=1653391306-457516160628cbfca50fdf0-93303467.jpg"
  },
  {
    url:
      "https://wallpaperaccess.com/full/200440.jpg"
  },
  //Second image url
  {
    url:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
  },
  //Third image url
  {
    url:
      "https://i.pinimg.com/originals/cb/52/63/cb52634bb600b9f8de7c64c544c9e7e6.png"
  },

  //Fourth image url

  {
    url:
      "https://e0.pxfuel.com/wallpapers/116/2/desktop-wallpaper-love-birds-beautiful-nature-background.jpg"
  },

  
];
const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
