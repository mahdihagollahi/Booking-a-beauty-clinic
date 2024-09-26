import React, { Fragment } from 'react'
import BackgroundComment from "@/assent/Img/Landing/BGComment.svg";
import TagIcon  from '@/assent/Img/Landing/userTagComment.svg'
import Image from "next/image";
const CommentUser = ({Data , commentListRef , currentIndex}) => {
  return (
    <Fragment>
      <div className="flex items-start overflow-x-scroll w-full"
              ref={commentListRef}
            >
              {Data[currentIndex].comments?.map((comment, idx) => (
                <div key={idx} className="">
                  <div
                    className="w-[500px] h-[200px] p-10  bg-cover mt-5 flex items-center gap-3  relative"
                    style={{
                      backgroundImage: `url(${BackgroundComment.src})`,
                      zIndex: -1,
                    }}
                  >
                    <Image
                      src={TagIcon}
                      width={45}
                      height={45}
                      alt="User Icon"
                      className=" -mt-[35%] mr-[70.5%] absolute"
                    />
                    <div>
                      <h3 className="font-bold text-lg text-right">
                        {Data[currentIndex].name}
                      </h3>
                      <p className="text-right">{comment}</p>
                    </div>
                  </div>
                </div>
              ))}
             
            </div>
    </Fragment>
  )
}

export default CommentUser