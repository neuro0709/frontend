import React from "react"

const UpdataInput = ({title, clickHandle, name, value}) => {
    return(
    <tr>
        <td>{title}</td>
        <td>
            <input
                type="text"
                value={value}
                name={name}
                onChange={clickHandle}
            />
        </td>
    </tr>
    )
}

export default UpdataInput