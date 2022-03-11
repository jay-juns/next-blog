
import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Next Blog</title>
      </Head>
      <div className='app__wrapper'>
        <Header />
        {children}
        <Footer />
      </div>
    </>

  )
}

export default MainLayout;