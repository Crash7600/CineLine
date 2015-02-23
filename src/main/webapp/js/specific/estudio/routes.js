/* 
 * Copyright (C) 2014 rafa
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


function fEstudioRoutes() {

//    Path.map("#/documento").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('documento').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/estudio").to(function () {
        $('#indexContenidoJsp').spinner();
        oEstudioControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oEstudioModel, oEstudioView);
        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oEstudioControl.getClassNameEstudio());
        return false;
    });

    Path.map("#/estudio/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEstudioControl.list($('#indexContenido'), paramsObject, null, oEstudioModel, oEstudioView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/estudio/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEstudioControl.view($('#indexContenido'), paramsObject['id'], oEstudioModel, oEstudioView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/estudio/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEstudioControl.edit($('#indexContenido'), paramsObject['id'], oEstudioModel, oEstudioView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/estudio/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEstudioControl.new($('#indexContenido'), oEstudioModel, oEstudioView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/estudio/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEstudioControl.remove($('#indexContenido'), paramsObject['id'], oEstudioModel, oEstudioView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}