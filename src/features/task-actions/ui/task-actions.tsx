import { FC, MouseEvent, useState } from 'react';
// mui
import { Grid, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// entities
import { ETaskStatus, ITask } from '~entities/task';
// shared
import { useAppDispatch } from '~shared/lib/hooks/use-app-dispatch.ts';
import { useModalState } from '~shared/lib/hooks/use-modal-state.ts';
//
import { editTask, removeTask } from '../model/task.slice';
import { EditTaskModal } from './edit-task-modal';

type TProps = {
    task: ITask;
};

export const TaskActions: FC<TProps> = ({ task }) => {
    const dispatch = useAppDispatch();

    const [isEditModalOpen, handleOpenEditModal, handleCloseEditModal] = useModalState();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (callback: () => void) => {
        return () => {
            callback();
            handleClose();
        };
    };

    const getMenuItems = () => {
        const items = [
            {
                children: 'Edit',
                onClick: handleMenuItemClick(handleOpenEditModal),
            },
            {
                children: 'Mark as complete',
                onClick: handleMenuItemClick(() => {
                    dispatch(
                        editTask({
                            ...task,
                            status: ETaskStatus.COMPLETED,
                        }),
                    );
                }),
            },
            {
                children: 'Remove',
                onClick: handleMenuItemClick(() => {
                    dispatch(removeTask(task.id));
                }),
            },
        ] as const;

        if (task.status === ETaskStatus.COMPLETED) {
            return items.filter(({ children }) => children !== 'Mark as complete');
        }

        return items;
    };

    return (
        <Grid item>
            <IconButton edge="end" aria-label="more" onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                {getMenuItems().map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </Menu>
            {isEditModalOpen && (
                <EditTaskModal open={isEditModalOpen} onClose={handleCloseEditModal} task={task} />
            )}
        </Grid>
    );
};
