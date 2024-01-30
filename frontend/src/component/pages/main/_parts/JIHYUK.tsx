import { RowStack } from "@/component/ui/BoxStack";
import { PlayerCard } from "@/component/ui/CardUI";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export function JIHYUK() {
  const [isClicked, setIsClicked] = useState(false);

  const removeJIHYUK = () => {
    setIsClicked(true);
  };

  return (
    <Box sx={{ display: isClicked ? "none" : "block", mt: "40px" }}>
      <Box sx={{ px: "15px" }}>
        <RowStack spacing="6px" sx={{ mt: "25px", mb: "3px" }}>
          <Typography fontSize={20} fontWeight={600}>
            방장 사기
          </Typography>
          <Typography color="#666666" fontSize={14}>
            음하하하하
          </Typography>

          <Button
            onClick={removeJIHYUK}
            sx={{ fontSize: "14px", height: "30px" }}
          >
            영역 삭제
          </Button>
        </RowStack>

        <Typography fontSize={14} sx={{ mb: "10px" }}>
          (클릭 시, 해당 영역이 사라집니다)
        </Typography>
      </Box>

      <RowStack justifyContent="center" sx={{ mb: "30px" }}>
        <PlayerCard />
      </RowStack>
    </Box>
  );
}
