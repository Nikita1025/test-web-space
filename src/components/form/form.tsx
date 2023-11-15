import React, { useState } from 'react'
import s from './form.module.scss'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { SendType } from '@/utils/types'
export const Form = () => {
  const [checked, setChecked] = useState(false)
  const { handleSubmit, register, reset } = useForm<SendType>({
    mode: 'onTouched',
    defaultValues: {
      name: '',
      phone: '',
      check: !checked,
    },
  })
  const onChange = () => {
    setChecked(!checked)
  }
  const submitData = async (data: SendType) => {
    await axios.post('http://localhost:8000', data)
    reset()
  }
  return (
    <div className={s.container}>
      <p className={s.title}>Обратный звонок</p>
      <form onSubmit={handleSubmit(submitData)} className={s.form}>
        <input className={s.input} {...register('name')} placeholder="Ваше имя" />
        <input className={s.input} {...register('phone')} placeholder="Номер телефона" />
        <div className={s.checkbox_box}>
          <input
            className={s.checkbox_input}
            {...register('check')}
            type="checkbox"
            checked={!checked}
          />
          <span onClick={onChange} className={s.checkbox}></span>
          <p className={s.text}>Согласие на обработку персональных данных</p>
        </div>
        <button type="submit" className={s.button}>
          Отправить →
        </button>
      </form>
    </div>
  )
}
