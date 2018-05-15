document.querySelectorAll('.date').forEach(el => {
	let time = moment(el.innerHTML)
	el.innerHTML = time.fromNow()
})

let replaceIMG = () => {

	document.querySelectorAll('img').forEach(el => {

		src = el.getAttribute('src')

		if (src.indexOf('://') > -1 || src.indexOf('//') == 0) console.log('break ext', src)
		if (src.indexOf('/img/') == 0) console.log('break rel', src)
		console.log('replace', src)
		el.src = '/img/' + src
	})

}

document.addEventListener('DOMContentLoaded', replaceIMG)
