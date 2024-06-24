export enum ETaskStatus {
    PENDING = 'Pending',
    COMPLETED = 'Completed',
    OVERDUE = 'Overdue',
    REMOVED = 'Removed',
}

export interface ITask {
    id: string;
    status: ETaskStatus;
    title: string;
    description?: string;
    deadline?: string;
}
