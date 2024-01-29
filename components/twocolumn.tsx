import { PropsWithChildren } from 'react';

export default function TwoColumn({ children }: PropsWithChildren) {
  return <div className="flex">{children}</div>;
}
