import React from "react";
import Image from "next/image";

const Hero = () => {
    const heroContent = {
        heading: "Salón De Estetica De Pestañas Paola Mena",
        description: "Innovamos y sacamos la personalidad de cada cliente. Si buscas darle personalidad única a tus pestañas."
    };

    return (
        <section className="py-20 bg-gray-100 h-screen bg-[url('/images/imagensalon.PNG')] bg-cover bg-no-repeat flex justify-center"> {/* Asegúrate de tener una clase de fondo adecuada */}
            <div className="container px-4 mx-auto">
                <div className="lg:flex justify-center items-center h-full">
                    <div className="lg:w-5/12 text-center">
                        {heroContent.heading && (
                            <h1 className="text-4xl lg:text-5xl font-bold text-heading mb-7 text-black">
                                {heroContent.heading}
                            </h1>
                        )}

                        {heroContent.description && (
                            <p className=" leading-relaxed text-body mb-10 text-grey">
                                <strong>{heroContent.description}</strong>
                            </p>
                        )}
                        <div> 
                        <button className="py-4 px-5 bg-primary text-white bg-blue-600 rounded-lg">
                                Reservar Hora </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
