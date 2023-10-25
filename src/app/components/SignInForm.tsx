'use client';

import React, { useEffect, useState } from 'react';
import { signUp } from '../actions/users/signUp';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import pestaña from "../../../public/Images/pestana.jpg";


const SignInForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

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
            <div className="flex">
                {/* Columna de la izquierda con la imagen */}
                <div className="w-1/2 relative overflow-hidden">
                    <Image
                        src={pestaña} // Reemplaza con la ruta de tu imagen
                        alt="Imagen"
                        className="h-screen w-full object-cover"
                        style={{ clipPath: "polygon(0 0,100% 0%,50% 100%,0 100%)" }}
                    />
                </div>

                <div className="w-1/2 p-8">
                    <div className="flex flex-col w-full justify-center items-center">
                        <h1 className="text-cyan-600  font-bold text-3xl p-4">
                            Iniciar Sesion
                        </h1>
                        <div className="h-1 w-32 bg-cyan-600"></div>
                    </div>

                        <div>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Correo"
                                className="mx-auto block w-96  py-2 border-gray-500
             border-b-2 bg-transparent text-black focus:outline-none placeholder:text-black "
                                required
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Contraseña"
                                className="mx-auto block w-96 py-2 border-gray-500
             border-b-2 bg-transparent text-black focus:outline-none placeholder:text-black "
                                required
                            />
                        </div>
                        <div className="mb-4 flex flex-col py-2 w-full items-center">
                            <label
                                className="ml-2 text-black stroke-black py-2 hover:text-blue-800 "
                            >
                                <input
                                    type="checkbox"
                                    value="contraseña"
                                    id="contraseña"
                                    onChange={togglePasswordVisibility}
                                    checked={showPassword}
                                />
                                Mostrar contraseña
                            </label>

                            <button onClick={handleSubmit} className=" w-44 h-12 border rounded-full text-white bg-blue-600 hover:bg-blue-800 text-lg">
                                Iniciar sesion
                            </button>
                        </div>
                </div>
            </div>
        );
    };

    export default SignInForm;