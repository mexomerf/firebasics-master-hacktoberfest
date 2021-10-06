document.addEventListener("DOMContentLoaded", event => {
	const app = firebase.app()
	console.log(app)

	const db = firebase.firestore()

	const myPost = db.collection('posts').doc('myposts')

	const query = db.collection('posts').where('Views', '>', 10)

	query.get()
	.then(pos => {
		pos.forEach(doc => {
			data = doc.data()
			console.log(`%c${data.text} ${data.description} ${data.Views}`, 'color: #f00')
		})
	})

	myPost.get()
	.then(doc => {
		const data = doc.data()
		console.log(data.text, data.description, data.Views)
	})

	const myPost2 = db.collection('posts').doc('myposts2')

	myPost2.onSnapshot(doc => {
		const data = doc.data()
		console.log(data.text, data.description, data.Views)
	})
})

function update() {
	const db = firebase.firestore()
	const myPost2 = db.collection('posts').doc('myposts2')
	myPost2.update({ text: document.getElementById('input').value })
}

function googleLogin() {
// 	const provider = new firebase.auth.GoogleAuthProvider()

// 	firebase.auth().signInWithPopup(provider)
// 		.then(result => {
// 			const user = result.user
// 			console.log(user)
// 			console.log(`%c Hello ${user.displayName}! Welcome to Firebase Tutorial`, 'font-size: 2em; color: #f00;')
// 			console.image(`${user.photoURL}`)
// 		})
// 		.catch(console.log)
}