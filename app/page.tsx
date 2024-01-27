import Calendar from "@/components/calendar/calendar";
import MemoEditor from "@/components/editor";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />
      <h1>Daily Memo</h1>
      <Calendar />
    </>
  )
}
