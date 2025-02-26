const images = document.querySelectorAll('.lightbox')

const handleOpenImage = (imgEle) => {
  const modal = document.createElement('div')
  modal.style.position = 'fixed'
  modal.style.inset = '0'
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
  modal.style.display = 'flex'
  modal.style.justifyContent = 'center'
  modal.style.alignItems = 'center'

  const image = document.createElement('img')
  image.src = imgEle.src
  image.style.maxWidth = '80vw'
  image.style.maxHeight = '80vh'
  image.style.width = 'auto'
  image.style.height = 'auto'

  const frame = document.createElement('div')
  frame.style.display = 'flex'
  frame.style.flexDirection = 'column'

  frame.appendChild(image)
  
  const lower = document.createElement('div')
  lower.style.display = 'flex'

  if (imgEle.dataset.caption) {
    lower.style.justifyContent = 'space-between'

    const caption = document.createElement('p')
    caption.textContent = imgEle.dataset.caption
    caption.style.color = 'white'
    caption.style.fontFamily = 'Arial, sans-serif'
    lower.appendChild(caption)
  } else {
    lower.style.justifyContent = 'flex-end'
  }
  
  if (imgEle.dataset.imageXBtn === 'true') {
    const xBtn = document.createElement('button')
    xBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>'
    xBtn.style.border = 'none'
    xBtn.style.backgroundColor = 'transparent'
    xBtn.style.color = 'white'
    xBtn.style.cursor = 'pointer'

    xBtn.addEventListener('click', () => {
      document.body.removeChild(modal)
    })

    lower.appendChild(xBtn)
  }

  if (imgEle.dataset.caption || imgEle.dataset.imageXBtn === 'true') {
    frame.appendChild(lower)
  }
  modal.appendChild(frame)
  document.body.appendChild(modal)

  if (imgEle.dataset.bgClickClose !== 'false') {
    modal.addEventListener('click', (event) => {
      if (event.target === image) return
      document.body.removeChild(modal)
    })
  }
}

images.forEach(image => {

  image.style.cursor = 'pointer'

  image.addEventListener('click', (event) => {
    handleOpenImage(event.target)
  })
})