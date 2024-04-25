import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function Login() {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [checkLogin, setCheckLogin] = useState(false);

  const handleLogin = ( ) => {

    const requestBody = {
      id : id,
      password : password
    };

    const response = axios.post("https://dev.bookbla.shop/api/admin/auth/login", requestBody)
    .then(response => {      
      if (response.status === 200) {
        setCheckLogin(true);
      } else {
        alert('로그인에 실패했어요ㅠ');
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <Container>
      <BookblaContainer>
        <Title>
          Bookbla <br /> 
          Admin <br />
          Page
        </Title>
            <FormControl type="text" placeholder="id" required="required" name="id" value = {id} onChange={(e) => setId(e.target.value)}/>
          <div>
            <FormControl type="password" placeholder="password" required="required" name="password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="form-group">
            <button onClick={handleLogin} type= "submit">
              로그인
            </button>
          </div>
      </BookblaContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 8px auto 48px;
  text-align: center;
  font-size: 15px;
`;

const Title = styled.h2`
  margin: 0 0 24px;
  align-items: left;
  letter-spacing: -0.2px;
`;

const BookblaContainer = styled.div`
  font-size: 14px;
  margin-bottom: 48px;
  & > svg {
    width: 100%;
  }
`;

const Button = styled.div`
  width: 100%;
  height: 48px;
  font-weight: bold;
  border-radius: 64px;
  color: #1D2E61;
  margin-bottom: 16px;
  cursor: pointer;
`;

const FormControl = styled.input`
  min-height: 38px;
  border-radius: 5px;
`;