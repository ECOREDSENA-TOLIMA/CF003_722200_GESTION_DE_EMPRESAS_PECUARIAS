export default {
  global: {
    componenteFormativo: 'Requerimientos y necesidades en la empresa pecuaria',
    descripcionCurso:
      'La construcción de empresa es la invitación para la reactivación económica global que se busca en la actualidad, y para ello se requiere saber todo el programa y requerimiento para la creación de estas entidades comerciales. Este componente formativo trabaja los requerimientos y la normativa para la generación de una persona jurídica en Colombia desde la óptica de la empresa pecuaria.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Recursos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Planeación y presupuesto',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Seguridad industrial y salud ocupacional',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Etapas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Producto',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Plan de Mercadeo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Elementos del costo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Clasificación',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Cálculo',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Órdenes de producción',
            hash: 't_2_7',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_03_722200.zip',
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
  complementario: [
    {
      tema: 'Producción',
      referencia:
        'Pérez A. (2019). Plan de producción de una empresa: el pilar de toda buena gestión corporativa. ',
      tipo: 'Artículo web',
      link:
        'https://www.obsbusiness.school/blog/plan-de-produccion-de-una-empresa-el-pilar-de-toda-buena-gestion-corporativa',
    },
    {
      tema: 'Producción',
      referencia:
        'Padilla F. (2016). Costos por órdenes de producción [video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/xQG946KNQvg',
    },
    {
      tema: 'Cálculo',
      referencia:
        'Oliveros R. (2016). Ms Excel 5 Fórmulas nómina completa [video]. Youtube.',
      tipo: 'Video ',
      link: 'https://youtu.be/KdZLNPyLGmk',
    },
    {
      tema: 'Cálculo',
      referencia:
        'VideoTips Docentes (2015). Costos I - Costos indirectos de fabricación [video]. Youtube.   ',
      tipo: 'Video',
      link: 'https://youtu.be/oGrkHeP5pY4',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo operativo',
      significado:
        'Proceso que abarca todas las etapas desde la compra de materia prima hasta la venta del producto terminado. ',
    },
    {
      termino: 'Empresa',
      significado:
        'Sistema de organización social para generar valor económico o prestar un servicio a la comunidad.',
    },
    {
      termino: 'Erogación',
      significado: 'Disponer o hacer uso de recursos.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Plan diseñado para ejecutar acciones y alcanzar objetivos, enmarcado en unos parámetros definidos por los directivos.',
    },
    {
      termino: 'Excedentes/Utilidades',
      significado:
        'Beneficio económico resultante al tomar los ingresos y deducirle los costos y gastos.',
    },
    {
      termino: 'Objeto social',
      significado:
        'Labor para la cual fue concebida una empresa, incluye todas las actividades que se van a ejecutar de manera recurrente.',
    },
    {
      termino: 'Persona jurídica',
      significado:
        'Figura jurídica compuesta por una o más personas naturales con identidad propia, pero sin la capacidad de actuar por sí misma. Es diferente a todas las personas que la componen, y requiere de un representante legal para actuar. ',
    },
    {
      termino: 'Persona natural',
      significado: 'Individuo de la raza humana con derechos y obligaciones.',
    },
    {
      termino: 'Prestación social',
      significado:
        'Beneficios económicos en dinero o en especie para el trabajador. No es retributivo de los servicios prestados, dado que surgen por el simple hecho de existir una relación laboral.',
    },
    {
      termino: 'Productos en proceso',
      significado:
        'Producto en estado de transformación. Es la etapa intermedia entre la materia prima y el producto terminado disponible para la venta.',
    },
    {
      termino: 'Seguridad social',
      significado:
        'Sistema de entidades que garantizan la prevención de la salud y capacidad laboral de los empleados. Se compone por los servicios de salud, pensión y riesgos laborales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Guarnizo, F. C. y Cárdenas, S. M. (2015). Costos por órdenes de producción y por procesos. La Salle.',
      link:
        'https://es.scribd.com/book/485288049/Costos-por-ordenes-de-produccion-y-por-procesos',
    },

    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2019). Decreto 957 de 2019 [Decreto]. Por el cual se adiciona el capítulo 13 al Título 1 de la Parte 2 del Libro 2 del Decreto 1074 de 2015, Decreto Único del Sector Comercio, Industria y Turismo.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=94550',
    },
    {
      referencia:
        'Ministerio del trabajo. (2019). Implementación de los sistemas de gestión de seguridad y salud en el trabajo al año 2020.',
      link:
        'https://www.mintrabajo.gov.co/relaciones-laborales/riesgos-laborales/sistema-de-gestion-de-seguridad-y-salud-en-el-trabajo/implementacion-de-los-sistemas-de-gestion-de-seguridad-y-salud-en-el-trabajo-al-ano-2020',
    },

    {
      referencia:
        'Oliveros, R. (2016). Ms Excel 5 Fórmulas nómina completa [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=KdZLNPyLGmk',
    },
    {
      referencia:
        'Planas F. E. (2018). Todo sobre la gestión de su empresa. Editorial de Vecchi.',
      link:
        'https://es.scribd.com/read/388236109/Todo-sobre-la-gestion-de-su-empresa',
    },

    {
      referencia:
        'Presidencia de la República. (1951). Decreto ley 3743 de 1951 [Decreto ley]. Por el cual se expide el Código Sustantivo del Trabajo.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html',
    },
    {
      referencia:
        'Presidencia de la República. (1971). Decreto 410 de 1971 [Decreto]. Por el cual se expide el Código de Comercio.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html',
    },
    {
      referencia:
        'Rincón C. y Narváez J. (2017) Presupuestos bajo normas internacionales de información financiera y taxonomía XBRL. Ediciones de la U.',
      link:
        'https://es.scribd.com/read/436221926/Presupuestos-Bajo-normas-internacionales-de-informacion-financiera-y-taxonomia-XBRL',
    },
    {
      referencia: 'Código de Comercio, 1971, Artículo 25.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Avilan Lozano ',
          cargo: 'Experto temático ',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza ',
          cargo: 'Diseñador Instruccional ',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Asesor pedagógico ',
          centro:
            'Regional Santantder - Centro Industrial Del Diseño y La Manufactura',
        },
        {
          nombre: 'Carolina Coca Salazar ',
          cargo: 'Revisora Metodológica y Pedagógica  ',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez ',
          cargo: 'Diseñador y evaluador instruccional ',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza ',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios.',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios.',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios.',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
