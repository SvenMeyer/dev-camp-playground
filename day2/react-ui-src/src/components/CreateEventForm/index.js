import React from 'react'
import style from './index.module.css'

export const CreateEventForm = ({ submit }) => {
  return (
    <form
      className={style.component}
      onSubmit={e => {
        e.preventDefault()

        const name = e.target[0].value
        const description = e.target[1].value
        const link = e.target[2].value

        if (name.length === 0) {
          return
        }

        submit({
          name,
          description,
          link
        })
        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
      }}
    > <label>Create A New Event </label>
      <input placeholder='Name...' />
      <input placeholder='Description...' />
      <input placeholder='Link...' />
      <button type='submit'>
        Create
      </button>
    </form>
  )
}
