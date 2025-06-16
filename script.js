const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");

//variabile per sapere quale delle tre variabili stiamo usando
let currentVariable = 0;
const variables = ["profondita1", "profondita2", "profondita3"];

//carico i dati dal file JSON
d3.json("data.json").then(data => {
  
  //creo una scala orizzontale per distribuire le balene da sinistra a destra
  const xScale = d3.scalePoint()
    .domain(data.map(d => d.id)) //ogni balena ha un id
    .range([100, width - 100]); 

  //funzione per creare la scala verticale per una variabile
  function getYScale(variable) {
    return d3.scaleLinear()
      .domain(d3.extent(data, d => d[variable])) //valori min e max della variabile
      .range([height - 100, 100]); //disegno invertito: y alto = valore basso
  }

  //scala iniziale (con la prima variabile)
  let yScale = getYScale(variables[currentVariable]);

  //disegno le balene come immagini
  svg.selectAll("image")
    .data(data)
    .enter()
    .append("image")
    //uso "xlink:href"(anche se deprecato) invece di "href" per compatibilità garantita con tutti i browser
    .attr("xlink:href", "images/whale.png")
    .attr("width", 60)
    .attr("height", 40)
    .attr("x", d => xScale(d.id) - 30) //centro la balena rispetto alla x
    .attr("y", d => yScale(d[variables[currentVariable]]) - 20) //centro rispetto alla y
    .attr("class", "whale") //attribuisci la classe whale a immagini di balena(per modifica al passaggio del cursore)
    .on("click", () => {
      //cambio variabile al click
      currentVariable = (currentVariable + 1) % variables.length;
      yScale = getYScale(variables[currentVariable]);

      //animo le balene verso la nuova profondità
      svg.selectAll("image")
        .transition()
        .duration(1000)
        .attr("y", d => yScale(d[variables[currentVariable]]) - 20);
    });
});
