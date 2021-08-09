const btnPhoto = document.getElementById('btn-photo')
const btnClose = document.getElementById('btn-close')
const photoMobile = document.getElementById('photo-mobile')

class bouton{
    constructor(bouton,photo){
        this.bouton = bouton,
        this.photo = photo
    }
    active(){
        let bouton = this.bouton
        let item = this.photo
        bouton.addEventListener('click', function(e){
            e.preventDefault()
            item.classList.remove('inactif')
            item.classList.add('actif')
        })
    }
    inactive(){
        let bouton = this.bouton
        let item = this.photo
        bouton.addEventListener('click', function(e){
            e.preventDefault()
            item.classList.remove('actif')
            item.classList.add('inactif')
        })
    }
}

const showPhoto = new bouton(btnPhoto,photoMobile)
showPhoto.active()

const closePhoto = new bouton(btnClose,photoMobile)
closePhoto.inactive()
