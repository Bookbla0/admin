import React from 'react';
import styled from 'styled-components';

export default function Login() {
  return (
    <Conatiner>
      <LoginForm>
        <Form action="/admin/login" method="post">
            BookBLA Admin
          <div className="form-group">
            <FormControl type="text" placeholder="username" required="required" name="username" />
          </div>
          <div className="form-group">
            <FormControl type="password" placeholder="password" required="required" name="password" />
          </div>
          <div className="form-group">
            <button type="submit">
              로그인
            </button>
          </div>
        </Form>
      </LoginForm>
    </Conatiner>
  );
};

const Conatiner = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.div`
  width: 340px;
`;


const Form = styled.form`
  margin-bottom: 15px;
  padding: 30px;
`;

const FormControl = styled.input`
  min-height: 38px;
  border-radius: 5px;
`;