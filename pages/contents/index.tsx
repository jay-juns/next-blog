import React, { FC } from 'react'
import PageWithLayoutType from '../../types/pageWithLayoutType';
import MainLayout from '../../components/layouts/Main';

const Contents: FC = () => {
  return (
    <div>
      컨텐츠
    </div>
  )
}

(Contents as PageWithLayoutType).layout = MainLayout

export default Contents