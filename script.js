var lastindex = 0
const img = document.querySelectorAll('.img img')

img.forEach((value, index) => {
    document.querySelectorAll('.bullets-single')[index].addEventListener('click', () => {
        let lastImg = img[lastindex]
        let imgAtual = img[index]

        lastImg.style.opacity = 0
        imgAtual.style.opacity = 1

        document.querySelectorAll('.bullets-single')[index].classList.add('active')
        document.querySelectorAll('.bullets-single')[lastindex].classList.remove('active')

        lastindex = index
    })
})