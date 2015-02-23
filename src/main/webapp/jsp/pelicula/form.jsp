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

<form class="form-horizontal" role="form" action="#" id="peliculaForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="titulo">Nombre de la pelicula:</label>
        <div class="col-sm-6">
            <input type="text" id="nombre_pelicula" class="form-control"  name="nombre_pelicula" size="25" placeholder="nombre_pelicula" />
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="anyo">Anyo de la pelicula:</label>
        <div class="col-sm-2">
            <input type="text"  class="form-control"  id="anyo" name="anyo" size="15" placeholder="anyo" />
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="titulo">Ciudad de la pelicula:</label>
        <div class="col-sm-6">
            <input type="text" id="ciudad" class="form-control"  name="ciudad" size="25" placeholder="ciudad" />
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="titulo">Website de la pelicula:</label>
        <div class="col-sm-6">
            <input type="text" id="website" class="form-control"  name="website" size="25" placeholder="website" />
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="duracion">Duracion de la pelicula:</label>
        <div class="col-sm-2">
            <input type="text"  class="form-control"  id="duracion" name="duracion" size="15" placeholder="duracion" />
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="puntuacion">Puntuacion de la pelicula:</label>
        <div class="col-sm-2">
            <input type="text"  class="form-control"  id="puntuacion" name="puntuacion" size="15" placeholder="puntuacion" />
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="url">URL de la pelicula:</label>
        <div class="col-sm-6">
            <input type="text" id="url" class="form-control"  name="url" size="25" placeholder="url" />
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="id_genero">Genero de la pelicula:</label>
        <div class="col-sm-2">
            <input type="text"  class="form-control"  id="id_genero" name="id_genero" size="15" placeholder="id_genero" />
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
        /*$('#fecha_group').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });*/
        //http://jqueryvalidation.org/documentation/
        $('#peliculaForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        nombre_pelicula: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un nombre para la pelicula'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El nombre de la pelicula debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                     
                        anyo: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un anyo para la pelicula'
                                },
                                integer: {
                                    message: 'El valor del anyo debe ser un entero'
                                }
                                
                            }

                        },
                        ciudad: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una ciudad para la pelicula'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El nombre de la ciudad debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        website: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir la website'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'La website debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        duracion: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una duracion para la pelicula'
                                },
                                integer: {
                                    message: 'La duracion debe ser en minutos'
                                }
                                
                            }

                        },
                        puntuacion: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una puntuacion para la pelicula'
                                },
                                integer: {
                                    message: 'El valor de la puntuacion debe ser un entero'
                                }
                                
                            }

                        },
                        url: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una url para la pelicula'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'La url debe tener como máximo 255 caracteres'
                                }
                            }
                        }
                        
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
      //  $('#fecha_group').on('dp.change dp.show', function(e) {
// Revalidate the date when user change it
      //      $('#peliculaForm').bootstrapValidator('revalidateField', 'fecha_group');
    //    });
        
    });       

    
    
</script>
     