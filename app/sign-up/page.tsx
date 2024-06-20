"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@/components/button";
import AuthForm from "@/components/auth-form";
import { signUpSchema } from "@/utils/schemas";
import { SignupFormFields } from "@/utils/types";
import { authFormStyles as styles } from "@/styles";
import { SIGNUP_FORM_FIELDS } from "@/utils/constants";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupFormFields>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(signUpSchema),
  });

  const router = useRouter();

  const onSubmit = (data: SignupFormFields): void => {
    console.log(data);
    setTimeout(() => router.push("/dashboard"), 200);
  };

  return (
    <main className={styles.container}>
      <AuthForm
        errors={errors}
        register={register}
        onSubmit={onSubmit}
        title="Create an account!"
        handleSubmit={handleSubmit}
        formFields={SIGNUP_FORM_FIELDS}
      >
        <Button text="Sign Up" disable={!isValid} />

        <p>
          Click here to{" "}
          <Link className={styles.linkText} href="/login">
            Login
          </Link>
        </p>
      </AuthForm>
    </main>
  );
};

export default SignUp;
