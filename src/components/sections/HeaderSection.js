import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HERO_IMAGE } from "../../../public/images";
import Layout from "../subComponents/Layout";
import { ErrorMessage, FastField, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Confetti from "react-confetti";
import { GSP_NO_RETURNED_VALUE } from "next/dist/lib/constants";
import Button from "../subComponents/Button";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
});
const HeaderSection = () => {
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfetiPieces] = useState(200);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (showConfetti) {
      const fadeOut = setTimeout(() => {
        setConfetiPieces(0);
        setTimeout(() => {
          setShowConfetti(false);
        }, 2900);
      }, 4500);
      return () => clearTimeout(fadeOut);
    }
  }, [showConfetti]);
  return (
    <Layout className="p-8 flex -z-10  justify-between  mb-[80px] gap-[45px] ">
      <div className="max-w-[686px] relative w-full rounded-[40px] overflow-hidden">
        <Image alt="HeroSection1" width={686} height={718} src={HERO_IMAGE} />
        <div className="absolute top-[20%] text-white uppercase text-center tracking-tight font-denim font-[700] text-[96px] ">
          Let the games begin
          <div className="justify-center  flex gap-4">
            <button className="text-white font-denim p-4 rounded-[16px] text-[14px] uppercase bg-[#2B99FF] tracking-normal">
              shop Now
            </button>

            <button className="text-white font-denim p-4 rounded-[16px] text-[14px] uppercase bg-[#2B99FF] tracking-normal">
              Explore
            </button>
          </div>
        </div>
      </div>
      {signedIn ? (
        <>
          <div className="bg-confetti-bg flex  flex-col h-[718px] z-10 bg-white w-[646px] ">
            <div className="flex flex-col justify-center items-center pt-[214px] gap-6" >
              <div className="text-[#23FF53] uppercase font-denim font-[700] tracking-tighter">
                success
              </div>
              <div className="max-w-[240px] uppercase text-[#2B99FF] text-center tracking-tighter font-denim  font-[700] text-[32px] leading-[32px]">
                Hey there, welcome to the PD Nation!
              </div>
              <div className="text-[#2B99FF] max-w-[200px] text-center w-full tracking-tight font-denim font-[400]">
                Check yoiur inbox for details on claming your first 10% off!
              </div>
            </div>
            <div className="flex justify-center pt-[151px] items-end" >
              <Button text='Sure thing!' className='max-w-[432px] ' />
            </div>
          </div>
        </>
      ) : (
        <div className="max-w-[646px] bg-[#F5F8FC] py-[80px] px-[64px] w-full rounded-[20px]">
          <div className="flex flex-col gap-[40px]">
            <div className="text-[#23FF53] uppercase font-denim font-[700] tracking-tighter">
              lets play
            </div>

            <div className="max-w-[240px] text-[#2B99FF] tracking-tighter font-denim  font-[700] text-[32px] leading-[32px]">
              WIN POPDARTS FOR LIFE
            </div>
            <div className="text-[#2B99FF] max-w-[300px] w-full tracking-tight font-denim font-[400]">
              Want to get every new Pro Pack for life? Enter to win by providing
              your name, email, and phone number below.
            </div>
            <Formik
              initialValues={{
                name: "",
                email: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(value) => {
                setLoading(true);
                setTimeout(() => {
                  console.log(value);
                  setLoading(false);
                  setShowConfetti(true);
                  setSignedIn(true);
                }, 4000);
              }}
            >
              {() => (
                <Form className="flex flex-col gap-[40px]">
                  {showConfetti && (
                    <Confetti width={1440} numberOfPieces={confettiPieces} />
                  )}
                  <div>
                    <Field
                      name="name"
                      placeholder="Name"
                      className="outline-none placeholder-[#2B99FF] font-[700] uppercase font-denim  py-6 px-4 rounded-[20px] w-full "
                    />
                    <ErrorMessage
                      className="text-[#FF3F3F] font-denim py-2 px-4"
                      component="div"
                      name="name"
                    />
                  </div>
                  <div>
                    <Field
                      name="email"
                      placeholder="Email"
                      className="outline-none placeholder-[#2B99FF] font-[700] uppercase font-denim  py-6 px-4 rounded-[20px] w-full "
                    />
                    <ErrorMessage
                      className="text-[#FF3F3F] font-denim  py-2 px-4"
                      component="div"
                      name="email"
                    />
                  </div>
                  <button
                    className={`w-full  py-6 rounded-[24px] text-center text-white font-denim font-[700]  ${
                      loading ? "bg-[#73BCFF]" : " bg-[#2B99FF]"
                    }`}
                    type="submit"
                    disabled={loading}
                  >
                    {" "}
                    {loading ? "Signing In..." : "Sign Up Now"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default HeaderSection;
