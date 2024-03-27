import { Divider } from "antd";
import { Home, Package2 } from "lucide-react";
import React from "react";
import { IMenu } from "./nav";

const mainMenuData: IMenu[] = [
  {
    id: "home",
    name: "홈",
    icon: <Home className="w-5 h-5" />,
    link: {
      path: "/",
    },
  },
  {
    id: "memberProfile",
    name: "카카오톡 오픈채팅방 인증 확인 여부",
    icon: <Package2 className="w-5 h-5" />,
    submenu: [
      {
        id: "memberProfileKakaoRoomStatus",
        name: "카카오톡 오픈채팅방 인증 확인 여부",
        link: {
          path: "/member-profile/kakao-room-status",
        },
      },
    ],
  },
];

// const devMenuData: IMenu[] = [
//   {
//     id: "dev",
//     name: "사용 가이드",
//     icon: <Monitor className="w-5 h-5" />,
//     submenu: [
//       {
//         name: "폼",
//         link: {
//           path: "/sample/form",
//         },
//       },
//     ],
//   },
// ];

const MainMenu = () => {
  return (
    <>
      <>
        <Divider orientation="left" plain>
          메인
        </Divider>

        {/* <Menu data={mainMenuData} /> */}
      </>
      <>
        {/* <Divider orientation="left" plain>
          개발
        </Divider> */}

        {/* <Menu data={devMenuData} /> */}
      </>
    </>
  );
};

export default React.memo(MainMenu);
