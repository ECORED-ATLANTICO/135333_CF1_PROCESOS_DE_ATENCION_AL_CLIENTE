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
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipología y manejo del cliente',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Inclusión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Discapacidad y sus tipos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Normativa',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Prestación del servicio al cliente',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Triángulo del servicio',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Canales de atención en servicio al cliente',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Momentos de verdad',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Seguridad y salud en el trabajo (SST)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Factores de Riesgo SST',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
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
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      // {
      //   icono: 'fas fa-file-pdf',
      //   titulo: 'Descargar PDF',
      //   download: 'downloads/dist.pdf',
      // },
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
  complementario: [
    {
      tema: '2. Cliente',
      referencia: 'Quiroa, M. (2021). <i>Concepto Cliente Economipedia</i>.',
      tipo: 'Diccionario en línea',
      link: 'https://economipedia.com/definiciones/cliente.html',
    },
    {
      tema: '3. Inclusión',
      referencia:
        'Cisternas, M. (2018). <i>Inclusión social, económica y política de las personas mayores</i>. Comisión Económica para América Latina el Caribe.',
      tipo: 'Artículo',
      link:
        'https://www.cepal.org/es/enfoques/inclusion-social-economica-politica-personas-mayores',
    },
    {
      tema: '3. Inclusión.',
      referencia:
        'Clark, H. (2020). <i>Resumen del informe de seguimiento de la educación en el mundo. Inclusión y Educación, todos sin excepción</i>.',
      tipo: 'Informe',
      link:
        'https://gem-report-2020.unesco.org/wp-content/uploads/2020/06/GEMR_2020-Summary-ES-v8.pdf',
    },
    {
      tema: '3. Inclusión.',
      referencia:
        "<i>Ley 762, Por medio de la cual se aprueba la 'Convención Interamericana para la Eliminación de todas las Formas de Discriminación contra las Personas con Discapacidad'</i> (2002, julio 31). Congreso de la República de Colombia.",
      tipo: 'Ley',
      link:
        'https://www.defensoria.gov.co/public/Normograma%202013_html/Normas/Ley_762_2002.pdf',
    },
    {
      tema: '3.2 Discapacidad y sus tipos',
      referencia:
        'Organización Mundial de la Salud [OMS] y Banco Mundial [BM]. (2011). <i>Informe Mundial de la Discapacidad</i>.',
      tipo: 'Informe',
      link: 'https://www.who.int/disabilities/world_report/2011/summary_es.pdf',
    },
    {
      tema: '3.2 Normativa',
      referencia: 'UNESCO. (2020). <i>Liderar el ODS 4 - Educación 2030</i>.',
      tipo: 'Artículo',
      link: 'https://www.un.org/sustainabledevelopment/es/',
    },
    {
      tema: '3.2 Normativa',
      referencia:
        '<i>Plan Nacional de Desarrollo: Pacto por Colombia, Pacto por la Equidad</i>. (2018). Presidencia de la República de Colombia',
      tipo: 'Plan Nacional de Desarrollo',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Prensa/Resumen-PND2018-2022-final.pdf',
    },
    {
      tema: '3.2 Normativa',
      referencia:
        '<i>Ley 1098 de 2006. Código de Infancia y Adolescencia</i>. (2006, noviembre 8). Congreso de la República de Colombia.',
      tipo: 'Ley',
      link:
        'https://www.oas.org/dil/esp/codigo_de_la_infancia_y_la_adolescencia_colombia.pdf',
    },
    {
      tema: '3.2 Normativa',
      referencia:
        '<i>Constitución Política de Colombia</i>. (1991, 04 de julio). Congreso de la República de Colombia.',
      tipo: 'Ley',
      link: 'https://pdba.georgetown.edu/Constitutions/Colombia/colombia91.pdf',
    },
    {
      tema: '3.2 Normativa',
      referencia: 'UNESCO. (2020). <i>Liderar el ODS 4 - Educación 2030</i>.',
      tipo: 'Artículo',
      link: 'https://www.un.org/sustainabledevelopment/es/',
    },
    {
      tema: '3.2 Normativa',
      referencia:
        '<i>Plan Nacional de Desarrollo: Pacto por Colombia, Pacto por la Equidad</i>. (2018). Presidencia de la República de Colombia',
      tipo: 'Plan Nacional de Desarrollo',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Prensa/Resumen-PND2018-2022-final.pdf',
    },
    {
      tema: '3.2 Normativa',
      referencia:
        '<i>Ley 1098 de 2006. Código de Infancia y Adolescencia</i>. (2006, noviembre 8). Congreso de la República de Colombia.',
      tipo: 'Ley',
      link:
        'https://www.oas.org/dil/esp/codigo_de_la_infancia_y_la_adolescencia_colombia.pdf',
    },
    {
      tema: '3.2 Normativa',
      referencia:
        '<i>Constitución Política de Colombia</i>. (1991, 04 de julio). Congreso de la República de Colombia.',
      tipo: 'Ley',
      link: 'https://pdba.georgetown.edu/Constitutions/Colombia/colombia91.pdf',
    },
    {
      tema: '3.2 Normativa',
      referencia: 'UNESCO. (2020). <i>Liderar el ODS 4 - Educación 2030</i>.',
      tipo: 'Artículo',
      link: 'https://www.un.org/sustainabledevelopment/es/',
    },
    {
      tema: '3.2 Normativa',
      referencia:
        '<i>Plan Nacional de Desarrollo: Pacto por Colombia, Pacto por la Equidad</i>. (2018). Presidencia de la República de Colombia',
      tipo: 'Plan Nacional de Desarrollo',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Prensa/Resumen-PND2018-2022-final.pdf',
    },
    {
      tema: '3.2 Normativa',
      referencia:
        '<i>Norma Técnica Colombiana 6047</i>. (2013, 11 de diciembre). Accesibilidad al medio físico. Espacios de servicio al ciudadano en la Administración Pública. Requisitos. Instituto Colombiano de Normas Técnicas y Certificación -ICONTEC-.',
      tipo: 'Norma Técnica',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Programa%20Nacional%20del%20Servicio%20al%20Ciudadano/NTC6047.pdf',
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
        'López, MJ. (marzo de 2021). <em>Inclusión laboral: Los 7 mitos más comunes sobre los trabajadores con discapacidad.</em> ',
      link:
        'https://www.fundacioncontrabajo.cl/blog/cultura-inclusiva/7-mitos-inclusion-laboral/',
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
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
