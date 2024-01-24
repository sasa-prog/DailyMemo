'use client'

import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import toast from 'react-hot-toast'
import CalendarDay from './calendarDay'

type Props = {
    day: Number;
}

type DataProps = {
    id: number
    date: string
}[]

const data: DataProps = [
    { id: 1, date: '2023-07-31' },
    { id: 2, date: '2023-08-01' },
    { id: 3, date: '2023-08-02' },
    { id: 4, date: '2023-08-03' },
    { id: 5, date: '2023-08-04' },
    { id: 6, date: '2023-08-05' },
    { id: 7, date: '2023-08-06' },
    { id: 8, date: '2023-08-07' },
    { id: 9, date: '2023-08-08' },
    { id: 10, date: '2023-08-09' },
    { id: 11, date: '2023-08-10' },
    { id: 12, date: '2023-08-11' },
    { id: 13, date: '2023-08-12' },
    { id: 14, date: '2023-08-13' },
    { id: 15, date: '2023-08-14' },
    { id: 16, date: '2023-08-15' },
    { id: 17, date: '2023-08-16' },
    { id: 18, date: '2023-08-17' },
    { id: 19, date: '2023-08-18' },
    { id: 20, date: '2023-08-19' },
    { id: 21, date: '2023-08-20' },
    { id: 22, date: '2023-08-21' },
    { id: 23, date: '2023-08-22' },
    { id: 24, date: '2023-08-23' },
    { id: 25, date: '2023-08-24' },
    { id: 26, date: '2023-08-25' },
    { id: 27, date: '2023-08-26' },
    { id: 28, date: '2023-08-27' },
    { id: 29, date: '2023-08-28' },
    { id: 30, date: '2023-08-29' },
    { id: 31, date: '2023-08-30' },
    { id: 32, date: '2023-08-31' },
    { id: 33, date: '2023-09-01' },
    { id: 34, date: '2023-09-02' },
    { id: 35, date: '2023-09-03' },
]


export default function CalendarColumn({day}: Props) {
    const dates: Dayjs[] = []
    data.forEach((data) => {
        const date = dayjs(data.date)
        if (date.day() === day) {
            dates.push(date)
        }
    })
    return (
        <div className="flex flex-col">
            {dates.map((date) => {
                return (<CalendarDay key={date.date()} day={date.date()}/>)
            })}
        </div>
    )
}