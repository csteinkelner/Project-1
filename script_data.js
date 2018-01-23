// alert("I load!")

class Trainer{

	constructor(img, name, surname, age, field_of_experties){
		this.img = img;
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.field_of_experties = field_of_experties;
		// this.id=id;
	}
	render(){
		// let content = `
		// 	<div class="row">
		// 		<div class="col-lg-10 col-m-10 col-10">
		// 			<div class='row'>
		// 				<div class='col-6'>
		// 					<img src='${this.img}' class='pic'>
		// 				</div>
		// 				<div class='col-6 text'> 
		// 					Name: <b> ${this.name}</b><br>
		// 					Surname: <b> ${this.surname}</b><br>
		// 					Age: <b> ${this.age} </b> <br>
		// 					Field of Experties: <b>${this.field_of_experties}</b>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>`;
		let content = `
			<div class="col-lg-4 col-md-4 col-4" id="content">
				  <div class="avatar-flip">
				  	<img src='${this.img}' class='pic'>
				  	<img src='${this.img}' class='pic'>
				  </div>
				  <h2>${this.name}</h2>
				  <h4>HOVER OVER CONTAINER</h4>
				  <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna ip sum dolore.</p>
				  <p>Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.</p>
		  	</div>
		`
		return content;
	}
}

var allTrainer =[
	new Trainer("img/lehrer.jpeg","John", "Doe",30,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"),
	new Trainer("img/lehrer.jpeg","fu", "Doe",30,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"),
	new Trainer("img/lehrer.jpeg","du", "Doe",30,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"),

]
let place = document.getElementById("place");
for (let i = 0; i < allTrainer.length; i++) {
	// this.id = i
	place.innerHTML += allTrainer[i].render();
};
