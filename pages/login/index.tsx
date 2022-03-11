import React, { FC } from 'react'
import Head from 'next/head'
import PageWithLayoutType from '../../types/pageWithLayoutType';
import DefaultLayout from '../../components/layouts/Default';

const Login: FC = () => {
  return (
    <div>
      <Head>
        <title>Next Blog Login</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <h1>Login</h1>
    </div>
  )
}

(Login as PageWithLayoutType).layout = DefaultLayout

export default Login