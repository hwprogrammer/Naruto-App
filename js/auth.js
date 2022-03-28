const $email = document.querySelector('.email')
const $password = document.querySelector('.password')
const $signin = document.querySelector('.login')
const $message = document.querySelector('.message')
window.addEventListener('load', () =>{
	if (!localStorage.getItem('auth')){
		localStorage.setItem('auth', JSON.stringify(false))
	}else {
		if (localStorage.getItem('auth') === 'true'){
			window.open('./index.html', '_self')
		}
	}
})

window.addEventListener('load', () =>{
	const byImg = JSON.parse(localStorage.getItem('byImg'))
	const byColor = JSON.parse(localStorage.getItem('byColor'))
	if (byColor){
		document.body.style.background = byColor
	}else if (byImg){
		document.body.style.background = byImg
	}
})

$signin.addEventListener('click', e =>{
	e.preventDefault()
	if ($email.value === 'admin' && $password.value === 'admin'){
		$message.innerText = 'You successfully authorized!...'
		$message.style.color = 'green'
		$email.style.borderColor = null
		$password.style.borderColor = null
		setTimeout( () =>{
			localStorage.setItem('auth', JSON.stringify(true))
			window.open('./index.html', '_self')
		}, 1500)
	}else {
		$email.style.borderColor = 'red'
		$password.style.borderColor = 'red'
		$message.innerText = 'Wrong email or password'
		$message.style.color = 'red'
		$email.value = ''
		$password.value = ''
	}
})

