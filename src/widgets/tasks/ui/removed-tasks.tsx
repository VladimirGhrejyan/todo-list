import React, { FC } from 'react';
import { Box, List } from '@mui/material';
import { useAppSelector } from '~shared/lib/hooks/use-app-selector.ts';
import { TRootState } from '~app/providers/store';
import { Task } from '~entities/task';

export const RemovedTasks: FC = () => {
    const removedTasks = useAppSelector((state: TRootState) => state.tasks.removedTasks);

    return (
        <Box sx={{ marginTop: 2 }}>
            <List>
                {removedTasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </List>
        </Box>
    );
};
