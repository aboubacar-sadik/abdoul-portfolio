import { OutlinedBtnWhite } from '@/components/Buttons'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:gap-16 items-center justify-center text-center  h-[660px]">
                <h1 className=' text-9xl font-semibold'>Oops<span className="text-redCol">!</span></h1>
                <div className="flex flex-col gap-8">
                    <p className='font-bold text-3xl'>404 - Not found</p>
                    <p>Could not find requested resource.</p>
                    <Link href="/">
                        <OutlinedBtnWhite>
                            Return Home
                        </OutlinedBtnWhite>
                    </Link>
                </div>
            </div>
        </div>
    )
}