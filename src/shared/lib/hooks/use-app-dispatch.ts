import { useDispatch } from 'react-redux';
import { TAppDispatch } from '~app/providers/store';

export const useAppDispatch: () => TAppDispatch = useDispatch;
