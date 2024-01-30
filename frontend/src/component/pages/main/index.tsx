import { primaryBlue400 } from "@/constant/styles/styleTheme";
import { Box, Container, Typography } from "@mui/material";
import { SquadSection } from "./_parts/SquadSection";
import { CardSection } from "./_parts/CardSection";
import { JIHYUK } from "./_parts/JIHYUK";

export default function MainPage() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        backgroundColor: "#FFF",
        minHeight: "100vh",
      }}
    >
      <Box
        onClick={() => alert("☆호기심이 많으시군요?☆")}
        sx={{
          backgroundColor: primaryBlue400,
          borderRadius: "0px",
          py: "15px",
          mb: "8px",
        }}
      >
        <Typography align="center" fontSize={20} color="#FFF" fontWeight={600}>
          푸릇푸릇 랜덤 스쿼드 생성기
        </Typography>
      </Box>

      {/* 스쿼드 섹션 */}
      <SquadSection />

      {/* 카드 섹션 */}
      <CardSection />

      {/* 방장사기 */}
      <JIHYUK />

      <Box
        onClick={() => alert("☆화이팅☆")}
        sx={{
          backgroundColor: primaryBlue400,
          mt: "35px",
          py: "12px",
        }}
      >
        <Typography align="center" fontSize={16} color="#FFF" fontWeight={600}>
          매치 화이팅입니다~
        </Typography>
      </Box>
    </Container>
  );
}
