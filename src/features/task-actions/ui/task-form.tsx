import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';
// mui
import { Grid, TextField } from '@mui/material';
// entities
import { ETaskStatus, ITask } from '~entities/task';
//
import { taskValidationSchema } from '../model/task.validation';

export type TProps = {
    defaultValues?: ITask;
    onSubmit: (data: ITask) => void;
    formId: string;
};

export const TaskForm: FC<TProps> = ({
    defaultValues = {
        id: uuidv4(),
        status: ETaskStatus.PENDING,
        title: '',
        description: '',
        deadline: '',
    },
    onSubmit,
    formId,
}) => {
    const form = useForm<ITask>({
        resolver: yupResolver(taskValidationSchema),
        defaultValues,
    });

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} id={formId}>
            <Grid container spacing={2} sx={{ marginTop: '0' }}>
                <Grid item xs={12}>
                    <Controller
                        name="title"
                        control={form.control}
                        render={({ field }) => (
                            <TextField
                                fullWidth
                                label="Title"
                                variant="outlined"
                                error={!!form.formState.errors.title}
                                helperText={form.formState.errors.title?.message}
                                {...field}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="description"
                        control={form.control}
                        render={({ field }) => (
                            <TextField
                                fullWidth
                                label="Description"
                                variant="outlined"
                                error={!!form.formState.errors.description}
                                helperText={form.formState.errors.description?.message}
                                {...field}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="deadline"
                        control={form.control}
                        render={({ field }) => (
                            <TextField
                                fullWidth
                                label="Deadline"
                                type="date"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                error={!!form.formState.errors.deadline}
                                helperText={form.formState.errors.deadline?.message}
                                {...field}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <button type="submit" style={{ display: 'none' }}>
                Submit
            </button>
        </form>
    );
};
