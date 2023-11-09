"use client";
import React from "react";
import Image from "next/image";
import img from "../../../public/assets/images/authPic.png";
import {
  INITIALS_LOGIN_VALUE,
  INITIALS_LOGIN_VALUE_TYPES,
} from "@/utils/initialsValues";
import { Field, Form, Formik } from "formik";
import { Button, Divider, TextField } from "@mui/material";
import { Dictionary } from "@/core/types/types";
import styles from "./signIn.module.scss";
import Link from "next/link";
import { CustomInput, SigInSocial } from "@/components";
import { validationSchemaSignIn } from "@/core/validation";

type SignInProps = {
  dictionary: Dictionary;
};

export const SignIn = ({ dictionary }: SignInProps) => {
  const handleOnSubmit = (values: INITIALS_LOGIN_VALUE_TYPES) => {
    console.log(values);
  };
  return (
    <div>
      <Image
        className={"auth_img"}
        src={img}
        alt={"photo"}
        width={600}
        height={1024}
      />

      <div className={styles.signIn}>
        <Formik
          initialValues={INITIALS_LOGIN_VALUE}
          // validationSchema={validationSchemaSignIn}
          onSubmit={handleOnSubmit}
        >
          <Form className={styles.signIn}>
            <div className={styles.signIn__form}>
              <h3 className={styles.signIn__title}>
                {dictionary.register.signIn}
              </h3>
              <Field
                component={CustomInput}
                name={"email"}
                placeholder={"Email Address*"}
                variant={"outlined"}
              />
              <Field
                component={CustomInput}
                name={"password"}
                type={"password"}
                placeholder={"Password*"}
                variant={"outlined"}
              />
              <Button type={"submit"}>{dictionary.register.signIn}</Button>
              <p>
                {dictionary.register.dontHaveAccount}?
                <Link href={"/signUp"}> {dictionary.register.singUp}</Link>
              </p>

              <Divider>
                <p className={styles.signIn__or}>
                  {dictionary.register.orSign}
                </p>
              </Divider>
              <SigInSocial />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
