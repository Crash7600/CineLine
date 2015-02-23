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


function fDirectorRoutes() {

//    Path.map("#/documento").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('documento').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/director").to(function () {
        $('#indexContenidoJsp').spinner();
        oDirectorControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oDirectorModel, oDirectorView);
        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oDirectorControl.getClassNameDirector());
        return false;
    });

    Path.map("#/director/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDirectorControl.list($('#indexContenido'), paramsObject, null, oDirectorModel, oDirectorView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/director/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDirectorControl.view($('#indexContenido'), paramsObject['id'], oDirectorModel, oDirectorView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/director/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDirectorControl.edit($('#indexContenido'), paramsObject['id'], oDirectorModel, oDirectorView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/director/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDirectorControl.new($('#indexContenido'), oDirectorModel, oDirectorView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/director/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oDirectorControl.remove($('#indexContenido'), paramsObject['id'], oDirectorModel, oDirectorView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}