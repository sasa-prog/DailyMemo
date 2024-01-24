'use client'

import { useState } from 'react'
import dayjs from 'dayjs'
import toast from 'react-hot-toast'

type Props = {
    day: string
    date: string
}

export default function CalendarColumn({day, date}: Props) {
    const [stamped, setStamped] = useState(false)
    const today = dayjs().format('YYYY-MM-DD')
    const stampAction = () => {
        if (today >= date) {
          setStamped(true)
        } else {
          toast.error('未来の日付は押せません')
        }
    }
    return (
        <div className="grid cursor-pointer grid-cols-3 grid-rows-3" onClick={() => stampAction()}>
            <span className="col-start-1 col-end-2 row-start-1 row-end-2 self-center justify-self-center text-sm text-gray-500">
                {day}
            </span>
        </div>
    )
}