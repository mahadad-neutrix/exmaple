'use client';
import { useSession } from 'next-auth/react';

const Page = () => {

    const session = useSession();
    console.log("🚀 ~ file: page.tsx:16 ~ session:", session);

    return (
        <>
            account Page
        </>
    );
};

export default Page;