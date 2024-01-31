import utilStyles from '@/components/styles/utils.module.scss';
import styles from '@/components/styles/inspector.module.scss';
import dayjs, { Dayjs } from 'dayjs';
type Props = {
  day: Dayjs | null;
  isOpen: boolean;
};

export function DayInspector({ day, isOpen }: Props) {
  return (
    <div
      className={`${styles.side} ${isOpen ? utilStyles.animIn : utilStyles.animOut} flex`}
    >
      <h2>メモを作成</h2>
      <br />
      <p>{day?.format('YYYY/MM/DD')}</p>
    </div>
  );
}
