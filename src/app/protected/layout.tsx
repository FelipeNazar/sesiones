import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import Link from 'next/link';

interface ProtectedLayoutProps {
    children: React.ReactNode | React.ReactNode[];
}

const ProtectedLayout = async ({children}:ProtectedLayoutProps) => {

    const session = await getServerSession(authOptions);

    if(!session || !session.user?.email){
        return (
            <div>
                Esta protegido y no tienes acceso a el.
            </div>
        )
    }
  return (<>
    {children}
  </>);
}

export default ProtectedLayout;
