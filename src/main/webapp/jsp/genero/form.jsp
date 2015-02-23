<%-- 
 Copyright (C) July 2014 Rafael Aznar

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
--%>

<form class="form-horizontal" role="form" action="#" id="generoForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="titulo">Tipo de genero:</label>
        <div class="col-sm-6">
            <input type="text" id="tipo_genero" class="form-control"  name="tipo_genero" size="25" placeholder="tipo_genero" />
        </div>
    </div>
  

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <div id="messages"></div>
        </div>
    </div>

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-primary" id="submitForm">Guardar</button>
        </div>
    </div>

</form>
        

<script type="text/javascript">

    $(document).ready(function() {
        /**$('#fecha_group').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });*/
        //http://jqueryvalidation.org/documentation/
        $('#generoForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        tipo_genero {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un genero'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El genero debe tener como máximo 255 caracteres'
                                }
                            }
                        }
                     /**    fecha_group: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una fecha'
                                },
                                date: {
                                    format: 'DD/MM/YYYY',
                                    message: 'La fecha no tiene un formato DD/MM/YYYY'
                                }
                            }
                        },
                    /**    evaluacion: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un número para la evaluacion'
                                },
                                integer: {
                                    message: 'El valor de la evaluacion debe ser un entero'
                                },
                                between: {
                                    min: 1,
                                    max: 3,
                                    message: 'La evaluacion debe ser 1, 2 o 3'
                                }
                            }

                        } */
                    /*    activo: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un número para el activo'
                                },
                                integer: {
                                    message: 'El valor del activo debe ser un entero'
                                },
                                between: {
                                    min: 0,
                                    max: 1,
                                    message: 'El activo debe ser 0 o 1'
                                }
                            }

                        } */
                        
                        
                        

                    }
                })
                

                
                ;
     //   $('#fecha_group').on('dp.change dp.show', function(e) {
// Revalidate the date when user change it
     //       $('#generoForm').bootstrapValidator('revalidateField', 'fecha_group');
     //   });
        
    });       

    
    
</script>
     