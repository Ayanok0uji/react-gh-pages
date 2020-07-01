import React from 'react'
import s from './MainSpecial.module.css'


const MainSpecial = () => {
    return (
        <div>
            <header className={s.header}>
                <h2 className={s.h2}>GET IN TOUCH</h2>
                <p className={s.p}>Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis ante sed etiam magna
                interdum congue. Sed consequat amet dolor magna consequat. Lorem ipsum dolor amet nullam
              sed etiam veroeros.</p>
            </header>

        <form className={s.form}>
                <div className={s.fe}>
                <div className={s.input_top}>
                    <input placeholder={'Name'} type={'text'}/>
                   <input placeholder={'Email'} type={'email'} />
                </div>
                   <textarea placeholder={'Message'} rows={6} />
                 <a className={s.button}>Send Message </a>
                </div>
            </form>

        </div>
    )
}
export default MainSpecial