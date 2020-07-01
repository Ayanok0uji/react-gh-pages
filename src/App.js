import React from 'react';
import s from './App.module.css';
import Banner from './Banner';
import Header from './Header';
import Footer from './Footer';
import FirstMainContent from './FirstMainContent';
import MainAccent from './MainAccent';
import SecondMainContent from './SecondMainContent';
import MainSpecial from './MainSpecial';

function App() {
  return (
   <div className={s.wrapper} id={'wrapper'}>
    <header id={'header'} className={s.header}><Header /></header>
    <main>
     <section className={s.banner} id={'banner'}><Banner /></section>
     <section className={s.FirstMainContent} id={'first'}><FirstMainContent /></section>
     <section className={s.MainAccent}><MainAccent /></section>
     <section className={s.SecondMainContent}><SecondMainContent /></section>
     <section className={s.mainSpecial}><MainSpecial /></section>
    <footer id={s.footer}><Footer /></footer>
    </main>
   </div>
  );
}

export default App;
