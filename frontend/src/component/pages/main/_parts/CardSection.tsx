import { RowStack } from "@/component/ui/BoxStack";
import CardUI from "@/component/ui/CardUI";
import { cardList } from "@/constant/commonVariable";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";

export function CardSection() {
  const sliderSettings = {
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box>
      <Box sx={{ px: "15px" }}>
        <RowStack spacing="4px" sx={{ mt: "25px", mb: "6px" }}>
          <Typography fontSize={20} fontWeight={600}>
            푸릇 카드
          </Typography>
          <Typography color="#999999" fontSize={14}>
            (스쿼드 순과 동일)
          </Typography>
        </RowStack>

        <Typography fontSize={14} sx={{ mb: "10px" }}>
          ※ 주의: 재미용 헛소리 대잔치입니다.
        </Typography>
      </Box>

      <Box sx={{ pl: "15px" }}>
        <Slider {...sliderSettings}>
          {cardList.map(function (each) {
            return <CardUI key={each.name} data={each} />;
          })}
        </Slider>
      </Box>
    </Box>
  );
}
