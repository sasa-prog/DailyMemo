'use client';

import dayjs, { Dayjs } from 'dayjs';

type Props = {
  day: Dayjs | undefined;
  clickHandler: Function;
};

export default function CalendarDay({ day, clickHandler }: Props) {
  const onclick = () => {
    clickHandler(day);
  };
  return (
    <button
      onClick={onclick}
      className="border border-solid border-black p-10 text-center text-xl"
      tabIndex={0}
    >
      <span>{day != undefined ? day.date() : '\u3000'} </span>
    </button>
  );
}
