import { createTheme } from "@mui/material/styles";

export const primaryBlue50 = "#E3F3FF";
export const primaryBlue200 = "#A9D5FF";
export const primaryBlue300 = "#75B8FF";
export const primaryBlue400 = "#49A2E3";
export const primaryBlue500 = "#1F7EDF";
export const primaryBlue600 = "#1862B5";
export const primaryBlue700 = "#124886";
export const primaryBlue800 = "#0C3060";

export const primaryGray25 = "#F8F8F8";
export const primaryGray50 = "#F2F2F2";
export const primaryGray100 = "#E6E6E6";
export const primaryGray200 = "#CCCCCC";
export const primaryGray300 = "#B3B3B3";
export const primaryGray400 = "#999999";
export const primaryGray500 = "#808080";
export const primaryGray600 = "#666666";
export const primaryGray700 = "#4D4D4D";
export const primaryGray800 = "#333333";
export const primaryGray900 = "#1A1A1A";

export const secondaryRed200 = "#FD5D5D";

export const secondaryGreen100 = "#ECFFEB";
export const secondaryGreen200 = "#08A301";

// MUI 전체 테마
export const muiTheme = createTheme({
  palette: {
    primary: {
      main: primaryBlue400,
      50: primaryBlue50,
      200: primaryBlue200,
      300: primaryBlue300,
      400: primaryBlue400,
      500: primaryBlue500,
      600: primaryBlue600,
      700: primaryBlue700,
      800: primaryBlue800,
    },
    grey: {
      main: primaryGray200,
      25: primaryGray25,
      100: primaryGray100,
      200: primaryGray200,
      300: primaryGray300,
      400: primaryGray400,
      600: primaryGray600,
      700: primaryGray700,
      800: primaryGray800,
      900: primaryGray900,
    },
    red: {
      main: secondaryRed200,
      200: secondaryRed200,
    },
    error: {
      main: secondaryRed200,
    },
    white: {
      main: "#FFF",
    },
  },
  breakpoints: {
    values: {
      xs: 10,
      sm: 640,
      md: 1024,
      lg: 1440, // 기준 사이즈
      xl: 1920,
    },
  },
  typography: {
    button: {
      // 텍스트 대문자 방지
      textTransform: "none",
      fontSize: "15px", // 버튼 기본 폰트 사이즈
    },
    fontFamily: [
      "Pretendard",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "system-ui",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
        style: {
          fontWeight: 600,
          // fontSize: "15px", // 고정되어서 안바뀌는  typography - button 이용
          fontFamily: [
            "Pretendard",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "system-ui",
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
          paddingTop: "13.5px",
          paddingBottom: "13.5px",
        },
      },
      styleOverrides: {
        containedPrimary: {
          color: "#FFF",
        },
        outlinedPrimary: {
          fontSize: "12px",
          // disabled가 아닌 hover의 경우
          "&:not(.Mui-disabled):hover": {
            backgroundColor: primaryBlue400,
            color: "#FFF",
            border: "none",
          },
        },
        contained: {
          "&.Mui-disabled": {
            opacity: 0.3,
            backgroundColor: primaryBlue400,
            color: "#FFF",
            cursor: "not-allowed",
            pointerEvents: "auto", // cursor not-allowed를 위한
          },
        },
        outlined: {
          "&.Mui-disabled": {
            opacity: 0.3,
            borderColor: primaryBlue400,
            color: primaryBlue400,
            cursor: "not-allowed",
            pointerEvents: "auto",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        style: {
          borderRadius: "6px",
        },
        inputProps: {
          style: {
            padding: "14px",
            fontSize: "14px",
            color: primaryGray700,
          },
        },
      },
      styleOverrides: {
        root: {
          "& fieldset": {
            borderWidth: "1px !important",
            borderColor: primaryGray100, // 기본 테두리 색상
            color: primaryGray200,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: "0px", // helperText 위치를 왼쪽으로 10px 이동
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
    },
    MuiTypography: {
      defaultProps: {
        color: primaryGray700, // 텍스트 기본색상
        style: {
          // wordBreak: "keep-all", // 단어 단위 줄바꿈
          whiteSpace: "pre-wrap",
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        style: {
          padding: 0,
        },
      },
      styleOverrides: {
        root: {
          "&:hover": {
            "& .MuiSvgIcon-root": {
              color: primaryBlue400, // 호버 시 테두리 (svg 색상)
            },
          },
          "&&:hover": {
            backgroundColor: "transparent", // 호버 시 기본 오버레이 제거
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: primaryGray300, // Textfield의 disabled 일 때의 글씨 색상
            backgroundColor: primaryGray50, // Textfield의 disabled 일 때의 배경색
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: "red", // Textfield의 disabled 일 때의 라벨 색상
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: primaryGray100, // Textfield의 disabled 일 때의 테두리 색상
            },
          },
        },
      },
    },
  },
});
