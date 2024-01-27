'use client'
import toast from "react-hot-toast";

type Props = {
    day: number;
}

export default function CalendarDay({ day }: Props) {
    const onclick = () => {
        toast.success('予定特になし！')
    }
    return (
            <button onClick={onclick} className='border border-solid border-black p-10 text-center text-xl' tabIndex={0}>
                <span>{!Number.isNaN(day)?day:'\u3000'} </span>
            </button>
    )
}