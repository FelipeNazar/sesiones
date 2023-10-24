// Importaciones necesarias
import React from 'react';
import Link from 'next/link';

// Componente PostCard para mostrar detalles de servicio
const PostCard = ({ service }) => {
  const cardStyle = {
    color: 'black',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    display: 'flex', // Usa flexbox para alinear el contenido
    flexDirection: 'column', // Alinea el contenido en una columna
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
  };

  return (
    <div className='p-10' style={{ ...cardStyle, color: cardStyle.color }}>
      <img src={service.image} alt={service.title} className='mb-4' />
      <h3 className='text-xl font-bold mb-4'>
        {service.title}
      </h3>
      <p className='text-slate-300' style={{ color: cardStyle.color }}>
        {service.description}
      </p>
      <Link href={service.link}>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
          Reservar Hora
        </button>
      </Link>
    </div>
  );
};



  

// Contenido de los servicios
const servicesContent = {
    heading: {
      headingTitle: "Servicios"
    },
    items: [
      {
        title: "Servicio de Pestaña",
        description: "Duración de 2 horas con todas las comodidades.",
        link: "/servicio-de-pestanas", // Ruta de la página de detalles del servicio
        image: "/images/pestañas.PNG", // Ruta de la imagen del servicio de pestañas
      },
      {
        title: "Servicio de Manicure",
        description: "Duración de 2 horas con todas las comodidades.",
        link: "/servicio-de-manicure",
        image: "/images/manicure.PNG",// Ruta de la imagen del servicio de manicure
      },
      {
        title: "Servicio de Pedicure",
        description: "Duración de 2 horas con todas las comodidades.",
        link: "/servicio-de-manicure",
        image: "/images/pedicure.PNG", // Ruta de la imagen del servicio de manicure
      },
      {
        title: "Servicio de Depilación",
        description: "Duración de 2 horas con todas las comodidades.",
        link: "/servicio-de-manicure",
        image: "/images/depilacion.PNG", // Ruta de la imagen del servicio de manicure
      },
      {
        title: "Servicio de Tratamiento Capilar",
        description: "Duración de 2 horas con todas las comodidades.",
        link: "/servicio-de-manicure",
        image: "/images/tratamientocapilar.PNG", // Ruta de la imagen del servicio de manicure
      },
      {
        title: "Servicio de Coloración",
        description: "Duración de 2 horas con todas las comodidades.",
        link: "/servicio-de-manicure",
        image: "/images/coloracion.PNG", // Ruta de la imagen del servicio de manicure
      },
      {
        title: "Servicio de Corte de Cabello",
        description: "Duración de 2 horas con todas las comodidades.",
        link: "/servicio-de-manicure",
        image: "/images/cortedecabello.PNG", // Ruta de la imagen del servicio de manicure
      },
      // ... (agrega más servicios según sea necesario)
    ]
  };

// Componente Services para mostrar los servicios
const Services = () => {
  return (
    <section id="Servicios" className='py-20 bg-light'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-xl mx-auto text-center mb-20'>
          {servicesContent.heading.headingTitle && (
            <h2 className='text-heading text-2xl lg:text-4xl font-bold mb-5'>
              {servicesContent.heading.headingTitle}
            </h2>
          )}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {servicesContent.items.map((service, idx) => (
            <PostCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Exportar el componente Services
export default Services;
