import { primaryBlue200, primaryBlue400 } from "@/constant/styles/styleTheme";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { SairaTypography } from "./styled/StyledTypography";

export function CardUI({ data }: { data: any }) {
  return (
    <Box
      sx={{
        width: 1,
        border: `1.5px solid ${primaryBlue400}`,
        borderRadius: "8px",
        px: "20px",
        py: "15px",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "rgba(73, 162, 227, 0.05)",
        },
      }}
    >
      <Typography
        color={primaryBlue400}
        fontSize={26}
        fontWeight={700}
        sx={{ mb: "5px" }}
      >
        🕶️ {data.name}
      </Typography>
      <Box
        sx={{
          height: "0.5px",
          backgroundColor: primaryBlue200,
          mt: "8px",
          mb: "14px",
        }}
      />
      <Typography fontSize={18} fontWeight={700} sx={{ mb: "2px" }}>
        {data.nickName}
      </Typography>
      <Typography fontSize={14} color="#666666">
        &quot;{data.description}&quot;
      </Typography>

      <Typography fontSize={16} fontWeight={600} sx={{ mt: "8px", mb: "2px" }}>
        특징
      </Typography>
      <Typography fontSize={14} color="#666666">
        ∙ {data.point1}
      </Typography>
      <Typography fontSize={14} color="#666666">
        ∙ {data.point2}
      </Typography>
      <Typography fontSize={14} color="#666666">
        ∙ {data.point3}
      </Typography>
    </Box>
  );
}

export const Card3DUI = ({ children }: { children: React.ReactNode }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateY = (-1 / 5) * x + 20;
    const rotateX = (4 / 30) * y - 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <Box
      sx={{
        width: "300px",
        height: "485px",
        transition: "all 0.1s",
        position: "relative",
        perspective: "350px",
        transform: `rotateY(${rotate.y}deg) rotateX(${rotate.x}deg)`,
        // 여기에 추가적인 스타일을 적용할 수 있습니다.
      }}
      onMouseMove={handleMouseMove}
      onMouseOut={() => setRotate({ x: 0, y: 0 })}
    >
      {children}
    </Box>
  );
};

export function Card3DPika() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateY = (-1 / 5) * x + 20;
    const rotateX = (4 / 30) * y - 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <Box
      sx={{
        width: 220,
        height: 310,
        transition: "all 0.1s",
        position: "relative",
        perspective: "350px",
        transform: `rotateY(${rotate.y}deg) rotateX(${rotate.x}deg)`,
        "&:hover .overlay": {
          filter: "opacity(0.8) brightness(1.2)",
          backgroundPosition: `${rotate.x / 5 + rotate.y / 5}%`,
        },
        "& .overlay": {
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255, 219, 112, 0.8) 45%, rgba(132, 50, 255, 0.6) 50%, transparent 54%)",
          filter: "brightness(1.1) opacity(0)",
          mixBlendMode: "color-dodge",
          backgroundSize: "150% 150%",
          backgroundPosition: "100%",
          transition: "all 0.1s",
        },
        "& .card": {
          width: "100%",
          height: "100%",
          backgroundImage: "url(pika.webp)",
          backgroundSize: "cover",
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseOut={() => setRotate({ x: 0, y: 0 })}
    >
      <Box className="overlay" />
      <Box className="card" />
    </Box>
  );
}

export const PlayerCard = () => {
  const goldColor = "#e9cc74"; // 금색

  return (
    <Box
      sx={{
        position: "relative",
        width: 300,
        height: 485,
        backgroundImage:
          "url(https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png)",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        padding: "3.8rem 0",
        zIndex: 2,
        transition: "200ms ease-in",
      }}
    >
      {/* Player Card Top */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          color: goldColor,
          padding: "0 1.5rem",
        }}
      >
        {/* Player Master Info */}
        <Box
          sx={{
            position: "absolute",
            lineHeight: "2.2rem",
            fontWeight: 300,
            padding: "1.5rem 0",
            textTransform: "uppercase",
          }}
        >
          <Typography variant="h4" sx={{ fontSize: "2rem", color: goldColor }}>
            97
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontSize: "1.4rem", color: goldColor }}
          >
            RW
          </Typography>
          {/* Nations and Clubs */}
          <Box
            component="img"
            src="/korea.png"
            alt="Korea"
            sx={{
              display: "block",
              width: "2rem",
              height: "25px",
              margin: "0.3rem 0",
            }}
          />
          <Box
            component="img"
            src="/logo.png"
            alt="prpr"
            sx={{
              display: "block",
              width: "2.1rem",
              height: "40px",
              my: "8px",
            }}
          />
          <Box
            component="img"
            src="/arsenal.png"
            alt="arsenal"
            sx={{ display: "block", width: "2.1rem", height: "40px" }}
          />
        </Box>

        {/* Player Picture */}
        <Box
          sx={{
            width: "200px",
            height: "200px",
            margin: "0 auto",
            overflow: "hidden",
            position: "relative",
            right: -10,
            bottom: 0,
          }}
        >
          <Box
            component="img"
            alt="Jihyuk"
            src="/jihyuk.png"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />

          <Stack
            direction="row"
            sx={{
              position: "absolute",
              right: 0,
              bottom: "-0.5rem",
              overflow: "hidden",
              fontSize: "1rem",
              fontWeight: 700,
              textTransform: "uppercase",
              width: "100%",
              height: "2rem",
              padding: "0 1.5rem",
              textAlign: "right",
              background: "none",
            }}
          >
            {/* <Typography sx={{ color: goldColor }}>4*SM</Typography>
            <Typography sx={{ color: goldColor }}>4*WF</Typography> */}
          </Stack>
        </Box>
      </Box>

      {/* Player Card Bottom */}
      <Box
        sx={{
          position: "relative",
          padding: "0.3rem 0",
          width: "90%",
          margin: "0 auto",
          height: "auto",
          zIndex: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Saira Semi Condensed', sans-serif",
            width: "100%",
            display: "block",
            textAlign: "center",
            fontSize: "1.6rem",
            textTransform: "uppercase",
            borderBottom: `0.5px solid ${goldColor}`,
            paddingBottom: "0.3rem",
            overflow: "hidden",
            textShadow: "2px 2px #111",
            color: goldColor,
          }}
        >
          JIHYUK PARK
        </Typography>

        {/* Player Features */}
        <Box
          sx={{
            margin: "0.5rem auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack
            sx={{
              borderRight: `0.5px solid ${goldColor}`,
              padding: "0 2.3rem",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Saira Semi Condensed', sans-serif",
                display: "flex",
                fontSize: "1.2rem",
                textTransform: "uppercase",
                color: goldColor,
              }}
            >
              94 <span>PAC</span>
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Saira Semi Condensed', sans-serif",
                display: "flex",
                fontSize: "1.2rem",
                textTransform: "uppercase",
                color: goldColor,
              }}
            >
              97 <span>SHO</span>
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Saira Semi Condensed', sans-serif",
                display: "flex",
                fontSize: "1.2rem",
                textTransform: "uppercase",
                color: goldColor,
              }}
            >
              97 <span>PAS</span>
            </Typography>
          </Stack>

          <Stack
            sx={{
              padding: "0 2.3rem",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Saira Semi Condensed', sans-serif",
                display: "flex",
                fontSize: "1.2rem",
                textTransform: "uppercase",
                color: goldColor,
              }}
            >
              92 <span>DRI</span>
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Saira Semi Condensed', sans-serif",
                display: "flex",
                fontSize: "1.2rem",
                textTransform: "uppercase",
                color: goldColor,
              }}
            >
              96 <span>DEF</span>
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Saira Semi Condensed', sans-serif",
                display: "flex",
                fontSize: "1.2rem",
                textTransform: "uppercase",
                color: goldColor,
              }}
            >
              93 <span>PHY</span>
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
