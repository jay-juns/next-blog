import React, { FC } from 'react'
import Head from 'next/head'
import PageWithLayoutType from '../../types/pageWithLayoutType';
import MainLayout from '../../components/layouts/Main';

const Contents: FC = () => {
  return (
    <div className="main-container">
      <Head>
        <title>Next Blog About</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <section>
        컨텐츠
      </section>
    </div>
  )
}

(Contents as PageWithLayoutType).layout = MainLayout

export default Contents