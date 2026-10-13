// Donde duerme la leyenda — lógica del juego y biblioteca.
// Las leyendas se presentan como tradición oral; las versiones pueden variar por región.

const categories = [
  {name:"Voces del monte", color:"#1c5b58", description:"Seres y relatos de la tradición guaraní y litoraleña."},
  {name:"Sombras y misterios", color:"#493b63", description:"Creencias y relatos populares de distintas regiones argentinas."},
  {name:"Secretos del Litoral", color:"#a7813f", description:"Naturaleza, fauna y geografía de Corrientes."},
  {name:"El alma argentina", color:"#234a46", description:"Música, sabores y costumbres compartidas."},
  {name:"Huellas del pasado", color:"#263e5d", description:"Historia y patrimonio argentino."}
];

// Cada pregunta tiene cuatro opciones y un índice de respuesta correcta (0 a 3).
// El orden de las respuestas correctas está mezclado intencionalmente.
const questions = [
 {id:1,cat:0,q:"En muchas versiones populares del Litoral, ¿con qué se asocia al Pombero?",a:["Con el cuidado del monte y los animales, y con ruidos nocturnos","Con la fundación de pueblos coloniales","Con un espíritu que vive en glaciares","Con un barco fantasma del Atlántico"],correct:0,ex:"El Pombero pertenece al imaginario popular del Litoral. Sus rasgos cambian entre relatos y comunidades; no existe una única versión universal."},
 {id:2,cat:3,q:"¿Qué instrumento es muy característico del chamamé actual?",a:["Arpa celta","Acordeón de botones","Sitar","Gaita escocesa"],correct:1,ex:"El acordeón diatónico se volvió uno de los sonidos emblemáticos del chamamé, junto con instrumentos como guitarra, bandoneón y contrabajo."},
 {id:3,cat:2,q:"¿Qué tipo de ambiente predomina en los Esteros del Iberá?",a:["Desierto de altura","Bosque de coníferas frío","Humedales con lagunas, esteros y vegetación acuática","Glaciar de montaña"],correct:2,ex:"Iberá es un gran sistema de humedales correntinos. Sus aguas y ambientes variados sostienen una gran diversidad de plantas y animales."},
 {id:4,cat:4,q:"¿En qué año se declaró la Independencia de las Provincias Unidas en Sud América?",a:["1810","1812","1820","1816"],correct:3,ex:"La declaración se realizó el 9 de julio de 1816 en el Congreso reunido en San Miguel de Tucumán."},
 {id:5,cat:1,q:"La Luz Mala aparece en relatos rurales argentinos. ¿Cómo conviene entenderla en un estudio cultural?",a:["Como una creencia popular con distintas explicaciones tradicionales","Como un fenómeno sobrenatural demostrado científicamente","Como un faro construido en la cordillera","Como un personaje documentado en actas de gobierno"],correct:0,ex:"La Luz Mala forma parte del folclore rural. Los relatos la interpretan de distintas maneras, pero esas explicaciones pertenecen a la creencia popular."},
 {id:6,cat:0,q:"En algunas versiones del relato, ¿qué rasgo se asocia al Yasí Yateré?",a:["Vive bajo el mar y canta como una ballena","Es un ser pequeño relacionado con la siesta y el silbido","Custodia una ciudad de oro comprobada","Es un héroe de la Revolución de Mayo"],correct:1,ex:"El Yasí Yateré aparece en relatos guaraníes y litoraleños, a menudo vinculado con la siesta y un silbido característico. Hay variantes regionales."},
 {id:7,cat:2,q:"¿Cuál de estos animales es un mamífero nativo presente en la región del Iberá?",a:["Oso polar","Canguro rojo","Aguará guazú","Panda gigante"],correct:2,ex:"El aguará guazú es un cánido sudamericano de patas largas, asociado a pastizales y humedales. Es una especie emblemática de la región."},
 {id:8,cat:4,q:"¿Qué ciudad correntina fue fundada por Juan Torres de Vera y Aragón en 1588?",a:["Goya","Mercedes","Paso de los Libres","Corrientes"],correct:3,ex:"La ciudad de Corrientes fue fundada el 3 de abril de 1588 y es una de las ciudades históricas de la región."},
 {id:9,cat:1,q:"¿Qué describe mejor a la Salamanca en relatos folclóricos del noroeste argentino?",a:["Un lugar legendario asociado a reuniones secretas y saberes mágicos","Un registro oficial de universidades medievales","Un parque nacional patagónico","Una batalla naval documentada"],correct:0,ex:"La Salamanca es un motivo folclórico presente en distintas versiones regionales, especialmente del noroeste. No debe confundirse con un lugar histórico comprobado."},
 {id:10,cat:3,q:"El sapukay, asociado al chamamé, puede expresar…",a:["Únicamente una señal de tránsito","Emociones profundas como alegría, tristeza o valentía","El nombre de una danza europea sin voz","Una medida de distancia fluvial"],correct:1,ex:"La UNESCO describe el sapukay como una expresión vocal y corporal capaz de comunicar emociones intensas dentro de la cultura chamamecera."},
 {id:11,cat:0,q:"¿Qué es importante recordar al comparar versiones de una leyenda guaraní?",a:["Que todas las versiones son idénticas","Que una versión escrita elimina las demás","Que la tradición oral puede variar según región y comunidad","Que solo existe si aparece en un documento colonial"],correct:2,ex:"La transmisión oral está viva: nombres, detalles y sentidos pueden variar. Conviene escuchar a las comunidades y evitar presentar una versión como la única."},
 {id:12,cat:4,q:"¿En qué localidad de Corrientes nació José de San Martín?",a:["Itatí","Curuzú Cuatiá","Bella Vista","Yapeyú"],correct:3,ex:"José de San Martín nació en Yapeyú el 25 de febrero de 1778, cuando el territorio formaba parte del Virreinato del Río de la Plata."},
 {id:13,cat:2,q:"¿Cuál de estas afirmaciones sobre los humedales es correcta?",a:["Pueden almacenar agua y ofrecer hábitat a numerosas especies","Siempre son terrenos sin vida","Solo existen en zonas polares","No influyen en el ciclo del agua"],correct:0,ex:"Los humedales participan en el almacenamiento y circulación del agua, además de ofrecer refugio, alimento y zonas de reproducción para muchas especies."},
 {id:14,cat:1,q:"La Difunta Correa es conocida principalmente como…",a:["Una reina europea documentada en la Edad Media","Una figura de devoción popular argentina","Una especie de ave del Iberá","Una danza tradicional correntina"],correct:1,ex:"La Difunta Correa es objeto de devoción popular, especialmente en San Juan. Las narraciones sobre su vida pertenecen a la tradición devocional y tienen versiones."},
 {id:15,cat:3,q:"¿Qué caracteriza al chipá tradicional de la región guaranítica?",a:["Se prepara principalmente con centeno y manzana","Es una sopa de pescado fermentado","Suele elaborarse con almidón de mandioca y queso","Es un pan dulce hecho solo con miel"],correct:2,ex:"Existen muchas recetas de chipá, pero una preparación muy difundida combina almidón de mandioca, queso, huevos y materia grasa."},
 {id:16,cat:0,q:"¿Cuál de estos nombres corresponde a una figura del imaginario guaraní y litoraleño?",a:["Minotauro","Hércules","Fénix","Moñái"],correct:3,ex:"Moñái forma parte del conjunto de seres legendarios presentes en relatos guaraníes. Las descripciones exactas varían entre recopilaciones."},
 {id:17,cat:4,q:"¿Qué ocurrió el 25 de mayo de 1810 en Buenos Aires?",a:["Se formó la Primera Junta de gobierno","Se declaró la independencia en Tucumán","Se sancionó la Constitución de 1853","Se fundó la ciudad de Corrientes"],correct:0,ex:"La Revolución de Mayo inició un proceso político que condujo años después a la declaración de independencia de 1816."},
 {id:18,cat:1,q:"La Ciudad de los Césares es un ejemplo de…",a:["Una capital argentina actual","Una ciudad legendaria buscada en relatos sobre riquezas ocultas","Una ciudad fundada con fecha y acta conservadas","Un sitio Ramsar correntino"],correct:1,ex:"La Ciudad de los Césares pertenece a relatos legendarios sobre una ciudad extraordinaria, cuya ubicación y existencia se imaginaron de diversas formas."},
 {id:19,cat:2,q:"¿Cuál de estos reptiles puede encontrarse en ambientes acuáticos de Corrientes?",a:["Iguana marina de Galápagos","Cocodrilo del Nilo","Yacaré","Dragón de Komodo"],correct:2,ex:"Los yacarés son reptiles nativos de Sudamérica y están asociados a ambientes acuáticos. En Iberá forman parte de la fauna característica."},
 {id:20,cat:3,q:"¿Qué significa que el chamamé sea patrimonio cultural inmaterial?",a:["Que es una pieza guardada únicamente en un museo","Que es una tradición que no puede cambiar","Que solo se practica en escenarios oficiales","Que es una práctica viva transmitida por comunidades y generaciones"],correct:3,ex:"La inscripción de la UNESCO reconoce una expresión cultural viva: música, danza, reuniones y conocimientos que las comunidades mantienen y transforman."},
 {id:21,cat:0,q:"En la tradición popular, el Lobizón suele relacionarse con…",a:["La transformación de una persona en una criatura semejante a un lobo o perro","El origen del río Paraná","La creación del mate","La fundación de Yapeyú"],correct:0,ex:"El Lobizón es una figura del folclore rioplatense y litoraleño. Sus rasgos se narran de maneras distintas y forman parte de la creencia popular."},
 {id:22,cat:4,q:"¿Qué río forma parte de la frontera oriental de Corrientes con Uruguay?",a:["Río Colorado","Río Uruguay","Río Limay","Río Chubut"],correct:1,ex:"El río Uruguay bordea el este de la provincia de Corrientes en parte de su recorrido y es uno de los grandes cursos de agua de la región."},
 {id:23,cat:1,q:"La Mulánima aparece en relatos populares de varias zonas argentinas. ¿Qué conviene evitar al contarla?",a:["Mencionar que existen variantes","Identificarla como folclore","Presentar sus elementos sobrenaturales como hechos comprobados","Explicar su presencia en la tradición oral"],correct:2,ex:"Una leyenda puede ser culturalmente importante sin ser un hecho comprobado. Distinguir creencia y evidencia permite respetar el relato sin confundir categorías."},
 {id:24,cat:2,q:"¿Qué función ecológica puede cumplir la vegetación de los humedales?",a:["Eliminar toda humedad del ambiente","Impedir que existan aves","Convertir el agua dulce en lava","Ofrecer refugio y alimento a animales"],correct:3,ex:"La vegetación acuática y ribereña crea microhábitats, aporta alimento y lugares de refugio y anidación para numerosas especies."},
 {id:25,cat:3,q:"¿Qué ingrediente aporta la base característica a muchas recetas de chipá?",a:["Almidón de mandioca","Harina de centeno exclusivamente","Harina de maíz tostado como único ingrediente","Cacao amargo"],correct:0,ex:"El almidón de mandioca es un ingrediente central en muchas variantes del chipá, aunque las recetas familiares cambian en quesos, proporciones y textura."},
 {id:26,cat:0,q:"¿Qué idea aparece en muchos relatos tradicionales sobre seres del monte?",a:["Que el monte es un escenario sin valor cultural","Que la relación con la naturaleza merece respeto y cuidado","Que los relatos sustituyen toda observación científica","Que todas las comunidades creen exactamente lo mismo"],correct:1,ex:"Los relatos pueden expresar normas, temores y formas de relacionarse con el entorno. Su significado depende de quién los cuenta y dónde circulan."},
 {id:27,cat:4,q:"¿Qué se conmemora en Argentina el 9 de julio?",a:["La fundación de Buenos Aires","La creación del Parque Nacional Iberá","La Declaración de la Independencia de 1816","La Revolución de Mayo"],correct:2,ex:"El 9 de julio recuerda la declaración de independencia aprobada en 1816 por el Congreso de Tucumán."},
 {id:28,cat:1,q:"¿Cuál es una forma responsable de estudiar la Luz Mala?",a:["Afirmar que toda aparición tiene origen sobrenatural","Usarla como prueba de una ciudad perdida","Dar por cierta una única explicación sin investigar","Comparar el relato folclórico con explicaciones naturales posibles"],correct:3,ex:"El folclore estudia cómo las comunidades interpretan experiencias. Investigar fenómenos luminosos requiere observación y evidencia, no asumir una causa sobrenatural."},
 {id:29,cat:2,q:"¿Qué afirmación sobre el río Paraná es correcta?",a:["Es uno de los grandes ríos de Sudamérica y forma parte de la geografía correntina","Nace en la Antártida","Es un río subterráneo exclusivo de Corrientes","Desemboca en el océano Pacífico"],correct:0,ex:"El Paraná es uno de los principales ríos de Sudamérica. Su cuenca conecta territorios y ecosistemas y tiene gran importancia histórica y económica."},
 {id:30,cat:3,q:"¿En qué año inscribió la UNESCO al chamamé en su Lista Representativa del Patrimonio Cultural Inmaterial?",a:["1992","2020","2001","2015"],correct:1,ex:"La UNESCO inscribió el chamamé en 2020, reconociendo su valor como expresión cultural viva especialmente extendida en Corrientes."}
];

const legends = [
 {id:"pombero",name:"El Pombero",symbol:"♧",region:"Corrientes y Litoral",tags:["Corrientes y Litoral","Tradición guaraní","Misterios y creencias populares","Naturaleza y relatos regionales"],intro:"Una presencia del monte que se reconoce en silbidos, pasos y relatos nocturnos.",story:"En muchas narraciones del nordeste argentino y Paraguay, el Pombero es una figura pequeña y escurridiza vinculada al monte, los animales y los sonidos que se oyen cuando cae la noche. Algunas versiones lo describen como protector de ciertos espacios naturales; otras cuentan que puede inquietarse si las personas no respetan su entorno. En las casas y los campos, el relato se transmitió durante generaciones como advertencia, explicación y forma de nombrar aquello que parece moverse fuera de la vista. No hay una única historia: cada comunidad le agrega matices y sentidos propios.",origin:"Se relaciona con tradiciones orales guaraníes y litoraleñas, extendidas por zonas de Argentina y Paraguay. No pertenece exclusivamente a Corrientes.",variants:"Cambian su aspecto, sus hábitos y la manera de tratar con él. En algunos relatos tiene un papel protector; en otros, puede ser travieso o temible.",fact:"La Biblioteca Nacional Argentina incluye al Pombero entre las figuras del imaginario mitológico del Litoral. La leyenda forma parte del folclore, no de una descripción científica de un ser comprobado."},
 {id:"yasi",name:"Yasí Yateré",symbol:"☾",region:"Tradición guaraní y Litoral",tags:["Corrientes y Litoral","Tradición guaraní","Misterios y creencias populares"],intro:"Un personaje del imaginario guaraní asociado, en muchas versiones, a la siesta y al silbido.",story:"El Yasí Yateré —también escrito Jasy Jatere— aparece en relatos de tradición guaraní y del Litoral. En versiones muy difundidas se lo presenta como un ser pequeño, de apariencia llamativa, que recorre los alrededores durante la siesta y emite un silbido particular. Algunos cuentos lo vinculan con el cuidado de los niños y con advertencias para no alejarse sin compañía; otros enfatizan su carácter misterioso. Como ocurre con muchas leyendas transmitidas oralmente, los detalles no son idénticos en todas las regiones ni en todas las familias.",origin:"Pertenece a tradiciones orales guaraníes presentes en distintos territorios del área cultural guaranítica, incluido el nordeste argentino.",variants:"El nombre puede aparecer como Yasí Yateré o Jasy Jatere. Su aspecto y sus acciones cambian entre relatos; las grafías también varían según la forma de transcribir el guaraní.",fact:"La variedad de nombres recuerda que las lenguas y tradiciones orales se transforman al escribirse y transmitirse entre comunidades."},
 {id:"curupi",name:"Curupí",symbol:"♜",region:"Tradición guaraní",tags:["Corrientes y Litoral","Tradición guaraní","Misterios y creencias populares"],intro:"Una figura legendaria del repertorio guaraní, conocida en distintas versiones regionales.",story:"Curupí forma parte del conjunto de seres del imaginario guaraní y aparece en relatos que se transmitieron oralmente en diferentes zonas. Las descripciones de su apariencia y comportamiento no son uniformes: algunas recopilaciones lo representan como una presencia extraña del monte y otras acentúan su carácter inquietante. Más que un personaje con biografía fija, Curupí pertenece a un universo narrativo donde los seres sobrenaturales expresan advertencias, temores y formas de explicar lo desconocido. Por eso, al leer una versión, conviene recordar quién la recopiló y de qué región proviene.",origin:"Se lo encuentra en relatos guaraníes de una región cultural que cruza fronteras actuales; no debe atribuirse a una sola provincia.",variants:"Las características físicas y las acciones cambian mucho entre las fuentes populares. Esta ficha evita fijar una descripción única como si fuera universal.",fact:"Las recopilaciones de folclore son registros de versiones concretas, no una lista definitiva de cómo debe ser cada personaje."},
 {id:"lobizon",name:"El Lobizón",symbol:"☽",region:"Litoral y Río de la Plata",tags:["Corrientes y Litoral","Leyendas argentinas","Misterios y creencias populares"],intro:"Una creencia popular sobre transformaciones nocturnas, extendida en el área rioplatense.",story:"El Lobizón es una figura del folclore rioplatense y litoraleño asociada a la transformación de una persona en una criatura semejante a un lobo o perro. Los relatos circularon en distintas formas y se mezclaron con creencias europeas sobre hombres lobo y con contextos locales. Durante mucho tiempo, estas historias funcionaron como relatos de advertencia y misterio contados en reuniones familiares o rurales. La leyenda no constituye evidencia de transformaciones reales: su importancia está en la manera en que viajó, cambió y se integró al imaginario popular.",origin:"Se encuentra en relatos de Argentina, Uruguay y Paraguay, con variantes que se relacionan con tradiciones europeas y locales.",variants:"Varían las condiciones de la transformación, las fechas y los rasgos de la criatura. Ninguna versión representa por sí sola a todas las comunidades.",fact:"La figura del Lobizón muestra cómo los relatos viajan entre culturas y adquieren características propias en cada región."},
 {id:"monai",name:"Moñái",symbol:"≈",region:"Tradición guaraní",tags:["Corrientes y Litoral","Tradición guaraní","Misterios y creencias populares","Naturaleza y relatos regionales"],intro:"Un ser legendario incluido en el repertorio de criaturas de la tradición guaraní.",story:"Moñái es uno de los nombres que aparecen en recopilaciones del imaginario mitológico guaraní, junto con otros seres que pueblan montes, aguas y espacios de la vida cotidiana. Las descripciones de Moñái varían según la fuente: algunas lo vinculan con espacios abiertos y otras lo presentan dentro de relatos sobre criaturas extraordinarias. No existe una versión única que pueda resumir todas las narraciones. Como sucede con otros personajes de la tradición oral, su historia debe leerse como parte de una colección de voces y no como una ficha zoológica.",origin:"Forma parte del universo narrativo guaraní difundido en Paraguay y regiones vecinas, incluido el nordeste argentino.",variants:"Las características y funciones que se le atribuyen cambian entre las versiones recopiladas. La ficha no pretende imponer una descripción definitiva.",fact:"Los nombres de seres míticos suelen escribirse de formas distintas al pasar del habla a los textos en español."},
 {id:"aoao",name:"Ao Ao",symbol:"✧",region:"Tradición guaraní",tags:["Corrientes y Litoral","Tradición guaraní","Misterios y creencias populares"],intro:"Una criatura de relatos guaraníes que forma parte de un conjunto de seres legendarios.",story:"Ao Ao aparece en recopilaciones de mitología guaraní como uno de los seres extraordinarios que forman parte de relatos transmitidos entre generaciones. En algunas versiones, la historia se conecta con el monte, la persecución y el peligro de internarse en ciertos lugares. Los detalles cambian de una narración a otra, como suele ocurrir cuando los relatos se cuentan oralmente y se adaptan a nuevos públicos. Su presencia actual en libros, ilustraciones y actividades escolares muestra cómo los personajes tradicionales siguen inspirando nuevas formas de contar.",origin:"Se relaciona con tradiciones guaraníes compartidas a través de fronteras contemporáneas.",variants:"Cambian la descripción del ser, el desarrollo de la persecución y el desenlace. Conviene indicar qué versión se está contando.",fact:"Ao Ao suele aparecer junto a otros seres en recopilaciones de mitología guaraní, como parte de un universo narrativo compartido."},
 {id:"teju",name:"Tejú Jagua",symbol:"◈",region:"Tradición guaraní",tags:["Corrientes y Litoral","Tradición guaraní","Misterios y creencias populares"],intro:"Uno de los seres extraordinarios que aparecen en relatos de la mitología guaraní.",story:"Tejú Jagua integra el repertorio de criaturas legendarias que aparecen en relatos guaraníes y en recopilaciones modernas de mitología regional. Su nombre combina palabras de la lengua guaraní que suelen asociarse con lagarto y perro, aunque las interpretaciones de los personajes y sus rasgos dependen de la versión consultada. En las narraciones se lo presenta como un ser extraordinario, y su figura se ha recreado en ilustraciones, libros y materiales educativos. La historia debe entenderse dentro de una tradición narrativa, no como una descripción de un animal real.",origin:"Pertenece al imaginario mitológico guaraní difundido en Paraguay y áreas culturales vecinas.",variants:"Las versiones difieren en su apariencia, sus capacidades y el lugar que ocupa entre otros seres míticos.",fact:"El uso de palabras guaraníes en los nombres de estas figuras conserva huellas lingüísticas de la región."},
 {id:"karai",name:"Karaí Octubre",symbol:"☼",region:"Litoral y tradición popular",tags:["Corrientes y Litoral","Tradición guaraní","Misterios y creencias populares"],intro:"Una creencia popular ligada a octubre, la comida y la idea de compartir para evitar la escasez.",story:"Karaí Octubre es una figura de la tradición popular del nordeste argentino y Paraguay. El relato se relaciona con la llegada de octubre, época que en el calendario rural tradicional podía asociarse con la escasez de alimentos antes de nuevas cosechas. En algunas costumbres se prepara comida abundante, como el jopara, y se comparte para expresar hospitalidad y alejar la falta. Las prácticas cambian entre localidades y familias; más que una regla idéntica en todas partes, es una tradición que une narración, alimentación y memoria comunitaria.",origin:"Se relaciona con tradiciones populares guaraníes y rurales de Paraguay y el nordeste argentino.",variants:"Cambian los platos, los rituales y la explicación de la figura según el lugar. No todas las familias celebran la fecha del mismo modo.",fact:"La historia conecta el folclore con la vida material: las estaciones, las cosechas y la importancia de compartir alimentos."},
 {id:"salamanca",name:"La Salamanca",symbol:"♬",region:"Noroeste argentino",tags:["Leyendas argentinas","Misterios y creencias populares"],intro:"Un lugar legendario vinculado en relatos del noroeste con música, reuniones secretas y saberes mágicos.",story:"En el folclore del noroeste argentino, la Salamanca se cuenta como un lugar oculto donde, según la creencia, se reúnen seres y personas para aprender artes extraordinarias o participar de encuentros misteriosos. La música y la danza aparecen en muchas versiones, junto con pruebas que debe superar quien intenta entrar. El relato tiene raíces y paralelos en tradiciones ibéricas y fue transformándose en el territorio americano. No existe evidencia de una Salamanca sobrenatural como la narran las leyendas; su valor está en la historia cultural que conserva y en sus variantes locales.",origin:"Especialmente presente en el folclore del noroeste argentino, aunque existen motivos semejantes en otras tradiciones.",variants:"La ubicación, los personajes y las pruebas cambian según la provincia y el narrador.",fact:"La Biblioteca Nacional Argentina ha utilizado figuras del imaginario folclórico en propuestas para conocer el bestiario y las leyendas del país."},
 {id:"luzmala",name:"La Luz Mala",symbol:"☄",region:"Folclore rural argentino",tags:["Leyendas argentinas","Misterios y creencias populares","Naturaleza y relatos regionales"],intro:"Una luz misteriosa de los relatos rurales, interpretada de distintas maneras por la tradición popular.",story:"En relatos rurales de Argentina, la Luz Mala es una luz que se observa o se imagina sobre el campo, especialmente de noche. Algunas versiones la vinculan con almas o presencias misteriosas; otras la relacionan con lugares que conviene evitar. Estas interpretaciones forman parte del folclore y no constituyen una explicación científica. Los fenómenos luminosos nocturnos pueden tener causas naturales diversas, por lo que una investigación actual debe separar la experiencia observada de la interpretación cultural que se le da.",origin:"Circula en diferentes regiones rurales de Argentina y en relatos de países vecinos, con explicaciones locales.",variants:"Cambian el color, el lugar y el significado atribuido a la luz. La explicación folclórica no es uniforme.",fact:"La Luz Mala es un buen ejemplo para comparar cómo una comunidad narra un fenómeno y cómo la ciencia intenta estudiar sus posibles causas."},
 {id:"difunta",name:"La Difunta Correa",symbol:"♡",region:"San Juan, Argentina",tags:["Leyendas argentinas","Misterios y creencias populares"],intro:"Figura de devoción popular argentina, especialmente vinculada a la provincia de San Juan.",story:"La Difunta Correa es una figura de devoción popular cuyo santuario más conocido se encuentra en la provincia de San Juan. La tradición cuenta que Deolinda Correa emprendió un viaje en busca de su marido durante las guerras civiles del siglo XIX y murió en el camino; según el relato devocional, su bebé sobrevivió al alimentarse de ella. La historia circula en distintas versiones y la devoción se expresa mediante promesas, agradecimientos y ofrendas, a menudo botellas de agua. Es importante distinguir la narración de fe de una biografía histórica documentada en todos sus detalles.",origin:"La devoción está especialmente arraigada en Vallecito, San Juan, y se extendió a otras partes de Argentina.",variants:"Hay diferencias en los detalles del viaje y en cómo se relata el episodio del niño. La tradición devocional se mantiene viva y diversa.",fact:"Las botellas de agua que dejan los visitantes suelen interpretarse como símbolo de ayuda a quien viaja por zonas áridas."},
 {id:"ciudadcesares",name:"La Ciudad de los Césares",symbol:"⌂",region:"Relatos de la Patagonia y el sur",tags:["Leyendas argentinas","Misterios y creencias populares"],intro:"Una ciudad extraordinaria, rica y escondida, buscada en relatos históricos y legendarios del sur americano.",story:"La Ciudad de los Césares es una ciudad legendaria que aparece en relatos de exploradores y viajeros de la época colonial sobre el sur de Sudamérica. Se la describía como un lugar remoto, a veces rico en metales preciosos y habitado por comunidades misteriosas. Las búsquedas y relatos se mezclaron con rumores, mapas incompletos y expectativas europeas sobre territorios poco conocidos. No se ha comprobado la existencia de la ciudad tal como la describían esas narraciones. Hoy se estudia como parte de la historia de las exploraciones, la imaginación geográfica y los mitos de frontera.",origin:"Se asocia con relatos sobre la Patagonia y otras zonas australes de Sudamérica, con variantes en Chile y Argentina.",variants:"Cambian la ubicación imaginada, el origen de sus habitantes y las riquezas que se le atribuyen.",fact:"La leyenda permite observar cómo los rumores y la falta de información precisa podían influir en los mapas y las expediciones."},
 {id:"mulanima",name:"La Mulánima",symbol:"♞",region:"Folclore del noroeste y centro argentino",tags:["Leyendas argentinas","Misterios y creencias populares"],intro:"Una figura sobrenatural del folclore regional, con versiones que cambian entre provincias.",story:"La Mulánima es una figura del folclore presente en distintas zonas de Argentina, especialmente en relatos del noroeste y centro del país. A menudo se la describe como una aparición con forma de mula, asociada a caminos nocturnos, ruidos y advertencias morales propias de la época y comunidad que cuenta la historia. Los detalles varían mucho y algunas versiones reflejan valores religiosos y sociales históricos. Como toda narración tradicional, debe contextualizarse en su región y época, sin presentar sus elementos sobrenaturales como hechos comprobados.",origin:"Se registra en tradiciones populares de varias provincias argentinas, con variantes locales.",variants:"El aspecto, el sonido y las razones de su aparición cambian entre los relatos.",fact:"Los caminos rurales y las noches oscuras son escenarios frecuentes del folclore porque combinan experiencias cotidianas con lo desconocido."}
];

const state = {name:"", selectedCount:0, score:0, answered:0, wrong:0, currentQuestion:null, answeredCurrent:false, usedIds:new Set(), available:[], rotation:0, spinning:false, activeFilter:"Todas", search:"", currentLegend:null};
const $ = (selector) => document.querySelector(selector);
const screens = [...document.querySelectorAll(".screen")];
const header = $("#site-header");

function showScreen(id){
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  header.classList.toggle("hidden", id === "welcome");
  if(id === "home") $("#home-greeting").textContent = `${state.name ? `Bienvenida/o, ${state.name}. ` : ""}Hay historias que nunca desaparecen… solamente esperan a que alguien vuelva a contarlas.`;
  window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
}
function safeName(){return state.name.replace(/[<>]/g,"").trim();}
$("#welcome-form").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#player-name").value.trim();
  if(!name){$("#name-error").textContent="Escribí tu nombre para comenzar el viaje.";$("#player-name").focus();return;}
  state.name = name.slice(0,24);
  $("#name-error").textContent="";
  showScreen("home");
});
document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => {
  const target = button.dataset.go;
  if(target==="setup"){resetSetupSelection();showScreen("setup");}
  else if(target==="library"){showScreen("library");renderLibrary();}
  else showScreen("home");
}));

let selectedCount = 0;
function resetSetupSelection(){
  selectedCount = 0;
  document.querySelectorAll(".count-option").forEach(button=>{button.classList.remove("selected");button.setAttribute("aria-pressed","false");});
  $("#setup-error").textContent="";
}
document.querySelectorAll(".count-option").forEach(button => button.addEventListener("click",()=>{
  selectedCount = Number(button.dataset.count);
  document.querySelectorAll(".count-option").forEach(item=>{const chosen=item===button;item.classList.toggle("selected",chosen);item.setAttribute("aria-pressed",String(chosen));});
  $("#setup-error").textContent="";
}));
$("#start-game").addEventListener("click",()=>{
  if(!selectedCount){$("#setup-error").textContent="Elegí cuántas preguntas querés responder antes de continuar.";return;}
  state.selectedCount=selectedCount;state.score=0;state.answered=0;state.wrong=0;state.currentQuestion=null;state.answeredCurrent=false;state.usedIds=new Set();state.available=questions.map(q=>q.id);state.spinning=false;state.rotation=0;
  $("#wheel").style.transform="rotate(0deg)";$("#score-live").textContent="0 puntos";$("#question-progress").textContent=`Pregunta 1 de ${selectedCount}`;$("#player-badge").textContent=safeName();
  $("#category-badge").textContent="Esperando categoría";$("#spin-message").textContent="";$("#spin-button").disabled=false;
  $("#question-content").innerHTML='<div class="question-placeholder"><span>✧</span><h3>Todo comienza con un giro</h3><p>Hacé girar la rueda y dejá que el relato te encuentre.</p></div>';
  showScreen("game");
});

function spinWheel(){
  if(state.spinning || state.answered>=state.selectedCount) return;
  const availableCats = categories.map((cat,index)=>index).filter(index=>questions.some(q=>q.cat===index&&!state.usedIds.has(q.id)));
  if(!availableCats.length){finishGame();return;}
  state.spinning=true;$("#spin-button").disabled=true;$("#spin-message").textContent="La noche está eligiendo…";
  const chosenCat=availableCats[Math.floor(Math.random()*availableCats.length)];
  const sectorSize=72;
  // El puntero está arriba; cada sector mide 72 grados. Ajustamos la rotación para alinear el sector elegido.
  const sectorCenter=chosenCat*sectorSize+sectorSize/2;
  const targetMod=(360-sectorCenter+360)%360;
  const currentMod=((state.rotation%360)+360)%360;
  const extra=(targetMod-currentMod+360)%360;
  state.rotation += 360*5 + extra;
  $("#wheel").style.transform=`rotate(${state.rotation}deg)`;
  window.setTimeout(()=>{
    state.spinning=false;
    $("#spin-button").disabled=false;
    $("#spin-message").textContent=`✦ ${categories[chosenCat].name} ✦`;
    askQuestion(chosenCat);
  },4500);
}
$("#spin-button").addEventListener("click",spinWheel);

function askQuestion(categoryIndex){
  const pool=questions.filter(q=>q.cat===categoryIndex&&!state.usedIds.has(q.id));
  const fallback=questions.filter(q=>!state.usedIds.has(q.id));
  const question=(pool.length?pool:fallback)[Math.floor(Math.random()*(pool.length?pool:fallback).length)];
  if(!question){finishGame();return;}
  state.currentQuestion=question;state.answeredCurrent=false;state.usedIds.add(question.id);
  $("#category-badge").textContent=categories[question.cat].name;
  $("#question-progress").textContent=`Pregunta ${state.answered+1} de ${state.selectedCount}`;
  const options=question.a.map((answer,index)=>({answer,correct:index===question.correct}));
  // Mezclar las opciones para que la respuesta correcta no ocupe siempre el mismo lugar.
  for(let i=options.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[options[i],options[j]]=[options[j],options[i]];}
  state.displayOptions=options;
  $("#question-content").innerHTML=`<h3>${question.q}</h3><div class="answers">${options.map((option,index)=>`<button class="answer-option" data-answer="${index}" type="button"><span class="letter">${String.fromCharCode(65+index)}</span><span>${escapeHTML(option.answer)}</span></button>`).join("")}</div>`;
  document.querySelectorAll(".answer-option").forEach(button=>button.addEventListener("click",()=>answerQuestion(Number(button.dataset.answer))));
}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));}
function answerQuestion(index){
  if(state.answeredCurrent || !state.currentQuestion)return;
  state.answeredCurrent=true;state.answered++;
  const chosen=state.displayOptions[index];const correct=chosen.correct;
  if(correct)state.score++;else state.wrong++;
  document.querySelectorAll(".answer-option").forEach((button,i)=>{
    button.disabled=true;
    if(state.displayOptions[i].correct)button.classList.add("correct");
    else if(i===index)button.classList.add("incorrect");
  });
  $("#score-live").textContent=`${state.score} ${state.score===1?"punto":"puntos"}`;
  $("#question-progress").textContent=`Pregunta ${state.answered} de ${state.selectedCount}`;
  const feedback=document.createElement("div");
  feedback.className=`answer-feedback ${correct?"":"wrong"}`;
  feedback.innerHTML=`<strong>${correct?"✦ ¡Respuesta correcta!":"La respuesta correcta está marcada arriba"}</strong><p>${escapeHTML(state.currentQuestion.ex)}</p>`;
  const next=document.createElement("button");next.type="button";next.className="button button-gold continue-button";next.textContent=state.answered>=state.selectedCount?"Ver resultado final":"Continuar el viaje";
  next.addEventListener("click",()=>{if(state.answered>=state.selectedCount)finishGame();else{ $("#spin-message").textContent="";$("#category-badge").textContent="Esperando categoría";$("#question-content").innerHTML='<div class="question-placeholder"><span>✧</span><h3>La rueda vuelve a llamarte</h3><p>Girá otra vez para descubrir la próxima pregunta.</p></div>';$("#spin-button").disabled=false;$("#spin-button").focus();}});
  feedback.appendChild(next);$("#question-content").appendChild(feedback);
}
function finishGame(){
  const total=state.selectedCount||state.answered;
  const percent=total?Math.round(state.score/total*100):0;
  $("#final-score").textContent=state.score;$("#final-total").textContent=total;$("#correct-count").textContent=state.score;$("#wrong-count").textContent=state.wrong;$("#percentage").textContent=`${percent}%`;
  let message="";
  if(percent===100)message=`${safeName()}, recorriste la noche con mirada atenta: cada respuesta abrió una puerta del archivo.`;
  else if(percent>=70)message=`${safeName()}, reuniste muchas huellas del pasado. Siempre queda otra historia por descubrir.`;
  else if(percent>=40)message=`${safeName()}, cada pregunta te acercó a una historia nueva. El archivo todavía guarda muchos secretos.`;
  else message=`${safeName()}, este fue apenas el primer sendero. Las leyendas se descubren paso a paso, escuchando y preguntando.`;
  $("#result-message").textContent=message;showScreen("results");
}

// Biblioteca: búsqueda por nombre y filtros combinables.
function renderLibrary(){
  const query=state.search.toLocaleLowerCase("es");
  const visible=legends.filter(legend=>{
    const matchesFilter=state.activeFilter==="Todas"||legend.tags.includes(state.activeFilter);
    const matchesQuery=legend.name.toLocaleLowerCase("es").includes(query);
    return matchesFilter&&matchesQuery;
  });
  $("#legend-grid").classList.toggle("hidden",Boolean(state.currentLegend));
  $("#library-sources").classList.toggle("hidden",Boolean(state.currentLegend));
  $("#legend-detail").classList.toggle("hidden",!state.currentLegend);
  $("#no-results").classList.toggle("hidden",Boolean(state.currentLegend)||visible.length>0);
  $("#library-count").classList.toggle("hidden",Boolean(state.currentLegend));
  $("#library-count").textContent=`${visible.length} ${visible.length===1?"relato encontrado":"relatos encontrados"}`;
  $("#legend-grid").innerHTML=visible.map(legend=>`<article class="legend-card"><div class="legend-art" style="--art-glow:${legend.id==="salamanca"?"rgba(214,180,106,.26)":legend.id==="yasi"?"rgba(84,199,193,.23)":"rgba(73,59,99,.28)"}"><span class="art-stars" aria-hidden="true"></span><span class="legend-symbol" aria-hidden="true">${legend.symbol}</span></div><div class="legend-card-body"><span class="legend-region">${escapeHTML(legend.region)}</span><h3>${escapeHTML(legend.name)}</h3><p>${escapeHTML(legend.intro)}</p><button class="button button-outline" type="button" data-legend="${legend.id}">Leer la historia <span aria-hidden="true">→</span></button></div></article>`).join("");
  document.querySelectorAll("[data-legend]").forEach(button=>button.addEventListener("click",()=>openLegend(button.dataset.legend)));
  document.querySelectorAll(".filter-chip").forEach(button=>{const active=button.dataset.filter===state.activeFilter;button.classList.toggle("active",active);button.setAttribute("aria-pressed",String(active));});
}
function openLegend(id){
  const legend=legends.find(item=>item.id===id);if(!legend)return;
  state.currentLegend=id;
  $("#legend-detail").innerHTML=`<div class="detail-hero"><div><p class="eyebrow">${escapeHTML(legend.region)}</p><h3>${escapeHTML(legend.name)}</h3></div><span class="legend-symbol" aria-hidden="true">${legend.symbol}</span></div><div class="detail-content"><p>${escapeHTML(legend.intro)}</p><div class="detail-tags">${legend.tags.map(tag=>`<span>${escapeHTML(tag)}</span>`).join("")}</div><h4>La historia</h4><p>${escapeHTML(legend.story)}</p><h4>Origen y tradición</h4><p>${escapeHTML(legend.origin)}</p><h4>Variantes del relato</h4><p>${escapeHTML(legend.variants)}</p><h4>Un dato cultural</h4><p>${escapeHTML(legend.fact)}</p><button id="back-to-library" class="button button-gold" type="button">← Volver a la biblioteca</button></div>`;
  $("#back-to-library").addEventListener("click",()=>{state.currentLegend=null;renderLibrary();});
  renderLibrary();$("#legend-detail").scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
}
$("#legend-search").addEventListener("input",event=>{state.search=event.target.value;state.currentLegend=null;renderLibrary();});
document.querySelectorAll(".filter-chip").forEach(button=>button.addEventListener("click",()=>{state.activeFilter=button.dataset.filter;state.currentLegend=null;renderLibrary();}));
$("#clear-search").addEventListener("click",()=>{state.search="";state.activeFilter="Todas";$("#legend-search").value="";state.currentLegend=null;renderLibrary();});
renderLibrary();
