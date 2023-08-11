import { RowStack } from "@/component/ui/BoxStack";
import { GrayContainedButton } from "@/component/ui/styled/StyledButton";
import {
  Box,
  Button,
  ButtonGroup,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { PlayerListType } from "./SquadSection";

/* 모달 기본 **/
export default function AddGuestModal({
  modalSwitch,
  setModalSwitch,
  setMemberAndGuest,
}: {
  modalSwitch: boolean;
  setModalSwitch: Function;
  setMemberAndGuest: Function;
}) {
  const sexList = ["남", "여"];
  const [guest, setGuest] = useState({ name: "", sex: "남" });

  const modalClose = () => setModalSwitch(false);

  const onChangeSex = (sex: string) => {
    setGuest((prevState) => ({ ...prevState, sex: sex }));
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setGuest((prevState) => ({ ...prevState, name: e.target.value }));
  };

  const addGuest = () => {
    setMemberAndGuest((prevState: PlayerListType[]) => [
      ...prevState,
      { name: guest.name, sex: guest.sex },
    ]);
    modalClose();
  };

  return (
    <Modal open={modalSwitch} onClose={modalClose}>
      <RemoveScroll enabled={modalSwitch}>
        <Box
          sx={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "330px",
            position: "absolute",
            bgcolor: "#FFF",
            boxShadow: "4px 4px 38px rgba(0, 0, 0, 0.1)",
            borderRadius: "6px",
            outline: "none",
            py: "20px",
            px: "30px",
          }}
        >
          <Typography fontSize={18} fontWeight={600} align="center">
            게스트 추가
          </Typography>

          <Typography sx={{ mb: "3px" }}>이름</Typography>
          <TextField
            value={guest.name}
            onChange={onChangeName}
            fullWidth
            inputProps={{ maxLength: 5, style: { padding: "10px 10px" } }}
          />

          <Typography sx={{ mt: "10px", mb: "3px" }}>성별</Typography>

          <ButtonGroup>
            {sexList.map(function (each) {
              return (
                <Button
                  key={each}
                  variant={guest.sex === each ? "contained" : "outlined"}
                  onClick={() => onChangeSex(each)}
                  sx={{ height: "35px" }}
                >
                  {each}
                </Button>
              );
            })}
          </ButtonGroup>

          <RowStack spacing="5px" sx={{ mt: "20px" }}>
            <Button
              onClick={addGuest}
              disabled={guest.name === ""}
              fullWidth
              sx={{ height: "40px" }}
            >
              추가
            </Button>
            <GrayContainedButton
              onClick={modalClose}
              fullWidth
              sx={{ height: "40px" }}
            >
              취소
            </GrayContainedButton>
          </RowStack>
        </Box>
      </RemoveScroll>
    </Modal>
  );
}
