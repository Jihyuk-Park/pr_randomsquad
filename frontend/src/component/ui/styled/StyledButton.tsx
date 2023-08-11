import { primaryGray300, primaryGray400 } from "@/constant/styles/styleTheme";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

/** 회색 버튼 */
export const GrayContainedButton = styled(Button)(() => ({
  backgroundColor: primaryGray300,
  ":hover": {
    backgroundColor: primaryGray400,
  },
  "&.Mui-disabled": {
    backgroundColor: primaryGray300,
  },
  height: "36px",
  fontSize: "14px",
}));
