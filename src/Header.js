import React from 'react'
import s from './Header.module.css'
const Header = () => {
    return(
    <div className={s.header}>
        <div className={s.logo}>
            <a>
                <strong className={s.strong}>Relativiti</strong>
                " by Pixelarty
            </a>
        </div>
        <nav className={s.nav}>
            <ul>
                <li className={s.current}><a>Home</a></li>
                <li className={s.oppener} href={'#'}>
                <a className={s.icon}>Dropdown</a>
                <ul className={s.drop}>
                   <li className={s.elem}><a>Option One</a></li>
                   <li className={s.elem}><a>Option Two</a></li>
                   <li className={s.elem}><a>Option Three</a></li>
                   <li className={s.elem}><a>Submenu</a></li>
                </ul>
                </li>
                <li className={s.generic}><a>Generic</a></li>
                <li className={s.elements}><a>Elements</a></li>
            </ul>
        </nav>
    </div>
    )
}
export default Header