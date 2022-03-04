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
         $("#uf").append("<option>" + estado.sigla + "</option>");
      })
   })
   .catch((error) => console.error('Erro: ', error.status, error.statusText))

const selectUf = document.querySelector("#uf");

selectUf.addEventListener("change", () => {
   getCounties()
      .then((response) => {
         const data = response;
         let municipios = [];
         data.map(municipio => {
            municipios.push($("<option>" + municipio.nome + "</option>"));
         })
         $("#municipio").html(municipios);
      })
      .catch((error) => console.error('Erro: ', error.status, error.statusText))
});
