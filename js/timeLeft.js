const $bottomCanvas = document.querySelector('.bottom-canvas')
/*
** manage fade on story and name
** manage canvas translateY
*/
const timeLeft = (time) =>
{
    let setTime = time - (time/5)
    let timeS = time*1000

    $storyAreaRead.classList.add('transition-opacity')
    $storyAreaRead.style.transition = `opacity ${time/10}s ease ${setTime}s`

    $labelAuthor.classList.add('transition-opacity-label')
    $labelAuthor.style.transition = `opacity ${time/10}s ease ${setTime}s`

    const toBottomWindow = (window.innerHeight/2)-200

    $canvas.style.transformOrigin = `bottom`
    $canvas.style.transform = `translateY(${toBottomWindow}px)`
    $canvas.style.transition = `transform ${time}s linear 0s, background-color 1s cubic-bezier(0.13, 0.34, 0.16, 0.93)`


    window.setTimeout( function() 
    {
        togglePopUp()
        $storyAreaRead.remove()
        $labelAuthor.remove()

    }, timeS)

}