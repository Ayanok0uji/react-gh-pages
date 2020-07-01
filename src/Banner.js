import React from 'react'
import s from './Banner.module.css'


const Banner = () => {
    return (
        <div className={s.fone}>
           <div className={s.container}>
                <h1 className={s.h1}>MAGNA ETIAM</h1>
                <p className={s.p}>Ipsum dolor sed consequat adipiscing magna</p>
           </div>
           <a href={'#first'} className={s.scroll}>Learn More</a>
        </div>
    )
}
export default Banner