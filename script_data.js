// alert("I load!")

class Trainer{

	constructor(img1, name, surname, age, field_of_experties){
		this.img1 = img1;
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.field_of_experties = field_of_experties;
		// this.id=id;
	}
	render(){
		let content = `
			<div class="col-lg-4 col-md-4 col-4 content">
				  <div class="avatar-flip">
				  <h2>${this.name}</h2>
				  <img src= ${this.img1} class='pic'>
				  </div>
				  <h2>${this.surname}</h2>
				  <h3>age: ${this.age}</h3>
				  <h3>Field of experties: ${this.field_of_experties}
				  <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna ip sum dolore.</p>
				  <p>Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.</p>
		  	</div>
		`
		return content;
	}
}

var allTrainer =[
	new Trainer("img/lehrer.jpeg", "John", "Doe",30,"Lorem ipsum dolor sit amet"),
	new Trainer("img/lehrer.jpeg", "Pall", "Doe",30,"Lorem ipsum dolor sit amet"),
	new Trainer("img/lehrer.jpeg","Joe", "Doe",30,"Lorem ipsum dolor sit amet"),

]
let place = document.getElementById("place");
for (let i = 0; i < allTrainer.length; i++) {
	// this.id = i
	place.innerHTML += allTrainer[i].render();
};
