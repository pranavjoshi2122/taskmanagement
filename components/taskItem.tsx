import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import TaskIcon from '@mui/icons-material/Task';

import MuiButton from "./ui/Button";
import { ITask } from "./taskList";
import dayjs from "dayjs";

interface ITaskItemProps {
    task: ITask;
    toggleComplete: (id: number) => void;
    deleteTask: (id: number) => void;
}

const TaskItem = ({ task, toggleComplete, deleteTask }: ITaskItemProps) => {
    return (
        <Card>
            <CardContent sx={{ '&:last-child': { pb: 2 } }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Box sx={{minWidth: 200}}>
                        <Typography variant="h6" component="h6">{task.task}</Typography>
                    </Box>

                    <Box>
                        <Typography >{dayjs(task.startDate).format('MMMM D, YYYY')}</Typography>
                    </Box>

                    <Box>
                        <Typography>{dayjs(task.dueDate).format('MMMM D, YYYY')}</Typography>
                    </Box>

                    <Chip
                        label={task.completed ? "Completed" : "In-progress"}
                        color={task.completed ? "success" : "warning"}
                    />

                    <Stack
                        gap={1}
                        flexDirection="row"
                        minWidth={256}
                        justifyContent="flex-end"
                    >
                        {!task.completed &&
                            <MuiButton
                                label='Mark as Completed'
                                config={{
                                    variant: "contained",
                                    startIcon: <TaskIcon />,
                                    color: "success",
                                    size: 'small',
                                    onClick: () => toggleComplete(task.id)
                                }}
                            />
                        }
                        <MuiButton
                            label='Delete'
                            config={{
                                variant: "contained",
                                startIcon: <DeleteIcon />,
                                color: "error",
                                size: 'small',
                                onClick: () => deleteTask(task.id)

                            }}
                        />
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TaskItem;
