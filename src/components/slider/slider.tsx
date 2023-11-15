import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import s from './slider.module.scss'
const VerticalCarousel = () => {
  const settings = {
    dots: true,
    vertical: true,
    dotsClass: `slick-dots ${s.dots}`,
    verticalSwiping: true,
    speed: 500,
  }

  return (
    <Slider {...settings} className={s.sliders}>
      <div className={s.slider}>
        <div className={s.slider_container}>
          <div className={s.big_info}>
            <p className={s.value}>3</p>
            <div className={s.text_box}>
              <p className={s.title}>Оценка дизайнеру:</p>
              <p className={s.text_info}>Не заслужил, там криво, там непонятно</p>
            </div>
          </div>
          <div>
            <p className={s.text_value}>и не более</p>
          </div>
        </div>
      </div>
      <div className={s.slider}>
        <div className={s.slider_container}>
          <div className={s.big_info}>
            <p className={s.value}>5</p>
            <div className={s.text_box}>
              <p className={s.title}>Сложность задания </p>
              <p className={s.text_info}>Миссия с вертолетиком была легче... </p>
            </div>
          </div>
          <div>
            <p className={s.text_value}>Звезд</p>
          </div>
        </div>
      </div>
      <div className={s.slider}>
        <div className={s.slider_container}>
          <div className={s.big_info}>
            <p className={s.value}>9</p>
            <div className={s.text_box}>
              <p className={s.title}>Потребовалось на тестовое задание:</p>
              <p className={s.text_info}>Справился быстро, забыл пообедать</p>
            </div>
          </div>
          <div>
            <p className={s.text_value}>часов</p>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default VerticalCarousel
