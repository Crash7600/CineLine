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


function fRepartoRoutes() {

//    Path.map("#/documento").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('documento').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/reparto").to(function () {
        $('#indexContenidoJsp').spinner();
        oRepartoControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oRepartoModel, oRepartoView);
        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oRepartoControl.getClassNameReparto());
        return false;
    });

    Path.map("#/reparto/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oRepartoControl.list($('#indexContenido'), paramsObject, null, oRepartoModel, oRepartoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/reparto/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oRepartoControl.view($('#indexContenido'), paramsObject['id'], oRepartoModel, oRepartoView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/reparto/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oRepartoControl.edit($('#indexContenido'), paramsObject['id'], oRepartoModel, oRepartoView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/reparto/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oRepartoControl.new($('#indexContenido'), oRepartoModel, oRepartoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/reparto/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oRepartoControl.remove($('#indexContenido'), paramsObject['id'], oRepartoModel, oRepartoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}