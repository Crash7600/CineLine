/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.process;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 *
 * @author Alvaro
 */
public class DocumentoGetprettycolumns implements GenericOperation {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
        try {
            String data = "{\"data\": [\"id\", \"Título\", \"Contenido\", \"Fecha\", \"Nota\", \"Usuario\", \"Etiquetas\"]}";
            return data;
        } catch (Exception e) {
            throw new ServletException("DocumentoGetpagesJson: View Error: " + e.getMessage());
        }
    }
}