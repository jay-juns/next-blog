import React, { FC } from 'react'
import PageWithLayoutType from '../../types/pageWithLayoutType';
import DefaultLayout from '../../components/layouts/Default';

const About: FC = () => {
  return (
    <div>
     <h1>About</h1>
     <p>The Next.js router allows you to do client-side route transitions between pages, similar to a single-page application.</p>
    </div>
  )
}

(About as PageWithLayoutType).layout = DefaultLayout

export default About