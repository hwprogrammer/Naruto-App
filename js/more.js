const baseOfPerson = JSON.parse(localStorage.getItem('more'))
const $personContainer = document.querySelector('.containerPerson')
const $titleSite = document.querySelector('.titleOfSite')
const $back = document.querySelector('.back')

window.addEventListener('load', () =>{
	if (localStorage.getItem('auth') === 'false'){
		window.open('./auth.html', '_self')
	}
})

window.addEventListener('load', () =>{
	if (!localStorage.getItem('byColor') && !localStorage.getItem('byImg')){
		document.body.style.background = 'whitesmoke'
	}else{
		const byImg = JSON.parse(localStorage.getItem('byImg'))
		const byColor = JSON.parse(localStorage.getItem('byColor'))
		if (byColor){
			document.body.style.background = byColor
		}else if (byImg){
			document.body.style.background = byImg
		}
	}
})


$personContainer.innerHTML = baseOfPerson.map(({name, power, village, level, clan, image}) => {
	$titleSite.innerText = name
	return `
		<div class="personCard">
			<div class="container-main">
				<div class="personCard-header">
					<h2>${name}</h2>
				</div>
				<div class="personCard-body">
					<img class="personImg" src="${image}" alt="personImg">
				</div>
			</div>
			<div class="container-footer">
				<div class="personCard-footer">
					<span class="objContainer"><span class="key">Power:</span>  <span class="value">${power}</span></span>
					<span class="objContainer"><span class="key">Village:</span> <span class="value">${village}</span></span>
					<span class="objContainer"><span class="key">Level:</span>  <span class="value">${level}</span></span>
					<span class="objContainer"><span class="key">Clan:</span>  <span class="value">${clan}</span></span>
				</div>
			</div>
		</div>
	`
}).join('')

$back.addEventListener('click', e => {
	e.preventDefault()
	window.open('./index.html', '_self')
})