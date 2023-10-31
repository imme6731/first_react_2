import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { ErrorMsg } from "../components/ErrorMsg";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  height: 550px;
  border: 1px solid #dbdbdb;
  margin-top: 18vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 0 15px;
  margin-top: 10px;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: lightgreen;
  text-align: center;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(errors && errors.username && errors.username.message);

  console.log(errors?.username?.message);
  // => optional chaining 연산자
  // : 연결된 객체 체인 내에 깊숙이 위치한 속성 값을 읽을 수 있음
  // && 연산자로 객체에 접근하는 것보다 옵셔널 체이닝을 이용하여 객체 안에 객체를 쉽게 접근할 수 있음

  const loginHandler = (data) => {
    // 이벤트 함수 매개변수의 첫번째 자리는 유저가 입력한 내용을 객체형태로 반환함
    // console.log(data);
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>Login</Title>

        <Input
          {...register("username", { required: "아이디는 필수입니다." })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMsg message={errors?.username?.message} />
        <Input
          {...register("password", { required: "패스워드는 필수입니다." })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMsg message={errors?.password?.message} />

        <Button>로그인</Button>
      </Form>
    </Wrap>
  );
};
