const socket = io.connect();

/**
 * Crear nueva nota
 * @param {string} title titulo de la nueva nota
 * @param {string} description decripcion de la nueva nota
 */
const saveNote = (title, description) => {
  socket.emit("client:newnote", {
    title,
    description,
  });
};

/**
 * Elminiar nota por id
 * @param {string} id id de la nota
 */
const deleteNote = (id) => {
  socket.emit("client:deletenote", id);
};

/**
 * 
 * @param {string} id id de la nota
 * @param {string} title titulo de la nota
 * @param {string} description descripcion de la nota
 */
const updateNote= (id, title, description) => {
  socket.emit("client:updatenote", {
    id,
    title,
    description,
  });
};

socket.on("server:loadnotes", renderNotes);

socket.on("server:newnote", appendNote);

socket.on("server:selectednote", (note) => {
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  title.value = note.title;
  description.value = note.description;

  savedId = note.id;
});
