const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

const initial = () => {
  console.log('hii')
  // Aseguramos que el canvas cubra todo el viewport
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Configuramos el estilo de dibujo
  ctx.strokeStyle = 'black';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 5;

  // Inicia el dibujo
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];  // Guardar la posición inicial del cursor
  });

  // Dibuja mientras se mueve el mouse y se presiona el botón
  canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return; // Si no se está dibujando, salir
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);  // Desde la última posición
    ctx.lineTo(e.offsetX, e.offsetY);  // Hasta la posición actual
    ctx.stroke();  // Dibuja la línea
    [lastX, lastY] = [e.offsetX, e.offsetY];  // Actualiza la última posición
  });

  // Termina el dibujo
  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
  });

  // Si el cursor sale del canvas, también dejamos de dibujar
  canvas.addEventListener('mouseout', () => {
    isDrawing = false;
  });
};

window.addEventListener('load', initial);
