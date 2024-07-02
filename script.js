//your code here
const imagesData=[
	{
		id:'img1',
		selected:false
	},
	{
		id:'img2',
		selected:false
	},
	{
		id:'img3',
		selected:false
	},
	{
		id:'img4',
		selected:false
	},
	{
		id:'img5',
		selected:false
	},
]

const randomImageId=Math.floor(Math.random()*5+1)
imagesData.push({
	id:'img'+randomImageId,
	selected:false
})
  
 
// Arrange images data randomly
let times=10
while(times--){
	const randomIdx1=Math.floor(Math.random()*6);
	const randomIdx2=Math.floor(Math.random()*6);
	const temp=imagesData[randomIdx1]
	imagesData[randomIdx1]=imagesData[randomIdx2]
	imagesData[randomIdx2]=temp
}

console.log({imagesData})
