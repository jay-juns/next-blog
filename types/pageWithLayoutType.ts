import { NextPage } from 'next'
import MainLayout from '../components/layouts/Main'
import DefaultLayout from '../components/layouts/Default'

type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout }

type PageWithPostLayoutType = NextPage & { layout: typeof DefaultLayout }

type PageWithLayoutType = PageWithMainLayoutType | PageWithPostLayoutType

export default PageWithLayoutType