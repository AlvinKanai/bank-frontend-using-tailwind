import React from 'react'
import {apple, bill, google } from '../assets';
import styles, {layout} from '../style';


const Billing = () => {
    return ( 
        <section id='product' className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                {/* billing section image */}
                <img src={bill} alt="billing" className='w-[[100%] h-[100%] relative z-[5]' />
                {/* billing section background gradients */}
                <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
                <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'></div>
            </div>

            <div className={layout.sectionInfo}>
                {/* billing section text area */}
                <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' /> billing & invoincing</h2>
                <p className={` ${styles.paragraph} max-w-[470px] mt-5 `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque eius accusantium earum et provident minus voluptas nihil quasi quisquam.</p>
                {/* billing section app download buttons */}
                <div className='flex flex-wrap flex-row sm:mt-10 mt-6'>
                    <img src={apple} alt="apple-store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer rounded-lg'/>
                    <img src={google} alt="google-play-store" className='w-[128px] h-[42px] object-contain cursor-pointer rounded-lg'/>
                </div>
            </div>

        </section>
    )
}

export default Billing