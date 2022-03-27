import React, { useContext } from "react";
import Head from "next/head";
import Header from "../components/Header";
import ButtonWrapper from "../components/ButtonWrapper";
import PaymentHistory from "../components/PaymentHistory";
import PaymentDetails from "../components/PaymentDetails";
import { ThemeContext } from "styled-components";
import { MainContainer } from "../components/StyledComponents";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";

const Home = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="LN app developed by TREV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <MainContainer>
        <section>
          <div className="pt-4 mr-4 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-16 lg:gap-y-[8rem] md:pt-10">
            <h1 className="text-blue-700 font-bold text-xl md:text-2xl lg:text-[2rem] my-4 md:my-0">
              Make Payment
            </h1>
            <ButtonWrapper
              btn1="1 BTC"
              width1="100%"
              width2="100%"
              bg2="transparent"
              color2={theme.colors.blue700}
              btn2="USD 44, 860"
              margin="my-6 md:my-0"
            />
            <div className="flex flex-col mt-8 md:mt-0">
              <Label htmlFor="fullname">Full name</Label>
              <Input placeholder="Enter full name" padding="1rem 0.75rem" />
            </div>
            <ButtonWrapper
              btn1="Single pay"
              btn2="Multiple pay"
              width1="100%"
              width2="100%"
              bg1="transparent"
              bg2="transparent"
              color1={theme.colors.blue700}
              color2={theme.colors.blue700}
              label="Payment type"
              margin="my-2 md:my-0"
            />
          </div>
          <div className="h-[350px] w-full mt-4 border">
            {/* import payment history table component */}
            <PaymentHistory />
          </div>
        </section>
        <aside className="w-full h-full mx-2 border">
          {/* import payment details component */}
          <PaymentDetails />
        </aside>
      </MainContainer>
    </>
  );
};

export default Home;
