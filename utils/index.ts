import { ITask } from "@/components/taskList";

export const getTasksFromLocal = (): ITask[] => {
    if (typeof window !== 'undefined') {
        const tasksStr = localStorage.getItem('tasks');

        if (!tasksStr) {
            return [];
        }

        return JSON.parse(tasksStr);
    } else {
        // Handle server-side case (optional)
        return [];
    }
};

export const setTasksToLocal = (data: ITask[]): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('tasks', JSON.stringify(data));
    }
};
