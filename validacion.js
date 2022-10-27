function validar(){
    var form = document.form;
       if(form.correo.value==0){
            alert("El campo email está vacío");
            form.correo.value="";
            form.correo.focus();
             return false;
          }
        }
