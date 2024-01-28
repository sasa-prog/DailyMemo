import { PropsWithChildren } from "react";

export default function MemoEditor(props: PropsWithChildren) {
    return (
        <h2>メモを作成</h2>
    )
}

export function SideBarEditor() {
    return (
        <div className='flex'>
            <h2>メモを作成</h2>
        </div>
    )
}