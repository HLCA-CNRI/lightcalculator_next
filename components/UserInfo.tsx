import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../image/logo.png";
import React, { useState, useEffect } from "react";
import { apis } from "../functions/apis";

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("이름은 필수항목입니다"),
  company: Yup.string().required("회사명은 필수항목입니다"),
  email: Yup.string().email("이메일은 유효한 이메일이어야 합니다").required("이메일은 필수항목입니다"),
});

type User = {
  name: string;
  company: string;
  email: string;
};

type AuthenticateType = {
  setAuthenticate: (authenticate: boolean) => void;
};

const UserInfo = ({ setAuthenticate }: AuthenticateType) => {
  const handleSubmit = async (values: User) => {
    console.log("values", values);
    const result = await apis.saveUserInfo({ username: values.name, ...values });
    console.log("result", result);
    setAuthenticate(true);
  };


  return (
    <div className="flex justify-center items-center h-screen  flex-col bg-green-200">
      <div className=" p-7 w-[80%] md:w-[45%] shadow-xl bg-white">
        <div className=" flex justify-center">
          <img src={logo.src} width={180} height={100} />
        </div>
        <Formik
          initialValues={{ name: "", company: "", email: "" }}
          validationSchema={ValidationSchema}
          onSubmit={(data: User, { setSubmitting }) => {
            setSubmitting(true);
            handleSubmit(data);
            setSubmitting(false);
          }}>
          <Form>
            <div>
              <div>
                <div className="m-1">
                  <div>이름:</div>
                  <Field name="name" type="text" placeholder="Name" className="min-w-14 border to-black  p-1 flex w-[100%] justify-start  text-left" />
                  <div>
                    <ErrorMessage name="name" component="div" className="inline-block text-xs text text-blue-600 " />
                  </div>
                </div>

                <div className="m-1">
                  <div>회사명:</div>
                  <Field name="company" type="text" placeholder="Company" className="min-w-14 border to-black  w-[100%] p-1 text-left" />
                  <div>
                    <ErrorMessage name="company" component="div" className="inline-block text-xs text text-blue-600" />
                  </div>
                </div>

                <div className="m-1">
                  <div>이메일:</div>
                  <Field name="email" type="email" placeholder="Email" className="min-w-14  w-[100%] border to-black p-1 text-left" />
                  <div>
                    <ErrorMessage name="email" component="div" className="inline-block text-xs text text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="border to-black text-sm my-3"></div>

              <div className="mt-3 flex justify-center">
                <button type="submit" className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl w-[100%]">
                  다음
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UserInfo;
