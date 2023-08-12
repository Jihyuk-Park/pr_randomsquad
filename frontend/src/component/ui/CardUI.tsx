import { primaryBlue200, primaryBlue400 } from "@/constant/styles/styleTheme";
import { Box, Typography } from "@mui/material";

export default function CardUI({ data }: { data: any }) {
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
