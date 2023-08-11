import { MouseEventHandler, useState, ReactNode } from "react";
import { Box, Stack, SxProps, Typography, StackProps } from "@mui/material";
import {
  primaryBlue400,
  primaryGray200,
  primaryGray400,
} from "@/constant/styles/styleTheme";
import { PlayerListType } from "../pages/main/_parts/SquadSection";

type RowStackProps = StackProps & {
  children: ReactNode;
};

/** 자주 쓰는 가로 방향 및 세로 가운데 정렬 Stack */
export function RowStack({ children, ...props }: RowStackProps) {
  return (
    <Stack direction="row" alignItems="center" {...props}>
      {children}
    </Stack>
  );
}

/** 회색 테두리 박스 */
export function GrayBorderBox({
  label,
  onClick = () => {},
  sx,
  textSx,
  ...props
}: {
  label: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  sx?: SxProps;
  textSx?: SxProps;
}) {
  return (
    <Box
      onClick={onClick}
      sx={{
        border: `1px solid ${primaryGray400}`,
        borderRadius: "6px",
        px: "6px",
        py: "4px",
        ...sx,
      }}
      {...props}
    >
      <Typography fontSize={12} color={primaryGray400} sx={{ ...textSx }}>
        {label}
      </Typography>
    </Box>
  );
}

/** 도구 선택 박스 */
export function GraySelectBox({
  data,
  onChangeSelect,
  sx,
  textSx,
  ...props
}: {
  data: PlayerListType;
  onChangeSelect: Function;
  sx?: SxProps;
  textSx?: SxProps;
}) {
  const [isSelected, setIsSelected] = useState(false);

  const selectBox = () => {
    if (isSelected) {
      onChangeSelect(data, "remove");
      setIsSelected((prevState) => !prevState);
    } else {
      onChangeSelect(data, "add");
      setIsSelected((prevState) => !prevState);
    }
  };

  return (
    <GrayBorderBox
      onClick={selectBox}
      label={data.name}
      sx={{
        borderColor: isSelected ? primaryBlue400 : primaryGray200,
        cursor: "pointer",
        ...sx,
      }}
      textSx={{
        color: isSelected ? primaryBlue400 : primaryGray400,
        ...textSx,
      }}
      {...props}
    />
  );
}

export function GraySelectBoxList({
  dataList,
  onChangeSelect,
}: {
  dataList: PlayerListType[];
  onChangeSelect: Function;
}) {
  return (
    <RowStack
      columnGap="6px"
      rowGap="6px"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      {dataList.map(function (each) {
        return (
          <GraySelectBox
            key={each.name}
            data={each}
            onChangeSelect={onChangeSelect}
          />
        );
      })}
    </RowStack>
  );
}
