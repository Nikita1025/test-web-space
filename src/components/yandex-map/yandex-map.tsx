import { Map, YMaps } from 'react-yandex-maps'
import React from 'react'
import { currentCity } from '@/common/constants/currentCity'
import { Form } from '@/components/form/form'
import s from './yandex-map.module.scss'
export const YandexMap = () => {
  const mapState = {
    center: [currentCity.lat, currentCity.lon],
    zoom: 17,
  }

  return (
    <YMaps
      enterprise
      query={{
        apikey: '0f05e97d-4eeb-476c-8d2d-8d653d4eaa8c',
      }}
    >
      <div className={s.map}>
        <Map state={mapState} width="100%" height="544px" />
        <Form />
      </div>
    </YMaps>
  )
}
