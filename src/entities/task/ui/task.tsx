import { FC, ElementType } from 'react';
// mui
import { Box, ListItem, Typography, Grid } from '@mui/material';
//
import { ITask } from '../model/task.model';

type TProps = {
    task: ITask;
    TaskActions?: ElementType;
};

export const Task: FC<TProps> = ({ task, TaskActions }) => {
    return (
        <ListItem>
            <Box width="100%">
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography variant="h6">{task.title}</Typography>
                    </Grid>
                    {TaskActions && <TaskActions task={task} />}
                </Grid>
                <Box>
                    {task.status && (
                        <Typography variant="body2" color="textSecondary" gutterBottom>
                            Status: {task.status}
                        </Typography>
                    )}

                    {task.deadline && (
                        <Typography variant="body2" color="textSecondary" gutterBottom>
                            Deadline: {task.deadline}
                        </Typography>
                    )}

                    {task.description && (
                        <Typography variant="body2" color="textSecondary">
                            Description: {task.description}
                        </Typography>
                    )}
                </Box>
            </Box>
        </ListItem>
    );
};
