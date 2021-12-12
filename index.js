(function(){
   $.ajax({
      type: "GET",
      url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
      
      success: function (response) {
         for(let i = 0; i < response.length; i++){
            console.log(response[i].nome)
            $('#estado').append('<option>'+response[i].nome+'</option>')
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
         for(let i = 0; i < response.length; i++){
            if(response[i].nome == selectEstado){
               $('#uf').html('<option>'+response[i].sigla+'</option>')
            }
         }
         
      }
   });

}

