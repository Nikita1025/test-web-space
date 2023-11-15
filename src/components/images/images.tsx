import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DataType } from '@/utils/types'
import s from './images.module.scss'
export const Images = () => {
  const [images, setImages] = useState<DataType[]>([])
  const token =
    'IGQWROTEFwclZANQ05fbXpZAa3RZAZAWNXcmo2SlM0czdyMkFFMkJhNFZAGbkZAFeDZAFczFxR0xYRmtPX3pxYXNkV0ZABeXZAuZA3V4V2YtWWlXeUVWSC1ScFd4N3FmSnBpNVFmYzJoS3RBLVJKckc2TFZAiOEx2ekRiYVVsQW8ZD'

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
