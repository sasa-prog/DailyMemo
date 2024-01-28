'use client'

import Calendar from "@/components/calendar/calendar"
import { SideBarEditor } from "@/components/editor"
import { useState } from "react"

export default function MainView() {
    const [viewSideEditor, setViewSideEditor] = useState(false)
    return (
        <>
          <Calendar clickHandler={() => {setViewSideEditor(!viewSideEditor)}}/>
          {viewSideEditor && <SideBarEditor />}
        </>
    )
}