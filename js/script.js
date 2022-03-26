const database = [
	{
		id: 1,
		name: 'Naruto Uzumaki',
		power: 'Nine tails',
		village: 'Konoha',
		level: '7th Hokage',
		clan: 'Uzumaki',
		element: 'wind',
		image:
			'https://pa1.narvii.com/7422/b16cfd8029b2e6a4ec1764b3644e9396fa8d209dr1-480-270_hq.gif',
	},
	{
		id: 2,
		name: 'Sasuke Uchiha',
		power: 'Rinnegan + MS',
		village: 'Konoha',
		level: 'Shadow Hokage',
		clan: 'Uchiha',
		element: 'lightning',
		image:
			'https://i.pinimg.com/originals/71/48/c8/7148c82838437c6d8ad478848e68d482.gif ',
	},
	{
		id: 3,
		name: 'Kakashi Hatake',
		power: 'Purple Chidori + MS',
		village: 'Konoha',
		level: '6th Hokage',
		clan: 'White Claw',
		element: 'lightning',
		image:
			'https://thumbs.gfycat.com/TotalOptimalAmericantoad-size_restricted.gif',
	},
	{
		id: 4,
		name: 'Minato Namikaze',
		power: 'Rasengan + Yellow flash Fuuijin',
		village: 'Konoha',
		level: '4th Hokage',
		clan: 'Namikaze',
		element: 'lightning',
		image: 'https://thumbs.gfycat.com/SaltyLateBasil-size_restricted.gif',
	},
	{
		id: 5,
		name: 'Itachi Uchiha',
		power: 'MS + Genjutsu',
		village: 'Konoha',
		level: 'Unlimited',
		clan: 'Akatsuki',
		element: 'fire',
		image: 'https://media0.giphy.com/media/CchzkJJ6UrQmQ/giphy.gif',
	},
	{
		id: 6,
		name: 'Madara Uchiha',
		power: 'MS + Six Path',
		village: 'Konoha',
		level: 'Destroyer',
		clan: 'Akatsuki',
		element: 'fire',
		image:
			'https://media1.tenor.com/images/fe60d20d14d53b4e0929b0a0b17c0781/tenor.gif?itemid=17049380',
	},
	{
		id: 7,
		name: 'Hashirama Senju',
		power: 'Wood Style + Regeneration',
		village: 'Konoha',
		level: 'God of War',
		clan: 'Senju',
		element: 'wood',
		image: 'https://i.makeagif.com/media/7-28-2016/_eMaFk.gif',
	},
	{
		id: 8,
		name: 'Pain (Tendo)',
		power: 'Six path',
		village: 'Hidden Rain',
		level: 'God',
		clan: 'Akatsuki',
		element: 'wind',
		image:
			'https://thumbs.gfycat.com/JampackedExcitableHydra-size_restricted.gif',
	},
	{
		id: 9,
		name: 'Commando A',
		power: 'Light shield',
		village: 'Hidden Cloud',
		level: '4th Hokage',
		clan: 'Lighter',
		element: 'lightning',
		image:
			'https://i.pinimg.com/originals/93/85/90/938590c23c6565490f49b7f4646f7601.gif',
	},
	{
		id: 10,
		name: 'Gaara',
		power: 'Shukakus Land',
		village: 'Hidden Land',
		level: '5th Kazekage',
		clan: 'Land',
		element: 'land',
		image: 'https://i.gifer.com/C393.gif',
	},
	{
		id: 11,
		name: 'Kisame Hoshikage',
		power: 'White Shark + Water Style',
		village: 'Hidden Rain',
		level: 'Untail bijuu',
		clan: 'Akatsuki',
		element: 'water',
		image:
			'https://steamuserimages-a.akamaihd.net/ugc/941711796106927460/EDA08FFEF3AFDFFCD5241FD00926BCB4DAF47C09/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
	},
	{
		id: 12,
		name: 'Killer B',
		power: 'Eight Tail + Katana',
		village: 'Hidden Cloud',
		level: 'Rap God',
		clan: 'Lighter',
		element: 'stone',
		image:
			'https://qph.fs.quoracdn.net/main-qimg-8380be95c048107f587b8a5ebf70fd9f',
	},
]
const $output = document.querySelector('.containerCard')
const $input = document.querySelector('.searchInp')
const $select = document.querySelector('.filterSelect')
const $addCharacter = document.querySelector('.addCharacter')
const $sidebar = document.querySelector('.side')
const $changeBg = document.querySelector('.changeBg')
const $selectBg = document.querySelector('.selectBg')
const $sidebarContainer = document.querySelector('.sidebarContainer')
const $logout = document.querySelector('.logout')

window.addEventListener('load' , () =>{
	if (localStorage.getItem('auth') === 'false'){
		window.open('./auth.html', '_self')
	}
})

window.addEventListener('load', (e) => {
	if (!localStorage.getItem('ninjas')) {
		localStorage.setItem('ninjas', JSON.stringify(database))
	} else {
		const ninjas = JSON.parse(localStorage.getItem('ninjas'))
		const ninjasWithId = ninjas.map((item, id) => {
			return {...item, id: id}
		})
		localStorage.setItem('ninjas', JSON.stringify(ninjasWithId))
	}
})

const moreFn = (id) => {
	const ninjas = JSON.parse(localStorage.getItem('ninjas'))
	const person = [ninjas[id]]
	localStorage.setItem('more', JSON.stringify(person))
	console.log(localStorage.getItem('more'))
	window.open('./more.html', '_self')
}

window.addEventListener('load', () => {
	cardTemplate(JSON.parse(localStorage.getItem('ninjas')))
})

function cardTemplate(base){
	console.log(base)
	const newBase = base
		.map(({name, image, id}) => {
			return `
				<div class="card">
					<div class="card-header">
						<h3>${name}</h3>
					</div>
					<div class="card-body">
						<img src="${image}" alt="ninjas image" />
					</div>
					<div class="card-footer">
						<button class="more" onclick="moreFn(${id})">More</button>
					</div>
				</div>
		`
		})
		.join('')
	$output.innerHTML = newBase
}



let globalFilterBy = 'name'

$select.addEventListener('change', e => {
	let filterBy = e.target.value
	globalFilterBy = filterBy
	if (filterBy.toUpperCase() === 'Clan'.toUpperCase()) {
		$input.setAttribute('placeholder', `Search by ${filterBy}`)
		$input.style.borderColor = '#b80fbd'
	} else if (filterBy.toUpperCase() === 'Village'.toUpperCase()) {
		$input.setAttribute('placeholder', `Search by ${filterBy}`)
		$input.style.borderColor = '#3bbd0f'
	} else if (filterBy.toUpperCase() === 'power'.toUpperCase()) {
		$input.setAttribute('placeholder', `Search by ${filterBy}`)
		$input.style.borderColor = '#0faebd'

	} else if (filterBy.toUpperCase() === 'level'.toUpperCase()) {
		$input.setAttribute('placeholder', `Search by ${filterBy}`)
		$input.style.borderColor = '#ff6200'
	} else if (filterBy.toUpperCase() === 'element'.toUpperCase()) {
		$input.setAttribute('placeholder', `Search by ${filterBy}`)
		$input.style.borderColor = '#3c14b2'
	}
})

$input.addEventListener('input', e => {
	let inputValue = e.target.value.toUpperCase()
	const ninjas = JSON.parse(localStorage.getItem('ninjas'))
	const filtered = ninjas.filter(({name, power, village, level, clan , element}) => {
		if (globalFilterBy.toUpperCase() === 'Clan'.toUpperCase()) {
			return clan.toUpperCase().includes(inputValue)
		} else if (globalFilterBy.toUpperCase() === 'Power'.toUpperCase()) {
			return power.toUpperCase().includes(inputValue)
		} else if (globalFilterBy.toUpperCase() === 'Village'.toUpperCase()) {
			return village.toUpperCase().includes(inputValue)
		} else if (globalFilterBy.toUpperCase() === 'Level'.toUpperCase()) {
			return level.toUpperCase().includes(inputValue)
		} else if (globalFilterBy.toUpperCase() === 'Element'.toUpperCase()) {
			return element.toUpperCase().includes(inputValue)
		} else {
			return name.toUpperCase().includes(inputValue)
		}
	})
	cardTemplate(filtered)
})

$addCharacter.addEventListener('click', e =>{
	e.preventDefault()
	window.open('./admin.html', '_self')
})

$sidebar.addEventListener('click', e =>{
	e.preventDefault()
	$sidebar.classList.toggle('clicked')
	$sidebarContainer.classList.toggle('active')

})

$logout.addEventListener('click', (e) =>{
	e.preventDefault()
	localStorage.setItem('auth', JSON.stringify(false))
	window.open('./auth.html', '_self')
})


window.addEventListener('load', () =>{
	if (!localStorage.getItem('byColor') && !localStorage.getItem('byImg')){
		localStorage.setItem('byColor', JSON.stringify(''))
		localStorage.setItem('byImg', JSON.stringify(''))
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


$selectBg.addEventListener('change', e =>{
	let selectValue = e.target.value
	$changeBg.setAttribute('placeholder', `Change by ${selectValue}`)
	if (selectValue === 'color'){
		document.body.style.background = $changeBg.value
		localStorage.setItem('byColor', JSON.stringify($changeBg.value))
		localStorage.setItem('byImg', JSON.stringify(''))
		window.location.reload()
	}else if(selectValue === 'img'){
		document.body.style.background = `url('${$changeBg.value}') center / cover no-repeat`
		localStorage.setItem('byImg', JSON.stringify(`url('${$changeBg.value}') center / cover no-repeat`))
		localStorage.setItem('byColor', JSON.stringify(''))
		window.location.reload()
	}

})

