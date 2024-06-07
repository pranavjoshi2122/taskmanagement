import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import MuiButton from './ui/Button';
import MuiTextField from './ui/TextField';
import MuiDatePicker from './ui/MuiDatePicker';
import { ITask } from './taskList';
import dayjs, { Dayjs } from 'dayjs';

interface TaskFormProps {
    addTask: (data: ITask) => void;
}

const TaskForm = ({ addTask }: TaskFormProps) => {

    const {
        values,
        errors,
        touched,
        setFieldValue,
        handleChange,
        handleSubmit
    } = useFormik({
        initialValues: {
            task: '',
            startDate: null,
            dueDate: null,
            completed: false
        },
        validationSchema: Yup.object({
            task: Yup.string().min(3, 'Task name should be min 3 character').max(16, 'Task name should be max 16 character').required('Task name is required'),
            startDate: Yup.date().nullable().required('Start date is required'),
            dueDate: Yup.date().nullable().required('Due date is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            const uniqueId = Date.now() + Math.floor(Math.random() * 10000);
            const newTask = { ...values, id: uniqueId };
            addTask(newTask);
            resetForm();
        },
    });

    return (
        <Box>
            <Typography variant='h5' component="h5" sx={{ mb: 1, color: "#000" }}>Add Task</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item>
                        <MuiTextField
                            name="task"
                            value={values.task}
                            onChange={handleChange}
                            placeholder='Add new task here...'
                            label="Task Name"
                            error={touched.task && Boolean(errors.task)}
                            helperText={touched.task && errors.task}
                        />
                    </Grid>
                    <Grid item>
                        <MuiDatePicker
                            name="startDate"
                            label="Start Date"
                            value={values.startDate}
                            onChange={(date: Dayjs | null) => setFieldValue('startDate', date)}
                            disablePast
                        />
                    </Grid>
                    <Grid item>
                        <MuiDatePicker
                            name="dueDate"
                            label="Due Date"
                            value={values.dueDate}
                            onChange={(date: Dayjs | null) => setFieldValue('dueDate', date)}
                            disablePast
                            minDate={values?.startDate ? dayjs(values?.startDate) : dayjs()}
                        />
                    </Grid>
                    <Grid item>
                        <MuiButton
                            label='Add Task'
                            config={{
                                type: 'submit',
                                variant: 'outlined',
                                size: "large",
                                sx: { height: '100%', color: "#000" }
                            }}
                        />
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default TaskForm;
