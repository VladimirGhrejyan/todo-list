import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TRootState } from '~app/providers/store';

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
