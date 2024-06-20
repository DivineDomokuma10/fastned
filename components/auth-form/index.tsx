"use client";
import {
  Path,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormHandleSubmit,
} from "react-hook-form";
import { FaRegEye, FaRegEyeSlash, FaUser } from "react-icons/fa";
import { ReactElement, ReactNode, useState } from "react";

import { FormFieldInterface } from "@/utils/types";
import { authFormStyles as styles } from "@/styles";
import { getInputType } from "./helper-function";

interface Props<T extends FieldValues> {
  title: string;
  children: ReactNode;
  errors: FieldErrors<T>;
  onSubmit(data: T): void;
  register: UseFormRegister<T>;
  formFields: FormFieldInterface[];
  handleSubmit: UseFormHandleSubmit<T, undefined>;
}

const AuthForm = <R extends FieldValues>({
  title,
  errors,
  onSubmit,
  children,
  register,
  formFields,
  handleSubmit,
}: Props<R>): ReactElement => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);

  return (
    <form className={styles.formStyle} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.formHeader}>{title}</h1>

      <aside className={styles.inptsContainer}>
        {formFields.map((field, i) => (
          <div key={i} className={styles.inptErrContainer}>
            <div className={styles.inptDiv}>
              <input
                type={getInputType(field.type, isPasswordVisible)}
                className={styles.inpt}
                placeholder={field.placeHolder}
                {...register(field.name as Path<R>)}
              />

              <div className={styles.iconContainer}>
                {field.name.includes("email") ? (
                  <FaUser className={styles.icon} />
                ) : isPasswordVisible ? (
                  <FaRegEye
                    className={styles.icon}
                    style={{ cursor: "pointer" }}
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaRegEyeSlash
                    className={styles.icon}
                    style={{ cursor: "pointer" }}
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>

            <p className={styles.err}>
              {errors ? errors[field.name]?.message?.toString() : ""}
            </p>
          </div>
        ))}
      </aside>

      <div className={styles.submitBtnContainer}>{children}</div>
    </form>
  );
};

export default AuthForm;
