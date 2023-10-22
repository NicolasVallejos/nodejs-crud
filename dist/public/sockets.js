"use strict";

var socket = io.connect();
/**
 * Crear nueva nota
 * @param {string} title titulo de la nueva nota
 * @param {string} description decripcion de la nueva nota
 */

var saveNote = function saveNote(title, description) {
  socket.emit("client:newnote", {
    title: title,
    description: description
  });
};
/**
 * Elminiar nota por id
 * @param {string} id id de la nota
 */


var deleteNote = function deleteNote(id) {
  socket.emit("client:deletenote", id);
};
/**
 * 
 * @param {string} id id de la nota
 * @param {string} title titulo de la nota
 * @param {string} description descripcion de la nota
 */


var updateNote = function updateNote(id, title, description) {
  socket.emit("client:updatenote", {
    id: id,
    title: title,
    description: description
  });
};

socket.on("server:loadnotes", renderNotes);
socket.on("server:newnote", appendNote);
socket.on("server:selectednote", function (note) {
  var title = document.getElementById("title");
  var description = document.getElementById("description");
  title.value = note.title;
  description.value = note.description;
  savedId = note.id;
});