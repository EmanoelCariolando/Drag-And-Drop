 let areas = {
    a: null,
    b: null,
    c: null
  }
 document.querySelectorAll('.item').forEach(item => {

   item.addEventListener('dragstart', dragStart)
   item.addEventListener('dragend', dragEnd)
   
  });

  document.querySelectorAll('.area').forEach(ar => {
    ar.addEventListener('dragover', dragOver)
    ar.addEventListener('dragleave', dragLeave)
    ar.addEventListener('drop', dragDrop)
  });

  document.querySelector('.neutralArea').addEventListener('dragover', OverNeutral)
  document.querySelector('.neutralArea').addEventListener('dragleave', LeaveNeutral)
  document.querySelector('.neutralArea').addEventListener('drop', dragDropNeutral)

  function dragStart(e) {
    e.target.classList.add('dragging')
  }
  function dragEnd(e) {
    e.target.classList.remove('dragging')
  }



  function dragOver(e) {
    if(e.currentTarget.querySelector('.item') === null) {
      e.preventDefault()
      e.currentTarget.classList.add('hover')
   }

  }
  function dragLeave(e) {
    e.currentTarget.classList.remove('hover')
  }
  function dragDrop(e) {
    e.currentTarget.classList.remove('hover')

    if(e.currentTarget.querySelector('.item') === null) {
       let dragItem = document.querySelector('.item.dragging')
       e.currentTarget.appendChild(dragItem)
       uptadeAreas()
    }
  }

  function OverNeutral(e) {
    e.preventDefault()
    e.currentTarget.classList.add('hover')
  }
  function LeaveNeutral(e) {
    e.currentTarget.classList.remove('hover')
  
  } 
  function dragDropNeutral(e) {
   e.currentTarget.classList.remove('hover')
   let dragItem = document.querySelector('.item.dragging')
   e.currentTarget.appendChild(dragItem)
   uptadeAreas()
  }

  function uptadeAreas() {
    document.querySelectorAll('.area').forEach(area => {
      let name = area.getAttribute('data-name')


      if(area.querySelector('.item') !== null) {
        areas[name] = area.querySelector('.item').innerHTML
      } else {
        areas[name] = null
      }
    })
    if(areas.a === '1' && areas.b === '2' && areas.c === '3') {
      document.querySelector('.areas').classList.add('correct')
    }
    else {
      document.querySelector('.areas').classList.remove('correct')

    }
    if(areas.a !== '1' && areas.b !== '2' && areas.c !== '3'){
      document.querySelector('.areas').classList.add('false')
    }
    else {
      document.querySelector('.areas').classList.remove('false')
    }
    if(areas.a === null && areas.b === null && areas.c === null){
      document.querySelector('.areas').classList.remove('false')
    }
  
  }
  