<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cliente
    
    p.mb-3.mb-lg-5 Observe en el siguiente video cómo se define un cliente.

    figure
      .video.mb-4.mb-lg-5
        iframe(width="560" height="315" src="https://www.youtube.com/embed/O5WBU66GT5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-3.mb-lg-5 De acuerdo con lo anterior, se podrían resumir las expectativas mínimas que tienen los clientes con una empresa en la siguiente figura:


    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.bg-purple-card.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img120.mx-auto(src='@/assets/curso/tema2/t2-1.svg' alt='AvatarTop')
        p.text-center Contar con un proveedor al cual le pueda adquirir bienes y servicios de calidad que les permitan satisfacer sus necesidades.
      .tarjeta.bg-purple-card.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img120.mx-auto(src='@/assets/curso/tema2/t2-2.svg' alt='AvatarTop')
        p.text-center Gestionar sus requerimientos con la empresa de manera ágil y efectiva.
      .tarjeta.bg-purple-card.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img120.mx-auto(src='@/assets/curso/tema2/t2-3.svg' alt='AvatarTop')
        p.text-center Tener acompañamiento por parte de la empresa para optimizar la usabilidad en sus productos.
      .tarjeta.bg-purple-card.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img120.mx-auto(src='@/assets/curso/tema2/t2-4.svg' alt='AvatarTop')
        p.text-center Validar que la empresa cumple con las promesas que realiza.
      .tarjeta.bg-purple-card.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img120.mx-auto(src='@/assets/curso/tema2/t2-5.svg' alt='AvatarTop')
        p.text-center Encontrar solución a sus solicitudes cuando se requiera.

    p.mb-4.mb-lg-5 De acuerdo con lo anterior, se podrían resumir las expectativas mínimas que tienen los clientes con una empresa en la siguiente figura:

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario-s2.p-3.p-sm-4.p-md-5.z-2
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.d-block.mb-4 En el contexto de la atención al cliente la información es vital, dado que es lo que motiva la interacción y el interés entre:
            p.d-block.mb-4 #[strong Emisor] - quien emite el mensaje comunicacional, generalmente, es el Agente de Servicio.
            p #[strong Receptor] (quien recibe la información, usualmente el cliente).
    
    p.mb-6 El concepto cliente también está estrechamente relacionado con otros conceptos, que incluso pueden confundirse entre sí. A continuación identifican tales conceptos:

    div.slider-wrapper.z-2.mb-6
      .bg-fullwidth
      .tarjeta.tarjeta--blanca.position-relative.p-4.pt-5.z-2.my-5
        SlyderA(tipo="b")
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Cliente
              p Es aquel agente que establece la relación comercial con la empresa, adquiere los productos y paga por ellos.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/2.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Consumidor
              p Es aquel agente que utiliza los productos tangibles de una empresa.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/3.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Usuario
              p Es el agente que utiliza los productos intangibles de la empresa. Es decir, a aquellos productos/servicios que no tiene percepción física material.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/4.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Prosumidor
              p Es aquella persona o empresa que siendo el productor del bien o servicio también hace uso de él, es decir, produce y consume. Pueden existir en todos los niveles de empresa y de cualquier servicio.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/5.png', alt='Imagen de acompañamiento')

    p.mb-3.mb-lg-5 Seguramente algunos ejemplos nos ayudarán a comprender y diferenciar mejor estos conceptos, revíselos a continuación.

    figure
      .video.mb-4.mb-lg-5
        iframe(width="560" height="315" src="https://www.youtube.com/embed/juLfCAPnHAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-5
      .col-12.col-lg-3(data-aos="fade-right")
        figure
          img.mb-3.mb-lg-0(src='@/assets/curso/tema2/t2-11.png', alt='Texto que describa la imagen')
      .col-12.col-lg-9(data-aos="fade-left")
        p Hay un interrogante que es frecuente cuando se están analizando a los clientes, el cual es: #[strong ¿las necesidades de los clientes ya están creadas o se deben crear?], la respuesta es simple: las necesidades ya existen; por esto, las empresas crean o comercializan bienes o servicios, para satisfacer las necesidades de los clientes de la mejor posible.
        p.mb-0 Para dar mayor estructura a la premisa anterior, hacia 1943 Abraham Maslow, en su libro: Teoría de la Motivación Humana, formuló uno de los aportes más relevantes para la historia asociado al comportamiento humano, la #[strong pirámide de Maslow]. En ella se establece que todas las personas tienen diferentes niveles de necesidades y en la medida en que las más básicas se van cubriendo el ser humano propenderá por ir avanzando en la pirámide y alcanzar las siguientes. Para mayor entendimiento, se detalla a continuación la clasificación de las necesidades que se identifican en la pirámide de Maslow.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Pirámide de Maslow.
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/t2-22-mob.svg", alt="piramide de maslow")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/t2-22.svg", alt="piramide de maslow")
        figcaption <strong>Nota.</strong> SENA, 2026
      
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Clasificación
    
    p.mb-5 Existen numerosas clasificaciones de clientes:

    .row.align-items-stretch.mb-xl-5
      .col-md-6.col-lg-4.col-xl-3
        .tarjeta-container.mb-5.mb-md-4.mb-xl-0.custom-mh
          .position-relative.bgr_6.p-2.rounded-4.tarjeta-label.custom-mh.ms-4.d-flex.align-items-center
            img.tarjeta-label__icon.position-absolute.img90(src='@/assets/curso/tema2/t2-18.svg' alt='AvatarTop')
            p.ms-5.mb-0 Según su relación con la empresa.
      .col-md-6.col-lg-4.col-xl-3
        .tarjeta-container.mb-5.mb-md-4.mb-xl-0.custom-mh
          .position-relative.bgr_6.p-2.rounded-4.tarjeta-label.custom-mh.ms-4.d-flex.align-items-center
            img.tarjeta-label__icon.position-absolute.img90(src='@/assets/curso/tema2/t2-19.svg' alt='AvatarTop')
            p.ms-5.mb-0 Según su frecuencia de compra.
      .col-md-6.col-lg-4.col-xl-3
        .tarjeta-container.mb-5.mb-md-4.mb-xl-0.custom-mh
          .position-relative.bgr_6.p-2.rounded-4.tarjeta-label.custom-mh.ms-4.d-flex.align-items-center
            img.tarjeta-label__icon.position-absolute.img90(src='@/assets/curso/tema2/t2-20.svg' alt='AvatarTop')
            p.ms-5.mb-0 A partir del volumen de compra.
      .col-md-6.col-lg-4.col-xl-3
        .tarjeta-container.mb-5.mb-md-4.mb-xl-0.custom-mh
          .position-relative.bgr_6.p-2.rounded-4.tarjeta-label.custom-mh.ms-4.d-flex.align-items-center
            img.tarjeta-label__icon.position-absolute.img90(src='@/assets/curso/tema2/t2-21.svg' alt='AvatarTop')
            p.ms-5.mb-0 Según el nivel de involucramiento con la organización.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-lg-10.col-xl-8
        .cajon.color-terciario.p-4
          p.mb-0 #[strong Nota:] pueden existir más tipos de clasificación que tengan en cuenta otras características.
    
    p.mb-5 Para un #[strong Agente de Atención al Cliente] es importante identificar en qué clasificación está un cliente, dado que cada empresa tiene establecida su clasificación y tipología, según su visión corporativa. Por lo tanto, no hay un estándar sobre el criterio que prevalece para realizar la clasificación de un cliente. En el siguiente esquema se muestra la clasificación que se abordará en este componente.


    h4(data-aos='zoom-in-right').mb-4.mb-lg-5
      span.etiqueta-title Clientes según su alcance

    p.mb-4.mb-lg-5 El alcance se  define como la cercanía y nivel de relación que tiene la empresa con ellos. En este sentido, según su alcance, pueden ser: Internos o Externos.

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-md-8.col-lg-6.mb-4.mb-lg-0
        .rounded-4.overflow-hidden.h-100
          img(data-aos="fade-up", src="@/assets/curso/tema2/7.png", alt="piramide de maslow")
          .bgr_6.p-4.custom-mh
            h5 Clientes Internos
            p.mb-0 Son aquellos que tienen una relación directa con la empresa, por lo que la empresa puede influenciar de cierta forma su comportamiento, adicional a esto tienen como característica fundamental que tienen algún tipo de impacto en la producción del bien o la prestación del servicio; por definición los clientes internos son: los propietarios de la compañía, colaboradores, directivos, accionistas.
      .col-md-8.col-lg-6
        .rounded-4.overflow-hidden.h-100
          img(data-aos="fade-up", src="@/assets/curso/tema2/8.png", alt="piramide de maslow")
          .bgr_6.p-4
            h5 Clientes externos
            p.mb-0 Son los que están por fuera de la empresa y se ven influenciados por ella, son relevantes porque son los que generan principalmente los ingresos a la empresa. El cliente externo, por excelencia, es aquel que le compra los productos a la empresa, sin embargo, en sentido técnico clientes externos también son: los proveedores, los distribuidores, el Estado, los entes de vigilancia, reguladores y de control y en general la sociedad en general, quienes están siempre pendientes del impacto de las acciones de las empresas en el entorno.


    .fullwidth-bg.fullwidth-bg--3
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p #[strong Con este ejemplo se clarifican mejor estos conceptos:]
        p.mb-4 la empresa “El Buen Vivir S.A.S.” es una hostería dedicada a prestar servicios de alojamiento y es propiedad de la Familia Jaramillo Rojas, actualmente cuenta con 10 empleados y el fin de semana pasada recibió 30 huéspedes.
        p Para esta situación se puede afirmar que:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            | La Familia Jaramillo Rojas y sus 10 colaboradores son clientes internos para la empresa.
          li 
            .lista-ol--cuadro__vineta
              span b
            | Los 30 huéspedes que recibieron son los clientes externos que atendieron durante el fin de semana.

      .col-10.col-md-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/10.png", alt="piramide de maslow")

    h4(data-aos='zoom-in-right').mb-4.mb-lg-5
      span.etiqueta-title Clientes según su relación con la empresa

    p.mb-4.mb-lg-5 Las relaciones en sentidos comerciales se entienden como las diferentes interacciones que se generan. Desde esta perspectiva, los clientes se pueden clasificar en actuales y potenciales.


    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-md-8.col-lg-6.mb-4.mb-lg-0
        .rounded-4.overflow-hidden.h-100.bgr-2
          .bgr_2.p-4.custom-mh
            h5 Clientes actuales
            p.mb-4 Son aquellos que existen para la empresa, que han comprado alguna vez he idealmente que están registrados en algún sistema de información.
            h5 Clientes potenciales
            p Son aquellos que cumplen estas tres características:
            ol.lista-ol--cuadro
              li.mb-4 
                .lista-ol--cuadro__vineta.lista-ol--cuadro__vineta--secundario
                  span 1
                | Requieren del bien/ servicio que produce/ vende la empresa.
              li.mb-4 
                .lista-ol--cuadro__vineta.lista-ol--cuadro__vineta--secundario
                  span 2
                | Tienen poder adquisitivo (dinero o medios de pago) para comprarlo.
              li 
                .lista-ol--cuadro__vineta.lista-ol--cuadro__vineta--secundario
                  span 3
                | Tienen poder de decisión sobre la compra, y aun cumpliendo estos elementos no han realizado compras a la empresa.

      .col-md-8.col-lg-6
        .rounded-4.overflow-hidden.h-100
          .bgr_7.p-4.custom-mh
            p #[strong Como ejemplo, se plantea esta situación:]
            p.mb-4 La empresa #[strong “Textiles La Doña Ltda.”] fundada en enero de 2021 tiene registrados en su sistema de información 200 clientes que han comprado alguna prenda en la empresa desde su creación, al realizar una exploración con los vendedores ellos informan que tienen 20 personas interesados en realizar compras, pero que, sin embargo, 12 de ellos no tienen trabajo, ni forma de adquirir los productos de la empresa.
            p #[strong En este caso, se podría inferir que:] la empresa Textiles La Doña Ltda. tiene 200 clientes actuales y 8 clientes potenciales (son 8 porque recordemos que para ser potencial no solo se debe necesitar el producto, sino también tener recursos para adquirirlo).

    p.mb-5 Cabe mencionar, que varios estudios han concluido que para una empresa es más #[strong costo - eficiente], mantener sus clientes actuales que traer nuevos, debido al gran esfuerzo en términos de costo y tiempo que implica la adquisición de nuevos. Por ello, los clientes actuales también tienen su propia clasificación, con el fin de focalizar los esfuerzos de manera clara. Dicha clasificación se evidencia en el siguiente esquema.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-auto
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Clasificaciones de los clientes actuales
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/9-mob.svg", alt="La figura muestra los cuatro tipos de kilates de oro que se presentan en joyería.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/9.svg", alt="La figura muestra los cuatro tipos de kilates de oro que se presentan en joyería.")
        figcaption <strong>Nota.</strong> SENA, 2026

    p.mb-4.mb-lg-5 Veamos entonces, en la siguiente infografía, los detalles de esta nueva clasificación del cliente ya adquirido, es decir, que ha hecho una compra alguna vez en nuestra empresa.
    
    h4(data-aos='zoom-in-right').mb-4.mb-lg-5
      span.etiqueta-title Clientes según su vigencia

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/11.png", alt="imagen de acompoñamiento")
      .col-lg-9
        p La vigencia implica identificar los clientes que generan ingresos (entradas de dinero a la compañía), en este sentido se identifican dos tipos de clientes, loa activos y los inactivos.
        .p-4.rounded.bgr_2.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-10
              h5 Clientes activos
              p.mb-4 Son aquellos que actualmente realizan compras a la empresa o las han realizado hace poco. 
              h5 Clientes inactivos
              p.mb-0 Son aquellos que realizaron compras hace bastante tiempo y por tanto, ya no tienen relación comercial con la empresa, por lo que se infiere que están adquiriendo los productos con la competencia o que dejaron de utilizar el bien/ servicio.
            .d-none.d-lg-block.col-lg-2
              figure
                img(data-aos="fade-down-right", src="@/assets/curso/tema2/12.png", alt="imagen de acompoñamiento")
        
        p.mb-4 #[strong Ejemplo]
        p.mb-4 #[strong Para mostrar estos conceptos de forma aplicada, se tiene la siguiente situación:]
        La empresa #[strong “Seguros Locales S.A.”] dedicada a la venta de seguros todo riesgo para vehículos tiene registrados 8000 clientes en su base de datos, de ellos 6000 realizaron su compra al menos en los trece últimos meses.
    
    .fullwidth-bg.fullwidth-bg--4
    .row.justify-content-center.mb-4.mb-lg-5.z-2
      .col-xl-10
        .cajon.color-terciario.p-4
          p.mb-0 #[strong Dado que los seguros se renuevan cada doce meses, consolidan el total de clientes inactivos en 2000 clientes y 6000 los clasifican como clientes activos.] 

    h4(data-aos='zoom-in-right').mb-4.mb-lg-5.z-2
      span.etiqueta-title Clientes según el volumen de compra

    p.mb-4.mb-lg-5.z-2 El volumen de compra representa la cantidad, así entonces la empresa calcula el promedio de compra de todos sus clientes (es decir, suma todo lo vendido y lo divide entre el número de clientes que realizaron compras).

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5.z-2
      .col-md-8.col-lg-6.mb-4.mb-lg-0
        .rounded-4.overflow-hidden.h-100
          .bgr.p-4.custom-mh
            h5 Alto volumen
            p.mb-4 Son aquellos que están por encima del promedio, los clientes con compra promedio son los que se encuentren en los estándares medios de adquisición.
            h5 Volumen bajo
            p Son los que están por debajo del promedio. Usualmente en las compañías, los clientes con alto volumen de compra son pocos, y la mayoría de los clientes se ubican en el promedio o por debajo.

      .col-md-8.col-lg-6
        .rounded-4.overflow-hidden.h-100
          .bgr_4.p-4.custom-mh
            p #[strong Ejemplo]
            p El Restaurante #[strong “El Buen Sabor S.A.S.”] tiene identificado que en promedio la factura de un cliente cuando va a cenar es de COP $70.000. El comensal de la mesa uno solicita dos entradas y dos copas de vino por lo que el valor de su factura es de COP $42.000, por su parte el comensal de la mesa dos solicita una entrada, dos platos fuertes y dos sodas lo que se le genera una factura por valor de COP $98.000.

    .row.justify-content-center.mb-4.mb-lg-5.z-2
      .col-xl-10
        .cajon.color-primario.p-4
          p.mb-0 #[strong En este escenario, al cliente de la mesa será catalogado como un cliente con bajo volumen de compra y al cliente de la mesa dos lo catalogarán como un cliente con alto volumen de compra.]

    h4(data-aos='zoom-in-right').mb-4.mb-lg-5.z-2
      span.etiqueta-title Clientes según su frecuencia de compra

    p.mb-4.mb-lg-5 La frecuencia hace relación al cada cuanto, en este orden de ideas, se mide en número de veces en un periodo de tiempo.

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-md-8.col-lg-6.mb-4.mb-lg-0
        .rounded-4.overflow-hidden.h-100
          img(data-aos="fade-up", src="@/assets/curso/tema2/13.png", alt="piramide de maslow")
          .bgr_8.p-4.custom-mh
            h5 Compra frecuente 
            p.mb-0 Se consideran en esta categoría a los clientes que compran más seguido que el promedio de los demás clientes. Se refiere a aquellos que compran repetidamente o con mayor frecuencia.
      .col-md-8.col-lg-6
        .rounded-4.overflow-hidden.h-100
          img(data-aos="fade-up", src="@/assets/curso/tema2/14.png", alt="piramide de maslow")
          .bgr_8.p-4.custom-mh
            h5 Compra ocasional 
            p.mb-0 Aquí se clasifican a los que compran esporádicamente, ya sea porque no son fieles a una marca o porque no adquieren el producto con regularidad.

    .fullwidth-bg.fullwidth-bg--4
    .row.justify-content-center.align-items-center.z-2
      .col-lg-8
        p.mb-4 #[strong Ejemplo]
        p.mb-4 #[strong Se tiene la siguiente situación:] la empresa Tenis El Comodín E.U. identifica que sus clientes en promedio compran un par de tenis cada seis meses, por lo que establecen como clientes con compra frecuente aquellos que compran tenis antes de cumplir ese período de tiempo.
        p #[strong Clientes habitual:] los que compran tenis cada seis meses.
        p.mb-4.mb-lg-0 #[strong Clientes ocasional:] los que compran un par de tenis después de dicho período.
      .col-10.col-md-6.col-lg-2
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/15.png", alt="piramide de maslow")

    Separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Tipología y manejo del cliente

    p.mb-6 En la interacción con los clientes se debe detectar con qué tipo de clientes se está tratando con el fin de tratar de manejar una comunicación asertiva y esto se debe a que cada cliente según sus necesidades, expectativas e incluso personalidad gestionará las relaciones con la empresa. Es por ello, que desde la Psicología y las teorías de comportamiento del consumidor se han seleccionado algunas tipologías de clientes (Maldonado, 2014), aquí la reseña de algunas de ellas:
    
    div.slider-wrapper.z-2.mb-6
      .bg-fullwidth
      .tarjeta.tarjeta--blanca.position-relative.p-4.pt-5.z-2.my-5
        SlyderA(tipo="b")
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Cliente informado
              p El cliente informado es aquel que se caracteriza por tener mucho conocimiento sobre el producto que está requiriendo, por tanto, está pendiente de cada detalle y por tanto, indaga mucho, sus preguntas se caracterizan por ser analíticas y profundas.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/16.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Cliente sabelotodo
              p El cliente sabelotodo considera que se las sabe todas, hace preguntas que él mismo responde, es orgulloso y quiere imponerse, se caracteriza por actuar con instintos de superioridad, exige mucha atención, es exigente y le encuentra “peros” a todo.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/17.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Cliente polémico
              p El cliente polémico, suele incentivar la discusión e incluso la intervención de otros, propenderá por tener la razón siempre, es desconfiado, le gusta llamar la atención, por tanto, le gusta cuando siente que está siendo observado. Necesita una atención preferencial.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/18.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Cliente minucioso
              p El cliente minucioso, tiene claro el cómo, cuándo y dónde de lo que busca. Es específico, concreto y conciso, es de pocas palabras, está atento a las respuestas por lo que exige información exacta y concreta.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/19.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Cliente desconfiado
              p El cliente desconfiado, no cree fácilmente ni en las personas, ni en las circunstancias, no cree que algo puede ser consecuencia del destino, por tanto, duda de todo y de todos. Es susceptible, trata de dominar a su interlocutor para poner a flaquear a la otra persona. Suele rechazar los argumentos y validará las cosas con frecuencia buscando puntos débiles
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/20.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Cliente hablador
              p El cliente hablador, suele ser amistoso, sonriente, suele dar explicaciones no solicitadas, muestra gran seguridad, necesita atención y sentir que se le está prestando atención. En ocasiones, puede llegar a ser prepotente y llegar a hablar de temas que no conoce a profundidad sólo por el hecho de resaltar frente a otras personas.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/21.png', alt='Imagen de acompañamiento')

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-3.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/22.png", alt="imagen de acompañamiento")
      .col-xl-9
        TabsA.color-primario
          .tarjeta.bgr_7.p-4.p-lg-5(titulo="Cliente indeciso")
            .row.justify-content-center.align-items-center
              .col-6.col-sm-4
                figure
                  img.mb-4.mb-xl-0(data-aos="fade-down-right", src="@/assets/curso/tema2/t2-52.svg", alt="piramide de maslow")
              .col-xl-6
                p.mb-0 El cliente indeciso, suele dar excusas o evasivas para no tomar una decisión. Puede ser inseguro o tímido, le cuesta tomar decisiones por lo que es común que solicite aplazamientos antes de cerrar un tema en revisión. En ocasiones, acude a otros, para solicitar opiniones, tener referentes o puntos de vista.
          .tarjeta.bgr_7.p-4.p-lg-5(titulo="Cliente grosero")
            .row.justify-content-center.align-items-center
              .col-6.col-sm-4
                figure
                  img.mb-4.mb-xl-0(data-aos="fade-down-right", src="@/assets/curso/tema2/t2-53.svg", alt="piramide de maslow")
              .col-xl-6
                p.mb-0 El cliente grosero, suele sentir que tiene siempre la razón por lo que es bastante dominante, tiene mal carácter y mal humor, discute frecuentemente, tiende a ser ofensivo y/o agresivo. Puede llegar a ser irrespetuoso y desobligante. Suele defender lo que considera justo privilegiando su postura y olvida los intereses de los demás
          .tarjeta.bgr_7.p-4.p-lg-5(titulo="Cliente Impulsivo")
            .row.justify-content-center.align-items-center
              .col-6.col-sm-4
                figure
                  img.mb-4.mb-xl-0(data-aos="fade-down-right", src="@/assets/curso/tema2/t2-54.svg", alt="piramide de maslow")
              .col-xl-6
                p.mb-0 El cliente impulsivo se deja llevar por el momento, no plantea sus acciones, cambia continuamente de parecer, es superficial, y para él la presentación de los productos es un factor decisivo de compra. Puede ser impaciente, carece de concentración y con frecuencia se arrepentirá en el último momento de lo que parecía ser una decisión.
          .tarjeta.bgr_7.p-4.p-lg-5(titulo="Cliente negociador")
            .row.justify-content-center.align-items-center
              .col-6.col-sm-4
                figure
                  img.mb-4.mb-xl-0(data-aos="fade-down-right", src="@/assets/curso/tema2/t2-55.svg", alt="piramide de maslow")
              .col-xl-6
                p.mb-0 El cliente negociador es bastante común en culturas como las Latinoamericanas, es una persona que busca y aprovecha las oportunidades. Siempre buscará obtener el mayor beneficio posible, aunque suele entender que tiene a otra persona al frente que tiene sus propios intereses. Un buen negociador, tiene por fin buscar acuerdos.
          .tarjeta.bgr_7.p-4.p-lg-5(titulo="Cliente silencioso")
            .row.justify-content-center.align-items-center
              .col-6.col-sm-4
                figure
                  img.mb-4.mb-xl-0(data-aos="fade-down-right", src="@/assets/curso/tema2/t2-56.svg", alt="piramide de maslow")
              .col-xl-6
                p.mb-0 El cliente silencioso es una persona tímida y generalmente analítica. Escucha con detenimiento, aunque no pregunta mucho, es difícil interpretar por parte del interlocutor porque no se sabe realmente qué está pensando y cuál es su postura frente a lo que se le está explicando.
    
    p.mb-3 En cuanto al manejo de los clientes, hay que entender que son seres humanos y su personalidad, emociones, preceptos e ideologías también se verán reflejadas en sus interacciones comerciales. En este orden de ideas, lo primero que un agente de atención al cliente debe realizar es identificar con qué tipo de cliente está tratando; después de identificarlo se deben aplicar las pautas para el manejo de clientes.
    p.mb-5 En el siguiente esquema, se detallan algunas recomendaciones para cada una de las tipologías de cliente que se mencionó antes.

    h4(data-aos='zoom-in-right').mb-4.mb-lg-5.z-2
      span.etiqueta-title Manejo del cliente, según su tipo

    TabsB.color-secundario.mb-5
      .py-4.py-md-5(titulo="Cliente informado")
        .row.justify-content-around.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p.mb-4 El éxito con un cliente informado se da cuando se demuestra conocimiento técnico (en las características, beneficios y ventajas) del bien/ servicio sobre el cual se está teniendo la interacción), así como conocer en detalle las condiciones comerciales que aplican para la compra.
            p Se debe mantener un diálogo basado en los argumentos y con la mayor cantidad de datos posible para no tener imprecisiones o cometer errores con el cliente
          .col-6.col-md-4.col-lg-2
            figure
              img.img120(src='@/assets/curso/tema2/23.svg', alt='imagen de acompañamiento')
      .py-4.py-md-5(titulo="Cliente polémico")
        .row.justify-content-around.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p.mb-4 Con el cliente polémico la clave está en la escucha con atención, mostrando una actitud de interés y en la medida de lo posible tratar de no interrumpirlo, para que sienta que su conversación es importante, tratar de no discutir, por tanto, tener intervenciones cortas y sustanciosas, aclarando las inquietudes que presente.
            p Mostrar una actitud amable, calmada e interesada.
          .col-6.col-md-4.col-lg-2
            figure
              img.img120(src='@/assets/curso/tema2/24.svg', alt='imagen de acompañamiento')
      .py-4.py-md-5(titulo="Cliente minucioso")
        .row.justify-content-around.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p.mb-4 El cliente minucioso es meticuloso, por ende, el tip consiste en la atención a los detalles, se debe mostrar seriedad, seguridad e interés.
            p.mb-0 Dar un trato amable y respetuoso.
            p Suministrar respuestas claras y con foco en el objetivo, es decir, dar respuestas precisas.
          .col-6.col-md-4.col-lg-2
            figure
              img.img120(src='@/assets/curso/tema2/25.svg', alt='imagen de acompañamiento')
      .py-4.py-md-5(titulo="Cliente desconfiado")
        .row.justify-content-around.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Lo opuesto a la desconfianza es la confianza, por tanto, eso es lo primero que se debe transmitir, por tanto, el Agente de Servicio, debe indicar nombres- apellidos, cargo y empresa a la que se está representando.
            p.mb-4 Se debe siempre mostrar interés por el cliente, hacerle preguntas para que se sienta tenido en cuenta, no afirmar nada que no se puede evidenciar. 
            p.mb-0 No mostrarse muy insistente, ni discutir.
            p Darle la razón al cliente siempre que la tenga, sin dejarse dominar, ya que esto también podrá generar desconfianza.
          .col-6.col-md-4.col-lg-2
            figure
              img.img120(src='@/assets/curso/tema2/26.svg', alt='imagen de acompañamiento')
      .py-4.py-md-5(titulo="Cliente hablador")
        .row.justify-content-around.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Lo primero es la cortesía, sin ser sobreactuado, es decir, ser amables, educados, pero manteniendo la distancia.
            p.mb-0 Lo segundo, es tratar de mantener el control de una forma respetuosa, dado que en caso contrario el cliente hablador no permitirá que se desarrolle la interacción de forma adecuada.
            p Tercero, se debe siempre encaminar la conversación sobre el objetivo de la interacción, por tanto, se deben realizar preguntas enfocadas en la obtención de las respuestas necesarias, manteniendo el liderazgo de la conversación.
          .col-6.col-md-4.col-lg-2
            figure
              img.img120(src='@/assets/curso/tema2/27.svg', alt='imagen de acompañamiento')

    .bg_grad-07.mb-5
      .row.justify-center.p-3.p-lg-0
        .col-12.col-lg-4.col-xl-3.mb-3.mb-lg-0
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/tema2/t2-67.svg' alt='AvatarTop')
        .col-12.col-lg-7.col-xl-6.align-items-center(data-aos="fade-left")
          div
            h3 Importante
            p Tenga presente que, si bien cada cliente tiene un rasgo característico asociado a su tipología, en ciertas circunstancias pueden sacar a relucir varios perfiles, por lo que es vital el conocimiento y el empoderamiento que tenga el Agente de Servicio para desarrollar con éxito una interacción.

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
