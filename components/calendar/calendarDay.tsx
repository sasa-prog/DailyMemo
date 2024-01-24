type Props = {
    day: number;
}

export default function CalendarDay({ day }: Props) {
    return (
        <>
          <span className='text-xs'>{day} </span>
        </>
    )
}