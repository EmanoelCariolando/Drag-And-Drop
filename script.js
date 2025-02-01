 
 document.querySelectorAll('.item').forEach(item => {

   item.addEventListener('dragstart', dragStart)
   item.addEventListener('dragend', dragEnd)
   
  });

  function dragStart(e) {
    e.target.classList.add('dragging')
  }
  function dragEnd(e) {
    e.target.classList.remove('dragging')
  }


  document.querySelectorAll('.area').forEach(ar => {
    ar.addEventListener('dragover', dragOver)
    ar.addEventListener('dragleave', dragLeave)
    ar.addEventListener('drop', dragDrop)
  });

  function dragOver(e) {
    e.preventDefault()
    e.currentTarget.classList.add('hover')

  }
  function dragLeave(e) {
    e.currentTarget.classList.remove('hover')
  }
  function dragDrop(e) {
    e.currentTarget.classList.remove('hover')
  }