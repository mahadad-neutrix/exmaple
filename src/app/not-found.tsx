import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div>
                {/* <Image
                    src="/images/error.png"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-[269px] h-[239px] mx-auto"
                /> */}
                <div className='text-center mt-6'>
                    <p className='text-2xl font-medium mb-2'>PAGE NOT FOUND</p>
                    <p className='text-xs text-gray-600 mb-10'>The page you are looking for might have been removed or is temporarily unavailable</p>
                    <Link href={"/"}>
                        <button className='bg-[#146C43] text-white text-xs px-6 py-[14px] rounded-lg'>Go Back Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}