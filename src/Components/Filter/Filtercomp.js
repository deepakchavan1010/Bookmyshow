import React, { useState } from 'react'
import { Button } from '../Buttons/Button'
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";


export const Filtercomp = ({ buttons, title }) => {
    const [open, setOpen] = useState(true)

    function toggleState() {
        setOpen(!open)
    }

    return (
        <div>
            <div className='bg-white p-2 rounded my-2 py-3 shadow-sm'>
                <div onClick={toggleState} className='d-flex align-items-center justify-content-between  d_cursor_pointer d_user_select_none'>
                    <div className='d-flex align-items-center gap-3'>
                        {open ? <GoChevronUp /> : <GoChevronDown />}
                        <h6 className={`${open ? "d_text_red_light_color" : "text-dark"} roboto-regular d_h13`}>{title}</h6>
                    </div>
                    <h6 className=' roboto-regular d_h13 text-secondary'>Clear</h6>
                </div>

                {open && <div className='mt-3 d-flex flex-wrap gap-2'>
                    {buttons.map((value) => {
                        return <Button key={value} title={value} />
                    })}
                </div>}
            </div>



        </div>
    )
}