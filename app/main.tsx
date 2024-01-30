'use client';

import Calendar from '@/components/calendar/calendar';
import { CalendarSideBarEditor } from '@/components/editor';
import { useState, useRef } from 'react';

export default function MainView() {
  const [viewSideEditor, setViewSideEditor] = useState(false);
  const [openSideEditor, setOpenSideEditor] = useState(false);
  return (
    <>
      <Calendar
        clickHandler={() => {
          if (viewSideEditor) {
            setOpenSideEditor(false);
            setTimeout(() => setViewSideEditor(false), 1000);
          } else {
            setOpenSideEditor(true);
            setViewSideEditor(true);
          }
        }}
      />
      {viewSideEditor && <CalendarSideBarEditor isOpen={openSideEditor} />}
    </>
  );
}
