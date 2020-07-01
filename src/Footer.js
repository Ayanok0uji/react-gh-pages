import React from 'react'
import s from './Footer.module.css'
import feesbook from './Facebook.png'
import twiter from './twiter.png'

const Footer = () => {
    return(
        <div>
            <ul className={s.icons}>
                <li><img src={twiter} className={s.img}/></li>
                <li><img src={feesbook} className={s.img}/></li>
                <li><img src={feesbook} className={s.img}/></li>
                <li><img src={feesbook} className={s.img}/></li>
                <li><img src={feesbook} className={s.img}/></li>
                <li><img src={feesbook} className={s.img}/></li>
            </ul>
            <p>© Без названия. Все права защищены.</p>
        </div>
    )
}
export default Footer