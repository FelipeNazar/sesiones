import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight, BiCopyright } from 'react-icons/bi';
import { HiLocationMarker, HiPhone, HiGlobeAlt } from "react-icons/hi";


const footerContent = {
    about: {
        logo: "/images/paolamena.PNG",
        description: "Innovamos y sacamos la personalidad de cada cliente.Si buscas darle personalidad única a tus pestañas.",
        cta: {
            href: "#_",
            label: "learn more"
        }
    },
    footerlinks: [
        {
            heading: "ENLACES",
            links: [
                {
                    href: "#_",
                    label: "Inicio"
                },
                {
                    href: "#_",
                    label: "Inicio"
                },
                {
                    href: "#_",
                    label: "Inicio"
                }
            ]
        },
        {
            heading: "CONTACTANOS",
            links: [
                {
                    href: "#_",
                    label: "Telefono +56656452155"
                },
                {
                    href: "#_",
                    label: "WSP +56656452155"
                },
                {
                    href: "#_",
                    label: "Correo tasdasd@hotmail.com"
                }
            ]
        },
        {
            heading: "Copyright",
            labelOnes: "Copyright 2023, Diseñado Por",labelTwo: "Los K info all rights reserved."
        }
    ]
}

const Footer = () => {
    const linkStyle = {
        color: "black", // Establece el color del texto de los enlaces
    };

    const headingStyle = {
        color: "black", // Establece el color del texto de los encabezados
    };

    return (
        <footer role="contentinfo" className="py-20 bg-white">
            <div className="container px-4 mx-auto">
                <div className="block lg:flex gap-20 mb-10 pb-10">
                    <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
                        <Link href="/" passHref>
                            <div className="mb-4 inline-block">
                                {/* Asegúrate de tener la propiedad "about" en footerContent */}
                                <Image src={footerContent.about.logo} width={157} height={30} alt='loskinfo.com' />
                            </div>
                        </Link>
                        <p className="text-black">
                            {footerContent.about.description}
                        </p>
                    </div>
                    <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
                        <div className="grid grid-cols-2 gap-10">
                            {footerContent.footerlinks && footerContent.footerlinks.map((footerlink, idx) => (
                                <div key={idx}>
                                    <h3 className="font-semibold text-heading mb-5" style={headingStyle}>
                                        {footerlink.heading}
                                    </h3>
                                    <ul className="p-0 m-0">

                                        {footerlink.links && footerlink.links.map((ink, idx) => (
                                            <li className="mb-3" key={idx}>
                                                <Link href={ink.href} passHref>
                                                    <div className="group-flex items-center duration-300 transition-all ease-in-out hover:text-primary" style={linkStyle}>
                                                        <span>{ink.label}</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    {idx === 2 && ( // Verifica si es el tercer elemento en footerlinks
                                        <div className="copyright-text" style={{ color: "black"}}>
                                            {footerlink.labelOnes} {footerlink.labelTwo}
                                        </div>
                                    )}

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;