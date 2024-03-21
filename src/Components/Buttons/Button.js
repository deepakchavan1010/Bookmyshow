import React from 'react'

export const Button = ({ title, isRounded = false, btnType = "solid" }) => {
    switch (btnType) {
        case "outline":
            return <button className={`border rounded-2 py-2 d_red_light_border w-100 ${isRounded ? "rounded-pill px-3" : ""} bg-white d_h13 px-2 py-1 d_text_red_light_color`}>{title}</button>
        default:
            return (
                <button className={`border ${isRounded ? "rounded-pill px-3" : ""} bg-white d_h13 px-2 py-1 d_text_red_light_color`}>{title}</button>
            )
    }

}