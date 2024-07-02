//your code here
const imgContainer = document.getElementById('img-container')
const resetButton = document.getElementById('reset')
const verifyButton = document.getElementById('verify')

resetButton.style.display='none'
verifyButton.style.display='none'

let imagesData = [
	{
		id: 1,
		class: 'img1',
		selected: false,
	},
	{
		id: 2,
		class: 'img2',
		selected: false,
	},
	{
		id: 3,
		class: 'img3',
		selected: false,
	},
	{
		id: 4,
		class: 'img4',
		selected: false,
	},
	{
		id: 5,
		class: 'img5',
		selected: false,
	},
]

const randomImageId = Math.floor(Math.random() * 5 + 1)
imagesData.push({
	id: 6,
	class: 'img' + randomImageId,
	selected: false,
})
 
// Arrange images data randomly
let times = 10
while (times--) {
	const randomIdx1 = Math.floor(Math.random() * 6)
	const randomIdx2 = Math.floor(Math.random() * 6)
	const temp = imagesData[randomIdx1]
	imagesData[randomIdx1] = imagesData[randomIdx2]
	imagesData[randomIdx2] = temp
}

console.log({ imagesData })

function renderImages() {
	imgContainer.innerHTML = imagesData.map(
		(image) =>
			`<img onclick=handleImageClick('${image.id}') class='${image.class} ${
				image.selected ? 'selected' : ''}'/>`
	)
}
 
renderImages()

function getCountSelected() {
	return imagesData.reduce((acc,curr)=>curr.selected?acc+1:acc,0)
}

function handleImageClick(id) {
	imagesData=imagesData.map((image)=>{
		return image.id==id?
			{
				...image,
				selected:!image.selected
			}
			:
			image
	})
	renderImages()

	isValidButtons()
}

function isValidButtons() {
	const countSelected=getCountSelected()
	if(countSelected>=1){
		resetButton.style.display='block'
	}else{
		resetButton.style.display='none'
	}

	if(countSelected==2){
		verifyButton.style.display='block'
	}else{
		verifyButton.style.display='none'
	}
}

resetButton.addEventListener('click',()=>{
	imagesData=imagesData.map((image)=>{...image,selected:false})
	
})

 