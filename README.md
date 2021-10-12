# Proyectos simples de Javascript.

Hay varios archivos JS.
* 1 - Un "sistema de compra de helados".
* 2 - Una "herramienta de compra de boletos de lotería".
* 3 - Un "detector de mentiras".
* 4 - Una "herramienta para controlar el ingreso de menores de edad".
* 5 - Uno de funciones generales, operaciones con **for in** y **for of**
* 6 - Calculadora sencilla usando la librería [Math.JS](https://mathjs.org)


Debes descomentar las secciones correspondientes en el contenido del archivo HTML.

## Solo debes clonar el proyecto abrirlo en tu editor preferido y cargarlo en el navegador.

## Puedes usar VSCode y aprovechar el plugin Live-server
`http://localhost:5500`

### HeladeríaJS
`<h1>Heladería JS</h1>
    <h2>Presiona en el botón para comprar un helado.</h2>
    <p>El menú es el siguiente.</p>

    <ol>
        <li>Chocolate - $5</li>
        <li>Chicle - $3</li>
        <li>Chocolate y Brownie - $5</li>
        <li>Banana split - $2</li>
    </ol>

    <button onclick="heladeriaJS()">Comprar</button>
    <script src="src/helados.js"></script>
    `

###  LoteríaJS
`<h3>Lotería JS</h1>
    <h2>El costo del boleto es de $1.</h2>
    <br/>
    
    <ul id="lista">
    </ul>
    
    <button onclick="compraBoletos()">Presiona para comprar.</button>
    <script src="src/loteria.js"></script>`

### MentirasJS
`<h1>Detector de Mentiras JS</h1>
    <h2>Vamos a determinar si mientes o no.</h2>

    <button onClick="detectaMentiras()">Presiona para saber la verdad.</button>    
    
    <script src="src/detector.js"></script>`

### FiestaJS
`<h1>Fiesta JS</h1>
    <p>Vamos a determinar la edad de los invitados, solo mayores de 18 años y luego de las 2am quien ingresa no paga el ingreso.</p>
    
    <main id="principal">
        <ol id="lista">
        </ol>
    </main>

    <button onClick="verificarEdad_Horario()">Presiona para verificar.</button>   
    
    <script src="src/ejercicio_mayoria_edad.js"></script>
`

### CalculadoraJS - Math.JS
`   <h1>Calculadora JS</h1>
    <h2>Calculadora sencilla usando la librería <a href="https://unpkg.com/mathjs@9.5.0/lib/browser/math.js">MathJS</a></h2>

    <p>Ingrese la expresión:</p>
    <div id="seccion-calculadora">
        <input id="calculadora" name="calculadora" type="text" placeholder="2+2" onkeydown="calcular()"/><br />      
    </div>
    <button id="boton" onclick='calcular()' value="submit">Calcular</button>

    <script src="src/math.js"></script>
    <script src="src/calculadora_simple.js"></script>
`
