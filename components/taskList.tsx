"use client";

import React, { useState, useEffect } from 'react';
import { Divider, Grid, SelectChangeEvent, Stack, Typography } from '@mui/material';

import { getTasksFromLocal, setTasksToLocal } from '@/utils';
import TaskForm from './taskForm';
import TaskItem from './taskItem';
import MuiSelect from './ui/Select';
import NoTaskItem from './noTaskItem';
import { Dayjs } from 'dayjs';

export interface ITask {
    id: number;
    task: string;
    startDate: Dayjs | null,
    dueDate: Dayjs | null,
    completed: boolean;
}

const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' }
]

const TaskList = () => {
    const storedTasks: ITask[] = getTasksFromLocal();
    const [tasks, setTasks] = useState<ITask[]>([...storedTasks]);
    const [filter, setFilter] = useState<string>('all');

    useEffect(() => {
        setTasksToLocal(tasks)
    }, [tasks]);

    const addTask = (data: ITask) => {
        setTasks([...tasks, data]);
    };

    const toggleComplete = (id: number) => {
        console.log(tasks);
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        console.log('updatedTasks', updatedTasks, id);
        
        setTasks([...updatedTasks]);
    };

    const deleteTask = (id: number) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks([...updatedTasks]);
    };

    const handleChangeFilter = (event: SelectChangeEvent<unknown>) => {
        setFilter(event.target.value as string)
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'all') return true;
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
    });

    console.log('tasks', tasks);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <TaskForm addTask={addTask} />
                    <Divider sx={{ my: 2 }} />
                </Grid>

                <Grid item md={12}>
                    <Stack flexDirection="row" justifyContent="space-between">
                        <Typography variant='h5' component="h5" sx={{ mb: 1, color: "#000" }} >Tasks List</Typography>
                        <MuiSelect
                            options={filterOptions}
                            config={{
                                sx: { minWidth: '200px' },
                                size: "small",
                                value: filter,
                                displayEmpty: true,
                                onChange: handleChangeFilter,
                            }}
                        />
                    </Stack>
                </Grid>

                <Grid item md={12}>
                    <Stack gap={2}>
                        {filteredTasks.length === 0 &&
                            <NoTaskItem />
                        }

                        {filteredTasks.length > 0 &&
                            filteredTasks.map((task) => (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                    toggleComplete={toggleComplete}
                                    deleteTask={deleteTask}
                                />
                            ))
                        }
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
};

export default TaskList;
