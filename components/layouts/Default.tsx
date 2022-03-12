import React from 'react';
import Footer from "../footer/Footer";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
}
const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Next Blog</title>
      </Head>
      <div className='app__wrapper'>
        {children}
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout;