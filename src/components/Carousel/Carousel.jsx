import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box } from "@mui/material";
import { useRef } from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const Carousel = ({ items, renderItem }) => {
  const swiperRef = useRef(null);

  return (
    <Box sx={{ position: "relative"}}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween="30px"
        slidesPerView="auto"
        style={{ paddingBottom: "8px",  }}
        breakpoints={{
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{ width: "auto" }}
          >
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <LeftNav onClick={() => swiperRef.current.slidePrev()} />
      <RightNav onClick={() => swiperRef.current.slideNext()} />
    </Box>
  );
};

export default Carousel;
