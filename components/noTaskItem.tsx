import React from 'react' 
import { Card, CardContent, Typography } from '@mui/material'

const NoTaskItem = () => {
    return (
        <Card>
            <CardContent sx={{ '&:last-child': { pb: 2 }, textAlign: "center" }}>
                <Typography variant="h5" component="h5">No task found!</Typography>
            </CardContent>
        </Card>
    )
}

export default NoTaskItem;