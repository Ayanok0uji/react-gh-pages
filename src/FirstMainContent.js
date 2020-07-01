import React from 'react'
import s from './FirstMainContent.module.css'
import city from './city2.jpeg'
import pain from './pain.jpg'

const FirstMainContent = () => {
    return (
        <div>
        <header className={s.header}>
                <h2 className={s.h2}>FUSCE SED ADIPISCING</h2>
                <p className={s.p}>Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis ante sed etiam magna interdum congue.
                 Sed consequat amet dolor magna consequat.
                  Lorem ipsum dolor amet nullam sed etiam veroeros.</p>
        </header>
        <div className={s.inner}>
            <article className={s.post}>
                <div className={s.content}>
                    <header className={s.header2}>
                        <span className={s.category}>Magna sed</span>
                        <h3 className={s.h3}>INTEGER NULLA</h3>
                    </header>
                    <p className={s.p2}>Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. 
                    Ut magna finibus nisi nec sed lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam.
                     Lorem ipsum dolor sit nullam magna tempus.</p>
                       <div><a className={s.button}>Learn More <div className={s.mainarrow}><div className={s.arrow}><div></div></div></div></a></div>
                       
                </div>
                <div className={s.image}>
                    <img src={city} className={s.img} />
                </div>

            </article>
        </div>
        <div className={s.inner}>
            <article className={s.post}>
            <div className={s.image}>
                    <img src={pain} className={s.img2} />
                </div>
                <div className={s.content}>
                    <header className={s.header2}>
                        <span className={s.category}>Erat lacinia</span>
                        <h3 className={s.h3}>NISL EUISMOD</h3>
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
export default FirstMainContent