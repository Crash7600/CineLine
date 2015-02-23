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


function fGeneroRoutes() {

//    Path.map("#/documento").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('documento').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/genero").to(function () {
        $('#indexContenidoJsp').spinner();
        oGeneroControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oGeneroModel, oGeneroView);
        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oGeneroControl.getClassNameGenero());
        return false;
    });

    Path.map("#/genero/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oGeneroControl.list($('#indexContenido'), paramsObject, null, oGeneroModel, oGeneroView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/genero/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oGeneroControl.view($('#indexContenido'), paramsObject['id'], oGeneroModel, oGeneroView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/genero/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oGeneroControl.edit($('#indexContenido'), paramsObject['id'], oGeneroModel, oGeneroView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/genero/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oGeneroControl.new($('#indexContenido'), oGeneroModel, oGeneroView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/genero/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oGeneroControl.remove($('#indexContenido'), paramsObject['id'], oGeneroModel, oGeneroView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}