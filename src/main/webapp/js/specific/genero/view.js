/* 
 * Copyright (C) 2014 raznara
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */


var generoView = function (strClase) {
    this.clase = strClase;
};
generoView.prototype = new view('genero');
generoView.prototype.getClassNameGenero = function () {
    return this.getClassName() + "Vista";
};
var oGeneroView = new generoView('genero');


generoView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
generoView.prototype.loadFormValues = function (valores, campos) {
//                    $('#genero_form #titulo').val(valores['titulo']);
//                    $('#genero_form #contenido').val(valores['contenido']);
//                    $('#genero_form #alta').val(valores['alta']);
//                    $('#genero_form #cambio').val(valores['cambio']);
//                    $('#genero_form #hits').val(valores['hits']);
//                    $('#genero_form #id_usuario').val(valores['id_usuario']);
//                    $('#genero_form #etiquetas').val(valores['etiquetas']);
//                    $('#genero_form #publicado').val(valores['publicado']);
//                    $('#genero_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

generoView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#genero_form #titulo');
//                    valores['contenido'] = $('#genero_form #contenido');
//                    valores['alta'] = $('#genero_form #alta');
//                    valores['cambio'] = $('#genero_form #cambio');
//                    valores['hits'] = $('#genero_form #hits');
//                    valores['id_usuario'] = $('#genero_form #id_usuario');
//                    valores['etiquetas'] = $('#genero_form #etiquetas');
//                    valores['publicado'] = $('#genero_form #publicado');
//                    valores['portada'] = $('#genero_form #portada');

    var disabled = $('#generoForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#generoForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

generoView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#generoForm #obj_usuario_button').unbind('click');
    $("#generoForm #obj_usuario_button").click(function () {
        var oControl = oGeneroControl;  //para probar dejar genero
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "genero");

        $("#generoForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#generoForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oGeneroModel, oGeneroView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_usuario_id').val(id).change();
            $('#obj_usuario_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oGeneroModel, oGeneroView);
        return false;
    });
    $('#generoForm #obj_tipogenero_button').unbind('click');
    $("#generoForm #obj_tipogenero_button").click(function () {
        var oControl = oGeneroControl;

        $("#generoForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de genero'), "", thisObject.getFormFooter(), true);

        $('#generoForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oGeneroModel, oGeneroView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_tipogenero_id').val(id).change();
            $('#obj_tipogenero_desc').text(decodeURIComponent(oTipogeneroModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oGeneroModel, oGeneroView);
        return false;
    });
    $('#contenido_button').unbind('click');
    $('#contenido_button').click(function () {
        //cabecera = '<button id="full-width" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' + '<h3 id="myModalLabel">Edición de contenidos</h3>';
        cabecera = thisObject.getFormHeader('Edición de contenidos');
        //pie = '<button type="button" class="btn btn-default" data-dismiss="modal" aria-hidden="true">Cerrar</button>';                        
        pie = '<a class="btn btn-primary" href="http://creoleparser.googlecode.com/svn/trunk/creoleparser/test_pages/CheatSheetPlus.html">Sintaxis</a>';
        pie += thisObject.getFormFooter();
        contenido = '<div class="row"><div class="col-md-6">';
        contenido += '<textarea type="text" id="contenidomodal" name="contenido" rows="20" cols="70" placeholder="contenido"></textarea>';
        contenido += '</div><div class="col-md-6"><div id="textoparseado"></div></div>';
        contenido += '</div>';

        $('#generoForm').append(thisObject.getEmptyModal());

        util().loadForm('#modal01', cabecera, contenido, pie, true);
        var texto = $('#contenido').val();
        $('#contenidomodal').val(texto);
        util().creoleParse(texto, $('#textoparseado'));
        $('#contenido').val($('#contenidomodal').val());
        $('#contenidomodal').keyup(function () {
            util().creoleParse($('#contenidomodal').val(), $('#textoparseado'));
            $('#contenido').val($('#contenidomodal').val());
        });
        return false;
    });
};

generoView.prototype.okValidation = function (f) {
    $('#generoForm').on('success.form.bv', f);
};