<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Producción
    .row.justify-content-center
      .col-sm-9
        p La producción puede definirse como el proceso mediante el cual una empresa transforma una serie de insumos en un producto terminado. Como se ha mencionado previamente, el objetivo de una organización es la generación de valor a través de la satisfacción de necesidades identificadas en el mercado objetivo, esto implica la oferta de bienes o servicios que otros agentes no están aportando a la sociedad, o no lo hacen de forma suficiente.
        .cajon.p-3.mb-5(style="background-color:#FFFAD0")(data-aos="flip-up")
          p La mecánica organizacional puede reducirse a un flujo compuesto por tres grandes momentos: en primer lugar, la obtención de recursos materiales o técnicos del ambiente, para ello puede valerse de operaciones mercantiles como la compra de materias primas, obtención de créditos financieros, reclutamiento de personal entre otros, posteriormente la etapa de producción que involucra tomar estos recursos y dotarlos de un propósito, bien sea transformándolos en un producto tangible o diseñando un servicio concreto, y finalmente, la entrega de estos al mercado en forma de venta a los clientes.
      .col-sm-3
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/1.svg', alt='Texto que describa la imagen')

    separador
    .titulo-segundo.color-secundario
      h2#t_2_1 2.1 Etapas

    p.mb-5(data-aos="fade-left") El proceso productivo pasa por varias fases con funciones específicas hasta dar con la venta y entrega del producto final, el desglose de la producción puede presentarse así:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="flip-up")
      .row.justify-content-center.align-items-center(titulo="Etapa analítica o de acopio")
        .col-sm-2.mb-3
          figure
            img(src='@/assets/curso/temas/tema2/2.svg', alt='Texto que describa la imagen')
        .col-md-9.mb-4.mb-md-0
          p En esta fase se da inicio al ciclo productivo, y como su nombre lo indica, se caracteriza porque la organización busca conseguir la materia prima necesaria para cumplir con las metas de producción incurriendo en la menor cantidad de costos. La búsqueda de proveedores se centra en conseguir la mejor tarifa sin sacrificar calidad o cumplimiento. 

      div(titulo="Etapa de síntesis o producción")
        .row.justify-content-center.align-items-center(titulo="Etapa analítica o de acopio")
          .col-sm-2.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/3.svg', alt='Texto que describa la imagen')
          .col-md-9.mb-4.mb-md-0
            p Inicia el proceso de transformación de las materias primas en un nuevo producto, se involucran elementos del costo como la mano de obra y otros costos indirectos de fabricación. De manera paralela se establecen los procedimientos de supervisión y control, que buscan garantizar la calidad de los bienes producidos o servicios prestados, y aportar información utilidad para proponer las acciones de mejora a futuro.

      div(titulo="Etapa de acondicionamiento o procesamiento")
        .row.justify-content-center.align-items-center(titulo="Etapa analítica o de acopio")
          .col-sm-2.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/4.svg', alt='Texto que describa la imagen')
          .col-md-9.mb-4.mb-md-0
            p Finalmente, el producto recibe las modificaciones y adecuaciones necesarias para satisfacer la demanda de los clientes. Esto incluye costos de embalaje o presentación, almacenamiento, transporte y cualquier otro gasto asociado con  la entrega de los bienes o servicios.

    p(data-aos="fade-left").mt-5.mb-5 Para ilustrar la información anterior, se presenta la siguiente figura sobre el proceso de producción de la leche en una granja pecuaria:

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 4
      span #[em Etapas en la producción de leche]

    .row.justify-content-center
      .col-lg-10.desktop
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/5.svg', alt='En la figura se observa las etapas de acopio, producción y acondicionamiento.')

    .row.justify-content-center
      .col-lg-10.movil
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/6.svg', alt='En la figura se observa las etapas de acopio, producción y acondicionamiento.')


    separador
    .titulo-segundo.color-secundario
      h2#t_2_2 2.2 Producto

    p(data-aos="fade-left") Un producto es el resultado del ciclo productivo previamente explicado que busca satisfacer una o varias necesidades identificadas. Funciona como un eje central del objeto social de una compañía, puesto que es el medio para obtener una rentabilidad, generando así, un mayor valor en el tiempo.
    p(data-aos="fade-left") Los productos son puestos a disposición de la demanda en un mercado determinado, los potenciales compradores tendrán la posibilidad de elegir entre este y las demás alternativas ofertadas por la competencia y votarán en función de sus preferencias o condiciones personales. Hacer atractivo un producto requiere contemplar una gran cantidad de variables como lo son, su calidad, el beneficio que ofrecen respecto a su precio, su facilidad de uso, entre otros.

    h3.titulo-tercero 2.2.1.	Clasificación

    p.mb-5(data-aos="fade-left") Existen diversos criterios y sistemas para clasificar los productos, sin embargo, se propone la siguiente distribución en función de tres de las características de más fácil identificación en cualquier tipo de bien o servicio:

    ImagenInfografica.color-secundario.mb-5.desktop
      template(v-slot:imagen)
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/7.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="50.2%" y="43%" numero="")
        .h5.mb-2 Productos de negocios
        p Son bienes destinados a continuar en procesos productivos o reventa, esto implica que son comprados por productores o distribuidores antes de llegar al consumidor final. Se clasifican en 7 categorías.

      .tarjeta.color-acento-botones.p-3(x="29%" y="16.7%" numero="")
        .h5.mb-2 Equipo Mayor
        p Comprende bienes de gran escala física, como maquinaria pesada, edificios o generadores eléctricos. Tienen una incidencia directa sobre la operación de los negocios dado su alto costo y utilidad.
        
      .tarjeta.color-acento-botones.p-3(x="70.6%" y="16.8%" numero="")
        .h5.mb-2 Equipo accesorio
        p Incluye bienes de menor tamaño como las herramientas o equipos portátiles, no hacen parte de los productos terminados pero aportan en su producción. Ejemplo de estos son el mobiliario, las herramientas o los computadores. Su periodo de vida suele ubicarse en un intermedio entre los inventarios y el equipo mayor.

      .tarjeta.color-acento-botones.p-3(x="29.3%" y="25.7%" numero="")
        .h5.mb-2 Materias primas
        p Son los insumos naturales utilizados de forma directa para ser transformados en un nuevo producto. Por ejemplo, la leche para la producción de queso, o la carne para la elaboración de embutidos.

      .tarjeta.color-acento-botones.p-3(x="70.7%" y="25.8%" numero="")
        .h5.mb-2 Componentes
        p Corresponden a los bienes terminados y listos para ensamblarse en la producción de un producto de mayores dimensiones. Por ejemplo, los chips para una computadora o las bujías y llantas para un automóvil.

      .tarjeta.color-acento-botones.p-3(x="17.3%" y="77.8%" numero="")
        .h5.mb-2 Productos de consumo
        p Se destinan al uso personal, por lo que no se espera sean utilizados en procesos productivos posteriores de tipo comercial, se subdividen en categorías.

      .tarjeta.color-acento-botones.p-3(x="4.8%" y="31.6%" numero="")
        .h5.mb-2 De conveniencia
        p Se caracterizan por tener precios económicos, por lo que adquirirlos no suele representar un gran esfuerzo para el comprador. Ejemplo de este tipo de productos son las golosinas, frutas, leche, hojas de papel o lapiceros.

      .tarjeta.color-acento-botones.p-3(x="4.8%" y="41%" numero="")
        .h5.mb-2 De comparación
        p Son los productos que son sujetos a comparación con otros similares, antes de ser comprados por el cliente. Usualmente se evalúa la calidad, precio, diseño, marca, por lo que puede implicar que se visiten varios establecimientos antes de la compra. En este rubro pueden incluirse bienes como vehículos, computadoras o celulares.

      .tarjeta.color-acento-botones.p-3(x="4.8%" y="50.4%" numero="")
        .h5.mb-2 De especialidad
        p Son todos los productos que tienen el mercado objetivo muy estrecho y su obtención obedece a casos muy especiales en los que pocas empresas se encuentran, es normal encontrar esta categoría en empresas tecnológicas con casos como procesadores o repuestos de máquinas especiales para ciertos procesos.

      .tarjeta.color-acento-botones.p-3(x="4.8%" y="59.8%" numero="")
        .h5.mb-2 No buscados
        p Estos bienes suelen ser desconocidos por el comprador, o bien, aun conociéndolos, no son de su interés. Usualmente son productos innovadores que no se han masificado en un mercado concreto, como aspiradoras robóticas o detectores de humo, o productos de baja demanda como enciclopedias o seguros de vida.

      .tarjeta.color-acento-botones.p-3(x="29.3%" y="36%" numero="")
        .h5.mb-2 Materiales procesados
        p También son utilizados para ser transformados en un producto, pero a diferencia de la materia prima, han sido objeto de procesamiento antes de incorporarse al nuevo ciclo productivo. Como ejemplo de estos, se puede hacer mención de las láminas de acero o de los componentes químicos, así como la harina o el azúcar utilizados para producir pan.

      .tarjeta.color-acento-botones.p-3(x="70.7%" y="35.8%" numero="")
        .h5.mb-2 Suministros de operación
        p Son utilizados en la operación y producción de los bienes, pero no se incorporan al mismo; usualmente son de bajo costo y tiene una duración corta. Ejemplo de estos son consumibles como la gasolina, lubricantes, pintura o tornillos.

      .tarjeta.color-acento-botones.p-3(x="39.2%" y="7.1%" numero="")
        .h5.mb-2 Servicios de negocios
        p Incluye aquellos servicios necesarios y derivados de la operación, su naturaleza es intangible pero su aporte es tan necesario como el de los demás productos. En esta categoría se incluyen servicios de mantenimiento y reparación, asesorías financieras o de publicidad.

      .tarjeta.color-acento-botones.p-3(x="83.1%" y="79.2%" numero="")
        .h5.mb-2 Productos según su duración y tangibilidad
        p El criterio para clasificar los productos es la cantidad de usos que se espera obtener de ellos, el tiempo que durará siendo útil y si es tangible o intangible.

      .tarjeta.color-acento-botones.p-3(x="94.5%" y="31.6%" numero="")
        .h5.mb-2 No duraderos
        p Son aquellos bienes tangibles de un solo uso o de consumo rápido. Por ejemplo, alimentos como las bebidas gaseosas o las frituras, productos de aseo como desodorantes o bienes no reutilizables como el papel o la cartulina.

      .tarjeta.color-acento-botones.p-3(x="94.5%" y="41%" numero="")
        .h5.mb-2 Duraderos
        p En este rubro se incluyen bienes que pueden ser reutilizados un número significativo de veces. Por ejemplo, los electrodomésticos, las herramientas de ferretería o las prendas de vestir.

      .tarjeta.color-acento-botones.p-3(x="94.5%" y="50.4%" numero="")
        .h5.mb-2 Servicios
        p A diferencia de las dos subcategorías anteriores, estos productos son intangibles, es decir, carecen de materia, por lo que no pueden tocarse. Debido a la dificultad para ser medidos, suelen requerir de una mayor credibilidad para ser ofertados. Productos que pueden cumplir con estos criterios son los servicios de reparación, los cortes de cabello o el lavado de ropa.

    .row.justify-content-center.movil
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/Clasificacion_de_productos.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Descargar clasificacion de productos.
    
    h3.titulo-tercero 2.2.2.	Fichas técnicas

    p(data-aos="fade-left") La elaboración de los productos suele constituirse como una actividad altamente repetitiva, en la que se siguen una serie de lineamientos que propenden por la estandarización del proceso. Esto se debe a que la uniformidad en las líneas de producción permite la fabricación en serie de bienes con un nivel de calidad muy semejante entre ellos, lo que garantiza satisfacción en los clientes, mientras que de forma simultánea permite prever los requerimientos de insumos necesarios para mantener la operación durante franjas de tiempo determinadas.
    p.mb-5(data-aos="fade-left") La ficha técnica se erige como un documento identificador de la composición de cualquier producto que ha requerido de algún tipo de proceso para su elaboración. Usualmente incluye la descripción técnica y objetiva de los insumos utilizados en la producción del bien, por lo que es una herramienta de especial utilidad en la obtención de certificaciones de calidad.

    .row.justify-content-center
      .col-sm-8.mb-3
        .cajon.p-4(style="background-color:#FFFAD0")(data-aos="flip-up")
          p Su objetivo principal es facilitar la estandarización de los procesos en la empresa productora, puesto que les entrega a los operarios la información necesaria para la elaboración de cada producto. Además, facilita labores de acompañamiento de personal ajeno a la producción como los auditores.
          p Su uso resulta bastante común en la industria alimenticia, ya que le permite al consumidor un acercamiento a los ingredientes utilizados para la elaboración del alimento procesado que piensa adquirir. Esto sin contar con los requerimientos normativos, que en muchas ocasiones exigen esta información detallada para aprobar su comercialización.
      .col-sm-2
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/8.svg', alt='Texto que describa la imagen')

    .row.justify-content-center
      .col-11.mt-5.mb-5.offset-1
        p(data-aos="fade-left") Si se desea diseñar una ficha técnica para propósitos de calidad de producción se recomienda que incluya por lo menos los siguientes elementos:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Nombre del producto")
        .col-md-12.mb-4.mb-md-0
          p Debe diferenciarse de cualquier otro producto elaborado en la compañía, lo que implica hacer precisiones respecto a tamaños o presentaciones, por ejemplo, diferenciar entre versiones líquidas o sólidas.
      
      div(titulo="Tiempo de preparación")
        .col-md-12.mb-4.mb-md-0
          p Si requieren someterse a procesos de cocción o enfriamiento, se puede especificar el tiempo que deben permanecer en cada etapa. Por ejemplo, la pasteurización de la leche implica someterla a bajas y altas temperaturas por periodos de tiempo determinados.

      div(titulo="Mano de obra requerida")
        .col-md-12.mb-4.mb-md-0
          p Puede detallarse por cargos operativos y suele presentarse en horas de trabajo. Esto significa, el tiempo que un operario le destina para aplicar todos los procedimientos requeridos a cada unidad producida.

      div(titulo="Equipamiento usado")
        .col-md-12.mb-4.mb-md-0
          p Algunos productos demandan el uso de una maquinaria específica. Es importante dejar esto en claro para evitar reprocesos, retrasos en las líneas de producción o la utilización errónea de maquinaria que altere la disposición del producto.

      div(titulo="Tamaño de la porción")
        .col-md-12.mb-4.mb-md-0
          p Según la presentación del producto, puede expresarse en litros, kilos, libras o gramos, entre otros.

      div(titulo="Imagen del producto")
        .col-md-12.mb-4.mb-md-0
          p para apoyar la identificación del bien, pueden incluirse imágenes orientativas de la presentación del producto, el logo o información relevante adicional.

      div(titulo="Instrucciones especiales")
        .col-md-12.mb-4.mb-md-0
          p Ciertos productos pueden requerir tratamientos especiales, por ejemplo, si son delicados o perecederos, o si requieren de ciertas condiciones ambientales para su conservación. Este aspecto toma vital importancia cuando los productos abandonan la fábrica de producción y son manipulados por otros agentes del canal de distribución que carecen de los conocimientos técnicos.

    separador
    .titulo-segundo.color-secundario
      h2#t_2_3 2.3 Plan de Mercadeo

    .row.justify.content-center.mb-5 
      .col-sm-8
        p El plan de mercadeo es un documento en el que se plasman los objetivos que espera alcanzar la empresa en materia comercial, así como las estrategias a implementar para hacerlo posible junto con el costo para ejecutarlas. Su utilidad radica en la correcta planeación y destinación de recursos con suficiente anticipación para garantizar que los flujos de efectivo se destinen de forma correcta y para que los esfuerzos se encaminen hacia una meta clara y definida.
        p Comúnmente, el plan de mercadeo se formula para ser ejecutado en periodos de un año, donde al final del ejercicio, se hará una evaluación en la que se compara lo proyectado con lo efectivamente alcanzado. Para posibilitar esto último, deben cuantificarse todos los elementos que aporten a hacer un juicio por parte de los evaluadores. Lo anterior conlleva canales de comunicación efectivos y oportunos con el personal del área comercial, los proveedores y los clientes, así como con todos los demás integrantes de la cadena de distribución del producto.
      .col-sm-4
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/9.jpg', alt='Texto que describa la imagen')

    h3.titulo-tercero 2.3.1	Elementos

    p.mb-5(data-aos="fade-left") Como se ha mencionado el plan de mercadeo es un documento, y por lo tanto su elaboración y formato está sometido a juicio del personal estratégico que lo diseñe. Sin embargo, es recomendable que dentro de su estructura se incluyan por lo menos tres grandes secciones así:

    .row.justify-content-center 
      .cajon.p-4(style="background-color:#DBF9BD")(data-aos="flip-up")
        .row.justify-content-center
          .col-sm-3
            figure(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema2/10.jpg', alt='Texto que describa la imagen')
          .col-sm-7
            h5 • Marketing analítico
            p(data-aos="fade-left") En esta primera sección se debe hacer un análisis de la empresa, el mercado objetivo y la competencia. La información recolectada en esta etapa resulta de vital importancia para las medidas que se tomen posteriormente, puesto que las estrategias deben atacar aquellas amenazas o debilidades identificadas.
            p(data-aos="fade-left") Es recomendable que el estudio aborde los factores internos y externos de la empresa, lo que implica evaluar al personal de ventas, la reputación del producto, los precios de los bienes sustitutos, la demografía de la población, y cualquier otro factor que pueda inferir en los resultados comerciales. Es recomendable aplicar una matriz FODA que permita maniobrar con las fortalezas, oportunidades, debilidades y amenazas de forma efectiva.

    .row.justify-content-center.mt-5 
      .col-10
        p(data-aos="fade-left") La siguiente figura, aborda los cuatro componentes principales del marketing analítico y algunas de las actividades que pueden tenerse en cuenta para documentar el plan de mercadeo.

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 5
      span #[em Componentes del Marketing analítico]

    .row.justify-content-center
      .col-lg-10.desktop
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/11.svg', alt='En la figura se observa análisis interno, análisis externo, estudio de mercado y análisis FODA.')
          figcaption Nota. Ministerio del trabajo (2018).

    .row.justify-content-center
      .col-lg-10.movil
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/12.svg', alt='En la figura se observa análisis interno, análisis externo, estudio de mercado y análisis FODA.')
          figcaption Nota. Ministerio del trabajo (2018).

    .row.justify-content-center
      .col-10.mt-5
        h5(data-aos="fade-left") • Marketing estratégico

    .row.justify-content-center 
      .col-sm-3
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/13.jpg', alt='Texto que describa la imagen')
      .col-sm-7
        p(data-aos="fade-left") una vez se ha recopilado toda la información relevante para la gestión comercial, se procede a la postulación de metas que puedan ser alcanzados con los recursos disponibles. A partir de ello, se plantean las estrategias que represente una mayor relación costo – beneficio y se estructuran incluyendo los objetivos específicos y las tareas a desarrollar.
        p(data-aos="fade-left") En primer lugar, se debe estimar la demanda a partir de la información recolectada, por ejemplo si se espera tener una participación del 10% del mercado, y en la población abordada se venden 1.000 unidades de productos similares, la meta de ventas debe ser de 100 unidades en el periodo de tiempo definido. A partir de ello se define la fuerza de ventas que será necesaria, y la implementación de medidas adicionales asociadas a cobertura, publicidad, distribución entre otros.
  
    .row.justify-content-center
      .tarjeta.p-4(style="background-color:#3B5620")(data-aos="flip-up")
        .row.justify-content-center.align-items-center
          .col-sm-1.mb-3
            figure(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema2/14.svg', alt='Texto que describa la imagen')
          .col-sm-9
            p.text-white Muchas interpretaciones pueden derivarse del análisis anterior, definir el mercado actual y el mercado meta traza un camino a seguir y un objetivo claro, pero las estrategias deben ser lo suficientemente precisas para contemplar aspectos como la segmentación del mercado, las variaciones en los precios, y las ventajas competitivas con las que se espera contar para favorecer la elección del producto propio sobre el producto de la competencia.


    .row.justify-content-center
      .col-10.mt-5
        h5(data-aos="fade-left") • Marketing operativo
        p(data-aos="fade-left") En esta fase se materializan las estrategias propuestas, puesto que se finaliza el diseño, y se implementan las tareas definidas. Previo y durante la etapa de ejecución se debe llevar un control de las expensas necesarias para actualizar el control presupuestal y tener claridad sobre la disponibilidad del efectivo de manera permanente.
        p(data-aos="fade-left") El marketing operativo comprende 4 pasos en los que se hace uso de toda la información recolectada en el marketing analítico y estratégico:

    .row.justify-content-center 
      .col-10
        <hr style="border:15px;">
    .row.justify-content-center 
      .col-sm-1
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/15.svg', alt='Texto que describa la imagen')
      .col-sm-9
        p #[b  4p:] la fase de las 4 “P” defina la forma en la que el producto llegará a los clientes; su nombre proviene del análisis de los factores más relevantes en este sentido, que son: el producto, el precio, la plaza y la promoción. Lo anterior implica que debe efectuarse un estudio que contemple las características del producto, su precio de venta en relación con los terceros, la plaza, entendida como el lugar donde se ofertan los bienes, y la promoción, que refiera a los esfuerzos comerciales para penetrar en el mercado.
      .col-10
        <hr style="border:15px;">

    .row.justify-content-center 
      .col-sm-1
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/16.svg', alt='Texto que describa la imagen')
      .col-sm-9
        p #[b Comunicación:] aborda todos los canales para la transmisión de información, esto incluye la comunicación asertiva entre los funcionarios de las diversas áreas que colaboran para la elaboración, distribución y venta de bienes, así como la debida retroalimentación obtenida por parte de los consumidores. Es recomendable apoyarse en las tecnologías de la información para facilitar el proceso, haciendo uso de herramientas contempladas en el marketing digital como la gestión redes sociales o mensajería instantánea.

      .col-10
        <hr style="border:15px;">
        

    .row.justify-content-center 
      .col-sm-1
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/17.svg', alt='Texto que describa la imagen')
      .col-sm-9
        p #[b Puesta en marcha:] para este paso se deben definir las tareas y los responsables de estas. La asignación puede dirigirse a áreas, cargos o personas según las necesidades; sin embargo, es importante recalcar que el factor tiempo resulta determinante, puesto que ciertas estrategias requieren de una secuencia para ser efectivas. Por ejemplo, una estrategia publicitaria puede tener diferentes efectos si la campaña en medios se realiza antes (para crear expectativa) o después del lanzamiento de un producto. 

      .col-10
        <hr style="border:15px;">
    

    .row.justify-content-center 
      .col-sm-1
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/18.svg', alt='Texto que describa la imagen')
      .col-sm-9
        p #[b Presupuesto:] este tipo de planeación no puede obviar el factor económico que implica su implementación. La empresa como órgano social debe trabajar de manera cooperativa con las demás áreas organizacionales, puesto que la armonía garantiza que los propósitos comunes sean alcanzados.
        p Una campaña muy costosa puede traer una demanda tan grande que la capacidad productiva no logre abastecerla, de la misma manera, la aplicación de una estrategia publicitaria puede representar más dinero del que tiene a disposición la empresa, lo que implica posibles sobreendeudamientos o incumplimientos en los pagos que afecten la reputación, causando un efecto contrario al buscado.
        p El presupuesto debe elaborarse de manera previa y simultánea a la programación de las tareas propias de la puesta en marcha, de tal forma que se tenga certeza de la disponibilidad de recursos en las fechas esperadas. Este trabajo suele requerir del acompañamiento del área financiera, quienes deberán dar aprobación previa implementación, para garantizar que todas las tareas puedan llevarse a cabo de acuerdo con el programa.

      .col-10
        <hr style="border:15px;">        

    h3.titulo-tercero 2.3.2	Importancia en el ciclo productivo

    p.mb-5(data-aos="fade-left") Generalmente, la demanda de los productos obedece a muchos factores sobre los cuales la empresa no siempre tiene control; condiciones económicas, políticas públicas y la competencia, son solo algunos de ellos. Debido a esto, lo más habitual a la hora de diseñar un ciclo productivo, es que el plan de mercadeo haga de punto de partida en el ciclo productivo y posteriormente se debe tener en cuenta lo siguiente:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/RbnVKRrsk8U?si=DdNDKPk4knDUhtKr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    .titulo-segundo.color-secundario
      h2#t_2_4 2.4 Elementos del costo

    .row.justify-content-center
      .col-sm-3 
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/19.jpg', alt='Texto que describa la imagen')
      .col-sm-8
        p(data-aos="fade-left") Está compuesta por todos los materiales utilizados en la elaboración del producto. Son insumos tangibles y susceptibles a transformación durante el ciclo de producción; pueden ser clasificados como directos o indirectos según la relevancia y relación que tengan con el producto terminado.
        p(data-aos="fade-left") La materia prima directa se clasifica como tal si da cumplimiento a los dos siguientes conceptos: Materialidad e importancia relativa. El primero se asocia al costo de la inversión o su significancia en la elaboración, es decir, qué tanto valor económico aporta al costo total. Como ejemplo de lo anterior, se considera materia prima directa la tela en la confección de los pantalones, donde resulta evidente que no solo representa uno de los insumos que mayor valor económico atribuyen a la producción, sino también aquel que tiene mayor participación en la composición del producto terminado.

    .row.justify-content-center.mt-5
      .tarjeta.p-4(style="background-color:#3B5620")(data-aos="flip-up")
        .row.justify-content-center.align-items-center
          .col-sm-1.mb-3
            figure(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema2/20.svg', alt='Texto que describa la imagen')
          .col-sm-9
            p.text-white La importancia relativa se relaciona con lo indispensable de un material en el proceso de producción. Así, continuando con el ejemplo anterior, los botones del pantalón también pueden ser considerados materia prima directa, pues si bien, no son tan costosos, son necesarios para dar por terminada su producción.

    .row.justify-content-center
      .col-sm-10
        .bloque-texto-b.color-secundario.p-4.mt-5
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5.mb-0 En palabras de Guarnizo y Cárdenas (2015) la materia prima no solo se compone por el valor de compra de los insumos, sino también, por todas aquellas erogaciones que se asocian a su adquisición y disposición. Por ejemplo, los costos de embalaje, el bodegaje, las pérdidas, son algunos elementos que encajarían dentro de la definición de materia prima. 
            i.fas.fa-quote-right

    p(data-aos="fade-left") En la siguiente figura se presentan a modo orientativo algunos de los elementos que constituyen el costo de la materia prima, separadas en función de la fase en la que esta se encuentra dentro de la producción:

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 6
      span #[em Costos asociados a la materia prima]

    .row.justify-content-center
      .col-lg-10.desktop
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/21.svg', alt='En la figura se observa costos como compras, mantenimiento, administración y faltantes.')
          figcaption Nota. Adaptado de Guarnizo y Cárdenas (2015).

    .row.justify-content-center
      .col-lg-10.movil
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/22.svg', alt='En la figura se observa costos como compras, mantenimiento, administración y faltantes.')
          Figcaption Nota. Adaptado de Guarnizo y Cárdenas (2015).

    .row.justify-content-center.mt-5 
      .col-sm-10
        h4 Mano de obra

    .row.justify-content-center.align-items-center 
      .col-sm-3
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/23.jpg', alt='Texto que describa la imagen')
      .col-sm-7
        p La mano de obra se constituye como el segundo elemento de los costos de producción, al cual se asigna el valor del trabajo realizado por las personas que se involucran con la producción y transformación de los insumos. Al igual que la materia prima, puede clasificarse como directa o indirecta
        p En principio, aquellos funcionarios cuya labor es trabajar transformando los insumos, son considerados mano de obra directa, por ejemplo, el operario encargado de ordeñar las vacas en una granja pecuaria. Por otro lado, la mano de obra indirecta incluye la labor desempeñada por trabajadores de apoyo o dirección del área, pero sin participar directamente sobre la producción. Ejemplo de esto son los vigilantes o supervisores de las áreas donde se encuentra el área de producción.

    .row.justify-content-center.mt-5
      .tarjeta.p-4(style="background-color:#3B5620")(data-aos="flip-up")
        .row.justify-content-center.align-items-center
          .col-sm-1.mb-3
            figure(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema2/24.svg', alt='Texto que describa la imagen')
          .col-sm-9
            p.text-white Respecto a los elementos que componen el costo de la mano de obra, se deben tener presentes todas las remuneraciones asociadas a la relación con el trabajador, esto incluye las prestaciones sociales, la seguridad social, las bonificaciones y cualquier otra erogación que se dé como retribución al trabajo prestado. Otros costos que podrían incluirse si la administración así lo considera son gastos accesorios como los de reclutamiento, auxilios, capacitaciones, entre otros.

    .row.justify-content-center.mt-5.mb-3 
      .col-sm-10
        h4 Costos indirectos de fabricación

    .row.justify-content-center.align-items-center 
      .col-sm-3
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/25.jpg', alt='Texto que describa la imagen')
      .col-sm-7
        p Agrupan todas las erogaciones indirectas a la producción, incluye la materia prima y mano de obra que se catalogaron previamente como indirectas, y adicionan otros conceptos que no pueden atribuirse o destinarse de forma específica a cada unidad producida.
        p Esta categoría absorbe todo valor residual que no cumpla con la clasificación de insumo directo, por lo que, de su precisión en el cálculo, depende la correcta estimación de los costos de producción. Ejemplo de otros rubros que encajan con esta clasificación son los mantenimientos hechos a las maquinarias, el combustible que estas requieren para producir o el arrendamiento del inmueble donde se ejecuta la producción.

    separador
    .titulo-segundo.color-secundario
      h2#t_2_5 2.5 Clasificación

    p(data-aos="fade-left") Una vez se tiene claridad del concepto de costo de producción y los elementos que lo integran, se pueden clasificar según diversos criterios como los siguientes:

    .row.justify-content-center 
      .col-sm-8
        ImagenInfograficaB.color-secundario.mb-5
          template(v-slot:imagen)
            figure(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema2/26.svg', alt='Texto que describa la imagen')
              
          div(x="18%" y="19.5%" tooltip="tooltip de max 35 caracteres" numero="")
            h5 Según su uso en planeación
            p En primer lugar, están los costos estimados, que surgen de metodologías de análisis y observación. No son exactos y su margen de error está condicionado al nivel de detalle en la que se haya efectuado los procedimientos de cálculos. Son aplicables a los insumos que no son materiales en el proceso de elaboración. En segundo lugar, se ubican los costos estándar, utilizados en empresas con volúmenes de producción significativos y bajo un sistema altamente repetitivo. Analizan la información histórica disponible, y anticipan el costo de producción a partir de ello, su margen de error suele ser muy bajo dado que trabajan con variables ya conocidas.

          div(x="81.7%" y="19.5%" tooltip="tooltip de max 35 caracteres" numero="")
            h5 Según su relación con la producción
            p Bajo este modelo, los costos se discriminan en variables, que son aquellos que tienen una relación directa con las unidades producidas, por ejemplo, a mayor cantidad de camisas a producir, mayor la cantidad de tela a utilizar. Como contraparte están los costos fijos, que no se ven afectados por la producción, aquí podemos encontrar rubros como el salario de las aseadoras de planta de producción.

          div(x="49.6%" y="93.3%" tooltip="tooltip de max 35 caracteres" numero="")
            h5 Según su relación con el producto
            p La regla aplicable a este sistema nos lleva a determinar si existe o no una relación directa entre el insumo y la generación del producto terminado. Se consideran directos los costos asignables a un producto en específico, como lo sería la materia prima objeto de transformación, o el salario pagado al operario que trabaja en una línea de producción en concreto. Los costos indirectos, por su parte, corresponden a aquellos que, aunque tienen relación con la producción, son comunes a varios tipos de productos o cuesta asignarlos de forma directa a uno en específico.

    separador
    .titulo-segundo.color-secundario
      h2#t_2_6 2.6 Cálculo

    p.mb-5(data-aos="fade-left") Si bien previamente se presentó una conceptualización de los elementos del costo de producción, determinar su valor es un proceso que demanda la aplicación de diversas metodologías para cada uno de ellos. A continuación, se presentan los sistemas de más fácil accesibilidad para determinar el valor de cada uno de los elementos del costo.

    .row.justify-content-center.mb-3 
      .col-sm-10
        h3.titulo-tercero 2.6.1	Materia Prima

    .row.justify-content-center.align-items-center 
      .col-sm-1
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/27.svg', alt='Texto que describa la imagen')
      .col-sm-11
        p En este rubro se incluyen todos los insumos materiales para ser utilizados en la producción. En el ámbito financiero, este tipo de elementos se clasifican como inventarios, y los sistemas utilizados para su valoración se encuentran regulados en la normativa colombiana. En la actualidad, se puede hacer uso de los dos siguientes sistemas:

    .row.justify-content-center 
      .col-10
        h4 • Sistema de inventarios periódico: 
        p(data-aos="fade-lefet") Bajo este modelo, el costo de la materia prima se determina a una fecha de corte, a través del conteo físico de las unidades que no han sido utilizadas o vendida, es decir, el inventario final. La fórmula a utilizar es conocida como el juego de inventarios y se presenta así: 

    .row.justify-content-center.mt-5
      .col-6
        .tarjeta.p-4(style="background-color:#3B5620")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-sm-3.mb-3
              figure(data-aos="flip-up")
                img(src='@/assets/curso/temas/tema2/28.svg', alt='Texto que describa la imagen')
            .col-sm-7
              h4.text-white Inventario inicial 
              p.text-white (+) Compras brutas
              p.text-white (–) Devoluciones en compras. 
              p.text-white = Mercancías disponibles para la venta 
              p.text-white (–) Inventario final. 
              p.text-white = Costo de venta.

    .row.justify-content-center.mt-5 
      .col-10
        p(data-aos="fade-lefet") Es un sistema de fácil y económica aplicación, puesto que el esfuerzo recae sobre un trabajo manual y físico, actualmente ha ido perdiendo relevancia, pues las facilidades tecnológicas posibilitan usar herramientas más precisas. El principal problema de este modelo, es que para estimar el costo es necesario realizar todo el proceso de verificación de existencias, implicando que no se puede tener datos exactos inmediatos y permanentes.

    .row.justify-content-center 
      .col-10
        h4 • Ejemplo de sistema de inventarios periódicos.
        p(data-aos="fade-lefet") Por ejemplo, si una empresa hace compras por $ 100 y a final del año le queda un saldo de materiales por valor de $ 20, se deduce que el costo de los insumos fue de $ 80, bien sea porque hayan sido utilizados en la producción, o se hayan deteriorado o perdido. Para calcular este costo fue necesario determinar el valor del inventario final, situación que demanda siempre un conteo físico, y por lo tanto, hace muy exigente la estimación del costo si se quiere conocer de manera frecuente.

    .row.justify-content-center 
      .col-10
        h4 • Sistema de inventarios permanentes
        p.mb-5(data-aos="fade-lefet") Ofrece una medición más precisa de las materias primas, dispone con claridad de la cifra en cualquier momento, y la información es mucho mayor a la de su contraparte. Las metodologías utilizadas son:

    .row.justify-content-center 
      .col-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="flip-up")
          .row.justify-content-center.align-items-center(titulo="Primeras en entrar, primeras en salir (PEPS)")
            .col-sm-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/29.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0
              p Las unidades utilizadas en la producción se disponen en el mismo orden de ingreso al inventario. Los saldos de materia prima siempre corresponderán a las últimas unidades compradas.

          div(titulo="Etapa de síntesis o producción")
            .row.justify-content-center.align-items-center(titulo="Últimas en entrar, primeras en salir (UEPS)")
              .col-sm-2.mb-3
                figure
                  img(src='@/assets/curso/temas/tema2/30.svg', alt='Texto que describa la imagen')
              .col-md-9.mb-4.mb-md-0
                p Su mecánica es opuesta al anterior, puesto que la materia prima a utilizar será la última comprada, esto lleva a que los saldos del inventario final se compongan por la materia prima adquirida con mayor antigüedad, esto puede generar desfases en los precios y llevar a un sesgo en la interpretación de la información.

          div(titulo="Etapa de acondicionamiento o procesamiento")
            .row.justify-content-center.align-items-center(titulo="Promedio ponderado")
              .col-sm-2.mb-3
                figure
                  img(src='@/assets/curso/temas/tema2/31.svg', alt='Texto que describa la imagen')
              .col-md-9.mb-4.mb-md-0
                p El sistema funciona afectando el costo de la materia prima en función de todas las compras realizadas en el tiempo. Esto significa que las variaciones de los precios ajustan el valor promedio de todas las existencias disponibles en el inventario.

    .row.justify-content-center 
      .col-10
        p(data-aos="fade-left").mb-5 En Colombia, la legislación tributaria solo permite el uso de los sistemas PEPS y promedio ponderado, dado que son los que gozan de mayor precisión a la hora de determinar el costo de los inventarios. Cualquier de los dos, hace uso de una herramienta conocida como Kárdex, que consta de una hoja de trabajo en la que se computan las compras efectuadas en orden cronológico; de esta misma forma, se reconocen las salidas cuando se utilizan en el proceso de producción. 

    .row.justify-content-center
      .col-10
        .tarjeta.p-3.mb-5(style="background-color:#FFFAD0")(data-aos="flip-up") 
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/32.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el Anexo 1_ Hoja de kárdex, podrá consultar ejemplos relacionados con este tipo de herramienta, en donde se ofrece de mayor precisión al respecto.
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Tabla 3 
      span #[em Comparativa sistemas de valuación de inventario]

    .row.justify-content-center 
      .col-10
        .tabla-a.mb-5 
          table
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr
                th 
                th PEPS
                th Promedio ponderado
            tbody
              tr
                td Costo de la materia prima
                td.text-center 404.000
                td.text-center 472.286
              tr
                td Inventario final
                td.text-center 466.000
                td.text-center 397.714
              tr
                td Total materia prima
                td.text-center 870.000
                td.text-center 870.000
    
    .row.justify-content-center.mb-3 
      .col-sm-10
        h3.titulo-tercero 2.6.2	Mano de obra
    p(data-aos="fade-left") El costo de la mano de obra en Colombia involucra las prestaciones y beneficios a los que los empleados tienen derecho. Un contrato de trabajo comprende un salario básico, unas prestaciones sociales, unos aportes parafiscales y de seguridad social, así como cualquier otra retribución asociada a las labores ejecutadas en función de su trabajo.
    p(data-aos="fade-left") La normativa colombiana es muy extensa respecto a las condiciones de la contratación laboral, el código sustantivo del trabajo de 1950 presenta el compilatorio más importante en el país en este aspecto, de su interpretación se sustraen los siguientes apartados, que resultan de especial importancia para estimar el costo de la mano de obra:

    .row.justify-content-center 
      .col-10
        .row.mb-5
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#DBF9BD; height:100%")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema2/33.svg', alt='Texto que describa la imagen')

              h3.text-center Salario
              p.text-small Constituye salario no sólo la remuneración ordinaria, fija o variable, sino todo lo que recibe el trabajador en dinero o en especie como contraprestación directa del servicio, sea cualquiera la forma o denominación que se adopte, como primas, sobresueldos, bonificaciones habituales, valor del trabajo suplementario o de las horas extras, valor del trabajo en días de descanso obligatorio, porcentajes sobre ventas y comisiones (Código Sustantivo del Trabajo, 1950, Artículo 127).

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#DBF9BD; height:100%")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema2/34.svg', alt='Texto que describa la imagen')

              h3.text-center Horas extra
              p.text-small Trabajo suplementario o de horas extras es el que excede de la jornada ordinaria, y en todo caso el que excede de la máxima legal (Código Sustantivo del Trabajo, 1950, Artículo 159).

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#DBF9BD; height:100%")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema2/35.svg', alt='Texto que describa la imagen')

              h3.text-center Vacaciones
              p.text-small Los trabajadores que hubieren prestado sus servicios durante un año tienen derecho a quince (15) días hábiles consecutivos de vacaciones remuneradas (Código Sustantivo del Trabajo, 1950, Artículo 186).

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#DBF9BD; height:100%")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema2/36.svg', alt='Texto que describa la imagen')

              h3.text-center Cesantías
              p.text-small Todo empleador está obligado a pagar a sus trabajadores, y a las demás personas que se indican en este Capítulo, al terminar el contrato de trabajo, como auxilio de cesantía, un mes de salario por cada año de servicios y proporcionalmente por fracción de año (Código Sustantivo del Trabajo, 1950, Artículo 249).

    .row.justify-content-center 
      .col-10
        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#DBF9BD; height:100%")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema2/37.svg', alt='Texto que describa la imagen')

              h3.text-center Prima de servicios
              p.text-small El empleador está obligado a pagar a su empleado o empleados, la prestación social denominada prima de servicios que corresponderá a 30 días de salario por año, el cual se reconocerá en dos pagos, así: la mitad máximo el 30 de junio y la otra mitad a más tardar los primeros veinte días de diciembre. Su reconocimiento se hará por todo el semestre trabajado o proporcionalmente al tiempo trabajado (Código Sustantivo del Trabajo, 1950, Artículo 306).

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#DBF9BD; height:100%")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema2/38.svg', alt='Texto que describa la imagen')

              h3.text-center Intereses a las cesantías
              p.text-small Todo patrono obligado a pagar cesantía a sus trabajadores conforme al Capítulo VII Título VIII, Parte 1ª, del Código Sustantivo del Trabajo y demás disposiciones concordantes, les reconocerá y pagará intereses del 12% anual sobre los saldos que en 31 de diciembre de cada año, o en las fechas de retiro del trabajador o de liquidación parcial de cesantía, tenga este a su favor por concepto de cesantía (Ley 52, 1975, Artículo 1).

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#DBF9BD; height:100%")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema2/39.svg', alt='Texto que describa la imagen')

              h3.text-center Auxilio de transporte
              p.text-small Corresponde a un elemento salarial diferente a los anteriores, puesto que su valor no depende del salario, sino que se establece un valor fijo anualmente. Como su nombre lo indica, es un auxilio para cubrir los costos de desplazamiento del empleado. Para el año 2021 su valor es de $ 106.454 según lo dispuesto en el decreto 1785 de 2020, expedido por el ministerio del trabajo, y su pago es exclusivo de los trabajadores que devenguen menos de dos salarios mínimos mensuales legales vigentes (SMMLV).


    .row.justify-content-center 
      .col-10
        p(data-aos="fade-left") Para determinar el costo de prestaciones como las cesantías o la prima de servicios, debe calcularse la proporcionalidad en relación con el salario. La norma indica que por 12 meses trabajados se hacer acreedor a un mes por cada uno de estos conceptos. Así, la ratio 1/12 es equivalente al 8,33 % de tal forma que ese porcentaje, al pasar un año será del 100 %. En el caso de las vacaciones el trabajador tiene derecho a 15 días por año trabajado, por lo que la proporción se reduce al 4,17 %.
        p(data-aos="fade-left") La siguiente tabla, relaciona todos los factores prestacionales a tener presentes a la hora de calcular el costo de la mano de obra:

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Tabla 4
      span #[em Factores prestacionales]
    
    .row.justify-content-center 
      .col-8
        .tabla-a.mb-5 
          table
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr
                th Prestación
                th Empleador/a
            tbody.text-center
              tr
                td Vacaciones
                td 4,17%
              tr
                td Cesantías
                td 8,33%
              tr
                td Prima de servicios
                td 8,33%
              tr
                td Intereses a las cesantías
                td 1%
              tr
                td #[b Total]
                td #[b 21,83%]

    .row.justify-content-center 
      .col-10
        p(data-aos="fade-left") Por otra parte, de forma adicional a lo mencionado previamente, los contratos laborales también obligan a los empleadores a asumir costos por la seguridad social del empleado, el artículo “Cotización a la Seguridad Social – Aportes” publicado por el ministerio de trabajo aporta la siguiente tabla:

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Tabla 5
      span #[em Aportes obligatorios a seguridad social]
    
    .row.justify-content-center 
      .col-8
        .tabla-a.mb-5 
          table
            caption Nota. Ministerio del trabajo (2019). 
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr
                th Prestación
                th Empleador/a
                th Trabajador/a
                th Total
            tbody.text-center
              tr
                td Pensiones
                td 12%
                td 4%
                td 16%
              tr
                td Salud
                td 8,5%
                td 4%
                td 12,5%
              tr
                td Riesgos laborales- Nivel I
                td 0,5%
                td
                td 0,5%
              tr
                td Cajas de compensación
                td 4%
                td
                td 4%
              tr.text-bold
                td Total
                td 25%
                td 8%
                td 33%

    p(data-aos="fade-left") La estimación de todos los costos asociados a un trabajador, suelen llevarse a una hoja de trabajo conocida como nómina. Allí, se detallan todos los rubros que comprenden los pagos y prestaciones de cada trabajador, de tal forma que tenga claridad sobre los costos totales asociados a la relación laboral. Una vez se cuenta con esta información, es posible asignarle un valor a cada hora trabajada, en función de las horas totales del mes. Para ejemplificar lo anterior se presenta el siguiente caso, ver tabla:
    p(data-aos="fade-left") Calcular el costo de mano de obra de un producto que requiere 1 hora de trabajo de los siguientes dos operarios:

    .row.justify-content-center.mb-5 
      .col-md-6
        .tarjeta.p-4(style="background-color:#DBF9BD")(data-aos="flip-up")
          .row.justify-content-center 
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/40.svg', alt='Texto que describa la imagen')
            .col-md-8
              p Operario 1:  Salario Básico de 1.000.000
              p Operario 2:  Salario Básico de 1.500.000

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Tabla 6
      span #[em Liquidación costo mensual empleado]
    
    .row.justify-content-center 
      .col-8
        .tabla-a.mb-5 
          table
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr
                th Concepto
                th Operario 1
                th Operario 2
            tbody.text-center
              tr
                td Salario
                td 1.000.000
                td 1.500.000
              tr
                td Aux. de transporte
                td 106.454
                td 106.454
              tr.text-bold
                td Subtotal salario 
                td 1.106.454
                td 1.606.454
              tr
                td 
                td 
                td
              tr
                td Vacaciones
                td 41.667 
                td 62.500 
              tr
                td Cesantías
                td 92.205 
                td 133.871 
              tr
                td Prima de servicios
                td 92.205 
                td 133.871 
              tr
                td Intereses a las cesantías
                td 11.065 
                td 16.065 
              tr.text-bold
                td Subtotal prestaciones
                td 237.140  
                td 346.307 
              tr
                td 
                td 
                td
              tr
                td Seguridad social
                td 
                td
              tr
                td Salud
                td 
                td
              tr
                td Pensión
                td 132.774 
                td 192.774
              tr
                td ARL
                td 5.754 
                td 8.354 
              tr.text-bold
                td Subtotal seguridad social
                td 138.528
                td 201.128   
              tr
                td 
                td 
                td
              tr
                td Aportes parafiscales
                td 
                td
              tr
                td Caja de compensación
                td 44.258 
                td 64.258 
              tr
                td SENA
                td 
                td
              tr
                td ICBF
                td 
                td
              tr.text-bold
                td Subtotal parafiscales  
                td 44.258 
                td 64.258 
              tr
                td
                td 
                td
              tr.text-bold
                td Total costo empleado
                td 1.343.594 
                td 1.952.761 

    .row.justify-content-center.mb-5 
      .col-10
        .tarjeta.p-4(style="background-color:#FFFAD0")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema2/41.svg', alt='Texto que describa la imagen')
            .col-md-9
              p Es importante precisar que la base de las prestaciones sociales es equivalente a la suma del salario básico, más el auxilio de transporte, las comisiones y las horas extra, entre otros. Sin embargo, en el caso de las vacaciones, el auxilio de transporte no se incluye puesto que se asume que en ese periodo el empleado no deberá asumir costos de movilización, pues no se desplazará a su lugar de trabajo.
              p En el caso del cálculo de la tarifa de la ARL (administradora de riesgos laborales) se debe acudir a una tabla dispuesta por la norma laboral que varía según lo peligroso de la labor prestada por el trabajador, el nivel uno, es decir, el que presenta el menor riesgo, es del 0,52 %.

    .row.justify-content-center 
      .col-10
        p(data-aos="fade-left") Una vez calculado el costo mensual de cada empleado, se debe continuar con la estimación del tiempo destinado a la elaboración de cada unidad producida. Por ejemplo, si cada empleado tarda una hora de su trabajo en el proceso de transformación, y debe trabajar 24 días al mes en jornadas fijas de 8 horas, el costo de la mano de obra unitario se calcularía como se indica en la siguiente tabla:


    .titulo-sexto.color-acento-contenido.offset-2
      h5 Tabla 7
      span #[em Costo de mano de obra por hora]

    .row.justify-content-center 
      .col-8
        .tabla-a.mb-5 
          table
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr
                th Concepto
                th Operario 1
                th Operario 2
            tbody
              tr
                td Costo mensual
                td.text-center 1.343.594
                td.text-center 1.952.761
              tr
                td Horas diarias de trabajo
                td.text-center 8
                td.text-center 8
              tr
                td Días trabajados al mes
                td.text-center 24
                td.text-center 24
              tr
                td Horas de trabajo mensual
                td.text-center 192
                td.text-center 192
              tr.text-bold
                td Costo por hora (salario/total horas)
                td.text-center 6.998 
                td.text-center 10.171

    .row.justify-content-center 
      .col-10
        p(data-aos="fade-left").mb-5 Los cálculos de nómina suelen obedecer siempre a los mismos criterios, por lo que las hojas de cálculo electrónicas, pueden agilizar el proceso con la aplicación de fórmulas matemáticas. Allí, se pueden agregar tantos empleados como sea necesario, siempre y cuando se respeten las tarifas y se tenga cuidado con su parametrización. Actualmente existen softwares gerenciales que agregan módulos de nómina y se encargan de automatizar aún más el proceso, sin embargo, suelen tener costos elevados, por lo que solo son opciones viables para empresas con cierta robustez financiera.

    
    .row.justify-content-center 
      .col-10
        .tarjeta.p-3.mb-5(style="background-color:#FFFAD0")(data-aos="flip-up") 
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/42.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-md-9.mb-3.mb-sm-0
                  p.text-small Para profundizar acerca de la automatización de la nómina de forma gratuita, se recomienda al aprendiz observar tutoriales como el siguiente Oliveros (2016). Ms Excel 5 Fórmulas nómina completa.
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=KdZLNPyLGmk" target="_blank")
                    span Ver vídeo
                    i.fas.fa-file-video       
    
    .row.justify-content-center.mb-3 
      h3.titulo-tercero 2.6.3	Costos indirectos de fabricación 

    p.mb-5(data-aos="fade-left") La distribución y asignación de los costos indirectos de fabricación aporta más complejidad al cálculo del costo de producción de lo que se podría pensar, lo anterior debido a que existen limitaciones significativas para determinar la porción de un costo indirecto a una unidad producida. Por ejemplo, si se debe reparar una máquina de ordeño, en cuánto se debe incrementar el costo de producción de cada litro de leche.

    .row.justify-content-center 
      .col-10
        .row.justify-content-center 
          .col-md-8
            p(style="color:#3B5620") Este tipo de situaciones implica que la asignación de los costos indirectos obedezca a la cantidad de unidades producidas en un periodo concreto. Existen diversos elementos de juicio, pero suelen converger en una apreciación, la asignación del costo estará supeditada a los niveles de producción de la planta.
            p Si se producen varios productos en diversas líneas de producción, por ejemplo, en una granja pecuaria donde se produce leche y al mismo tiempo se vende la carne del ganado, la situación puede resultar más complejo. Retomando el ejemplo anterior, el daño de una máquina de ordeño debe asignarse a la línea productiva de la leche, pero qué sucede entonces en casos como el salario del administrador, donde su trabajo es indistinto entre las dos líneas de producción.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/43.jpg', alt='Texto que describa la imagen')

    .row.justify-content-center 
      .col-10
        p(data-aos="fade-left") El criterio del encargado del cálculo de los costos deberá aplicar la distribución en base a su criterio, algunas de las opciones más utilizadas son las unidades producidas, o las horas de trabajo destinadas a cada tipo de producto. El siguiente ejemplo, ver tabla, ilustra una situación de este estilo:

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Tabla 8
      span #[em Costos indirectos de fabricación mensuales]

    .row.justify-content-center 
      .col-8
        .tabla-a.mb-5 
          table
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr
                th Costos indirectos
                th Valor
            tbody.text-center
              tr
                td Depreciación
                td 1.200.000
              tr
                td Servicios públicos
                td 250.000
              tr
                td Vigilancia
                td 1.500.000
              tr.text-bold
                td Total CIF
                td 2.950.000

    .row.justify-content-center 
      .col-10
        p(data-aos="fade-left") Las unidades producidas requirieron de diferente cantidad de tiempo de trabajo por los dos operarios que se presentaron en el caso de la mano de obra así, ver tabla:

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Tabla 9
      span #[em Hoja de producción con horas de trabajo]

    .row.justify-content-center 
      .col-8
        .tabla-a.mb-5 
          table
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr
                th 
                th Horas de trabajo
                th Unidades producidas
            tbody.text-center
              tr
                td Producto A
                td 250
                td 200
              tr
                td Producto B
                td 134
                td 100
              tr.text-bold
                td Total
                td 384
                td 300
              
    .row.justify-content-center 
      .col-10
        p(data-aos="fade-left") Para definir los costos indirectos de fabricación de cada línea, será necesario prorratear con base en las horas de trabajo destinadas a cada línea de producto, posteriormente, y en función de las unidades elaboradas, se podrá definir el costo indirecto de fabricación unitario para cada tipo de producto, ver tabla.

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Tabla 10
      span #[em Hoja de producción con horas de trabajo]

    .row.justify-content-center 
      .col-8
        .tabla-a.mb-5 
          table
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr
                th 
                th Costo indirecto asignado
                th Unidades producidas
                th Costo indirecto unitario
            tbody.text-center
              tr
                td Producto A
                td 1.920.573
                td 200
                td 9.603
              tr
                td Producto B
                td 1.029.427
                td 100
                td 10.294
              tr.text-bold
                td Total
                td 2.950.000
                td 300
                td

    .row.justify-content-center 
      .col-10
        p(data-aos="fade-left") Una vez son definidos los costos unitarios de materia prima, mano de obra y costos indirectos de fabricación solo resta consolidarlos en una orden de producción, para establecer el valor total que cuesta producirlos.

    separador
    .titulo-segundo.color-secundario
      h2#t_2_7 2.7 Órdenes de producción

    p(data-aos="fade-left") Las órdenes de producción, también conocidas como órdenes de pedido, suelen ser utilizadas en empresas en las que la línea de producción no opera de manera permanente. Bajo este sistema, la determinación del coste de un lote de producto terminado se estima de forma independiente a otros, por lo que pueden existir variaciones en el costo de venta unitario entre una y otra orden.
    p(data-aos="fade-left") Este sistema ofrece una gran utilidad en unidades productivas que trabajan por encargo, puesto que las mediciones varían en función de la situación actual. El siguiente formato propone un esquema para utilizar bajo esta metodología; su diligenciamiento suele ser precedido por una solicitud comercial, es decir, el área de ventas indica la unidad de productos vendidos, y de cara a esto, el departamento de producción determina el costo unitario de cara a las exigencias presentadas, ver tabla

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Tabla 11
      span #[em Ejemplo de orden de producción]
    
    .row.justify-content-center.mt-5 
      .col-md-8
        figure
          img(src='@/assets/curso/temas/tema2/44.svg', alt='En la tabla se observa el formato para orden de producción, que incluye materiales, mano de obra directa, costos indirectos, en cantidad y costo.')
          figcaption Nota. Guarnizo Cuellar y Cárdenas (2015).

    h3.titulo-tercero.mt-5 2.7.1	Características

    .row
      p(data-aos="fade-left") Las ordenes de producción preceden el inicio del ciclo productivo, por lo que su emisión resulta un requisito previo. En ellas se consigna información relevante como las unidades a producir, su identificación y el número consecutivo de la orden con el fin de establecer prioridades. Las siguientes son algunas de las características más importantes de estas:

    .row.justify-content-center
      .col-md-10
        .row.justify-content-center.align-items-center 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/45.jpg', alt='Texto que describa la imagen')
          .col-md-8 
            .cajon.p-4.mb-2(style="background-color:#DBF9BD")(data-aos="flip-up") 
              p.text-small Se espera estimar un costo de producción distinto para cada pedido, por lo que es común ver la aplicación de este tipo de metodologías en unidades productivas que no mantienen una línea de producción estandarizada o permanente.
            .cajon.p-4.mb-2(style="background-color:#DBF9BD")(data-aos="flip-up") 
              p.text-small Se hace necesaria una planificación previo inicio de la producción, puesto que el alistamiento del material y el diligenciamiento de la orden de producción varía de acuerdo con las unidades que se esperan producir
            .cajon.p-4.mb-2(style="background-color:#DBF9BD")(data-aos="flip-up") 
              p.text-small La producción requiere de un pedido previo, lo que implica, que si no se efectúan ventas, los niveles de producción se reducirán al mínimo. El trabajo por encargo suele optimizar en costos de bodegaje o almacenamiento, pero los costos se pueden ver castigados por la capacidad ociosa de la planta.

    h3.titulo-tercero.mt-5 2.7.2.	Diligenciamiento
    p(data-aos="fade-left") Al diligenciar la orden de producción, se espera que los insumos estimados sean los suficientes para dar cumplimiento con la demanda del cliente. Gracias a esto, se minimizan los costos de almacenaje, caducidad u obsolescencia. Una vez definidos los insumos, se les asigna un valor para calcular el costo total de la orden de producción, y de forma derivada, obtener el costo unitario.
    p(data-aos="fade-left") Para ilustrar el diligenciamiento de una orden de producción, se presenta la siguiente situación: se solicita por medio de la orden de producción 53, 4.000 litros de leche en una granja pecuaria para cumplir con los pedidos semanales producto de las ventas efectuadas por el área comercial. Para efectos prácticos, se cuenta con un solo operario y las ordenes son de periodicidad semanal. La siguiente es la discriminación de los costos:

    .row.justify-content-center 
      .col-10
        .row.justify-content-center 
          h5.mb-3 • Materia prima
          .tarjeta.p-4(style="background-color:#FFFAD0")(data-aos="flip-up") 
            .row.justify-content-center 
              .col-md-2
                figure
                  img(src='@/assets/curso/temas/tema2/46.svg', alt='Texto que describa la imagen')
              .col-md-8
                p(data-aos="fade-left") Se estima que las vacas consumen 3 kilogramos de concentrado diario y producen 10 litros de leche en ese mismo periodo de tiempo. La compra se efectúa de forma mensual a un proveedor que la ofrece a un valor de $1.500 por kilogramo, incluida la entrega en la granja. Si cada vaca puede producir 70 litros semanales, se requerirá de la producción de 58 animales para cubrir este pedido, y por lo tanto, de 1.218 kg de concentrado.

        p.mb-3.mt-3(data-aos="fade-left") Además del pastoreo y el concentrado, las vacas requieren de una suplementación en sales minerales con alto contenido nutricional. Así, la unidad productiva suministra 1 kilogramo de sales minerales semanales a cada vaca productora. El proveedor ofrece este producto a un valor de $ 2.000 por cada kilogramo.

        .row.justify-content-center 
          h5.mb-3 • Mano de obra
          p(data-aos="fade-left") La granja cuenta con un solo operario cuyo salario básico es de $ 1.000.000, adicionalmente cuenta con las prestaciones de ley equivalentes a un 30 % del ingreso básico, también se debe cancelar la seguridad social a las entidades correspondientes por un valor equivalente al 20 % del salario. Dado que la orden de producción se lleva a cabo en una semana, el costo del empleado debe tomarse de manera proporcional (una cuarta parte del salario).

        .row.justify-content-center 
          h5.mb-3 • Costos indirectos
          p(data-aos="fade-left") Los costos indirectos mensuales de la granja son los siguientes: por concepto de aseo y desinfección de la granja: $ 1.500.000, el pago de servicios públicos (agua y luz) es en promedio de $ 400.000 y por último, el costo de la medicación y tratamiento veterinario asciende a $ 800.000. Al igual que con la mano de obra, se debe practicar la proporción para una sola semana de producción, ver tabla.

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Tabla 12
      span #[em Ejemplo de orden de producción]

    .row.justify-content-center 
      .col-8
        figure
          img(src='@/assets/curso/temas/tema2/47.svg', alt='En la tabla se observa una orden de producción incluyendo materiales, mano de obra directa, costos indirectos.')

    p.mb-5.mt-5(data-aos="fade-left") Del formato anterior se desprende que lo que se busca con la orden de producción es determinar las cantidades y el costo de los insumos necesarios para producir lo solicitado. Con esta información, se puede estimar un costo unitario y a partir de ello, establecer un margen de rentabilidad por cada litro de leche vendida.

    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          .h5 Cajón texto color
          p El costo unitario es el resultado del costo total de la orden de producción dividido en el número de unidades producidas, con los datos aquí presentados es posible determinar el valor de la utilidad bruta de la granja, puesto que si se supone un precio de venta de $ 1.000 por litro de leche, de forma rápida puede identificarse el beneficio unitario (1.000 – 748= $ 252) o global (4.000.000 – 2.993.000 = $ 1.007.000).
          
              
              
            
                


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
