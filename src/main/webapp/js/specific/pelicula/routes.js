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


function fPeliculaRoutes() {

//    Path.map("#/documento").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('documento').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/pelicula").to(function () {
        $('#indexContenidoJsp').spinner();
        oPeliculaControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oPeliculaModel, oPeliculaView);
        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oPeliculaControl.getClassNamePelicula());
        return false;
    });

    Path.map("#/pelicula/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPeliculaControl.list($('#indexContenido'), paramsObject, null, oPeliculaModel, oPeliculaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/pelicula/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPeliculaControl.view($('#indexContenido'), paramsObject['id'], oPeliculaModel, oPeliculaView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/pelicula/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPeliculaControl.edit($('#indexContenido'), paramsObject['id'], oPeliculaModel, oPeliculaView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/pelicula/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPeliculaControl.new($('#indexContenido'), oPeliculaModel, oPeliculaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/pelicula/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPeliculaControl.remove($('#indexContenido'), paramsObject['id'], oPeliculaModel, oPeliculaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}