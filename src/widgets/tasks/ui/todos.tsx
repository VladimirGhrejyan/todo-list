import { FC } from 'react';
// mui
import { Box, Grid, List } from '@mui/material';
// app
import { TRootState } from '~app/providers/store';
// features
import { CreateTaskButton, TaskActions } from '~features/task-actions';
// entities
import { Task } from '~entities/task';
// shared
import { useAppSelector } from '~shared/lib/hooks/use-app-selector.ts';

export const Todos: FC = () => {
    const todos = useAppSelector((state: TRootState) => state.tasks.todos);

    return (
        <Box sx={{ marginTop: 2 }}>
            <Grid container spacing={2} display={'flex'} justifyContent={'center'}>
                <Grid item xs={12} sm={4}>
                    <CreateTaskButton />
                </Grid>
            </Grid>
            <List sx={{ marginTop: 2 }}>
                {todos.map((task) => (
                    <Task key={task.id} task={task} TaskActions={TaskActions} />
                ))}
            </List>
        </Box>
    );
};
