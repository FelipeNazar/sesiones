'use client';

import React, { useEffect, useState } from 'react';
import { signUp } from '../actions/users/signUp';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import pestaña from "../../../public/Images/pestana.jpg";


const SignInForm = () => {
    const router = useRouter();

    const { status } = useSession();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        setMessage('Signing in...');

        try {
            const signInResponse = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })

            if (!signInResponse || signInResponse.ok !== true) {
                setMessage("Invalid credentials");
            } else {
                router.refresh();
            }

        } catch (err) {
            console.log(err);
        }

        setMessage(message);
    };

    useEffect(() => {
        if (status === 'authenticated') {
            router.refresh();
            router.push('/');
        }
    }, [status]);

    return (
        <div className='flex flex-col gap-4 bg-gray-400 p-4'>
            <div className="w-1/2 relative overflow-hidden">
                <Image
                    src={pestaña} // Reemplaza con la ruta de tu imagen
                    alt="Imagen"
                    className="h-screen w-full object-cover"
                    style={{ clipPath: "polygon(0 0,100% 0%,50% 100%,0 100%)" }}
                />
            </div>

            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleSubmit}>Sign in</button>

            <p>{message}</p>
        </div>
    );
};

export default SignInForm;