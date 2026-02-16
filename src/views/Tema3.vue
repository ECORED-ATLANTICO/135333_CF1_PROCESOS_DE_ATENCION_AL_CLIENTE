<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Inclusión 
    
    .row.mb-5.align-items-center
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")  
        figure.justify-center
          img(src='@/assets/curso/tema3/t3-1.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        p La inclusión es un término mucho más amplio de lo que se piensa, es un concepto que si bien tuvo sus inicios en la perspectiva social ahora permea también el contexto empresarial. Inclusión significa la capacidad de poder derribar barreras, de que todos tengan igualdad de derechos, dar accesibilidad y no ser excluyentes, en últimas la inclusión es un asunto de todos. Lastimosamente, a veces se ve permeada negativamente por diversas barreras, ya que los prejuicios sociales hacen que se jerarquicen las relaciones entre las personas de acuerdo con roles y estereotipos.
        p Para mayor entendimiento, en la siguiente imagen, se muestran los tipos de inclusión que suelen abordarse con mayor frecuencia en los estudios sociales y económicos.
    
    .fullwidth-bg.fullwidth-bg--2
    TabsB.color-secundario(data-aos="zoom-in")
      .p-4.py-md-5(titulo="Inclusión familiar")
        .row.justify-content-center.align-items-center
          .col-12.col-md-9.col-lg-7
            h4 Inclusión familiar
            p Que cada miembro se sienta parte activa de la familia, compartir las obligaciones del hogar entre todos teniendo en cuenta la edad y estado físico-emocional, valorar lo que cada uno aporta y no crear prejuicios asociados al género, son las definiciones más cercanas a lo que representa la inclusión familiar. De hecho es interesante, porque algunos estudiosos del tema han planteado que la familia es el eje central de la inclusión.
          .col-6.col-md-3.col-lg-2
            figure
              img(src='@/assets/curso/tema3/t3-2.svg', alt='Texto que describa la imagen')
      .p-4.py-md-5(titulo="Inclusión social")
        .row.justify-content-center.align-items-center
          .col-12.col-md-9.col-lg-7
            h4 Inclusión social
            p La CEPAL (2018) define la inclusión social como “el aseguramiento de que todas las personas puedan ejercer sus derechos y garantías, aprovechando sus habilidades y beneficiándose de las oportunidades que se encuentran en su entorno”. En este sentido, no basta con asociar este término solo a los derechos, ya que incluye adicionalmente la posibilidad que las personas puedan tener participación activa en diferentes escenarios
          .col-6.col-md-3.col-lg-2
            figure
              img(src='@/assets/curso/tema3/t3-3.svg', alt='Texto que describa la imagen')
      .p-4.py-md-5(titulo="Inclusión laboral")
        .row.justify-content-center.align-items-center
          .col-12.col-md-9.col-lg-7
            h4 Inclusión laboral
            p Este tipo de inclusión se da desde el momento en que la empresa está realizando sus procesos de selección hasta que los empleados están trabajando en ella. En el primer escenario, consiste en abrir las posibilidades de contratación a todas las personas sin ningún tipo de discriminación garantizando una remuneración justa, en un segundo escenario con los empleados activos, la inclusión consiste en generar espacios que promuevan el desarrollo de los colaboradores de una organización.
          .col-6.col-md-3.col-lg-2
            figure
              img(src='@/assets/curso/tema3/t3-4.svg', alt='Texto que describa la imagen')
      .p-4.py-md-5(titulo="Inclusión educativa")
        .row.justify-content-center.align-items-center
          .col-12.col-md-9.col-lg-7
            h4 Inclusión educativa
            p Consiste en garantizar a los estudiantes el derecho a la educación en igualdad de condiciones bajo criterios de calidad, también es reconocer la diversidad y permitir que cualquier estudiante, independiente de sus características personales o culturales, sea acogido por la institución educativa. La Unesco (2020, p. 8) en su resumen del informe de seguimiento de la educación en el mundo, define la inclusión en la educación como “velar por que cada educando se sienta valorado y respetado, y pueda disfrutar de un claro sentido de pertenencia”.
          .col-6.col-md-3.col-lg-2
            figure
              img(src='@/assets/curso/tema3/t3-5.svg', alt='Texto que describa la imagen')
      .p-4.py-md-5(titulo="Inclusión empresarial")
        .row.justify-content-center.align-items-center
          .col-12.col-md-9.col-lg-7
            h4 Inclusión empresarial
            p Hace alusión a que las empresas dispongan de los canales y medios para que todos sus grupos de interés (propietarios, accionistas, colaboradores, proveedores, distribuidores), incluidos por supuesto los clientes puedan acceder a la empresa de una forma amigable y sencilla.
          .col-6.col-md-3.col-lg-2
            figure
              img(src='@/assets/curso/tema3/t3-6.svg', alt='Texto que describa la imagen')
    
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Discapacidad y sus tipos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p.mb-5 Según la Ley Colombiana 762 de 2002, que aprueba la Convención Interamericana para la Eliminación de todas las Formas de Discriminación contra las Personas con Discapacidad, la discapacidad es entendida como:
        .bloque-texto-f.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto Una deficiencia física, mental o sensorial, ya sea de naturaleza permanente o temporal, que limita la capacidad de ejercer una o más actividades esenciales de la vida diaria, que puede ser causada o agravada por el entorno económico y social
          .bloque-texto-f__autor
            p.mb-0 (CIPETFDPD, 2002, p. 2)
      .col-10.col-md-6.col-lg-3
        figure
          img(src='@/assets/curso/tema3/1.png', alt='Texto que describa la imagen')

    .row.align-items-center.bg-color-1.p-4.mb-5
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/curves.svg", style="max-width: 90px").mx-auto
      .col-lg
        p Esto quiere decir que, en línea con lo visto previamente, de alguna manera se podría afirmar que la inclusión es el concepto general y la discapacidad es una especificación técnica y bastante importante que surge dentro de la inclusión.
        p.mb-0 La discapacidad es un tema tan relevante dentro de la inclusión, que vale la pena mirarlo con más detalle. En el informe Mundial de la Discapacidad de la OMS y el Banco Mundial, se mencionan algunas cifras que ponen de manifiesto la importancia de la discapacidad, a continuación, se mencionan como contexto algunas consideraciones:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 2
      span <em>Consideraciones de discapacidad a nivel mundial</em>
    
    .row.mb-3.mb-lg-5(data-aos="zoom-in")
      .col-12.col-lg-4.mb-3.mb-lg-0
        .bgr_5.h-100.p-4
          figure.justify-center.mb-4  
            img.img70.himg70(src='@/assets/curso/tema3/t3-12.svg' alt='AvatarTop')
          p.p-3.text-center.mb-0 Se estima que más de mil millones de personas viven con discapacidad, o sea, alrrededor de 15% de la población mundial.
      .col-12.col-lg-4.mb-3.mb-lg-0
        .bgr_6.h-100.p-4
          figure.justify-center.mb-4  
            img.img70.himg70(src='@/assets/curso/tema3/t3-13.svg' alt='AvatarTop')
          p.p-3.text-center.mb-0 En promedio, las personas con discapacidad y familias con miembros con discapacidad tienen mayores tasas de privaciones.
      .col-12.col-lg-4
        .bgr_7.h-100.p-4
          figure.justify-center.mb-4
            img.img70.himg70(src='@/assets/curso/tema3/t3-14.svg' alt='AvatarTop')
          p.p-3.text-center.mb-0 El número de personas con discapacidad está creciendo como resultado del envejecimiento de la población y al incremento global de los problemas crónicos de salud. 
      .col-12.col-lg-12
        div.bgr_caption.my-3.d-flex
          p.my-3.px-3  <b>Nota.</b> Tomado del Informe Mundial de la Discapacidad de la OMS y el Banco Mundial. 2011.  https://apps.who.int/iris/handle/10665/75356
    
    p.mb-4 También, lastimosamente, como confirma la fundación con trabajo (López MJ, 2021), se han tejido algunos mitos respecto al tema de discapacidad, por ejemplo:

    .row.align-items-center.justify-content-center.mb-4
      .col-10.col-md-6.col-lg-3
        figure
          img(src='@/assets/curso/tema3/2.png', alt='Imagen decorativa')
      .col-lg-9
        .p-4.rounded-4.bgr_4.mb-3
          p Se considera que las personas con discapacidad tienen un bajo rendimiento laboral: esto no es cierto, cuando las personas con discapacidad son asignadas a la realización de actividades de acuerdo con sus destrezas, consideración que aplica para cualquier colaborador de una empresa, la productividad siempre estará asociada a la correspondencia entre la asignación realizada y las competencias.
        p Los empresarios en ocasiones consideran que se deben realizar altas inversiones para adaptar la empresa a personas con discapacidad: este punto dejó de perder vigencia por dos razones: 1. esquemas como el teletrabajo, la alternancia, facilitan que ciertas tareas puedan ser desempeñadas por las personas desde sus lugares de residencia y 2. a nivel general, hoy en día las personas con discapacidad cuentan con sus propios recursos para desplazarse o movilizarse, lo que minimiza el impacto en términos de adaptación de sus puestos de trabajo.
    
    .p-4.rounded-4.bgr_7.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-10
          p.mb-lg-0 Las personas con discapacidad faltan mucho debido a que se enferman reiteradamente: no hay estudios que demuestran que esto es cierto, las enfermedades pueden llegar a cualquier colaborador, por lo que este aspecto está más en el imaginario que en estudios científicos o médicos.
        .col-6.col-lg-1
          figure
          img(src='@/assets/curso/tema3/3.svg', alt='Imagen decorativa')

    p.mb-5 Es relevante entender que existen <b>diferentes tipologías de discapacidad.</b> A continuación, se detallan los tipos de discapacidad que más participación tienen dentro de la población

    div.slider-wrapper.z-2.mb-5
      .bg-fullwidth
      .tarjeta.tarjeta--blanca.position-relative.p-4.pt-5.z-2.my-5
        SlyderA(tipo="b")
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 Personas Personas con discapacidad visual (ciegos)
              p Este tipo de discapacidad se manifiesta en la persona por la pérdida total o parcial del sentido de la vista. Existen diferentes grados de pérdida de la vista, por lo que también en este grupo de personas se encuentran diferencias.
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/tema3/4.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 Personas Personas con discapacidad auditiva (sordos)
              p las consecuencias de la sordera (término que engloba cualquier tipo de pérdida auditiva) variarán de una persona a otra dependiendo no solo del grado, edad de adquisición y tipo de sordera, sino de otros factores contextuales que imprimen características diferenciales tales como los núcleos familiares y de escolaridad en donde se construyan sus procesos de identidad, sentido de pertenencia y adquisición de la primera lengua; los cuales no dependen únicamente de las limitaciones biológicas sino de los complejos procesos de relaciones sociales y culturales, de resistencias y acomodaciones que enmarcan las vidas de las personas sordas. 
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/tema3/5.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 Personas Personas con movilidad reducida
              p Limitaciones para moverse o caminar debido a la falta total o parcial de sus piernas. También a aquellas que teniendo sus piernas no tienen movimiento en estas, o sus movimientos tienen restricciones que provocan limitaciones para desplazarse por sí mismas, de tal forma que necesitan la ayuda de otra persona o de algún instrumento como silla de ruedas, muletas o prótesis.
              p Se incluyen, además, las personas que tienen limitaciones para desplazarse y que no cuentan con ningún tipo de ayuda, así como a las personas que cojean para caminar y aquellas personas que presentan deficiencias en el movimiento de sus manos y brazos, o carecen de uno de estos miembros, se incluyen dentro de este tipo de discapacidad.
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/tema3/6.png', alt='Imagen de acompañamiento')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-6
              h4.mb-4 Personas Personas con discapacidad intelectual o mental
              p Hace relación a personas que tuvieron un desarrollo mental incompleto o detenido, lo cual impacta negativamente la realización de sus actividades cotidianas. En general las personas con discapacidad intelectual, aunque de forma más lenta, pueden llegar a alcanzar completa autonomía para el cuidado personal, en actividades de la vida diaria del hogar, en el manejo de la comunidad y sus servicios y en el desarrollo de una ocupación productiva de su interés.
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/tema3/7.png', alt='Imagen de acompañamiento')

    .fullwidth-bg.fullwidth-bg--2
    .bg_grad-09
      .row.justify-center
        .col-12.col-lg-4(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema3/t3-22.svg' alt='AvatarTop')
        .col-12.col-lg-6.align-items-center(data-aos="fade-left")
          div.p-5
            h3 Protocolos de atención a personas con discapacidad
            p Algunas consideraciones para tener en cuenta en el momento de la atención al cliente, con personas con algún tipo de discapacidad.
            a.boton.bgr_3.me-3.text-white(:href="obtenerLink('downloads/Protocolo_Atencion_cliente.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Normativa

    p.mb-5 A nivel nacional e internacional, existen varios lineamientos, leyes, decretos y marcos de buenas prácticas asociados a la inclusión y a la discapacidad. A continuación, se exponen algunos de ellos.

    h4.mb-5 A nivel Internacional, podemos ver los siguientes hitos:

    LineaTiempoE.color-secundario.mb-5(data-aos="fade-left")
      .row(titulo="1948")
        .col-lg-2.mb-3.mb-lg-0
          figure
            img.img200(src='@/assets/curso/tema3/t3-23.svg', alt='Texto que describa la imagen')
        .col-lg-10.mb-4.mb-lg-0
          h4 Declaración Universal de los Derechos Humanos (DUDH) de la ONU
          p En esta carta firmada en 1948, plantea como un ideal que los seres humanos deben ser libres, gozar de libertades civiles y contar con la implementación de políticas que permitan que las personas no estén en condiciones de pobreza extrema. Si bien no es una ley o un documento obligatorio dado que cuando se promulgó no existía tanta consciencia sobre el tema, sirve actualmente como base para la creación de los Convenios Internacionales de la ONU y son la plataforma para elaborar códigos de inclusión o gobierno corporativo por parte de las empresas respecto al tema de la inclusión.
      .row(titulo="1983")
        .col-lg-2.mb-3.mb-lg-0
          figure
            img.img200(src='@/assets/curso/tema3/t3-24.svg', alt='Texto que describa la imagen')
        .col-lg-10.mb-4.mb-lg-0
          h4 Convenio de 1983 de la Organización Internacional del Trabajo (OIT)
          p En esta carta, se plantean acciones para la readaptación profesional y el empleo para las personas inválidas, promoviendo de esta manera lo que ellos denominan el trabajo decente. Aquí se pone explícita la importancia del principio de igualdad de oportunidades entre los trabajadores inválidos y el resto de la fuerza laboral y se indica que debe existir oportunidades de acceso, promoción y conservación del empleo para las personas inválidas, por supuesto acorde con sus elecciones y aptitudes.
      .row(titulo="2006")
        .col-lg-2.mb-3.mb-lg-0
          figure
            img.img200(src='@/assets/curso/tema3/t3-25.svg', alt='Texto que describa la imagen')
        .col-lg-10.mb-4.mb-lg-0
          h4 Convención sobre los Derechos de las Personas con Discapacidad 
          p El propósito de la presente Convención es promover, proteger y asegurar el goce pleno y en condiciones de igualdad de todos los derechos humanos y libertades fundamentales por todas las personas con discapacidad, y promover el respeto de su dignidad inherente. 
          p Las personas con discapacidad incluyen a aquellas que tengan deficiencias físicas, mentales, intelectuales o sensoriales a largo plazo que, al interactuar con diversas barreras, puedan impedir su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás.
      .row(titulo="2015")
        .col-lg-2.mb-3.mb-lg-0
          figure
            img.img200(src='@/assets/curso/tema3/t3-26.svg', alt='Texto que describa la imagen')
        .col-lg-10.mb-4.mb-lg-0
          h4 Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas
          p Los ODS son 17 objetivos que plantean líneas de acción mundiales para que alrededor de temáticas que se consideran claves, los países y las empresas formulen planes y proyectos. En este sentido, en el objetivo cuatro se hace mención del tema de la inclusión cuando se plantea que debe ser un propósito garantizar una educación inclusiva, equitativa y de calidad para promover oportunidades de aprendizaje. 
    
    h4.mb-5 A nivel de nacional, en Colombia, también encontramos importantes sucesos que garantizan los derechos de personas con diversidad de condiciones:

    LineaTiempoD.color-primario.mb-5(data-aos="fade-right")
      .row(numero="1991" titulo="Constitución Política de Colombia")
        .col-md-3.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/t3-27.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.mb-0.text-small La carta Magna en su artículo 7 enuncia que “El estado reconoce y protege la diversidad étnica y cultural de la Nación Colombiana”. Colombia contempla la importancia de la inclusión, dado que la diversidad es una de las variables que apalancan la aplicación de la inclusión. En su artículo 13, la constitución define que: “Todas las personas nacen libres e iguales ante la ley, recibirán la misma protección y trato de las autoridades y gozarán de los mismos derechos, libertades y oportunidades sin ninguna discriminación por razones de sexo, raza, origen nacional o familiar, lengua, religión, opinión política o filosófica”, este es un claro manifiesto del concepto de inclusión.
      .row(numero="1993" titulo="Ley 100 de 1993")
        .col-md-3.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/t3-28.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.mb-0.text-small Esta es la ley del Sistema de Seguridad Social Integral, allí se plantea que se debe garantizar los derechos de las personas y la comunidad con el fin de obtener una calidad de vida de acuerdo con la dignidad humana. Asimismo, tiene una mención especial y se brindan beneficios especiales a las personas con discapacidad.
      .row(numero="1994" titulo="Ley General de Educación (Ley 115 de 1994)")
        .col-md-3.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/t3-29.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.mb-0.text-small En su artículo 46 referencia que: “La educación de las personas con limitaciones físicas, sensoriales, psíquicas, cognoscitivas, emocionales o con capacidades 'intelectuales excepcionales, es parte integrante del servicio público educativo”; ello muestra como la inclusión educativa es un tema de importancia dentro de las políticas nacionales en Colombia.
      .row(numero="2006" titulo="Código de la Infancia y la Adolescencia (Ley 1098 de 2006)")
        .col-md-3.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/t3-29.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.mb-0.text-small En su artículo 202 hace mención a los objetivos de las políticas públicas, definiendo qué se debe “Diseñar y poner en marcha acciones para lograr la inclusión de la población infantil más vulnerable a la vida social en condiciones de igualdad”. Este es un punto interesante, ya que pone de manifiesto un aspecto clave de la inclusión social, relacionado con la prioridad que deben tener los niños (as) en la sociedad.
      .row(numero="2009" titulo="Ley 1346 de 2009")
        .col-md-3.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/t3-30.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.mb-0.text-small Esta ley define como un principio general La participación e inclusión plenas y efectivas en la sociedad de las personas con discapacidad, asimismo indica que se debe garantizar su derecho a la justicia, a vivir de forma independiente y ser incluidos en la comunidad, el fomento de su máximo desarrollo académico y social; y define que los Estados deberán garantizar la habilitación y rehabilitación de las personas con discapacidad.
      .row(numero="2013" titulo="Disposiciones para garantizar el pleno ejercicio de los derechos de las personas con discapacidad (1618 de 2013)")
        .col-md-3.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/t3-31.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.mb-0text-small Plantea las obligaciones del Estado y de la Sociedad respecto a las personas con discapacidad, los deberes que como sociedad se tienen con ellos y el derecho a la habilitación y a la rehabilitación, de acuerdo con sus posibilidades y necesidades particulares. A su vez, asigna responsables específicos para garantizar la expedición y aplicación de medidas tendientes a garantizar los derechos de las personas con discapacidad.
      .row(numero="2013" titulo="Reglamentación Conpes 166 de 2013")
        .col-md-3.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/t3-32.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.mb-0.text-small Plantea estrategias para que Colombia avance en temas de Inclusión Social y Discapacidad con el fin de fomentar la igualdad en las oportunidades y la calidad de vida de la población con discapacidad. Las perspectivas que aborda este Conpes son: la transformación de lo público implementando el Observatorio Nacional de Discapacidad – OND e incluyendo a esta población en la información de estudios económicos y sociales con carácter nacional.
      .row(numero="2013" titulo="Norma Técnica Colombiana (NTC) 6047 de 2013")
        .col-md-3.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/t3-33.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.mb-0.text-small Define los requerimientos para la construcción y adecuación de espacios físicos bajo el criterio de ajustes razonables para las entidades de la administración pública y las empresas privadas con funciones públicas, que han sido destinados para el acceso y el servicio de los ciudadanos colombianos. 
      .row(numero="2017" titulo="Decreto 1421 de 2017")
        .col-md-3.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/t3-34.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.mb-0.text-small Aborda la educación inclusiva para la atención de la población con discapacidad, planteando en esta línea los recursos financieros, humanos y técnicos para la atención educativa pertinente y de calidad en la población con discapacidad. También, se plantea el esquema de atención educativa y se plantea como el Ministerio de Educación Nacional (MEN) creará programas para el fomento de la educación superior en la población con discapacidad.
      .row(numero="2019" titulo="Ley 1966 de 2019")
        .col-md-3.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/t3-35.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.mb-0.text-small Establece el régimen de aplicación para garantizar los derechos de las personas con discapacidad mayores de edad, se determina su alcance para realizar diligencias jurídicas, se determina, se definen las características de la persona de apoyo y cuando hacer mención al conflicto de intereses.
      .row(numero="2018-2022" titulo="Plan Nacional de Desarrollo Colombia 2018- 2022")
        .col-md-3.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/t3-36.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.mb-0.text-small Establece varios capítulos donde se hace alusión al tema de inclusión: en el ítem asociado a la participación ciudadana, se relaciona la promoción del diálogo, la inclusión democrática y la libertad de cultos para la equidad; en su capítulo del trabajo pone explícito el componente de Trabajo decente, acceso a mercados e ingresos dignos: acelerando la inclusión productiva: asimismo, referencian también un capítulo enfocado en el pacto por la inclusión de todas las personas con discapacidad y en el aspecto de inclusión social se plantea el compromiso de sacar 1,5 millones de personas de la pobreza extrema.



</template>

<script>
export default {
  name: 'Tema3',
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
