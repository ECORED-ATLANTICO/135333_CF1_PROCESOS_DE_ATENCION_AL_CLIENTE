export default {
  global: {
    Name: 'Reconocimiento de clientes',
    Description:
      'El reconocimiento de clientes es necesario para la interacción asertiva. Se identificará la importancia que tiene el cliente para la empresa, como actor en la sostenibilidad. Asimismo, se apropiará de conceptos claves de inclusión y aplicación de protocolos de servicio y de seguridad y salud en el trabajo, como factores claves del desempeño en su rol como agente de atención al cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',

        numero: '2',
        titulo: 'Cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipología y manejo del cliente',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',

        numero: '3',
        titulo: 'Inclusión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Discapacidad y sus tipos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Normativa',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',

        numero: '4',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Prestación del servicio al cliente',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Triángulo del servicio',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Canales de atención en servicio al cliente',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Momentos de verdad',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',

        numero: '5',
        titulo: 'Seguridad y salud en el trabajo (SST)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Factores de Riesgo SST',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Manejo y control SST',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA1_135333_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Actitud',
      significado:
        'Valoraciones favorables o desfavorables, opiniones y tendencias que sistemáticamente, presenta una persona respecto de un objeto o idea',
    },
    {
      termino: 'Cliente',
      significado:
        'Es el centro de la estrategia de la empresa. representa a la persona o empresa que adquiere los bienes y servicios.',
    },
    {
      termino: 'Empatía',
      significado:
        'Principio básico necesario para la interacción con clientes, consiste en ponerse en el lugar del otro, sin perder la objetividad.',
    },
    {
      termino: 'Interacción',
      significado:
        'Es la comunicación directa entre el cliente con un canal de la empresa.',
    },
    {
      termino: 'Momentos',
      significado: 'Tiempos o espacios en los que ocurre o sucede algo.',
    },
    {
      termino: 'Procedimiento',
      significado: 'Plan o la forma de gestionar o ejecutar una cosa.',
    },
    {
      termino: 'Protocolo',
      significado:
        'Conjunto de reglas que se deben seguir en el cumplimiento de una actividad',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'Grado en el que el desempeño percibido de un producto o servicio coincide con las expectativas del comprador.',
    },
    {
      termino: 'Servicio',
      significado:
        'Es la combinación de varias cualidades (intangibles) como desempeño, esfuerzo, atención y otros tangibles como un trato amable, un obsequio, los muebles de la sala de recibo entre otros',
    },
    {
      termino: 'Valor',
      significado:
        'Asignación monetaria que da un cliente a un producto en función de la necesidad que satisface o de la usabilidad que representa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Carlzon, J. (1 de 10 de 1996). <em>El Momento de la Verdad</em>.',
      link: 'https://pocketbook4you.com/es/read/moments-of-truth',
    },
    {
      referencia:
        'Da Silva, D. (2020, 4 de agosto). <em>Los 11 tipos de clientes y sus características: todo lo que necesitas saber para mejorar la relación con tus clientes.</em> Zendesk. ',
      link:
        'https://www.zendesk.com.mx/blog/tipos-de-clientes-caracteristicas/',
    },
    {
      referencia:
        'Maldonado, Cristian. (2014, septiembre 16). <em>Claves para atender los tipos de clientes que existen</em>. ',
      link:
        'https://www.gestiopolis.com/claves-para-atender-los-tipos-de-clientes-que-existen',
    },
    {
      referencia: 'Ministerio de las TIC. (09 de 2020).',
      link: 'https://mintic.gov.co/portal/715/articles-150820_recurso_1.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Diana Carolina Jaramillo Rojas',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios Regional - Cauca',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Experta temática',
          centro:
            'Centro de la Industria, la empresa y los Servicios Regional - Huila',
        },
        {
          nombre: 'Jaime Alberto Pérez Posada',
          cargo: 'Instructor, especialista técnico en inclusión',
          centro: 'Centro de Comercio Regional - Antioquia',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro de la Industria, la Empresa y Los Servicios - CIES Regional - Norte de Santander',
        },
        {
          nombre: 'Alex Baudelino García Gómez',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro de la Industria, la Empresa y Los Servicios - CIES Regional - Norte de Santander',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor metodológico',
          centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
        },
        {
          nombre: 'Sandra Paticia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Yuly Rey',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Díaz Pinto',
          cargo: 'Desarrollo Front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios Regional - Tolima',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Laura Ximena Hurtado Villalba',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Erika Viviana Sandoval Rojas',
          cargo: 'Validación Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Yuli Marcela Gómez Tarazona',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
