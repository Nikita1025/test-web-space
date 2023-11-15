import React from 'react'
import VerticalCarousel from '@/components/slider/slider'
import s from './home-page.module.scss'
import { Images } from '@/components/images/images'
import { YandexMap } from '@/components/yandex-map/yandex-map'
export const HomePage = () => {
  return (
    <div className={s.container}>
      <VerticalCarousel />
      <Images />
      <YandexMap />
    </div>
  )
}
