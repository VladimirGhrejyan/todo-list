import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../lib/store';

type TProps = {
    children: ReactNode;
};

export const StoreProvider: FC<TProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};
