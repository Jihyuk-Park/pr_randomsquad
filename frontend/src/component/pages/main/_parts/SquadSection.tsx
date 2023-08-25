import { GraySelectBoxList, RowStack } from "@/component/ui/BoxStack";
import { nameList } from "@/constant/commonVariable";
import { primaryGray200 } from "@/constant/styles/styleTheme";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import AddGuestModal from "./AddGuestModal";

export type PlayerListType = {
  name: string;
  sex: "남" | "여";
};

export type MatchListType = {
  male: number;
  female: number;
};

// 스쿼드 항목의 타입 정의
export type SquadItemType = {
  male: PlayerListType[];
  female: PlayerListType[];
  maleGoalKeeper?: string;
  femaleGoalKeeper?: string;
};

export function SquadSection() {
  const [memberAndGuest, setMemberAndGuest] = useState(nameList);
  const [playerList, setPlayerList] = useState<PlayerListType[]>([]);
  const [addGuestModal, setAddGuestModal] = useState(false);

  const [matchList, setMatchList] = useState<MatchListType[]>([
    { male: 3, female: 2 },
    { male: 2, female: 3 },
    { male: 5, female: 0 },
    { male: 0, female: 5 },
    { male: 3, female: 2 },
    { male: 2, female: 3 },
    { male: 3, female: 2 },
  ]);
  const defaultMatch = { male: 3, female: 2 };

  const [isSelectFinish, setIsSelectFinish] = useState(false);

  // 결과
  const [matchSquadList, setMatchSquadList] = useState<SquadItemType[]>([]);
  const [matchPlayerList, setMatchPlayerList] = useState<{}>({});

  const onChangeSelect = (player: PlayerListType, mode: string) => {
    if (mode === "add") {
      setPlayerList((prevState: PlayerListType[]) => [...prevState, player]);
    } else {
      setPlayerList((prevState: PlayerListType[]) =>
        prevState.filter((p) => p.name !== player.name)
      );
    }
  };

  const addPlayer = () => {
    setAddGuestModal(true);
  };

  const addMatchList = () => {
    setMatchList((prevState: MatchListType[]) => [...prevState, defaultMatch]);
  };

  const deleteMatch = (index: number) => {
    const tempArr = [...matchList];
    tempArr.splice(index, 1);
    setMatchList(tempArr);
  };

  const onChangeMatch = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    sex: "male" | "female"
  ) => {
    const tempArr = [...matchList];
    tempArr[index][sex] = parseInt(e.target.value || "0", 10);
    setMatchList(tempArr);
  };

  const finishSelect = () => {
    const hasNegativeValues = matchList.some(
      (match) => match.male < 0 || match.female < 0
    );
    const hasValuesAboveTwelve = matchList.some(
      (match) => match.male >= 12 || match.female >= 12
    );

    if (hasNegativeValues) {
      alert("에러: matchList에 음수 값이 있습니다.");
    } else {
      if (hasValuesAboveTwelve) {
        alert("에러: matchList에 12 이상의 값이 있습니다.");
      } else {
        makeSquad();
        setIsSelectFinish(true);
      }
    }
  };

  // 노 키퍼
  const makeSquad = () => {
    const malePlayers = playerList.filter((player) => player.sex === "남");
    const femalePlayers = playerList.filter((player) => player.sex === "여");

    // 선수들을 랜덤하게 섞는 함수
    const shufflePlayers = (players: any) =>
      [...players].sort(() => Math.random() - 0.5);

    let maleQueue = shufflePlayers(malePlayers);
    let femaleQueue = shufflePlayers(femalePlayers);

    const newMatchSquadList: SquadItemType[] = [];
    const newMatchPlayerList: { [key: string]: number } = {};

    for (const match of matchList) {
      const maleSquad: any = [];
      const femaleSquad: any = [];

      for (let i = 0; i < match.male; i++) {
        if (maleQueue.length === 0) {
          maleQueue = shufflePlayers(malePlayers); // 모든 선수를 사용한 경우 다시 섞는다
        }
        let player = maleQueue.shift();
        while (maleSquad.includes(player)) {
          // 이미 선택된 선수를 피하기 위한 루프
          maleQueue.push(player);
          player = maleQueue.shift();
        }
        maleSquad.push(player);
        newMatchPlayerList[player.name] =
          (newMatchPlayerList[player.name] || 0) + 1;
      }

      for (let i = 0; i < match.female; i++) {
        if (femaleQueue.length === 0) {
          femaleQueue = shufflePlayers(femalePlayers); // 모든 선수를 사용한 경우 다시 섞는다
        }
        let player = femaleQueue.shift();
        while (femaleSquad.includes(player)) {
          // 이미 선택된 선수를 피하기 위한 루프
          femaleQueue.push(player);
          player = femaleQueue.shift();
        }
        femaleSquad.push(player);
        newMatchPlayerList[player.name] =
          (newMatchPlayerList[player.name] || 0) + 1;
      }

      newMatchSquadList.push({ male: maleSquad, female: femaleSquad });
    }

    const getGoalKeeper = (squad: any[]) => {
      // 가장 적게 골키퍼로 뛴 선수의 횟수 찾기
      let minGKTimes = Math.min(
        ...squad.map((player) => newMatchPlayerList[player.name] || 0)
      );

      // 해당 횟수로 뛴 선수들만 필터링
      let potentialGKs = squad.filter(
        (player) => (newMatchPlayerList[player.name] || 0) === minGKTimes
      );

      // 랜덤하게 골키퍼 선택
      return potentialGKs[Math.floor(Math.random() * potentialGKs.length)].name;
    };

    // 골키퍼 지정 로직
    for (const squad of newMatchSquadList) {
      if (squad.male.length > 1) {
        squad.maleGoalKeeper = getGoalKeeper(squad.male);
      } else {
        squad.femaleGoalKeeper = getGoalKeeper(squad.female);
      }

      // 골키퍼로 뛴 횟수 업데이트
      if (squad.maleGoalKeeper) {
        newMatchPlayerList[squad.maleGoalKeeper] =
          (newMatchPlayerList[squad.maleGoalKeeper] || 0) + 1;
      }
      if (squad.femaleGoalKeeper) {
        newMatchPlayerList[squad.femaleGoalKeeper] =
          (newMatchPlayerList[squad.femaleGoalKeeper] || 0) + 1;
      }

      // 골키퍼를 배열의 맨 앞으로 이동
      if (squad.maleGoalKeeper) {
        const gkIndex = squad.male.findIndex(
          (player) => player.name === squad.maleGoalKeeper
        );
        const [gkPlayer] = squad.male.splice(gkIndex, 1);
        squad.male.unshift(gkPlayer);
      }

      if (squad.femaleGoalKeeper) {
        const gkIndex = squad.female.findIndex(
          (player) => player.name === squad.femaleGoalKeeper
        );
        const [gkPlayer] = squad.female.splice(gkIndex, 1);
        squad.female.unshift(gkPlayer);
      }
    }

    setMatchSquadList(newMatchSquadList);
    setMatchPlayerList(newMatchPlayerList);
  };

  return (
    <Box sx={{ px: "15px" }}>
      {/* 타이틀 */}
      <Typography fontSize={20} fontWeight={600} sx={{ mt: "20px", mb: "6px" }}>
        스쿼드 생성
      </Typography>

      {/* 스쿼드 영역 */}
      <Box
        sx={{
          backgroundColor: "rgba(73, 162, 227, 0.04)",
          borderRadius: "8px",
          px: "20px",
          py: "15px",
        }}
      >
        <RowStack justifyContent="space-between">
          <RowStack spacing="4px">
            <Typography fontWeight={600}>
              선수 선택 {playerList && `${playerList.length}명`}
            </Typography>
            <Typography color="#999999" fontSize={14}>
              (가나다순)
            </Typography>
          </RowStack>
          <Button
            onClick={addPlayer}
            variant="outlined"
            sx={{ height: "25px", p: "10px" }}
          >
            + 게스트 추가
          </Button>
        </RowStack>

        {/* 디바이더 */}
        <Box
          sx={{ height: "1px", backgroundColor: primaryGray200, my: "12px" }}
        />

        {/* 목록 */}
        <GraySelectBoxList
          dataList={memberAndGuest}
          onChangeSelect={onChangeSelect}
        />

        {/* 디바이더 */}
        <Box
          sx={{ height: "1px", backgroundColor: primaryGray200, my: "12px" }}
        />

        <RowStack justifyContent="space-between" sx={{ mb: "10px" }}>
          <Typography fontWeight={600}>매치 설정</Typography>
          <Button
            onClick={addMatchList}
            variant="outlined"
            sx={{ height: "25px", p: "10px" }}
          >
            + 경기 추가
          </Button>
        </RowStack>

        {matchList.map(function (each, index) {
          return (
            <RowStack
              key={`${index + 1}번째 경기`}
              justifyContent="space-between"
            >
              <RowStack spacing="10px" sx={{ mb: "5px" }}>
                <RowStack spacing="4px">
                  <RowStack>
                    <Typography sx={{ width: "48px" }}>
                      {index + 1}경기
                    </Typography>
                    <Typography>-&nbsp;&nbsp; 남</Typography>
                  </RowStack>

                  <TextField
                    value={matchList[index].male}
                    onChange={(e) => onChangeMatch(e, index, "male")}
                    type="number"
                    inputProps={{ style: { padding: "5px 5px" } }}
                    sx={{ width: "50px" }}
                  />
                </RowStack>
                <RowStack spacing="4px">
                  <Typography>여</Typography>
                  <TextField
                    value={matchList[index].female}
                    onChange={(e) => onChangeMatch(e, index, "female")}
                    type="number"
                    inputProps={{ style: { padding: "5px 5px" } }}
                    sx={{ width: "50px" }}
                  />
                </RowStack>
              </RowStack>

              <Button
                onClick={() => deleteMatch(index)}
                variant="outlined"
                sx={{
                  height: "30px",
                  px: "px",
                  minWidth: "25px",
                  fontSize: "11px",
                }}
              >
                삭제
              </Button>
            </RowStack>
          );
        })}

        <Button
          disabled={playerList.length === 0 || matchList.length === 0}
          onClick={finishSelect}
          fullWidth
          sx={{ mt: "10px", height: "40px" }}
        >
          선택 완료
        </Button>

        {isSelectFinish && (
          <Box>
            <Box
              sx={{
                height: "1px",
                backgroundColor: primaryGray200,
                my: "12px",
              }}
            />
            <Typography fontWeight={600} fontSize={16} sx={{ mb: "10px" }}>
              스쿼드
            </Typography>
            {matchSquadList.map(function (each, index) {
              return (
                <Box key={`${index}경기 스쿼드`} sx={{ mb: "12px" }}>
                  <Typography fontWeight={600} sx={{ mb: "2px" }}>
                    {index + 1} 경기
                  </Typography>
                  <RowStack spacing="4px">
                    <Typography>(남) -</Typography>
                    {each.male.map(function (player: any) {
                      const isGoalKeeper = player.name === each.maleGoalKeeper;
                      return (
                        <Typography
                          key={`${index + 1}경기${player.name}`}
                          fontWeight={isGoalKeeper ? 600 : 400}
                        >
                          {isGoalKeeper && "(GK)"}
                          {player.name}
                        </Typography>
                      );
                    })}
                  </RowStack>
                  <RowStack spacing="4px">
                    <Typography>(여) -</Typography>
                    {each.female.map(function (player: any) {
                      const isGoalKeeper =
                        player.name === each.femaleGoalKeeper;
                      return (
                        <Typography
                          key={`${index + 1}경기${player.name}`}
                          fontWeight={isGoalKeeper ? 600 : 400}
                        >
                          {isGoalKeeper && "(GK)"}
                          {player.name}
                        </Typography>
                      );
                    })}
                  </RowStack>
                </Box>
              );
            })}
            <Box
              sx={{
                height: "1px",
                backgroundColor: primaryGray200,
                my: "12px",
              }}
            />

            <Typography fontWeight={600} fontSize={16} sx={{ mb: "10px" }}>
              개인 당 경기 수
            </Typography>
            {Object.entries<string | number>(matchPlayerList)
              .sort((a, b) => (b[1] as number) - (a[1] as number)) // 많은 순으로 정렬
              .map(([playerName, matchCount]) => {
                const gkNum = matchSquadList.filter(
                  (match) =>
                    match.femaleGoalKeeper === playerName ||
                    match.maleGoalKeeper === playerName
                ).length;
                return (
                  <RowStack key={playerName}>
                    <Typography>
                      {playerName}({matchCount}경기)
                    </Typography>
                    <Typography fontSize={14} color="#999999">
                      {" "}
                      (GK {gkNum})
                    </Typography>
                  </RowStack>
                );
              })}
          </Box>
        )}
      </Box>

      {addGuestModal && (
        <AddGuestModal
          modalSwitch={addGuestModal}
          setModalSwitch={setAddGuestModal}
          setMemberAndGuest={setMemberAndGuest}
        />
      )}
    </Box>
  );
}
