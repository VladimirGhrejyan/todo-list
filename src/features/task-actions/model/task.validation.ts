import * as yup from 'yup';
import { ITask, ETaskStatus } from '~entities/task';

const isValidDate = (dateString: string): boolean => {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateString.match(regEx)) {
        return false;
    }

    const date = new Date(dateString);

    const dNum = date.getTime();

    if (!dNum && dNum !== 0) {
        return false;
    }

    return date.toISOString().slice(0, 10) === dateString;
};

export const taskValidationSchema: yup.ObjectSchema<ITask> = yup.object({
    id: yup.string().required(),
    title: yup.string().required('Title is required'),
    description: yup.string(),
    deadline: yup
        .string()
        .test('is-valid-date', 'Invalid date format', (value) => !value || isValidDate(value)),
    status: yup.mixed<ETaskStatus>().oneOf(Object.values(ETaskStatus)).required(),
});
