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
<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>

<%
    int id_tipousuario = 0, id_usuario = 0;
    UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
    if (user != null) {
        id_tipousuario = user.getId_tipousuario();
        id_usuario = user.getId();
    }
%>

<div class="panel panel-primary">
    <div data-toggle="collapse" href="#sesion" class="panel-heading">
        <h3 class="panel-title">Sesi�n</h3>
    </div>
    <div class="list-group">
        <div class="collapse" id="sesion">
            <a class="list-group-item" id="lnkHome"  href="jsp">Home</a>
            <a class="list-group-item"  id="lnkLogout" href="jsp?ob=usuario&op=logout">Logout</a>
        </div>
    </div>
</div>
<div class="panel panel-primary">
    <div data-toggle="collapse" href="#users" class="panel-heading">
        <h3 class="panel-title">Gesti�n de Usuarios</h3>
    </div>
    <div class="list-group">
        <div class="collapse" id="users">
            <a  class="list-group-item" id="lnkUsuario" href="jsp#/usuario">Usuario</a>
        </div>
    </div>
</div>

<div class="panel panel-primary">
    <div data-toggle="collapse" href="#tiendaonline" class="panel-heading">
        <h3  class="panel-title">Tienda Online</h3>
    </div>
    <div class="list-group">
        <div class="collapse" id="tiendaonline">
            <a  class="list-group-item" id="lnkProducto" href="jsp#/producto">Producto</a>
        </div>
    </div>
</div>

<div class="panel panel-primary">
    <div data-toggle="collapse" href="#mantenimientos" class="panel-heading">
        <h3 class="panel-title">Mantenimientos</h3>
    </div>
    <div class="list-group">
        <div class="collapse" id="mantenimientos">
            <a  class="list-group-item" id="lnkDirector" href="jsp#/director">Director</a>
            <a  class="list-group-item" id="lnkEstudio" href="jsp#/estudio">Estudio</a>
            <a  class="list-group-item" id="lnkGenero" href="jsp#/genero">Genero</a>
            <a  class="list-group-item" id="lnkPelicula" href="jsp#/pelicula">Pelicula</a>
            <a  class="list-group-item" id="lnkReparto" href="jsp#/reparto">Reparto</a>
        </div>
    </div>
</div>

<div class="panel panel-primary">
    <div data-toggle="collapse" href="#redsocial" class="panel-heading">
        <h3 class="panel-title">Red Social</h3>
    </div>
    <div class="list-group">
        <div class="collapse" id="redsocial">
            <a  class="list-group-item" id="lnkPublicacion" href="jsp#/inicioRedSocial/list/page=1&id=1&rpp=10&vf=4&order=fechacreacion&ordervalue=desc">Inicio</a> 
            <a  class="list-group-item" id="lnkPublicacion" href="jsp#/redsocialperfil/list/systemfilter=id_usuario&systemfilteroperator=equals&systemfiltervalue=<%=id_usuario%>&page=1&id=1&rpp=10&vf=4&order=fechacreacion&ordervalue=desc">Mi perfil</a> 
        </div>
    </div>
</div>

<div class="panel panel-primary">
    <div data-toggle="collapse" href="#foro" class="panel-heading">
        <h3 class="panel-title">Foro</h3>
    </div>
    <div class="list-group">
        <div class="collapse" id="foro">
            <a  class="list-group-item" id="lnkTipotema" href="jsp#/tipotema">Categor�a</a> 
            <a  class="list-group-item" id="lnkTema" href="jsp#/tema">Tema</a> 
            <a  class="list-group-item" id="lnkPost" href="jsp#/post">Post</a> 
            <a  class="list-group-item" id="lnkMensajeprivado" href="jsp#/mensajeprivado">Mensaje privado</a> 
        </div>
    </div>
</div>

<div class="panel panel-primary">
    <div data-toggle="collapse" href="#facturacion" class="panel-heading">
        <h3 class="panel-title">Facturacion</h3>
    </div>
    <div class="list-group">
        <div class="collapse" id="facturacion">
            <a  class="list-group-item" id="lnkDetallePedido" href="jsp#/detalle_pedido">DetallePedido</a>
            <a  class="list-group-item" id="lnkImpuesto" href="jsp#/impuesto">Impuesto</a>
            <a  class="list-group-item" id="lnkProveedor" href="jsp#/proveedor">Proveedor</a> 
            <a  class="list-group-item" id="lnkPedido" href="jsp#/pedido">Pedido</a>    
        </div>
    </div>
</div>

<div class="panel panel-primary">
    <div data-toggle="collapse" href="#tareas" class="panel-heading">
        <h3 class="panel-title">Tareas</h3>
    </div>
    <div class="list-group">
        <div class="collapse" id="tareas">
            <a class="list-group-item" id="lnkPublicacion" href="jsp#/trabajo">Tarea</a>
            <a class="list-group-item" id="lnkPublicacion" href="jsp#/proyecto">Proyecto</a>
            <a class="list-group-item" id="lnkPublicacion" href="jsp#/estadotarea">Estado Tarea</a>
            <a class="list-group-item" id="lnkPublicacion" href="jsp#/tipotarea">Tipo Tarea</a>
        </div>
    </div>    
</div>

<div class="panel panel-primary">
    <div data-toggle="collapse" href="#propuestas" class="panel-heading">
        <h3 class="panel-title">Propuestas y votaciones</h3>
    </div>
    <div class="list-group">
        <div class="collapse" id="propuestas">
            <a class="list-group-item" id="lnkTipotema" href="jsp#/comentario">Comentarios</a>
            <a class="list-group-item" id="lnkTipopropuesta" href="jsp#/tipopropuesta">Tipo propuesta</a>
            <a class="list-group-item" id="lnkPropuesta" href="jsp#/propuesta">Propuesta</a>
        </div>
    </div>
</div>

<div class="panel panel-primary">
    <div data-toggle="collapse" href="#global" class="panel-heading">
        <h3 class="panel-title">Global</h3>
    </div>
    <div class="list-group">
        <div class="collapse" id="global">
            <a  class="list-group-item" id="lnkOrdenador" href="jsp?op=cambia">Cambia el campo</a>
        </div>
    </div>
</div>

<div class="panel panel-primary">
    <div data-toggle="collapse" href="#cuestionario" class="panel-heading">
        <h3 class="panel-title">Cuestionario</h3>
    </div>
    <div class="list-group">
        <div class="collapse" id="cuestionario">
            <a class="list-group-item" id="lnkCuestionario" href="jsp#/cuestionario">Cuestionario</a>
            <a class="list-group-item" id="lnkPregunta" href="jsp#/pregunta">Pregunta</a>
            <a class="list-group-item" id="lnkOpcion" href="jsp#/opcion">Opcion</a>
            <a class="list-group-item" id="lnkRespuesta" href="jsp#/respuesta">Respuesta</a>
        </div>
    </div>
</div>


