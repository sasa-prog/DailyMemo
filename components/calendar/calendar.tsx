import dayjs from "dayjs";
import { PropsWithChildren } from "react";
import CalendarCol from "./calendarCol";

const days = [0, 1, 2, 3, 4, 5, 6]

export default function Calendar(props: PropsWithChildren) {
    return (
      <div className="flex flex-row flex-nowrap">
        {days.map((day) => {
          return (<CalendarCol key={day} day={day} />);
        })}
      </div>
    )
}