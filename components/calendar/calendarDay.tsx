type Props = {
    day: number;
}

export default function CalendarDay({ day }: Props) {
    return (
        <>
          <span className='text-center text-sm'>{!Number.isNaN(day)?day:'\u3000'} </span>
        </>
    )
}