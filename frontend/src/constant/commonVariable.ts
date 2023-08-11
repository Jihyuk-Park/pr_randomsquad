import { PlayerListType } from "@/component/pages/main/_parts/SquadSection";

/** api 통신 주소 */
export const url =
  process.env.NEXT_PUBLIC_APP_ENV === "dev" ? "http://localhost:9988" : "api~~";

/** 이름 목록 */
export const nameList: PlayerListType[] = [
  { name: "다은", sex: "여" },
  { name: "마이클", sex: "남" },
  { name: "명진", sex: "여" },
  { name: "미로", sex: "여" },
  { name: "민영", sex: "여" },
  { name: "부찬", sex: "남" },
  { name: "상준", sex: "남" },
  { name: "성현", sex: "남" },
  { name: "승우", sex: "여" },
  { name: "승혁", sex: "남" },
  { name: "수진", sex: "여" },
  { name: "영재", sex: "남" },
  { name: "윤경", sex: "여" },
  { name: "지혁", sex: "남" },
  { name: "주명", sex: "남" },
  { name: "주희", sex: "여" },
  { name: "정현", sex: "여" },
  { name: "종사", sex: "남" },
  { name: "재권", sex: "남" },
];
