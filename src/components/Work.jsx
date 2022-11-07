import React from 'react'

import {ArrowRightIcon} from '@heroicons/react/24/outline'
import kiaImage from "./../assets/kia-home-new.webp";

const Work = () => {
  return (
    
    <div className='w-full px-10 border-x-orange-900 flex flex-col items-center'>
        <div className='flex flex-col w-full px-12 space-y-10 py-[100px] border-t items-center'>
            <div className="w-[960px] space-y-10">
                <div className='flex justify-between'>
                    <div className='flex flex-col space-y-4'>
                        <h2 className='text-6xl font-medium'>Kia</h2>
                        <p className='uppercase text-zinc-700'>Marketing website redesign</p>
                    </div>
                    <div className='flex flex-col w-[450px] space-y-6'>
                        <p className='text-2xl'>After Kias global re-brand, we reimagined Kia Canadas website from an entirely new perspective.</p>
                        <div className='flex space-x-2'>
                            <p className='font-bold text-xl'>View Project</p>
                            <ArrowRightIcon className='w-8' />
                        </div>
                    </div>
                </div>
                <img src={kiaImage} alt="" />
            </div>
        </div>
        <div className='bg-zinc-600'>Cadillac Fairview</div>
        <div className='bg-yellow-600'>Agriculture, Redefined</div>
    </div>

  )
}

export default Work