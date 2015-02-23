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

<form class="form-horizontal" role="form" action="#" id="repartoForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="titulo">Nombre del actor:</label>
        <div class="col-sm-6">
            <input type="text" id="nombre_actor" class="form-control"  name="nombre_actor" size="25" placeholder="nombre_actor" />
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label" for="fecha_group">Fecha de nacimiento:</label> 
        <div class="col-sm-3">           
            <div class='input-group date' id='fecha_group'>
                <input type='text' class="form-control" id='fecha_nacimiento' name="fecha_group" placeholder="fecha_nacimiento" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="titulo">Ciudad:</label>
        <div class="col-sm-6">
            <input type="text" id="ciudad" class="form-control"  name="ciudad" size="25" placeholder="ciudad" />
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
        $('#fecha_group').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
        //http://jqueryvalidation.org/documentation/
        $('#repartoForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        nombre_actor: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un nombre para el actor'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El nombre del actor debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        fecha_group: {
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
                        ciudad: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un nombre de la ciudad'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El nombre de la ciudad debe tener como máximo 255 caracteres'
                                }
                            }
                        }
                        /** evaluacion: {
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

                        }*/
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
        $('#fecha_group').on('dp.change dp.show', function(e) {
// Revalidate the date when user change it
            $('#repartoForm').bootstrapValidator('revalidateField', 'fecha_group');
        });
        
    });       

    
    
</script>
     