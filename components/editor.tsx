'use client';
import { PropsWithChildren, useState } from 'react';

import calendarStyles from '@/components/styles/calendar.module.scss';
import styles from '@/components/styles/editor.module.scss';

export default function MemoEditor(props: PropsWithChildren) {
  return <h2>メモを作成</h2>;
}

type Props = {
  isOpen: boolean;
};

export function CalendarSideBarEditor({ isOpen }: Props) {
  return (
    <div
      className={`${calendarStyles.sideBar} ${styles.sideEditor} ${isOpen ? styles.animIn : styles.animOut} flex`}
    >
      <h2>メモを作成</h2>
    </div>
  );
}
