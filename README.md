# Proyectos simples de Javascript.

Hay tres archivos JS
* Uno es un "sistema de compra de helados".
* El segundo es una herramienta de compra de boletos de lotería.
* El tercero es un "detector de mentiras".

Debes descomentar las secciones correspondientes en el contenido del archivo HTML.

## Solo debes clonar el proyecto abrirlo en tu editor preferido y cargarlo en el navegador.

## Puedes usar VSCode y aprovechar el plugin Live-server
`http://localhost:5500`

### `<h1>Heladería JS</h1>
    <h2>Presiona en el botón para comprar un helado.</h2>
    <p>El menú es el siguiente.</p>

    <ol>
        <li>Chocolate - $5</li>
        <li>Chicle - $3</li>
        <li>Chocolate y Brownie - $5</li>
        <li>Banana split - $2</li>
    </ol>

    <button onclick="heladeriaJS()">Comprar</button>
    <script src="helados.js"></script>
    `

### `<h3>Lotería JS</h1>
    <h2>El costo del boleto es de $1.</h2>
    <br/>
    
    <ul id="lista">
    </ul>
    
    <button onclick="compraBoletos()">Presiona para comprar.</button>
    <script src="loteria.js"></script>`

### `<h1>Detector de Mentiras JS</h1>
    <h2>Vamos a determinar si mientes o no.</h2>

    <button onClick="detectaMentiras()">Presiona para saber la verdad.</button>    
    
    <script src="detector.js"></script>`
