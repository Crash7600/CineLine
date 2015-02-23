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


var estudioView = function (strClase) {
    this.clase = strClase;
};
estudioView.prototype = new view('estudio');
estudioView.prototype.getClassNameEstudio = function () {
    return this.getClassName() + "Vista";
};
var oEstudioView = new estudioView('estudio');


estudioView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
estudioView.prototype.loadFormValues = function (valores, campos) {
//                    $('#estudio_form #titulo').val(valores['titulo']);
//                    $('#estudio_form #contenido').val(valores['contenido']);
//                    $('#estudio_form #alta').val(valores['alta']);
//                    $('#estudio_form #cambio').val(valores['cambio']);
//                    $('#estudio_form #hits').val(valores['hits']);
//                    $('#estudio_form #id_usuario').val(valores['id_usuario']);
//                    $('#estudio_form #etiquetas').val(valores['etiquetas']);
//                    $('#estudio_form #publicado').val(valores['publicado']);
//                    $('#estudio_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

estudioView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#estudio_form #titulo');
//                    valores['contenido'] = $('#estudio_form #contenido');
//                    valores['alta'] = $('#estudio_form #alta');
//                    valores['cambio'] = $('#estudio_form #cambio');
//                    valores['hits'] = $('#estudio_form #hits');
//                    valores['id_usuario'] = $('#estudio_form #id_usuario');
//                    valores['etiquetas'] = $('#estudio_form #etiquetas');
//                    valores['publicado'] = $('#estudio_form #publicado');
//                    valores['portada'] = $('#estudio_form #portada');

    var disabled = $('#estudioForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#estudioForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

estudioView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#estudioForm #obj_usuario_button').unbind('click');
    $("#estudioForm #obj_usuario_button").click(function () {
        var oControl = oEstudioControl;  //para probar dejar estudio
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "estudio");

        $("#estudioForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#estudioForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oEstudioModel, oEstudioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_usuario_id').val(id).change();
            $('#obj_usuario_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oEstudioModel, oEstudioView);
        return false;
    });
    $('#estudioForm #obj_tipoestudio_button').unbind('click');
    $("#estudioForm #obj_tipoestudio_button").click(function () {
        var oControl = oEstudioControl;

        $("#estudioForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de estudio'), "", thisObject.getFormFooter(), true);

        $('#estudioForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oEstudioModel, oEstudioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_tipoestudio_id').val(id).change();
            $('#obj_tipoestudio_desc').text(decodeURIComponent(oTipoestudioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oEstudioModel, oEstudioView);
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

        $('#estudioForm').append(thisObject.getEmptyModal());

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

estudioView.prototype.okValidation = function (f) {
    $('#estudioForm').on('success.form.bv', f);
};