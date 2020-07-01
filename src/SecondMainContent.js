import React from 'react'
import s from './SecondMainContent.module.css'
import contain from './contain.jpg'
import page from './page.jpg'
import foto from './foto.jpg'



const SecondMainContent = () => {
    return (
        <div className={s.fone}>
            <header className={s.header}>
            <h2 className={s.h2}>EGESTAS PHASELLUS</h2>
                <p className={s.p}>Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis ante sed etiam magna interdum congue.
                 Sed consequat amet dolor magna consequat.
                 Lorem ipsum dolor amet nullam sed etiam veroeros.</p>
            </header>
            <div className={s.inner}>
            <article className={s.post}>
            <div className={s.image}>
                    <img src={page} className={s.img2} />
                </div>
                <div className={s.content2}>
                    <header className={s.header2}>
                        <span className={s.category}>Lorem ipsum</span>
                        <h3 className={s.h3}>FINIBUS ET MAGNA</h3>
                    </header>
                    <p className={s.p2}>Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris.
                     Ut magna finibus nisi nec sed lacinia. Nam maximus erat id euismod egestas.
                     Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam magna tempus.
                      Lorem ipsum sit tempus amet feugiat.</p>
                       <div><a className={s.button}>Learn More <div className={s.mainarrow}><div className={s.arrow}><div></div></div></div></a></div>
                       
                </div>
            </article>
        </div>
        <div className={s.inner}>
            <article className={s.post}>
                <div className={s.content}>
                    <header className={s.header2}>
                        <span className={s.category}>Sed etiam</span>
                        <h3 className={s.h3}>NAM ADIPISCING</h3>
                    </header>
                    <p className={s.p2}>Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris.
                     Ut magna finibus nisi nec sed lacinia. Nam maximus erat id euismod egestas.
                     Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam magna tempus.
                      Lorem ipsum sit tempus amet feugiat.</p>
                       <div><a className={s.button}>Learn More <div className={s.mainarrow}><div className={s.arrow}><div></div></div></div></a></div>
                       
                </div>
                <div className={s.image}>
                    <img src={contain} className={s.img} />
                </div>
            </article>
        </div>
        <div className={s.inner}>
            <article className={s.post}>
            <div className={s.image}>
                    <img src={foto} className={s.img2} />
                </div>
                <div className={s.content2}>
                    <header className={s.header2}>
                        <span className={s.category}>Sapien erat</span>
                        <h3 className={s.h3}>AMET SED NULLAM</h3>
                    </header>
                    <p className={s.p2}>Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec sed lacinia.
                     Nam maximus erat id euismod egestas.
                      Pellentesque sapien ac quam.
                       Lorem ipsum dolor sit nullam magna tempus.</p>
                       <div><a className={s.button}>Learn More <div className={s.mainarrow}><div className={s.arrow}><div></div></div></div></a></div>
                       
                </div>
               

            </article>
        </div>
        </div>
    )
}
export default SecondMainContent