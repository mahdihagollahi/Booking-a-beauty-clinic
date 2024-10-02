import React, { Fragment } from 'react'
import ArrowLeft from '@/assent/Img/Landing/arrowLeftBlack.svg'
import Image from 'next/image'
import ArticleShow from './Article/ArticleShow'
import Link from 'next/link'
const Article = () => {
  return (
    <Fragment>
       <div className='bg-white w-full h-[50%] my-20'>
          <div className=' px-24 py-10 flex justify-between items-center'>
             <p className='font-medium text-xl text-[#393939]'>
             مقالات
             </p>
             <Link href='/Article'>
             <button className='flex items-center '>
             مشاهده بیشتر
             <Image
             src={ArrowLeft}
             width={24}
             height={24}
             alt=''
             />
             </button>
             </Link>
          </div>
          <div>
                <ArticleShow/>
             </div>
       </div>
    </Fragment>
  )
}

export default Article