import { ETaskStatus, ITask } from '~entities/task';

const checkIfOverdue = (deadline?: string): boolean => {
    if (!deadline) {
        return false;
    }
    const now = new Date();
    const deadlineDate = new Date(deadline);
    return deadlineDate < now;
};

export const updateTaskStatus = (task: ITask): ITask => {
    if (task.status === ETaskStatus.COMPLETED) {
        return task;
    }

    const isOverdue = checkIfOverdue(task.deadline);

    if (task.status === ETaskStatus.PENDING && isOverdue) {
        return {
            ...task,
            status: ETaskStatus.OVERDUE,
        };
    }

    if (task.status === ETaskStatus.OVERDUE && !isOverdue) {
        return {
            ...task,
            status: ETaskStatus.PENDING,
        };
    }

    return task;
};
