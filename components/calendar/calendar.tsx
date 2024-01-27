'use client'
import CalendarCol from "./calendarCol";

const days = [0, 1, 2, 3, 4, 5, 6]

export default function Calendar() {
    return (
      <div className="flex flex-row flex-nowrap justify-center">
        {days.map((day) => {
          return (<CalendarCol key={day} day={day} />);
        })}
      </div>
    )
}