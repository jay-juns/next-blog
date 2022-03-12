import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import ProtectedRoute from './ProtectedRoute'

const authRoutes = ['/dashboard']

const AuthWrapper = ({ children } : {
  children: React.ReactNode
}) => {

  const { status } = useSession()
  const router = useRouter()

  if(status === 'loading') return null;

  return(
    <>
      {authRoutes.includes(router.pathname) ?
        <ProtectedRoute>
          {children}
        </ProtectedRoute>
        :  
        ( children )
      }
    </>
  )
}

export default AuthWrapper;