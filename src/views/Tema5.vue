<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Seguridad y salud en el trabajo (SST) 
    
    p.mb-5 Veamos una visión general de este importante tema a través del siguiente video.

    .bg_grad-01.mb-5
      .row.justify-center.pt-5.pb-5
        .col-12.col-md-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/87fQFljT7OQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
 
    p.mb-3 La Seguridad y Salud en el trabajo (SST), según la ley 1562 de 2012, se define como la disciplina que se ocupa de la prevención de lesiones y enfermedades generadas por las circunstancias de trabajo, y de la protección y promoción de la salud de los trabajadores.
    p.mb-5 Su objetivo es mejorar las condiciones y el entorno de medio ambiente laboral, así como la salud laboral, que implica la promoción y el mantenimiento del bienestar físico, mental y social de los trabajadores en todas las ocupaciones.

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
      h5 Figura 8
      span <em>Definición de Sistema de Gestión de la Seguridad y Salud en el Trabajo</em>

    .bg_grad-14.mb-5
      .row.justify-center.p-3.p-lg-0
        .col-12.col-lg-4(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema5/t5-1.svg', alt='Texto que describa la imagen')
        .col-12.col-lg-6.m_t(data-aos="fade-left")
          h3 Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST 
          p.mb-0 Este Sistema consiste en el desarrollo de un proceso lógico y por etapas, basado en la mejora continua y que incluye la política, la organización, la planificación, la aplicación, la evaluación, la auditoría y las acciones de mejora con el objetivo de anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y salud en el trabajo.
    .row.mb-5  
      .col-12.col-lg-12
        div.bgr_6.my-3.d-flex
          p.my-3.px-3  <b>Nota.</b>Ley 156 de 2012, Artículo 1.

    .posit_18.color-primario.p-3.mb-5(data-aos="fade-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema4/t4-38.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.m-0 Para ampliar la información sobre los <b>decretos que reglamentan y definen los alcances de los Sistemas de Gestión de Seguridad y Salud en el Trabajo</b> puede visitar la página del ministerio del trabajo. Allí se plantean de forma sencilla los objetivos y ventajas de este sistema.   
            .col-sm-auto.p-lg-4
              a.boton.color-acento-botones.me-3(href="https://www.mintrabajo.gov.co/relaciones-laborales/riesgos-laborales/sistema-de-gestion-de-seguridad-y-salud-en-el-trabajo" target="_blank")
                span Enlace
                i.fas.fa-link
    
    separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Factores de Riesgos SST
    
    p.mb-5 Los componentes de los factores de riesgos de trabajo son condiciones, propiedades o exposiciones que generen cualquier mal o afectación a la salud del trabajador. Se necesita detectar qué tipo de peligro (físicos, químicos, biológicos, ergonómicos, psicosociales o ambientales) se registra en las compañías, para que se evite la ocurrencia de accidentes, incidentes y enfermedades laborales. La resolución 2646 de 2008, busca mantener y conservar la salud física de los colaboradores, prevenir accidentes y situaciones que puedan poner en riesgo al trabajador.

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
      h5 Figura 9
      span <em>Factores de riesgo</em>
    
    figure.mb-5
      img(src='@/assets/curso/tema5/t5-2.svg', alt='Texto que describa la imagen')
    
    .row.justify-center
      .col-12.col-md-10(data-aos="zoom-in-down")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Peligros físicos")
            .col-md-12.px-5
              p El es una sensación auditiva generalmente desagradable. Cuando oímos un ruido, primero lo escuchamos a través del oído externo, luego la onda es recibida por el oído medio, que es donde se encuentra el tímpano. Posteriormente, la señal pasa por una cadena de huesecillos y es recibida por el cerebro a través de las células ciliadas. Cuando el ruido es muy fuerte, las células ciliadas se activan y se corre el riesgo de perder la audición. Debemos protegernos con todas las medidas de seguridad posibles, los tipos de ruido pueden ser de impacto, intermitentes y continuos. Las vibraciones pueden ser segmentarias o de todo el cuerpo dependiendo de la herramienta utilizada, pueden afectar a la columna vertebral, al sistema digestivo, e incluso provocar dolores de cabeza. Los reflejos, las sombras, la fatiga y el deslumbramiento son factores producidos por la iluminación, que pueden ser visibles y causar lesiones por deficiencia o exceso. Estos elementos pueden provocar un accidente, por lo que es necesario controlar el tipo de lámparas y respetar los niveles de luz adecuados.
              p.mb-0 La temperatura y la humedad del ambiente si son excesivamente altas o bajas pueden producir efectos adversos en las personas. Los valores ideales en el trabajo son 21 °C y 50% de humedad. Las radiaciones ionizantes son ondas electromagnéticas que alteran el estado físico sin ser percibidas en el ambiente, se conocen como rayos X, gamma, beta y alfa. Los efectos son graves a largo plazo, por eso es necesario limitar las ondas y tener un control médico. Y las radiaciones no ionizantes, como el láser, los rayos UV, los infrarrojos, la radioterapia o las microondas, también requieren un control. La presión atmosférica, que puede ser ajustada o normal.
          .row(titulo="Riesgos químicos")
            .col-md-12.px-5
              p Se producen por procesos químicos y por el medio ambiente. Ejemplos claros son los polvos (orgánicos e inorgánicos), las fibras, los líquidos (nieblas o aerosoles), los gases o vapores, los humos metálicos o no metálicos y las partículas. Enfermedades como las alergias, la asfixia o los virus se producen por inhalación, absorción o ingestión. Debemos protegernos con mascarillas, guantes y delimitar la zona de trabajo.
          .row(titulo="Riesgos biológicos")
            .col-md-12.px-5
              p Las enfermedades causadas por virus, bacterias, hongos, parásitos, picaduras, mordeduras, raquitismo y diversos fluidos corporales se deben al contacto con todo tipo de seres vivos o plantas, a través de la sangre, la orina, las heces, el pelo y la leche. Para evitarlos, se recomienda llevar un control de las vacunas y, sobre todo, protegerse con el equipo adecuado.
          .row(titulo="Riesgos ergonómicos")
            .col-md-12.px-5
              p La ergonomía es la ciencia que busca la adaptación integral al puesto de trabajo y al hombre. Los principales factores de riesgo ergonómico son: las posturas inadecuadas, que pueden ser prolongadas, mantenidas, forzadas o antigravitatorias; el levantamiento de pesos, los movimientos repetitivos. Pueden provocar daños físicos y molestias.
              p.mb-0 Este tipo de riesgo ofrece cifras relativamente altas, ocupando el 60% de las enfermedades en los puestos de trabajo y el 25% se deben a la manipulación de golpes. Al levantar pesos, la espalda debe estar completamente recta y las rodillas dobladas. Si se trata de un trabajo físico, hay que estirar los músculos y las articulaciones antes de empezar para evitar futuras lesiones. Hay que utilizar métodos seguros en todo momento.
          .row(titulo="Riesgos psicosociales")
            .col-md-12.px-5
              p Este riesgo depende de la gestión organizativa, de las características del trabajo y de las características del grupo social, es realmente importante identificar, evaluar e intervenir en todos los aspectos socio-demográficos del empleado: recursos humanos: estilo de dirección, pagos, contratación, aspectos extra-laborales: amigos, tiempo libre, familia, individuales: personalidad, absentismo, edad, antecedentes, etc, algunas manifestaciones pueden ser: estrés, fatiga, monotonía, para prevenirlas es recomendable un compromiso por parte de la dirección para la priorización de los hallazgos. La estabilidad y un buen ambiente nos ayudará a disminuir estos riesgos.
          .row(titulo="Condiciones de seguridad")
            .col-md-12.px-5
              p La clasificación para este tipo de riesgo con mecánica como elementos o parte de máquinas, herramientas, equipos, piezas y materiales proyectados; eléctrica de alta o baja presión o estática; locativa como superficies de trabajo, condiciones de orden y limpieza y caída de objetos. Estos tipos de riesgos se reflejan en trabajos en altura, superficies inseguras, mal uso de herramientas, equipos defectuosos. Debemos asegurarnos siempre de revisar la maquinaria en la que trabajamos para evitar posibles incidentes.
          .row(titulo="Riesgos ambientales")
            .col-md-12.px-5
              p Son los únicos factores que no podemos controlar. Se manifiestan en la naturaleza lluvias, tormentas, inundaciones, desprendimientos, precipitaciones. Debemos ser previsores y prudentes.
    
    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Manejo y control SST
    
    .row.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure.justify-center
          img(src='@/assets/curso/tema5/t5-3.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        p Con el objetivo de conceptualizar y entablar los controles en seguridad y salud en el trabajo se debe tener en cuenta que la instalación o lugar de trabajo, debe estar con el Equipo de Protección Personal (EPP) como primera barrera de estabilidad entre el trabajador y el peligro (lo cual es menos efectivo), es indispensable jerarquizarlos para minimizar de forma más positiva la posibilidad de accidentes y patologías de trabajo (riesgos de trabajo). 
        p El objetivo general en el manejo y control de la identificación de los riesgos y la valoración de los peligros en Estabilidad y Salud en el Trabajo (SST), consiste en comprender los riesgos que tienen la posibilidad de producir en el desarrollo de las ocupaciones, con el objeto de que la organización logre establecer los controles necesarios, al punto de asegurar que cualquier peligro sea aceptable.
        p.mb-0 El trabajo preliminar imprescindible para la evaluación de peligros es decidir los procesos y la lista de ocupaciones o situaciones de la operación para juntar la información elemental, incluyendo tareas rutinarias y no rutinarias, ejemplificando de mantenimiento.

    p.mb-3 La valoración de los peligros es la base para la administración proactiva de Seguridad y Salud en el Trabajo, dirigida por la alta dirección como parte de la administración integral del peligro, con la colaboración y compromiso de todos los niveles de la organización.
    p.mb-3 Independientemente de la dificultad de la valoración de los peligros, ésta debe ser un proceso sistemático que garantice el cumplimiento de su propósito.
    p.mb-3 Todos los trabajadores tienen que detectar y comunicar a su empleador los riesgos asociados a su actividad gremial. Los empleadores poseen el deber legal de evaluar los peligros derivados de estas ocupaciones laborales.
    p.mb-5 La matriz de identificación de riesgos y evaluación de peligros la establece el empresario de acuerdo con las ocupaciones hechas y sus características.

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
      h5 Figura 10
      span <em>Tabla tipo matriz de riesgo</em>
    
    figure
      img(src='@/assets/curso/tema5/t5-4.svg', alt='Texto que describa la imagen')

    .row.mb-5  
      .col-12.col-lg-12
        div.bgr_6.my-3.d-flex
          p.my-3.px-3 <b>Nota.</b> Ejemplo Matriz de riesgo
    
    p.mb-5 En el tamaño en que la identificación de riesgos y evaluación de peligros contenga información válida y priorizada posibilita consumar correctamente destinados a prevenir los accidentes de trabajo y enfermedad general, convirtiéndose en una herramienta natural para conceptualizar la Administración de Estabilidad y Salud y por consiguiente el proyecto y cronograma de ocupaciones del SG-SST.

    .posit_18.color-primario.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema4/t4-38.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4 Descargue el ejemplo de Matriz de identificación de peligros.   
            .col-sm-auto.p-lg-4
              a.boton.color-acento-botones.me-3(:href="obtenerLink('downloads/FORMATO_MATRIZ_DE_IDENTIFICACIÓN_DE_PELIGROS.xlsx')" target="_blank")
                span Descargar
                i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema5',
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
