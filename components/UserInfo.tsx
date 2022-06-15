import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../image/logo.png";
import { memo, useState } from "react";
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
  const [agree, setAgree] = useState(false);
  const [term, openTerm] = useState(false);

  const onAgreeChange = (e: any) => {
    setAgree(!agree);
  };

  const handleSubmit = async (values: User) => {
    if (agree == true) {
      console.log("values", values);
      const result = await apis.saveUserInfo({
        username: values.name,
        ...values,
      });
      console.log("result", result);
      setAuthenticate(true);
    }
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
                <div className="m-1">
                  <input
                    type="checkbox"
                    id="agreeCheckbox"
                    name="agreeCheckbox"
                    className="form-checkbox h-4 w-4 align-middle"
                    onChange={onAgreeChange}></input>
                  <label htmlFor="agreeCheckbox" className="ml-2">
                    이용신청자가 본{" "}
                    <button onClick={() => openTerm(true)} className="text-blue-600">
                      약관을
                    </button>{" "}
                    읽고 동의함 버튼을 누르거나 확인 등에 체크하는 방법을 취한 경우 본 약관에 동의한 것으로 간주합니다.
                  </label>
                </div>

                <div className="mt-3 flex justify-center">
                  <button type="submit" className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl w-[100%] ">
                    다음
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>

        <div className="to-black text-sm my-3 relative">
          {term == true ? (
            <div className="absolute bottom-12 left-0 p-10 bg-slate-100">
              <div className="w-[100%] flex justify-center mb-4 font-bold">CNRI Light Calculator 이용약관</div>

              <div>
                개인정보보호법 및 기업정보 수집/이용/제공 및 활용 동의에 따라 수집하는 개인 정보의 항목, 개인 정보의 수집 및 이용목적, 개인 정보의 보유 및
                이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다. Light Calculator 이용을
                관리하기 위해 필요한 최소한의 개인 정보를 수집합니다. Light Calculator 이용 시점에 Light Calculator 이용자로부터 수집하는 개인 정보는 아래와
                같습니다. 또한, 서비스 이용을 위해 입력되는 모든 개인 정보는 안전하게 저장 및 처리됨을 알려드립니다.
                <br />
                <br />
                개인정보
                <br />
                필수항목 : 이름, 회사명, 이메일 주소
                <br />
              </div>

              <div className="w-[100%] flex justify-end mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => openTerm(false)}>
                  닫기
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(UserInfo);
