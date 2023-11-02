import { useForm } from "react-hook-form";
import { ErrorMsg } from "../components/ErrorMsg";
import { useNavigate } from "react-router-dom";
import { Wrap, Form, Title, Input } from "../components/loginStyled";
import { ButtonUi } from "../components/ButtonUi";

export const Login = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  // console.log(isValid);
  // => 유효성 검사 후 boolean값으로 반환함

  // console.log(errors && errors.username && errors.username.message);

  // console.log(errors?.username?.message);
  // => optional chaining 연산자
  // : 연결된 객체 체인 내에 깊숙이 위치한 속성 값을 읽을 수 있음
  // && 연산자로 객체에 접근하는 것보다 옵셔널 체이닝을 이용하여 객체 안에 객체를 쉽게 접근할 수 있음

  const loginHandler = (data) => {
    // 이벤트 함수 매개변수의 첫번째 자리는 유저가 입력한 내용을 객체형태로 반환함
    // console.log(data);
    nav("/");
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
          placeholder="패스워드"
        />
        <ErrorMsg message={errors?.password?.message} />

        <ButtonUi active={isValid} text={"로그인"} />
      </Form>
    </Wrap>
  );
};
