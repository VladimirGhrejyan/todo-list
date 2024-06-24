import { FC } from 'react';
// mui
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
// shared
import { useAppDispatch } from '~shared/lib/hooks/use-app-dispatch';
//
import { TaskForm, TProps as TTaskFormProps } from '../ui/task-form';
import { addTask } from '../model/task.slice';
import { updateTaskStatus } from '~features/task-actions/lib/update-task-status.ts';

type TProps = {
    open: boolean;
    onClose: () => void;
};

const FORM_ID = 'create_task';

export const CreateTaskModal: FC<TProps> = ({ open, onClose }) => {
    const dispatch = useAppDispatch();

    const taskFormProps: TTaskFormProps = {
        onSubmit: (data) => {
            const task = updateTaskStatus(data);
            dispatch(addTask(task));
            onClose();
        },
        formId: FORM_ID,
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{'Add Todo'}</DialogTitle>
            <DialogContent>
                <TaskForm {...taskFormProps} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button type="submit" form={FORM_ID} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};
