import { FC } from 'react';
// mui
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
// entities
import { ITask } from '~entities/task';
// shared
import { useAppDispatch } from '~shared/lib/hooks/use-app-dispatch';
//
import { TaskForm, TProps as TTaskFormProps } from '../ui/task-form';
import { editTask } from '../model/task.slice';
import { updateTaskStatus } from '../lib/update-task-status';

type TProps = {
    open: boolean;
    onClose: () => void;
    task: ITask;
};

const FORM_ID = 'edit_task';

export const EditTaskModal: FC<TProps> = ({ open, onClose, task }) => {
    const dispatch = useAppDispatch();

    const taskFormProps: TTaskFormProps = {
        onSubmit: (data) => {
            const task = updateTaskStatus(data);
            dispatch(editTask(task));
            onClose();
        },
        defaultValues: task,
        formId: FORM_ID,
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{'Edit Todo'}</DialogTitle>
            <DialogContent>
                <TaskForm {...taskFormProps} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button type="submit" form={FORM_ID} color="primary">
                    Edit
                </Button>
            </DialogActions>
        </Dialog>
    );
};
