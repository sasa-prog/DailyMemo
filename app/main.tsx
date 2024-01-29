'use client';

import Calendar from '@/components/calendar/calendar';
import { CalendarSideBarEditor } from '@/components/editor';
import TwoColumn from '@/components/twocolumn';
import { useState } from 'react';

export default function MainView() {
  const [viewSideEditor, setViewSideEditor] = useState(false);
  return (
    <>
      <TwoColumn>
        <Calendar
          clickHandler={() => {
            setViewSideEditor(!viewSideEditor);
          }}
        />
        {viewSideEditor && <CalendarSideBarEditor />}
      </TwoColumn>
    </>
  );
}
