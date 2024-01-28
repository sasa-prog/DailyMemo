'use client';
import CalendarCol from './calendarCol';

type Props = {
  clickHandler: Function;
};

const days = [0, 1, 2, 3, 4, 5, 6];

export default function Calendar({ clickHandler }: Props) {
  return (
    <div className="flex flex-row flex-nowrap justify-center">
      {days.map((day) => {
        return <CalendarCol key={day} day={day} clickHandler={clickHandler} />;
      })}
    </div>
  );
}
