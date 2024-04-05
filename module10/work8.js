let figures = new Map
figures.set ("Квадрат", "черный");
figures.set ("Треугольник", "зеленый");
figures.set ("Круг", "желтый");
for (let name of figures.keys()){
  console.log ('Ключ - ' + name);
}
for (let color of figures.values()){
  console.log ('значение - ' + color);
}
for (let elem of figures) {
   console.log (elem);
}