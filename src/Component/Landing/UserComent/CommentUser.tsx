import React, { Fragment } from 'react'
import Background from "@/assent/Img/Landing/BGComment.svg";
import TagIcon  from '@/assent/Img/Landing/userTagComment.svg'
import Image from "next/image";
const CommentUser = () => {
  return (
    <Fragment>
        <div className='flex items-center gap-5'>
            <div>
                <Image
                src={TagIcon}
                width={55}
                height={55}
                alt=''
                className='relative'
                />

                <div 
                 style={{ backgroundImage: `url(${Background.src})` }}
                >

                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default CommentUser