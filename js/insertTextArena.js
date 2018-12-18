const $storyAreaRead = document.querySelector('.area-read p')
const $labelAuthor = document.querySelector('.label-author p')

const insertTextArena = (message) =>
{
    getPost().then(response => {

        if(response.message)
        {
            removeLoaderPost()
            console.log(response.message)
            console.log(response.author)
            $storyAreaRead.innerHTML = response.message
            $labelAuthor.innerHTML = response.author
            const moodInterpreter = new MoodInterpreter(response.mood)
            console.log(moodInterpreter.dominantMood)
            const newColorMood = new colorMood(moodInterpreter.dominantMood)

            timeLeft(response.readtime)
        }
        else
        {
            insertTextArena()   
        }
        




    })

}
insertTextArena()
