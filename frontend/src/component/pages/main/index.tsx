import CardUI from "@/component/ui/CardUI";
import { primaryBlue400 } from "@/constant/styles/styleTheme";
import { Box, Container, Typography } from "@mui/material";
import { SquadSection } from "./_parts/SquadSection";

export default function MainPage() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        backgroundColor: "#FFF",
        minHeight: "100vh",
        py: "20px",
        px: "15px",
      }}
    >
      <Box
        sx={{
          backgroundColor: primaryBlue400,
          borderRadius: "8px",
          py: "15px",
          mb: "8px",
        }}
      >
        <Typography align="center" fontSize={20} color="#FFF" fontWeight={600}>
          푸릇푸릇 랜덤 스쿼드 생성기
        </Typography>
      </Box>

      <SquadSection />

      <Typography fontSize={20} fontWeight={600} sx={{ mt: "25px", mb: "6px" }}>
        푸릇 카드
      </Typography>
      <CardUI />
    </Container>
  );
}
