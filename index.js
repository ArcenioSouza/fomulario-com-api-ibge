function getState() {
   return new Promise((resolve, reject) => {
      resolve(
         $.ajax({
            type: "GET",
            url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",
         })
      )
   });
};

function getCounties() {
   return new Promise((resolve, reject) => {
      const selectUf = $("#uf").val();
      resolve(         
         $.ajax({
            type: "GET",
            url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectUf}/municipios`,
         })
      )
   });
}

getState()
   .then((response) => {
      const data = response;
      data.map(estado => {
         $("#estado").append("<option>" + estado.nome + "</option>");
      })
      /* for (let i = 0; i < data.length; i++) {
         $("#estado").append("<option>" + data[i].nome + "</option>");
      } */
      for (let j = 0; j < data.length; j++) {
         $("#uf").append("<option>" + data[j].sigla + "</option>");
      }
   })
   .catch((error) => console.error('Erro: ', error.status, error.statusText))

const selectUf = document.querySelector("#uf");

selectUf.addEventListener("change", () => {
   getCounties()
      .then((response) => {
         const data = response;
         let municipios = [];
         for (let i = 0; i < data.length; i++) {
            municipios.push($("<option>" + data[i].nome + "</option>"));
         }
         $("#municipio").html(municipios);
      })
      .catch((error) => console.error('Erro: ', error.status, error.statusText))
});
