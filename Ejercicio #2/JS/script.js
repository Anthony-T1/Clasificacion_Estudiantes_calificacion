const fnInicializar = () => {
  let sRespuestaUsuario = "";
  let iCantidadEstudiantes;
  let NotaEstudiante;
  let NotaPromedio = 0;
  try {
    do {
      sRespuestaUsuario = prompt("Ingrese la cantidad de estudiantes");
      if (sRespuestaUsuario == null) {
        alert("Hasta pronto");
        return;
      }

      if (isNaN(sRespuestaUsuario)) {
        alert("Debe ingresar numeros");
      } else if (Number(sRespuestaUsuario) <= 0) {
        alert("Debe ser un numero positivo y mayor a 0");
      } else {
        iCantidadEstudiantes = Number(sRespuestaUsuario);
      }
    } while (isNaN(iCantidadEstudiantes) || iCantidadEstudiantes <= 0);
    for (let i = 1; i <= iCantidadEstudiantes; i++) {
      NotaEstudiante = prompt(`Ingrese la calificación del estudiante ${i}`);
      NotaEstudiante = isNaN(NotaEstudiante) ? 0 : Number(NotaEstudiante);
      switch (true) {
        case NotaEstudiante >= 90:
          document.getElementById("nav_list_Excelente").innerHTML += `<li>Estudiante #${i} - Calificación : ${NotaEstudiante}</li>`;
          break;
        case NotaEstudiante >= 75 && NotaEstudiante < 90:
          document.getElementById("nav_list_Bueno").innerHTML += `<li>Estudiante #${i} - Calificación : ${NotaEstudiante}</li>`;
          break;
        case NotaEstudiante >= 60 && NotaEstudiante < 75:
          document.getElementById("nav_list_Regular").innerHTML += `<li>Estudiante #${i} - Calificación : ${NotaEstudiante}</li>`;
          break;
        case NotaEstudiante < 60:
          document.getElementById("nav_list_NecesitaMejorar").innerHTML += `<li>Estudiante #${i} - Calificación : ${NotaEstudiante}</li>`;
          break;
      }
      NotaPromedio += NotaEstudiante;
    }
    NotaPromedio = NotaPromedio / iCantidadEstudiantes;
    document.getElementById("nav_list_NotaPromedio").innerHTML += `<li>Nota promedio: ${NotaPromedio}</li>`;
  } catch (ex) {
    console.error(
      `ERROR en la funcion fnInicializar()[ ${ex.name} - ${ex.message} ]`
    );
  }
};

const fnReset = ()=>{
  document.querySelectorAll(".main ul").forEach((element, index)=>{
    element.innerHTML = "";
  });
  fnInicializar();
}