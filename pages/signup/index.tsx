import React, { FC } from 'react'
import Head from 'next/head'
import PageWithLayoutType from '../../types/pageWithLayoutType';
import DefaultLayout from '../../components/layouts/Default';

const Signup: FC = () => {
  return (
    <div className="main-container">
      <Head>
        <title>Next Blog Signup</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <h1>Signup</h1>
    </div>
  )
}

(Signup as PageWithLayoutType).layout = DefaultLayout

export default Signup