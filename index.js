(function () {
   $.ajax({
      type: "GET",
      url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",

      success: function (response) {
         const data = response;
         for (let i = 0; i < data.length; i++) {
            $("#estado").append("<option>" + data[i].nome + "</option>");
         }
      },
   });
})();

function renderUf() {
   const selectEstado = $("#estado").val();
   $.ajax({
      type: "GET",
      url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",

      success: function (response) {
         const data = response;
         for (let i = 0; i < data.length; i++) {
            $("#uf").append("<option>" + data[i].sigla + "</option>");
         }
      },
   });
}

function renderMunicipio() {
   const selectUf = $("#uf").val();
   $.ajax({
      type: "GET",
      url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectUf}/municipios`,

      success: function (response) {
         const data = response;
         let municipios = [];
         for (let i = 0; i < data.length; i++) {
            municipios.push($("<option>" + data[i].nome + "</option>"));
         }
         $("#municipio").html(municipios);
      },
   });
}

const selectEstado = document.querySelector("#estado");
const selectUf = document.querySelector("#uf");
selectEstado.addEventListener("change", () => renderUf());
selectUf.addEventListener("change", () => renderMunicipio());