import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DataType } from '@/utils/types'
import s from './images.module.scss'
export const Images = () => {
  const [images, setImages] = useState<DataType[]>([])
  const token =
    'IGQWRNQ3IwRThmWG1KXzl2ZA2FBM3d0eGNiZAzBhdXhaVGVlcGY5T0ZAkaG1BazZAQazNLTlR3M3BpWERCTUtKV1R6X0JjZAC05NmJ2eHZAFWWtqd2RMbmZAnRHFITnpLY1R5aldGVU1YMUFPcWRxWmJNeThVUDRySkVLY0UZD'

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios
        .get(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=${token}`
        )
        .then(res => {
          setImages(res.data.data)
        })
    }
    fetchData()
  }, [])
  return (
    <div className={s.container}>
      <p className={s.title}>Instagram</p>
      <div className={s.image_box}>
        {images?.map(el => (
          <div className={s.image_container}>
            <img className={s.image} src={el.media_url} />
            <p className={s.text_overlay}>
              пишите ваши вопросы в комментарии <br /> 👇👇👇
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
