import { PropsWithChildren } from 'react';

import calendarStyles from '@/components/styles/calendar.module.scss';

export default function MemoEditor(props: PropsWithChildren) {
  return <h2>メモを作成</h2>;
}

export function CalendarSideBarEditor() {
  return (
    <div className={`${calendarStyles.sideBar} flex`}>
      <h2>メモを作成</h2>
    </div>
  );
}
