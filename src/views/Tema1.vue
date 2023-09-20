<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Empresa

    p.mb-5(data-aos="fade-left") El concepto de empresa se debe dar de inicio para tener claro a qué se hace referencia con esta palabra tan comúnmente usada:

    .row 
      .col
        .cajon.p-4.mb-5(style="background-color:#DBF9BD")(data-aos="flip-up")
          SlyderB(:datos="datosSlyder")

    p.mb-5(data-aos="fade-left") La relevancia de las empresas es tan elevada que la normatividad colombiana cuenta con diversas normas que la definen y regulan. El ejemplo más claro lo contiene el código de comercio de 1971, considerado el compendio de normas comerciales más importante en Colombia; allí se define de la siguiente forma:

    .row.justify-content-center
      .col-lg-10
        .cajon.p-4.mb-5(style="background-color:#3B5620")(data-aos="flip-up")
          h4.text-white ARTÍCULO 25. EMPRESA - CONCEPTO.
          p.text-white Se entenderá por empresa toda actividad económica organizada para la producción, transformación, circulación, administración o custodia de bienes, o para la prestación de servicios. Dicha actividad se realizará a través de uno o más establecimientos de comercio (Código de Comercio, 1971, Artículo 25).

    separador
    .titulo-segundo.color-secundario
      h2#t_1_1 1.1  Clasificación

    p.mb-5(data-aos="fade-left") Las empresas pueden clasificarse según diversos criterios, y así, abordar definiciones, estrategias y medidas de forma conjunta en función de las necesidades de cada usuario. La siguiente figura infográfica presenta algunos de los sistemas de clasificación más utilizados en nuestro entorno:

    ImagenInfografica.color-secundario.mb-5.desktop
      template(v-slot:imagen)
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/4.svg', alt='Texto que describa la imagen')
          

      .tarjeta.color-acento-botones.p-3(x="70.9%" y="86.2%" numero="")
        .h5.mb-2 Según sector económico
        p Bajo este criterio la empresa se clasifica según el sector productivo al que pertenece su actividad principal, mediante este sistema también se suele determinar el tipo de actividad a desarrollar: de extracción, producción o comercialización.

      .tarjeta.color-acento-botones.p-3(x="95.2%" y="56.2%" numero="")
        .h5.mb-2 Sector primario
        p Agrupa a los organismos que llevan a cabo tareas relacionadas con la explotación de recursos naturales. Este sector usualmente no involucra actividades de transformación, por lo que el cliente suele comprar los recursos tal cual fueron extraídos. Uno de los ejemplos más comunes son las empresas mineras, que extraen bienes naturales como carbón o minerales de la tierra.
        
      .tarjeta.color-acento-botones.p-3(x="95.2%" y="66.4%" numero="")
        .h5.mb-2 Sector secundario
        p Incluye las empresas que desarrollan actividades manufacturares, esto significa, que adquieren materias primas de terceros para transformarlos en productos terminados con características esencialmente diferentes. Por ejemplo, una zapatería que compra insumos como madera o cuero y los transforma para producir y vender zapatos.

      .tarjeta.color-acento-botones.p-3(x="95.2%" y="77.1%" numero="")
        .h5.mb-2 Sector terciario
        p Comprende aquellas empresas dedicadas a la intermediación de bienes sin ningún tipo de proceso o valor agregado, así como las que se dedican a la prestación de servicios. Aquí pueden incluirse empresas como las comercializadoras o supermercados que compran insumos al por mayor para luego ser vendidos por unidades.

      .tarjeta.color-acento-botones.p-3(x="67.6%" y="53.5%" numero="")
        .h5.mb-2 Según control de recursos
        p Según este criterio, las empresas se clasifican según la procedencia del capital; este último entendido como la inversión efectuada por parte de sus accionistas o propietarios, para que la empresa opere. En principio existen dos fuentes principales de recursos, la proveniente del sector público, bajo la figura del Estado, y el sector privado.

      .tarjeta.color-acento-botones.p-3(x="89.5%" y="23.5%" numero="")
        .h5.mb-2 Pública
        p Todo el capital se obtiene a través de fuentes de recursos públicos, su destinación suele estar asociada a la satisfacción de necesidades con un fuerte componente social o a la extracción de recursos que le pertenecen a la nación. En esta categoría entran algunas empresas de servicios públicos u hospitales.

      .tarjeta.color-acento-botones.p-3(x="89.5%" y="33.6%" numero="")
        .h5.mb-2 Privada
        p El capital se obtiene a través de particulares; las actividades son tan variadas como las necesidades del mercado y la imaginación de sus directivos. Su propósito es la generación de utilidades para ser distribuidos como dividendos o para reinvertir en la empresa y garantizar su crecimiento en el tiempo.

      .tarjeta.color-acento-botones.p-3(x="89.5%" y="43.8%" numero="")
        .h5.mb-2 Mixta
        p Su capital proviene tanto de fuentes públicas como privadas. Suelen surgir producto de la necesidad del Estado de conseguir recursos adicionales a los asignados mediante presupuesto o utilidades generadas por las empresas; ya sea para mantenerlas operativas  o para dinamizar su actividad.

      .tarjeta.color-acento-botones.p-3(x="29.3%" y="86.1%" numero="")
        .h5.mb-2 Según su esfera territorial
        p Este sistema clasifica las empresas según la extensión del área geográfica en el que la empresa lleva a cabo su objeto social.

      .tarjeta.color-acento-botones.p-3(x="4.9%" y="88.9%" numero="")
        .h5.mb-2 Local
        p Desarrolla su actividad comercial es un área de poca cobertura, bien sea una localidad o municipio, donde se encuentra su planta física.

      .tarjeta.color-acento-botones.p-3(x="4.9%" y="78.8%" numero="")
        .h5.mb-2 Regional
        p Involucra más de un municipio para llevar a cabo su operación, está restringido a un departamento o región en específico.

      .tarjeta.color-acento-botones.p-3(x="4.9%" y="68%" numero="")
        .h5.mb-2 Nacional
        p La producción y/o venta de los bienes o servicios cubre más de una región en el país. Abarcan una porción significativa del territorio nacional a través de sucursales físicas distribuidas en distintas regiones, o haciendo uso de sistemas de distribución de gran envergadura.

      .tarjeta.color-acento-botones.p-3(x="4.9%" y="57.3%" numero="")
        .h5.mb-2 Multinacional
        p Ejecutan las actividades operativas y ofertan sus bienes y servicios en varios países. Por norma general cuentan con una sede matriz en un país, que funciona como central de operaciones a nivel global, mientras que las sucursales que operan alrededor del mundo se conocen como subsidiarias o filiales.

    .row.justify-content-center.movil
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/Clasificacion_de_empresa.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Descargar clasificación de empresa.

    p.mt-5.mb-5(data-aos="fade-left") Adicionalmente se tienen las empresas por orden legal tal como se presenta a continuación: 

    .row.justify-content-center 
      .col-12
        .cajon.p-4.mb-5(style="background-color:#DBF9BD")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema1/5.svg', alt='Texto que describa la imagen')
            .col-lg-7
              h4(data-aos="fade-left") Según constitución jurídica
              p(data-aos="fade-left") Las organizaciones que cumplen con la definición de empresa pueden ser constituidas de manera unipersonal o a través de la creación de una persona jurídica en donde se unen varios inversores organizados en sociedad:
              p(data-aos="fade-left") #[b • Societarias:] se constituyen como un organismo independiente a los socios que la crearon por lo que cuentan con un número de identificación propio y único. Gracias a su personería jurídicas, la responsabilidad frente a terceros recae sobre sí misma y sobre su representante legal.
              p(data-aos="fade-left") En Colombia la legislación y práctica comercial contemplan varios tipos de empresas que cumplen con esta definición. La forma más rápida y sencilla de identificarlas es observando la terminación de su nombre o razón social, ver tabla 1:

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Tabla 1
      span #[em Tipos societarios]

    .row.justify-content-center 
      .col-lg-8
        .tabla-a.color-acento-botones.mb-5 
          table(data-aos="flip-up")
            caption Nota. Sena (2021).
            thead.text-center(style="background-color:#3B5620")
              tr.text-white
                th Tipo societario
                th Terminación
            tbody
              tr
                td Sociedad en comandita simple
                td.text-center S en C
              tr
                td Sociedad en comandita por acciones
                td.text-center S.C.A.
              tr
                td Sociedad  de responsabilidad limitada
                td.text-center Ltda
              tr
                td Sociedad  anónima
                td.text-center S.A.
              tr
                td Sociedad  por acciones simplificada
                td.text-center S.A.S

    .row.justify-content-center
      .col-10
        p.mb-3(data-aos="fade-left") #[b • Autónomas:] se constituyen por una sola persona natural sin crear otra entidad independiente. Asumen todas las responsabilidades frente a terceros. Como no cuentan con personería jurídica, no requieren de un número de identificación independiente.
        h4.mb-3 Según tamaño
        p.mb-5(data-aos="fade-left") Para clasificar las empresas según su tamaño existen diversos criterios o escalas de medición. Algunos se apoyan en la cantidad de activos, otros en el tamaño de su patrimonio o bien en el número de empleos que genera. La legislación colombiana ha sancionado diversos decretos y leyes que presentan unos criterios determinados. Como ejemplo de lo anterior, la ley 590 de 2000 lista las categorías y los rangos para clasificar las empresas en función de criterios como el número de trabajadores, el valor de los activos o las ventas brutas anuales; posteriormente, el decreto 957 de 2019, emitido por el Ministerio de Comercio, Industria y Turismo, reglamenta este aspecto según el sector económico en el que la empresa lleve a cabo su actividad:

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Tabla 2
      span #[em Clasificación de las empresas según Decreto 957]

    .row.justify-content-center 
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5 
          table(data-aos="flip-up")
            caption Nota. Decreto 957 del Ministerio de Comercio, Industria y Turismo (2019).
            thead.text-center(style="background-color:#3B5620")
              tr.text-white
                th Tamaño de la empresa / sector
                th Menores o iguales a 23.563.
                th Servicios
                th Comercio
            tbody
              tr
                td #[b Microempresa]
                td Mayores a 23.563 y menores o iguales a 204.995.
                td Menores o iguales a 32.988.
                td Menores o iguales a 44.769.
              tr
                td #[b Pequeña]
                td Mayores a 204.995 y menores o iguales a 1'736.565.
                td Mayores a 32.988 y menores o iguales a 131.951.
                td Mayores a 44.769 y menores o iguales a 431.196.
              tr
                td #[b Mediana]
                td Mayores a 1'736.565.
                td Mayores a 131.951 y menores o iguales a 483.034.
                td Mayores a 431.196 y menores o iguales a 2.160.692.
              tr
                td #[b Grande]
                td S.A.
                td Mayores a 483.034.
                td Mayores a 2.160.692.
    
    separador
    .titulo-segundo.color-secundario
      h2#t_1_2 1.2  Recursos

    p(data-aos="fade-left") Según Planas (2018), las empresas funcionan como sistemas abiertos, en donde obtienen recursos del ambiente como lo son las materias primas o el capital, y que suelen ser conocidas como entradas o #[i “inputs”] por su traducción al inglés. Esto puede aterrizarse a ejemplos como la compra de leche en una productora de alimentos, como materias primas que luego son transformadas para reintegrarse al entorno en forma de salidas o #[i “outputs”]. Continuando con el ejemplo, la leche se sometería a un proceso productivo para venderse en forma de queso o mantequilla.
    p(data-aos="fade-left") El ciclo debe ser supervisado de manera permanente de tal forma que se garantice el cumplimiento de las estrategias propuestas por los directivos. Al fin y al cabo, en el desarrollo operativo de la empresa, siempre se deberá velar por el cumplimiento de las expectativas de sus dueños, por lo que estos sistemas de control aportarán la retroalimentación necesaria para pulir el proceso productivo e incrementar las ganancias esperadas con el paso del tiempo. 

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 1
      span #[em Empresas como sistema]

    .row.justify-content-center 
      .col-lg-10
        figure(data-aos="fade-right").desktop
          img(src='@/assets/curso/temas/tema1/6.svg', alt='En la figura se observa en el sistema el proceso de transformación, la empresa, el sistema de control, y la parte exterior al inicio y al final.')
          figcaption Nota. Adaptado de Planas Flores, (2018). 

    .row.justify-content-center 
      .col-lg-10
        figure(data-aos="fade-right").movil
          img(src='@/assets/curso/temas/tema1/7.svg', alt='En la figura se observa en el sistema el proceso de transformación, la empresa, el sistema de control, y la parte exterior al inicio y al final.')
          figcaption Nota. Adaptado de Planas Flores, (2018). 

    .row.justify-content-center.mt-5.mb-5 
      .col.lg-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/8.svg', alt='Texto que describa la imagen')
      .col-9
        p(data-aos="fade-left") Las fuentes de obtención de recursos suelen ser otras empresas que se ubican en un eslabón anterior en la cadena productiva. Así, cada organización cuenta con proveedores que ofrecen insumos o acreedores que aportan capital necesarios para mantener la empresa en funcionamiento, del mismo modo, al final del proceso se encuentran los clientes que adquieren los nuevos bienes transformados, estos pueden ser consumidores finales, como lo es un niño que compra una golosina en una tienda, o un siguiente eslabón de la cadena productiva de distribución, como lo son las empresas pertenecientes al sector terciario de la economía (compran para vender).
        p(data-aos="fade-left") La mecánica descrita deja en claro que los recursos son el combustible para que una organización se mantenga activa, es por ello que el término toma tanta relevancia a la hora de concebir la gestión administrativa asociada a los procesos productivos. Diversos autores sugieren su clasificación en función de su naturaleza, así pues, se propone y detalla la siguiente clasificación dada su amplia aceptación en el ámbito organizacional:

    ImagenInfografica.color-secundario.mb-5.desktop
      template(v-slot:imagen)
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/9.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="39%" y="30%" numero="")
        .h5.mb-2 Humanos
        p La empresa es una organización de tipo social, por lo que para desarrollar las labores para las que fue concebida, demanda de la interacción humana, ya sea entre trabajadores y sus directivos, o con vendedores, clientes, proveedores, entre otros. El factor humano está arraigado en cualquier sistema organizacional, y es tal su relevancia, que una correcta gestión del talento humano puede impulsar los indicadores de la empresa y mejorar de forma significativa el rendimiento global de cualquier compañía.

      .tarjeta.color-acento-botones.p-3(x="17.4%" y="9%" numero="")
        .h5.mb-2 Propietarios
        p Aportan el capital, por lo que son los dueños de la organización y quienes tienen a su cargo las decisiones más importantes, como el objeto social de la empresa, su tipo societario, la aprobación de la información financiera o la destinación de las utilidades generadas en el ejercicio.
        
      .tarjeta.color-acento-botones.p-3(x="17.4%" y="18%" numero="")
        .h5.mb-2 Directivos
        p Se designan para actuar en representación de los propietarios, por lo que son los encargados de ejecutar las tareas programadas de forma continua, algunas veces son los mismos propietarios.  Comúnmente a través de un órgano llamado junta directiva o a través de las gerencias generales y específicas por área. Las decisiones que toman son de nivel estratégico dado que pueden involucrar desde un área hasta la totalidad de la compañía.

      .tarjeta.color-acento-botones.p-3(x="17.4%" y="28.1%" numero="")
        .h5.mb-2 Trabajadores
        p También conocidos como colaboradores son quienes llevan a cabo las tareas más operativas, son nombrados por los directivos y su función se centra en la ejecución de las tareas designadas. Esta categoría incluye funcionarios operativos, jefes de área, supervisores, entre otros.

      .tarjeta.color-acento-botones.p-3(x="55.7%" y="30%" numero="")
        .h5.mb-2 Materiales
        p Son los elementos pertenecientes a esta categoría, comprenden los bienes tangibles necesarios para llevar a cabo el objeto social de la compañía. Pueden clasificarse en función del tiempo que se espera permanezcan en la empresa y su uso.

      .tarjeta.color-acento-botones.p-3(x="78.3%" y="9%" numero="")
        .h5.mb-2 Corrientes
        p Aquellos de los que se esperar disponer en un periodo de tiempo inferior a un año, ejemplo de ello son las materias primas utilizadas durante la producción, o los productos dispuestos para su comercialización.

      .tarjeta.color-acento-botones.p-3(x="78.3%" y="18.3%" numero="")
        .h5.mb-2 No corrientes
        p Son elementos a utilizar durante más de un ciclo productivo, y de los cuales se tiene la expectativa de obtener beneficios en periodos superiores a un año. En esta categoría clasifican bienes como la maquinaria, los terrenos o los inmuebles.

      .tarjeta.color-acento-botones.p-3(x="30.3%" y="84.3%" numero="")
        .h5.mb-2 Técnicos
        p Estos recursos son aquellos intangibles asociados a procedimientos o técnicas necesarias para llevar a cabo las operaciones de la organización. Pueden asociarse a cualquier proceso, bien sea administrativo, comercial o de producción.

      .tarjeta.color-acento-botones.p-3(x="3.6%" y="52.6%" numero="")
        .h5.mb-2 Administrativos
        p Organigramas, políticas empresariales o sistemas de control interno. Siendo más específicos, se puede hacer mención a sistemas detallados y a la medida para el reclutamiento de personal para cargos específicos, donde primen las herramientas para una contratación idónea que impulse los niveles de productividad.

      .tarjeta.color-acento-botones.p-3(x="3.6%" y="63%" numero="")
        .h5.mb-2 Producción
        p Fórmulas, recetas asociadas a la creación de productos o patentes. Algunas empresas alcanzan el éxito gracias a este tipo de recursos, tal es el caso de Coca Cola, posicionada como la bebida más popular en el mundo y con una receta secreta que garantiza que ninguna competencia obtendrá un sabor tan característico y único como el que ofrece.

      .tarjeta.color-acento-botones.p-3(x="3.6%" y="73.7%" numero="")
        .h5.mb-2 Comercial
        p Estrategias de mercadeo, bases de datos o imagen corporativa. La reputación precede algunas compañías y maximiza sus niveles de venta gracias a su buen nombre.

      .tarjeta.color-acento-botones.p-3(x="64.4%" y="85%" numero="")
        .h5.mb-2 Financieros
        p Agrupa los bienes de capital dispuestos en dinero en efectivo o en títulos valores de alta liquidez. Frecuentemente, las empresas poseen diversas fuentes para la obtención de capital, sin embargo, la mayor complejidad proviene de su correcta administración, que garantice una operación ininterrumpida y permanente.

      .tarjeta.color-acento-botones.p-3(x="96.1%" y="52.5%" numero="")
        .h5.mb-2 Fuentes operativas
        p Se erige como la ideal, puesto que proviene de la venta de bienes o la prestación de los servicios ofertados por la empresa, incluye tanto las ventas de contado como los recaudos de cartera producto de ventas a crédito. Se considera la más relevante en el análisis financiero puesto que es producto de la actividad por la cual fue concebida la organización.

      .tarjeta.color-acento-botones.p-3(x="96.1%" y="63%" numero="")
        .h5.mb-2 Fuentes de financiación
        p El capital proviene de terceros que lo entregan en calidad de préstamo, bien sea a cambio de unos intereses, como es el caso de las entidades financieras, o de dividendos, para el caso de los inversionistas de capital. Estos dineros se reciben con la promesa de ser retornados de una forma u otra, por lo que representan un beneficio en el corto plazo con una obligación asociada para un periodo futuro.

      .tarjeta.color-acento-botones.p-3(x="96.1%" y="73.8%" numero="")
        .h5.mb-2 Fuentes de inversión
        p Incluyen los dineros obtenidos por actividades accesorias a la principal. Por ejemplo, el capital obtenido por medio de un contrato de arrendamiento, donde se han alquilado inmuebles que no se estaban utilizando, o la venta de inmuebles que se han valorizado en el tiempo, otorgando cierta rentabilidad. Esta categoría requiere especial atención, puesto que la continua obtención de recursos por esta vía puede llevar a la descapitalización a causa de la venta indiscriminada de activos.

    .row.justify-content-center.movil
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/Recursos_empresa.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Descargar recursos de una empresa.

    separador
    .titulo-segundo.color-secundario
      h2#t_1_3 1.3 Planeación y presupuesto

    .row.justify-content-center.align-items-center
      .col-sm-2.offset-1.mb-3
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/10.svg', alt='Texto que describa la imagen')
      .col-sm-8
        p(data-aos="fade-left") La planeación se erige como una de las herramientas de administración de mayor utilidad, y es que, a partir de ella, es posible determinar los objetivos que los directivos o propietarios esperan alcanzar con la operación. Resulta difícil encaminar los esfuerzos cuando no se vislumbra una meta a futuro, la planeación dota de propósito a la empresa, y ofrece una ruta de acción para todos los funcionarios involucrados.
        .cajon.p-4.mb-5(style="background-color:#DBF9BD")(data-aos="flip-up")
          p El presupuesto surge como una metodología cuantitativa que aterriza las expectativas en cifras, delimitando las metas por áreas de operación o por naturaleza. Es un documento formal con una estructura definida en la que se presentan los objetivos a corto y mediano plazo.

    .col.mb-3
      p(data-aos="fade-left") La principal ventaja del presupuesto es que funciona como un elemento de control que permite medir el desempeño de los colaboradores y delimitar sus responsabilidades. Además, facilita la integración de procesos entre las subpartes de la empresa y garantiza un método efectivo para evaluar las áreas en todos sus niveles y en periodos de tiempo específicos.

    .row.justify-content-center
      .col-10
        .cajon.p-4(style="background-color:#FFFAD0")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-sm-1.mb-3
              figure(data-aos="flip-up")
                img(src='@/assets/curso/temas/tema1/11.svg', alt='Texto que describa la imagen')
            .col-sm-10
              p El presupuesto funciona como un sistema analítico que se alimenta de la información histórica y presente para prever el futuro de los procesos financieros y productivos de la compañía. Su hoja de trabajo puede incluir todos los recursos previamente estudiados, es decir, humanos, materiales, de capital y técnicos.

    p.mb-5.mt-5(data-aos="fade-left") Se espera que el resultado final sea expresado en indicadores financieros, que permitan comprender los aspectos más relevantes de la operación, como lo son las unidades a producir, los tiempos y niveles esperados de recaudo, entre otros. La siguiente figura presenta un diagrama que recrea la mecánica de la estimación presupuestal:

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 2
      span #[em Enfoques de tiempo de la información productiva]

    .row.justify-content-center
      .col-lg-10.desktop
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/12.svg', alt='En la figura se observa información histórica, información actual, información proyectada, luego se tiene el ayer, hoy y mañana, y al finalizar se tiene historia, presente y futuro.')
          figcaption Nota. Adaptado de Rincón y Narváez (2017).         

    .row.justify-content-center
      .col-lg-10.movil
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/13.svg', alt='En la figura se observa información histórica, información actual, información proyectada, luego se tiene el ayer, hoy y mañana, y al finalizar se tiene historia, presente y futuro.')
          figcaption Nota. Adaptado de Rincón y Narváez (2017).

    separador
    .titulo-segundo.color-secundario
      h2#t_1_4 1.4 Seguridad industrial y salud ocupacional

    p.mb-5(data-aos="fade-left") Ejecutar las tareas propias de cualquier organización requiere de la participación de funcionarios bien sea para abordar tareas operativas, o para aportar ideas y estrategias a aplicar en cualquier plazo de tiempo. Sin importar cómo se visualice una empresa o unidad productiva, el capital humano siempre resultará indispensable en cualquiera de las etapas propias de su ciclo de vida, desde su constitución hasta su liquidación y se debe tener en cuenta:

    .tarjeta.tarjeta.p-4.mb-5(style="background-color:#DBF9BD")(data-aos="flip-up")
      h4.titulo-cuarto 
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h5 1. Seguridad del personal
            p Preservar la seguridad del personal debe considerarse una prioridad, puesto que de ello depende una correcta distribución de cargas, la continuidad en la operación y la eficiencia sobre los insumos utilizados. Además, al hablar de seres humanos, su bienestar trasciende el ambiente corporativo puesto que son sujetos de derechos y beneficios más allá de su trabajo, se debe incluir todo lo que ocurra en la empresa pecuaria.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/14.jpg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 2. Responsabilidad de los administradores
            p El gobierno, en su constante búsqueda de equidad social y dando cumplimiento a su ideal de velar por el bienestar de los colombianos, ha sido enfático en la responsabilidad de los administradores de las compañías por garantizar las condiciones óptimas en el ambiente en el que los empleados llevan a cabo sus labores.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/15.jpg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 3. Marco normativo
            p Un sin número de leyes, decretos y resoluciones han sido sancionadas para abordar cada uno de los aspectos relevantes en el ámbito laboral; por lo que, para facilitar su entendimiento y aplicación, en el año 2015 fue emitido el decreto 1072, que actúa como recopilatorio único reglamentario del sector trabajo.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/16.jpg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 4. Alcance del marco normativo
            p Este decreto fue concebido para agrupar toda la normatividad vigente a su fecha de emisión relacionada con las condiciones de seguridad e higiene con las que deben contar los trabajadores de todos los sectores productivos de la economía colombiana, incluyendo la implementación y actualización de un sistema de gestión de seguridad y salud en el trabajo.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/17.jpg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 5. Actualización del marco normativo
            p Posteriormente fue emitida la resolución 1111 de 2017, en la que se regularon los estándares mínimos de la autoevaluación y supervisión de este sistema, por lo que en la actualidad todo el ciclo asociado la seguridad laboral se encuentra contemplado en la normativa.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/18.jpg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 6. Cumplimiento de la norma
            p Su cumplimiento es obligatorio para las empresas generadoras de empleo, puesto que todo cargo es susceptible, en mayor o menor medida, a situaciones que afecten la salud de sus empleados.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/19.jpg', alt='Texto que describa la imagen')

    p.mb-5(data-aos="fade-left") Adicionalmente el Ministerio de Trabajo (2018), publicó un diagrama donde aclara como debe ser implementado el sistema a partir del año 2020, por lo que se hace necesaria la lectura e interpretación de los requerimientos mínimos normativos para implementar el modelo aplicable a cualquier empresa productora, ver figura.

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 3
      span #[em Implementación definitiva del sistema de gestión y seguridad y salud en el trabajo desde el año 2020 en adelante]

    .row.justify-content-center
      .col-lg-10.desktop
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/20.svg', alt='En la figura se observa plan anual para el año 2020, 2021 y 2022.')

    .row.justify-content-center
      .col-lg-10.movil
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/21.svg', alt='En la figura se observa plan anual para el año 2020, 2021 y 2022.')
            
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        texto:
          'Para entender el concepto de empresa, resulta práctico visualizarla como un organismo que se compone por una variedad de sistemas trabajando de forma conjunta y armónica para operar tras un objetivo definido.',
        imagen: require('@/assets/curso/temas/tema1/1.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'La finalidad base de cualquier empresa es la generación de valor, un término que suele ser medido en función de los excedentes financieros, bien sea expresados como utilidades o como una reinversión destinada al crecimiento de la compañía.',
        imagen: require('@/assets/curso/temas/tema1/2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'La empresa es un organismo social que cuenta con una inmensa importancia en el sistema económico actual, contribuye a su desarrollo a través de la generación de empleo y suple las necesidades identificadas en el mercado.',
        imagen: require('@/assets/curso/temas/tema1/3.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
