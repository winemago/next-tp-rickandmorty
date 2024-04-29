import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='text-center flex flex-col gap-4 h-screen items-center justify-center'>
            <h1 className=' text-2xl'>Not Found</h1>
            <p>Could not find requested resource</p>
            <div>
                <Button>
                    <Link href="/">Return Home</Link>
                </Button>
            </div>
        </div>
    )
}