import {
  primaryBlue200,
  primaryBlue400,
  primaryBlue50,
} from "@/constant/styles/styleTheme";
import { Box, Stack, Typography } from "@mui/material";

export default function CardUI() {
  return (
    <Box
      sx={{
        border: `1.5px solid ${primaryBlue400}`,
        borderRadius: "8px",
        px: "20px",
        py: "15px",
      }}
    >
      <Typography fontSize={26} fontWeight={700} sx={{ mb: "5px" }}>
        🕶️ 지주희
      </Typography>
      <Box
        sx={{
          height: "0.5px",
          backgroundColor: primaryBlue200,
          mt: "8px",
          mb: "14px",
        }}
      />
      <Typography fontSize={16} fontWeight={600} sx={{ mb: "2px" }}>
        전설의 포켓몬
      </Typography>
      <Typography fontSize={14} color="#666666">
        "가끔씩 모습을 드러내며, 보기 힘든 전설의 포켓몬"
      </Typography>

      <Typography fontSize={16} fontWeight={600} sx={{ mt: "8px", mb: "2px" }}>
        특징
      </Typography>
      <Typography fontSize={14} color="#666666">
        ∙ 잘 속지 않으며 제치기 쉽지 않을껄?
      </Typography>
      <Typography fontSize={14} color="#666666">
        ∙ 그건 제 잔상입니다만...
      </Typography>
      <Typography fontSize={14} color="#666666">
        ∙ 그건 제 잔상입니다만...
      </Typography>
    </Box>
  );
}
