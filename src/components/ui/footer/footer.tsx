import React from 'react'
import s from './footer.module.scss'
export const Footer = () => {
  return (
    <footer className={s.container}>
      <div className={s.info_container}>
        <p className={s.title}>Выполнил</p>
        <p className={s.info}>Никита Лойко</p>
      </div>

      <div className={s.info_container}>
        <p className={s.title}>Телефон</p>
        <p className={s.info}>+375 (33) 340-78-83</p>
      </div>
    </footer>
  )
}
