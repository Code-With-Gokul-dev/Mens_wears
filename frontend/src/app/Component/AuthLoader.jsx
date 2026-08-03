"use client"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetMeQuery } from '@/app/features/baseAPi';
import { setCredentials, logOut } from '@/app/features/authStore/authServices';

const AuthLoader = ({ children }) => {
    const dispatch = useDispatch();
    const { data: meData, error } = useGetMeQuery();

    useEffect(() => {
        if (meData) {
            const actualUser = meData?.user || meData?.data || meData;
            dispatch(setCredentials({ user: actualUser }));
        
        }
        if (error) {
            dispatch(logOut());
        }
    }, [meData, error, dispatch]);

    return <>{children}</>;
};

export default AuthLoader;
