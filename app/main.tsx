'use client';

import Calendar from '@/components/calendar/calendar';
import { DayInspector } from '@/components/inspector/inspector';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

export default function MainView() {
  const [viewSideEditor, setViewSideEditor] = useState(false);
  const [openSideEditor, setOpenSideEditor] = useState(false);
  const [date, setDate] = useState(dayjs())
  return (
    <>
      <Calendar
        clickHandler={(day: Dayjs) => {
          if (viewSideEditor) {
            setOpenSideEditor(false);
            setTimeout(() => setViewSideEditor(false), 400);
          } else {
            setDate(day)
            setOpenSideEditor(true);
            setViewSideEditor(true);
          }
        }}
      />
      {viewSideEditor && <DayInspector day={date} isOpen={openSideEditor} />}
    </>
  );
}
