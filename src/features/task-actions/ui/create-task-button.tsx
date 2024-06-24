import { FC } from 'react';
// mui
import { Button, useMediaQuery, useTheme } from '@mui/material';
// shared
import { useModalState } from '~shared/lib/hooks/use-modal-state';
//
import { CreateTaskModal } from './create-task-modal';

export const CreateTaskButton: FC = () => {
    const [isCreateModalOpen, handleOpenCreateModal, handleCloseCreateModal] = useModalState();

    const muiTheme = useTheme();

    const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

    return (
        <>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleOpenCreateModal}
                sx={{ height: '100%', marginBottom: isSmallScreen ? 1 : 2 }}
            >
                Add Todo
            </Button>
            {isCreateModalOpen && (
                <CreateTaskModal open={isCreateModalOpen} onClose={handleCloseCreateModal} />
            )}
        </>
    );
};
