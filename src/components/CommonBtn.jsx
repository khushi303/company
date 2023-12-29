import React from 'react'

const CommonBtn = (props) => {
    return (
        <div>
            <button className='btn_common fw-bold fs_7sm text-uppercase lh_148 ls_28 text_blue position-relative text-nowrap'>{props.btnname}</button>
        </div>
    )
}

export default CommonBtn;