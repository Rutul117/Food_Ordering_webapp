import { useCreateMyUser } from '@/api/MyUserApi';
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthCallbackPage() {
    const navigate = useNavigate();
    const {user} = useAuth0();
    const {createUser} = useCreateMyUser();

    const hasCreatedUSer = useRef(false);

    useEffect(()=>{
        if(user?.sub && user?.email && !hasCreatedUSer.current){
            createUser({auth0Id: user.sub, email: user.email});
            hasCreatedUSer.current = true;
        }
        navigate("/")
    },[createUser, navigate, user]);

    return <>Loading...</>;
}
