import { MenuItem, Select, SelectProps } from '@mui/material'
import React from 'react'

interface IOptions {
    value: string | number;
    label: string;
}

interface IProps {
    config?: SelectProps;
    options?: IOptions[]
}

const MuiSelect = ({ config, options }: IProps) => {
    return (
        <>
            <Select {...config} >
                {options?.map(item => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </>
    )
}

export default MuiSelect;