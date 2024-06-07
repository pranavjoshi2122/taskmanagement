import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles';

interface IProps {
    config?: ButtonProps;
    label: string;
}

const StyledButton = styled(Button)<ButtonProps>(() => ({
    textTransform: "capitalize"
}));

const MuiButton = ({ config, label }: IProps) => {
    return (
        <StyledButton {...config}>
            {label}
        </StyledButton>
    )
}

export default MuiButton;