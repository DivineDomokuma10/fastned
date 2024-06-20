"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@/components/button";
import { loginSchema } from "@/utils/schemas";
import AuthForm from "@/components/auth-form";
import { LoginFormFields } from "@/utils/types";
import { authFormStyles as styles } from "@/styles";
import { LOGIN_FORM_FIELDS } from "@/utils/constants";

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormFields>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormFields): void => {
    console.log(data);
    setTimeout(() => router.push("/dashboard"), 200);
  };

  return (
    <main className={styles.container}>
      <AuthForm
        errors={errors}
        register={register}
        onSubmit={onSubmit}
        title="Welcome Back!"
        formFields={LOGIN_FORM_FIELDS}
        handleSubmit={handleSubmit}
      >
        <Button text="Login" disable={!isValid} />
        <p>
          Dont have an account?{" "}
          <Link className={styles.linkText} href="/sign-up">
            Sign Up
          </Link>
        </p>
      </AuthForm>
    </main>
  );
};

export default Login;
