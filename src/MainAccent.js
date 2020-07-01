import React from 'react'
import s from './MainAccent.module.css'
import pic01 from './pic01.jpg'
import pic02 from './pic02.jpg'
import pic03 from './pic03.jpg'
import pic04 from './pic04.jpg'

const MainAccent = () => {
    return (
        <div>
        <header className={s.header}></header>
            <h2 className={s.h2}>MAURIS SED LOREM</h2>
                <p className={s.p}>Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis ante sed etiam magna interdum congue.
                 Sed consequat amet dolor magna consequat.
                  Lorem ipsum dolor amet nullam sed etiam veroeros.</p>
            
            <div className={s.inner}>
                <ul className={s.faces}>
                    <li className={s.li}><span className={s.imag}><img src={pic01} className={s.img}/></span><h3 className={s.h3}>JANE DOE</h3><p className={s.p2}>Sed magna etiam</p></li>
                    <li className={s.li}><span className={s.imag}><img src={pic02} className={s.img}/></span><h3 className={s.h3}>Kuroko Tetsuya</h3><p className={s.p2}>No Bascket</p></li>
                    <li className={s.li}><span className={s.imag}><img src={pic03} className={s.img}/></span><h3 className={s.h3}>Kuroko Tetsuya</h3><p className={s.p2}>No Bascket</p></li>
                    <li className={s.li}><span className={s.imag}><img src={pic04} className={s.img}/></span><h3 className={s.h3}>Kuroko Tetsuya</h3><p className={s.p2}>No Bascket</p></li>
                </ul>
            </div>
        </div>
    )
}
export default MainAccent