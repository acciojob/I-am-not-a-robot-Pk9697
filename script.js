//your code here
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

const imgContainer = document.getElementById('img-container')

function renderImages() {
	imgContainer.innerHTML = imagesData.map(
		(image) =>
			`<img onclick=handleImageClick('${image.id}') class='${image.class} ${
				image.selected ? 'selected' : ''}'/>`
	)
}
 
renderImages()

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
}
 