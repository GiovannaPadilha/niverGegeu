$( document).ready(function() {

    $('#btnEnviar').click(function() {

        if($('#rdbSim').is(':checked')){
            $(Swal.fire({
                title: "se arrasei",
                imageUrl: "img/asmaismais.png",
                imageWidth: 150,
                imageHeight: 100,
               
                
                customClass: {
                title: "titulo-grande",
                
            }}));
        }else{
            $(Swal.fire({
                title: "n se arrasei",
                imageUrl: "img/vilao.png",
                imageWidth: 150,
                imageHeight: 150,
                

                customClass: {
                    title: "titulo-grande",
                    
                }
            }));
        }
    })
})