import { Component } from '@angular/core';
import  {PostsService} from '../services/post.service';


@Component({
	moduleId : module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
   providers: [PostsService]
})

export class UserComponent  { 
	name:string ;
	address: address;  
	hobbies:string[];
	showhobbies:boolean;
	post:Post[];

constructor(private postsService: PostsService){
	// console.log("tibin");
	this.name='Tibin Thomas';
	this.address={
		street:"Kanjiyar",
		city:"Kattapana",
		state:"Tamil Nadu"
	};
	this.hobbies=['sleeping','dancing','stitching'];
	this.showhobbies=false;
	this.postsService.getPosts().subscribe(posts =>{
		this.post=posts;
	})
}
togglehobby(){
	if(this.showhobbies==true){
		this.showhobbies=false;
	}
	else{
		this.showhobbies=true;
	}
	
}
addhobby(hobby:string){
	this.hobbies.push(hobby);
}
deletehobby(i:number){
	this.hobbies.splice(i,1);
}

}


interface address{
	street:string;
	city:string;
	state:string;
}

interface Post{
	id: number;
	title: string;
	body: string;
	}