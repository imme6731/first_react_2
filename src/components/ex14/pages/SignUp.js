import { useForm } from "react-hook-form";
import { ErrorMsg } from "../components/ErrorMsg";
import { useNavigate } from "react-router-dom";
import { Wrap, Form, Title, Input } from "../components/loginStyled";
import { ButtonUi } from "../components/ButtonUi";

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

        <ButtonUi active={isValid} text={"회원가입"} />
      </Form>
    </Wrap>
  );
};
