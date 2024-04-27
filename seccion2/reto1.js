const studentGrades = prompt("Por favor ingresa las calificaciones de los estudiantes separadas por coma: ");

const grades = studentGrades.split(",").map(e => parseInt(e));

const average = grades.reduce((acc, el) => acc + el, 0) / grades.length;
console.log(`El promedio de las calificaciones es: ${average}`);