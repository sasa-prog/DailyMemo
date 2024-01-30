'use client';

type Props = {
  day: number;
  clickHandler: Function;
};

export default function CalendarDay({ day, clickHandler }: Props) {
  const onclick = () => {
    clickHandler();
  };
  return (
    <button
      onClick={onclick}
      className="border border-solid border-black p-10 text-center text-xl"
      tabIndex={0}
    >
      <span>{!Number.isNaN(day) ? day : '\u3000'} </span>
    </button>
  );
}
