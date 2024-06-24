import { useState } from 'react';

export const useModalState = (): [boolean, () => void, () => void, () => void] => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const toggleModal = () => {
        setOpen((prev) => !prev);
    };

    return [open, handleOpenModal, handleCloseModal, toggleModal];
};
