'use client';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { ReactNode } from 'react';

interface PageProps {
    children: ReactNode;
}

const Page: NextPage<PageProps> = ({
    children,
}) => {


    const session = useSession();
    console.log("🚀 ~ file: page.tsx:16 ~ session:", session);

    return (
        <>
            account Page
        </>
    );
};

export default Page;