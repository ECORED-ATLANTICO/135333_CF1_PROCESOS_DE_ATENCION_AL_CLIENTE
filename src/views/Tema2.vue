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
      .video
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
      .video
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

    .row.align-items-stretch
      .col-lg-3.h-100
        .position-relative.bgr_6.p-2.rounded-3.h-100.tarjeta-label
          img.tarjeta-label__icon.position-absolute.img90(src='@/assets/curso/tema2/t2-18.svg' alt='AvatarTop')
          p.ms-5.mb-0 Según su relación con la empresa.
      .col-lg-3.h-100
        .position-relative.bgr_6.p-2.rounded-3.h-100.tarjeta-label
          img.tarjeta-label__icon.position-absolute.img90(src='@/assets/curso/tema2/t2-19.svg' alt='AvatarTop')
          p.ms-5.mb-0 Según su frecuencia de compra.
      .col-lg-3.h-100
        .position-relative.bgr_6.p-2.rounded-3.h-100.tarjeta-label
          img.tarjeta-label__icon.position-absolute.img90(src='@/assets/curso/tema2/t2-20.svg' alt='AvatarTop')
          p.ms-5.mb-0 A partir del volumen de compra.
      .col-lg-3.h-100
        .position-relative.bgr_6.p-2.rounded-3.h-100.tarjeta-label
          img.tarjeta-label__icon.position-absolute.img90(src='@/assets/curso/tema2/t2-21.svg' alt='AvatarTop')
          p.ms-5.mb-0 Según el nivel de involucramiento con la organización.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-lg-10.col-xl-8
        .cajon.color-terciario.p-4
          p #[strong Nota:] pueden existir más tipos de clasificación que tengan en cuenta otras características.
    
    p.mb-5 Para un #[strong Agente de Atención al Cliente] es importante identificar en qué clasificación está un cliente, dado que cada empresa tiene establecida su clasificación y tipología, según su visión corporativa. Por lo tanto, no hay un estándar sobre el criterio que prevalece para realizar la clasificación de un cliente. En el siguiente esquema se muestra la clasificación que se abordará en este componente.

    .row.justify-content-center.mb-5.z-2
      .col-lg-10
        h4(data-aos='zoom-in-right')
          span.etiqueta-title Clientes según su alcance


    .row.mb-5
      .col-12.col-lg-6.mb-3
        SlyderA
          .row
            .col
              div.bgr_7.p-5
                img.mb-3.img70(src='@/assets/curso/tema2/t2-23.svg' alt='AvatarTop')
                h4 Clientes según su alcance
                p El alcance se  define como la cercanía y nivel de relación que tiene la empresa con ellos. En este sentido, según su alcance, pueden ser: internos o externos.
                div
                  figure
                    img(src='@/assets/curso/tema2/t2-25.png', alt='Texto que describa la imagen')
                div.bgr_8.p-4
                  h4 Clientes Internos
                  p.fuente14 Son aquellos que tienen una relación directa con la empresa, por lo que la empresa puede influenciar de cierta forma su comportamiento, adicional a esto tienen como característica fundamental que tienen algún tipo de impacto en la producción del bien o la prestación del servicio; por definición los clientes internos son: los propietarios de la compañía, colaboradores, directivos, accionistas.
          .row
            .col
              div.bgr_7.p-5
                img.mb-3.img70(src='@/assets/curso/tema2/t2-23.svg' alt='AvatarTop')
                h4 Clientes según su alcance
                p El alcance se  define como la cercanía y nivel de relación que tiene la empresa con ellos. En este sentido, según su alcance, pueden ser: internos o externos.
                div
                  figure
                    img(src='@/assets/curso/tema2/t2-26.png', alt='Texto que describa la imagen')
                div.bgr_9.p-4
                  h4 Clientes externos
                  p.fuente14 Son los que están por fuera de la empresa y se ven influenciados por ella, son relevantes porque son los que generan principalmente los ingresos a la empresa.
                  p.mb-0.fuente14 El cliente externo, por excelencia, es aquel que le compra los productos a la empresa, sin embargo, en sentido técnico clientes externos también son: los proveedores, los distribuidores, el Estado, los entes de vigilancia, reguladores y de control y en general la sociedad en general, quienes están siempre pendientes del impacto de las acciones de las empresas en el entorno.
          .row
            .col
              div.bgr_7.p-5
                img.mb-3.img70(src='@/assets/curso/tema2/t2-23.svg' alt='AvatarTop')
                h4 Clientes según su alcance
                p El alcance se  define como la cercanía y nivel de relación que tiene la empresa con ellos. En este sentido, según su alcance, pueden ser: internos o externos.
                div
                  figure
                    img(src='@/assets/curso/tema2/t2-27.png', alt='Texto que describa la imagen')
                div.bgr_10.p-4
                  h4 Ejemplo
                  p.fuente14 <b>Con este ejemplo se clarifican mejor estos conceptos:</b>
                  p.fuente14 La empresa <b>“El Buen Vivir S.A.S.”</b> es una hostería dedicada a prestar servicios de alojamiento y es propiedad de la Familia Jaramillo Rojas, actualmente cuenta con 10 empleados y el fin de semana pasada recibió 30 huéspedes. 
                  .bord
                    p.fuente14 Para esta situación se puede afirmar que:
                      ol.lista-ol--cuadro
                        li 
                          .lista-ol--cuadro__vineta
                            span a
                          p.fuente14 La Familia Jaramillo Rojas y sus 10 colaboradores son <strong>clientes internos</strong> para la empresa.
                        li.mb-0
                          .lista-ol--cuadro__vineta
                            span b
                          p.mb-0.fuente14.mb-0 Los 30 huéspedes que recibieron son los <strong>clientes externos</strong> que atendieron durante el fin de semana.

      .col-12.col-lg-6
        SlyderA
          .row
            .col
              div.bgr_7.p-5
                img.mb-3.img70(src='@/assets/curso/tema2/t2-24.svg' alt='AvatarTop')
                h4 Clientes según su relación con la empresa
                p Las relaciones en sentidos comerciales se entienden como las diferentes interacciones que se generan. Desde esta perspectiva, los clientes se pueden clasificar en actuales y potenciales.
                div
                  figure
                    img(src='@/assets/curso/tema2/t2-28.png', alt='Texto que describa la imagen')
                div.bgr_11.p-4
                  h4 Clientes actuales
                  p.fuente14 Son aquellos que existen para la empresa, que han comprado alguna vez he idealmente que están registrados en algún sistema de información.
          .row
            .col
              div.bgr_7.p-5
                img.mb-3.img70(src='@/assets/curso/tema2/t2-24.svg' alt='AvatarTop')
                h4 Clientes según su relación con la empresa
                p Las relaciones en sentidos comerciales se entienden como las diferentes interacciones que se generan. Desde esta perspectiva, los clientes se pueden clasificar en actuales y potenciales.
                div
                  figure
                    img(src='@/assets/curso/tema2/t2-29.png', alt='Texto que describa la imagen')
                div.bgr_12.p-4
                  h4 Clientes potenciales
                  p.fuente14 Son aquellos que cumplen estas tres características:
                    ol.lista-ol--cuadro
                      li 
                        .lista-ol--cuadro__vineta
                          span 1
                        | Requieren del bien/servicio que produce/vende la empresa.
                      li 
                        .lista-ol--cuadro__vineta
                          span 2
                        | Tienen poder adquisitivo (dinero o medios de pago) para comprarlo.
                      li 
                        .lista-ol--cuadro__vineta
                          span 3
                        | Tienen poder de decisión sobre la compra, y aun cumpliendo estos elementos no han realizado compras a la empresa.
          .row
            .col
              div.bgr_7.p-5
                img.mb-3.img70(src='@/assets/curso/tema2/t2-24.svg' alt='AvatarTop')
                h4 Clientes según su relación con la empresa
                p Las relaciones en sentidos comerciales se entienden como las diferentes interacciones que se generan. Desde esta perspectiva, los clientes se pueden clasificar en actuales y potenciales.
                div
                  figure
                    img(src='@/assets/curso/tema2/t2-30.png', alt='Texto que describa la imagen')
                div.bgr_13.p-4
                  h4 Ejemplo
                  p.fuente14 <b>Como ejemplo, se plantea esta situación:</b>
                  p.fuente14 La empresa <b>“Textiles La Doña Ltda.”</b> fundada en enero de 2021 tiene registrados en su sistema de información 200 clientes que han comprado alguna prenda en la empresa desde su creación, al realizar una exploración con los vendedores ellos informan que tienen 20 personas interesados en realizar compras, pero que, sin embargo, 12 de ellos no tienen trabajo, ni forma de adquirir los productos de la empresa.
                  .bord
                    p.mb-0.fuente14 <b>En este caso, se podría inferir que:</b> la empresa Textiles La Doña Ltda. tiene 200 clientes actuales y 8 clientes potenciales (son 8 porque recordemos que para ser potencial no solo se debe necesitar el producto, sino también tener recursos para adquirirlo).

    p.mb-5 Cabe mencionar, que varios estudios han concluido que para una empresa es más costo-eficiente, mantener sus clientes actuales que traer nuevos, debido al gran esfuerzo en términos de costo y tiempo que implica la adquisición de nuevos. Por ello, los clientes actuales también tienen su propia clasificación, con el fin de focalizar los esfuerzos de manera clara. Dicha clasificación se evidencia en el siguiente esquema.

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 1
      span <em>Clasificaciones de los clientes actuales</em> 

    .row.justify-center.mb-5
      .col-12.col-lg-10
        figure
          img(src='@/assets/curso/tema2/t2-31.svg', alt='Texto que describa la imagen')

    p.mb-5 Veamos entonces, en la siguiente infografía, los detalles de esta nueva clasificación del cliente ya adquirido, es decir, que ha hecho una compra alguna vez en nuestra empresa.
    
    .tarjeta.p-lg-4(data-aos="zoom-out")
      SlyderA(tipo="b").sld.btiz
        .row.p-3.p-lg-5.bg_grad-03.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema2/t2-44.svg', alt='Texto que describa la imagen')
              h4.bgr_14 Clientes según su vigencia
              p La vigencia implica identificar los clientes que generan ingresos (entradas de dinero a la compañía), en este sentido se identifican dos tipos de clientes, los activos y los inactivos.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-32.png', alt='Texto que describa la imagen')
        .row.p-5.bg_grad-03.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema2/t2-44.svg', alt='Texto que describa la imagen')
              h4 Clientes activos
              p Son aquellos que actualmente realizan compras a la empresa o las han realizado hace poco. 
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-33.png', alt='Texto que describa la imagen')
        .row.p-5.bg_grad-03.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema2/t2-44.svg', alt='Texto que describa la imagen')
              h4 Clientes inactivos
              p Son aquellos que realizaron compras hace bastante tiempo y por tanto, ya no tienen relación comercial con la empresa, por lo que se infiere que están adquiriendo los productos con la competencia o que dejaron de utilizar el bien/servicio. 
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-34.png', alt='Texto que describa la imagen')
        .row.p-5.bg_grad-03.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema2/t2-45.svg', alt='Texto que describa la imagen')
              h4 Ejemplo
              p <b>Para mostrar estos conceptos de forma aplicada, se tiene la siguiente situación:</b>
              p La empresa <b>“Seguros Locales S.A.”</b> dedicada a la venta de seguros todo riesgo para vehículos tiene registrados 8000 clientes en su base de datos, de ellos 6000 realizaron su compra al menos en los trece últimos meses.
              p.mb-0.bord.fuente14 <b>Dado que los seguros se renuevan cada doce meses, consolidan el total de clientes inactivos en 2000 clientes y 6000 los clasifican como clientes activos.</b>
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-35.png', alt='Texto que describa la imagen')
        .row.p-5.bg_grad-04.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema2/t2-44.svg', alt='Texto que describa la imagen')
              h4.bgr_14 Clientes según el volumen de compra
              p El volumen de compra representa la cantidad, así entonces la empresa calcula el promedio de compra de todos sus clientes (es decir, suma todo lo vendido y lo divide entre el número de clientes que realizaron compras).
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-36.png', alt='Texto que describa la imagen')
        .row.p-5.bg_grad-04.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema2/t2-44.svg', alt='Texto que describa la imagen')
              h4 Alto volumen
              p Son aquellos que están por encima del promedio, los clientes con <b>compra promedio</b> son los que se encuentren en los estándares medios de adquisición.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-37.png', alt='Texto que describa la imagen')
        .row.p-5.bg_grad-04.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema2/t2-44.svg', alt='Texto que describa la imagen')
              h4 Volumen bajo
              p Son los que están por debajo del promedio. Usualmente en las compañías, los clientes con alto volumen de compra son pocos, y la mayoría de los clientes se ubican en el promedio o por debajo.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-38.png', alt='Texto que describa la imagen')
        .row.p-5.bg_grad-04.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema2/t2-45.svg', alt='Texto que describa la imagen')
              h4 Ejemplo
              p El Restaurante <b>“El Buen Sabor S.A.S.”</b> tiene identificado que en promedio la factura de un cliente cuando va a cenar es de COP $70.000. El comensal de la mesa uno solicita dos entradas y dos copas de vino por lo que el valor de su factura es de COP $42.000, por su parte el comensal de la mesa dos solicita una entrada, dos platos fuertes y dos sodas lo que se le genera una factura por valor de COP $98.000.
              p.mb-0.bord_1.fuente14 En este escenario, al cliente de la mesa será catalogado como un cliente con bajo volumen de compra y al cliente de la mesa dos lo catalogarán como un cliente con alto volumen de compra.

          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-39.png', alt='Texto que describa la imagen')
        .row.p-5.bg_grad-05.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema2/t2-44.svg', alt='Texto que describa la imagen')
              h4.bgr_14 Clientes según su frecuencia de compra
              p La frecuencia hace relación al cada cuanto, en este orden de ideas, se mide en número de veces en un periodo de tiempo.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-40.png', alt='Texto que describa la imagen')
        .row.p-5.bg_grad-05.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema2/t2-44.svg', alt='Texto que describa la imagen')
              h4 Compra frecuente 
              p Se consideran en esta categoría a los clientes que compran más seguido que el promedio de los demás clientes. Se refiere a aquellos que compran repetidamente o con mayor frecuencia.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-41.png', alt='Texto que describa la imagen')
        .row.p-5.bg_grad-05.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema2/t2-44.svg', alt='Texto que describa la imagen')
              h4 Compra ocasional 
              p Aquí se clasifican a los que compran esporádicamente, ya sea porque no son fieles a una marca o porque no adquieren el producto con regularidad.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-42.png', alt='Texto que describa la imagen')
        .row.p-5.bg_grad-05.h-100.mx-1
          .col-md-5
            div 
              img.img70.mb-3(src='@/assets/curso/tema2/t2-45.svg', alt='Texto que describa la imagen')
              h4 Ejemplo 
              p Se tiene la siguiente situación: la empresa Tenis El Comodín E.U. identifica que sus clientes en promedio compran un par de tenis cada seis meses, por lo que establecen como clientes con compra frecuente aquellos que compran tenis antes de cumplir ese período de tiempo.
              div.bord_2.fuente14
                p <b>Clientes habitual:</b> los que compran tenis cada seis meses.
                p.mb-0 <b>Clientes ocasional:</b> los que compran un par de tenis después de dicho período.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/t2-43.png', alt='Texto que describa la imagen')

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Tipología y manejo del cliente

    p.mb-5 En la interacción con los clientes se debe detectar con qué tipo de clientes se está tratando con el fin de tratar de manejar una comunicación asertiva y esto se debe a que cada cliente según sus necesidades, expectativas e incluso personalidad gestionará las relaciones con la empresa. Es por ello, que desde la Psicología y las teorías de comportamiento del consumidor se han seleccionado algunas tipologías de clientes (Maldonado, 2014), aquí la reseña de algunas de ellas:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-down")
      .tranform.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/t2-46.svg' alt='AvatarTop')
        h4.text-center Cliente informado
        p.text-center El cliente informado es aquel que se caracteriza por tener mucho conocimiento sobre el producto que está requiriendo, por tanto, está pendiente de cada detalle y por tanto, indaga mucho, sus preguntas se caracterizan por ser analíticas y profundas.
      .tranform.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/t2-47.svg' alt='AvatarTop')
        h4.text-center Cliente sabelotodo
        p.text-center El cliente sabelotodo considera que se las sabe todas, hace preguntas que él mismo responde, es orgulloso y quiere imponerse, se caracteriza por actuar con instintos de superioridad, exige mucha atención, es exigente y le encuentra “peros” a todo.
      .tranform.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/t2-48.svg' alt='AvatarTop')
        h4.text-center Cliente polémico
        p.text-center El cliente polémico, suele incentivar la discusión e incluso la intervención de otros, propenderá por tener la razón siempre, es desconfiado, le gusta llamar la atención, por tanto, le gusta cuando siente que está siendo observado. Necesita una atención preferencial.
      .tranform.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/t2-49.svg' alt='AvatarTop')
        h4.text-center Cliente minucioso
        p.text-center El cliente minucioso, tiene claro el cómo, cuándo y dónde de lo que busca. Es específico, concreto y conciso, es de pocas palabras, está atento a las respuestas por lo que exige información exacta y concreta.
      .tranform.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/t2-50.svg' alt='AvatarTop')
        h4.text-center Cliente desconfiado
        p.text-center El cliente desconfiado, no cree fácilmente ni en las personas, ni en las circunstancias, no cree que algo puede ser consecuencia del destino, por tanto, duda de todo y de todos. Es susceptible, trata de dominar a su interlocutor para poner a flaquear a la otra persona. Suele rechazar los argumentos y validará las cosas con frecuencia buscando puntos débiles.
      .tranform.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/t2-51.svg' alt='AvatarTop')
        h4.text-center Cliente hablador
        p.text-center El cliente hablador, suele ser amistoso, sonriente, suele dar explicaciones no solicitadas, muestra gran seguridad, necesita atención y sentir que se le está prestando atención. En ocasiones, puede llegar a ser prepotente y llegar a hablar de temas que no conoce a profundidad sólo por el hecho de resaltar frente a otras personas.
      .tranform.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/t2-52.svg' alt='AvatarTop')
        h4.text-center Cliente indeciso
        p.text-center El cliente indeciso, suele dar excusas o evasivas para no tomar una decisión. Puede ser inseguro o tímido, le cuesta tomar decisiones por lo que es común que solicite aplazamientos antes de cerrar un tema en revisión. En ocasiones, acude a otros, para solicitar opiniones, tener referentes o puntos de vista.
      .tranform.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/t2-53.svg' alt='AvatarTop')
        h4.text-center Cliente grosero
        p.text-center El cliente grosero, suele sentir que tiene siempre la razón por lo que es bastante dominante, tiene mal carácter y mal humor, discute frecuentemente, tiende a ser ofensivo y/o agresivo. Puede llegar a ser irrespetuoso y desobligante. Suele defender lo que considera justo privilegiando su postura y olvida los intereses de los demás.
      .tranform.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/t2-54.svg' alt='AvatarTop')
        h4.text-center Cliente Impulsivo
        p.text-center El cliente impulsivo se deja llevar por el momento, no plantea sus acciones, cambia continuamente de parecer, es superficial, y para él la presentación de los productos es un factor decisivo de compra. Puede ser impaciente, carece de concentración y con frecuencia se arrepentirá en el último momento de lo que parecía ser una decisión.
      .tranform.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/t2-55.svg' alt='AvatarTop')
        h4.text-center Cliente negociador
        p.text-center El cliente negociador es bastante común en culturas como las Latinoamericanas, es una persona que busca y aprovecha las oportunidades. Siempre buscará obtener el mayor beneficio posible, aunque suele entender que tiene a otra persona al frente que tiene sus propios intereses. Un buen negociador, tiene por fin buscar acuerdos. 
      .tranform.h-100.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/t2-56.svg' alt='AvatarTop')
        h4.text-center Cliente silencioso
        p.text-center El cliente silencioso es una persona tímida y generalmente analítica. Escucha con detenimiento, aunque no pregunta mucho, es difícil interpretar por parte del interlocutor porque no se sabe realmente qué está pensando y cuál es su postura frente a lo que se le está explicando. 

    p.mb-3 En cuanto al manejo de los clientes, hay que entender que son seres humanos y su personalidad, emociones, preceptos e ideologías también se verán reflejadas en sus interacciones comerciales. En este orden de ideas, lo primero que un agente de atención al cliente debe realizar es identificar con qué tipo de cliente está tratando; después de identificarlo se deben aplicar las pautas para el manejo de clientes.
    p.mb-5 En el siguiente esquema, se detallan algunas recomendaciones para cada una de las tipologías de cliente que se mencionó antes.

    h4.mb-5 Manejo del cliente, según su tipo

    SlyderF.mb-5.p-0(columnas="col-lg-12 col-xl-12")(data-aos="zoom-in-down")
      .bgr_15.h-100.p-3.p-lg-5
        img.img450(src='@/assets/curso/tema2/t2-57.svg' alt='AvatarTop')
        .p-3.p-lg-5
          h4 Cliente informado
          ul.lista-ul--color
            li 
              i.far.fa-check-square
              p El éxito con un cliente informado se da cuando se <b>demuestra conocimiento técnico</b> (en las características, beneficios y ventajas) del bien/servicio sobre el cual se está teniendo la interacción), así como conocer en detalle <b>las condiciones comerciales</b> que aplican para la compra.
            li 
              i.far.fa-check-square
              p Se debe mantener un <b>diálogo basado en los argumentos</b> y con la mayor cantidad de datos posible para no tener imprecisiones o cometer errores con el cliente.
      .bgr_15.h-100.p-3.p-lg-5
        img.img450(src='@/assets/curso/tema2/t2-58.svg' alt='AvatarTop')
        .p-3.p-lg-5
          h4 Cliente polémico
          ul.lista-ul--color
            li 
              i.far.fa-check-square
              p Con el cliente polémico la clave está en la <b>escucha con atención</b>, mostrando una actitud de interés y en la medida de lo posible tratar de no interrumpirlo, para que sienta que su conversación es importante, tratar de no discutir, por tanto, tener intervenciones cortas y sustanciosas, aclarando las inquietudes que presente.
            li 
              i.far.fa-check-square
              | Mostrar una actitud amable, calmada e interesada
      .bgr_15.h-100.p-3.p-lg-5
        img.img450(src='@/assets/curso/tema2/t2-59.svg' alt='AvatarTop')
        .p-3.p-lg-5
          h4 Cliente minucioso
          ul.lista-ul--color
            li 
              i.far.fa-check-square
              p El cliente minucioso es meticuloso, por ende, el tip consiste en la <b>atención a los detalles</b>, se debe mostrar seriedad, seguridad e interés.
            li 
              i.far.fa-check-square
              | Dar un trato amable y respetuoso.
            li 
              i.far.fa-check-square
              p <b>Suministrar respuestas claras</b> y con foco en el objetivo, es decir, dar respuestas precisas.
      .bgr_15.h-100.p-3.p-lg-5
        img.img450(src='@/assets/curso/tema2/t2-60.svg' alt='AvatarTop')
        .p-3.p-lg-4
          h4 Cliente desconfiado
          ul.lista-ul--color
            li 
              i.far.fa-check-square
              p Lo opuesto a la desconfianza es la confianza, por tanto, eso es lo primero que se debe transmitir, por tanto, el Agente de Servicio, debe indicar nombres-apellidos, cargo y empresa a la que se está representando.
            li 
              i.far.fa-check-square
              p Se debe siempre <b>mostrar interés por el cliente, hacerle preguntas</b> para que se sienta tenido en cuenta, no afirmar nada que no se puede evidenciar
            li 
              i.far.fa-check-square
              p No mostrarse muy insistente, ni discutir.
            li 
              i.far.fa-check-square
              p <b>Darle la razón al cliente siempre que la tenga</b>, sin dejarse dominar, ya que esto también podrá generar desconfianza.
      .bgr_15.h-100.p-3.p-lg-5
        img.img450(src='@/assets/curso/tema2/t2-61.svg' alt='AvatarTop')
        .p-3.p-lg-5
          h4 Cliente hablador
          ul.lista-ul--color
            li 
              i.far.fa-check-square
              p Lo primero es la cortesía, sin ser sobreactuado, es decir, ser <b>amables, educados, pero manteniendo la distancia.</b>
            li 
              i.far.fa-check-square
              p Lo segundo, es tratar de mantener el control de una forma respetuosa, dado que en caso contrario el cliente hablador no permitirá que se desarrolle la interacción de forma adecuada.
            li 
              i.far.fa-check-square
              p Tercero, se debe siempre encaminar la conversación sobre el objetivo de la interacción, por tanto, se deben realizar preguntas enfocadas en la obtención de las respuestas necesarias, <b>manteniendo el liderazgo de la conversación.</b>
      .bgr_15.h-100.p-3.p-lg-5
        img.img450(src='@/assets/curso/tema2/t2-62.svg' alt='AvatarTop')
        .p-3.p-lg-5
          h4 Cliente indeciso
          ul.lista-ul--color
            li 
              i.far.fa-check-square
              p El <b>acompañamiento</b> es la llave para la interacción con un cliente indeciso, el agente de atención al cliente debe guiar, informar y responder a sus interrogantes.
            li 
              i.far.fa-check-square
              p Es importante dar espacio para que el cliente tome su propia decisión, dado que cuando esto no sucede el cliente terminará comprando y devolviendo el producto, lo que generará reprocesos para la empresa.
      .bgr_15.h-100.p-3.p-lg-5
        img.img450(src='@/assets/curso/tema2/t2-63.svg' alt='AvatarTop')
        .p-3.p-lg-5
          h4 Cliente grosero
          ul.lista-ul--color
            li 
              i.far.fa-check-square
              p Con el cliente grosero se debe ser <b>paciente, y nunca perder el control</b>, ser amables, no importa el contexto, respirar hondo si es necesario y retomar la interacción.
            li 
              i.far.fa-check-square
              p Los argumentos son una buena forma de desarrollar la conversación, sin caer en acomodarse a las afirmaciones del cliente, dado que nunca se debe perder del radar que se está trabajando para una empresa, por tanto, no se puede ceder en pretensiones que no tienen alcance solo por el hecho de calmarlo o terminar su interacción de forma rápida.
      .bgr_15.h-100.p-3.p-lg-5
        img.img450(src='@/assets/curso/tema2/t2-64.svg' alt='AvatarTop')
        .p-3.p-lg-4
          h4 Cliente impulsivo
          ul.lista-ul--color
            li 
              i.far.fa-check-square
              p El primer paso con este tipo de clientes es <b>identificar cuál es su necesidad.</b>
            li 
              i.far.fa-check-square
              p Segundo, con el cliente impulsivo se debe demostrar seguridad y se debe dar argumentos de forma rápida, clara y puntual para que el cliente no pierda el interés. No dar detalles que no han sido solicitados.
            li 
              i.far.fa-check-square
              p Tercero, la variable tiempo es decisoria, por lo que suelen ser impacientes cuando percibe que los procesos no están desarrollándose con la oportunidad requerida, por ello <b>en caso de tener inconvenientes, se debe informar y buscar alternativas que permitan resolver la situación.</b>
      .bgr_15.h-100.p-3.p-lg-5
        img.img450(src='@/assets/curso/tema2/t2-65.svg' alt='AvatarTop')
        .p-3.p-lg-4
          h4 Cliente negociador
          ul.lista-ul--color
            li 
              i.far.fa-check-square
              p <b>Dar claridad, estableciendo si es posible negociar o no, es el punto de partida con los clientes negociadores.</b>
            li 
              i.far.fa-check-square
              p El representante de la empresa debe saber hasta dónde puede negociar, por lo que se debe tener presente que <b>no se podrá ceder en todo lo que espera el cliente.</b>
            li 
              i.far.fa-check-square
              p Ponerse en el lugar del otro, es decir ser empáticos, es una variable relevante con este tipo de clientes. No obstante, esta empatía no puede llevar a que se pierda la objetividad.
            li 
              i.far.fa-check-square
              p <b>Mostrar los beneficios</b> es importante con este tipo de clientes, dado que siempre buscan conseguir un objetivo.
      .bgr_15.h-100.p-3.p-lg-5
        img.img450(src='@/assets/curso/tema2/t2-66.svg' alt='AvatarTop')
        .p-3.p-lg-5
          h4 Cliente silencioso
          ul.lista-ul--color
            li 
              i.far.fa-check-square
              p <b>Las preguntas</b> son una forma de validar el interés y el entendimiento por parte del cliente silencioso.
            li 
              i.far.fa-check-square
              p Despertar la curiosidad es un buen consejo con estos clientes, dado que querrán explorar más y, por tanto, establecerán relación con su interlocutor.
            li 
              i.far.fa-check-square
              p En caso de que la interacción sea presencial, los <b>gestos no verbales</b> (expresiones del rostro, de los pies o de las manos) pueden dar luces sobre la actitud de este cliente.

    .bg_grad-07
      .row.justify-center.p-3.p-lg-0
        .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema2/t2-67.svg' alt='AvatarTop')
        .col-12.col-lg-6.align-items-center(data-aos="fade-left")
          div
            h3.colr_1 importante
            p.colr_1 Tenga presente que, si bien cada cliente tiene un rasgo característico asociado a su tipología, en ciertas circunstancias pueden sacar a relucir varios perfiles, por lo que es vital el conocimiento y el empoderamiento que tenga el Agente de Servicio para desarrollar con éxito una interacción.


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
