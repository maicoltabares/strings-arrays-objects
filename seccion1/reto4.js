
let creater_events = (list) => {
  let flag = true;
  while (flag) {
    flag = confirm('¿Te gustaría añadir un evento?');
    if (!flag) break;
    let id = 1;
    let name = prompt('Introduzca el nombre del evento').toLocaleLowerCase().trim();
    let date = prompt('Introduzca la fecha del evento AAAA-MM-DD')
      .toLocaleLowerCase()
      .trim();
    let descripcion = prompt('Ingrese la descripción del evento')
      .toLocaleLowerCase()
      .trim();
    Object.assign(list, id, name, date, descripcion);
    id++;
  }
};
let check_event = (list) => {
  alert(JSON.stringify(list));
  question = prompt(
    '¿Qué evento le gustaría buscar, ingrese el nombre del evento'
  )
    .toLowerCase()
    .trim();
  let arr = Object.values(list);
  if (arr.includes(question)) {
  } else {
    alert('El evento no existe');
  }
};
let events = {};
creater_events(events);
alert(JSON.stringify(events));
