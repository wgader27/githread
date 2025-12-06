import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { buttonVariants } from '@/components/ui/button';
import { AlertTriangle, ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

export default function NotFound() {
  return (
    <div>
      <Link href='/' className="">
              <ArrowLeftIcon/>
            </Link>
        <Alert className='my-10 pl-10'>
            <AlertTriangle/>
            <AlertTitle>Not found</AlertTitle>
            <AlertDescription>Post not found.</AlertDescription>
        </Alert>
    </div>
  );
}
