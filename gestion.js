let escuela = {
    estudiantes : []
};

function agregarestudiante (nombre, calificaciones) {
    let estudiante = {
        nombre : nombre,
        calificaciones : calificaciones
    };
    escuela.estudiantes.push (estudiante);
} 

function listarEstudiantes() {
    console.log("Lista de estudiantes y sus calificaciones:");
    escuela.estudiantes.forEach((estudiante) => {
        console.log(` Nombre: ${estudiante.nombre}, Calificaciones: ${estudiante.calificaciones.join(", ")}`);
    });
}
agregarestudiante ("jordan",[5.0,4.6,3.5]);
agregarestudiante ("sebas", [5.0,4.7,4.6]);

function promedioEstudiante (nombre) {
    let estudiante = escuela.estudiantes.find(est => est.nombre === nombre);
console.log({estudiante});
    if (estudiante){
        let sumacalificaciones = estudiante.calificaciones.reduce((acc, curr) => acc + curr,0);
        console.log({sumacalificaciones});
   let promedio = sumacalificaciones / estudiante.calificaciones.length;
        console.log(promedio);
    } else {
        console.log(`estudiante no encontrado`);
    }
}



listarEstudiantes();
promedioEstudiante(`jordan`)
