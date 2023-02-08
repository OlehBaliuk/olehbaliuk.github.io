import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/usersSlice';

export const useMainPage = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return { users };
};
