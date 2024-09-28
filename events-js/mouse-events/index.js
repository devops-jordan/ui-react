const main = document.getElementById('main')
let isDrawing = false;

const initial = () => {

  main.addEventListener('mousedown', (e)=>{
    isDrawing = true
  })
  main.addEventListener('mouseup', ()=>{
    isDrawing = false;
  })

  

  main.addEventListener('mousemove', (e)=>{
    if(isDrawing){
      const dot = document.createElement('a');
      // dot.classList.add = 'absolute'
      dot.style.position = 'absolute';
      dot.style.width = '5px';
      dot.style.height = '5px';
      dot.style.backgroundColor = 'black';
      dot.style.left = `${e.pageX}px`;
      dot.style.top = `${e.pageY}px`;
      main.appendChild(dot);
    }
  })
}

window.addEventListener('load', initial)