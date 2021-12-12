(function(){
   $.ajax({
      type: "GET",
      url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
      
      success: function (response) {
         const data = response
         for(let i = 0; i < data.length; i++){
            $('#estado').append('<option>'+data[i].nome+'</option>')
         }
         
      }
   });
})()

function renderUf(){
   const selectEstado = $('#estado').val()
   $.ajax({
      type: "GET",
      url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
      
      success: function (response) {
         const data = response
         for(let i = 0; i < data.length; i++){
            if(data[i].nome == selectEstado){
               $('#uf').val(data[i].sigla)
            }
         }
         
      }
   });
}

const selectEstado = document.querySelector("#estado")

selectEstado.addEventListener("change", () => renderUf())

