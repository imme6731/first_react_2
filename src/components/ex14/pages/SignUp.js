import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { ErrorMsg } from "../components/ErrorMsg";
import { useNavigate } from "react-router-dom";

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
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
`;

export const SignUp = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const signupHandler = (data) => {
    // console.log(data);
    nav("/login");
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(signupHandler)}>
        <Title>Sign Up</Title>

        <Input
          {...register("usename", {
            required: "아이디는 필수입니다.",
            minLength: {
              value: 3,
              message: "3자리 이상 입력해 주세요.",
            },
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMsg message={errors?.usename?.message} />
        <Input
          {...register("password", {
            required: "패스워드는 필수입니다.",
            minLength: {
              value: 8,
              message: "8자리 이상 작성해 주세요.",
            },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/, // 영문, 숫자, 특수기호 조합 8자리 이상 정규표현식
              message: "숫자와 특수기호를 포함하여 작성해 주세요.",
            },
          })}
          type="password"
          placeholder="비밀번호"
        />
        <ErrorMsg message={errors?.password?.message} />
        <Input
          {...register("name", { required: "이름은 필수입니다." })}
          type="text"
          placeholder="이름"
        />
        <ErrorMsg message={errors?.name?.message} />
        <Input
          {...register("email", {
            required: "이메일은 필수입니다.",
            pattern: {
              value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "잘못된 이메일 형식입니다.",
            },
          })}
          type="email"
          placeholder="이메일"
        />
        <ErrorMsg message={errors?.email?.message} />

        <Button $isActive={isValid}>회원가입</Button>
      </Form>
    </Wrap>
  );
};
