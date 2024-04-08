import { useState } from "react";

export default function Logout() {

  const [userName, setUserName] = useState();

  const handleLogout = () => {

    const requestBody = {
      sessionId : sessionId
    };
  
    const response = axios.delete("https://dev.bookbla.shop/api/admin/auth/logout", requestBody)
    .then(response => {      
      if (response.status === 204) {
        console.log("성공~");
      } else {
        console.log('실패~')
      }

    })
    .catch(error => {
      console.log(error);
    });
  }

  
  return (
    <>
      <div>
        {userName} 님, 안녕하세요!
      </div>
      <button onClick={handleLogout}>
        로그아웃
      </button>
    </>
  );

}
