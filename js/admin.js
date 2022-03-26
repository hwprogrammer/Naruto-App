const $allInputs = document.querySelectorAll('input')
const $submit = document.querySelector('.addingCharacter')
const $back = document.querySelector('.backBtn')

$back.addEventListener('click', e =>{
	e.preventDefault()
	window.open('./index.html', '_self')
})

$submit.addEventListener('click', e => {
	e.preventDefault()
	const obj = {}
	$allInputs.forEach(item =>{
		obj[item.className] = item.value
		console.log(item.value)
	})
	const ninjas = JSON.parse(localStorage.getItem('ninjas'))
	ninjas.push(obj)
	localStorage.setItem('ninjas', JSON.stringify(ninjas))
	window.location.reload()
})


