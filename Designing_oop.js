class Animal{
    constructor(color = 'yellow', energy = 100){
        this.color=color;
        this.energy=energy;
    }
    isActive(){
        if(this.energy>0){
            this.energy-=20;
            console.log("Energy  iis decreasing, Currently at:", this.energy);
    }else if(this.energy==0){
        this.sleep();
    }
    }
    sleep(){
        this.energy +=20;
        console.log("Energy is increasing, Currently at:",this.energy);   }
    getColor(){
        console.log("Color is:",this.color);
    }
        printDetails(){
        console.log(`${this.constructor.name} Details:`);  
        for (let key of Object.keys(this)) {
            console.log(`${key}: ${this[key]}`);
        }
}
}
class Cat extends Animal{
    constructor(color,energy,sound="purr", canJumpHigh=true, canClimbTrees=true){
        super(color,energy);
        this.sound=sound;
        this.canJumpHigh=canJumpHigh;
        this.canClimbTrees=canClimbTrees;
    }
    makeSound(){
        console.log("Cat Sound is:", this.sound);
    }
}
class Bird extends Animal{
    constructor(sound="chirp",canFly=true,color,energy){
        super(color,energy)
        this.sound=sound;
        this.canFly=canFly;
    }
    makeSound(){
        console.log("The Bird Sound is:", this.sound,);
    }
}
class HouseCat extends Cat{
    constructor(HouseCatSound="Meow",color,energy,sound, canJumpHigh, canClimbTrees){
        super(sound,canClimbTrees,canJumpHigh,color,energy);
        this.HouseCatSound=HouseCatSound;
            }
            //make sound parameter takes a parameter "option"
            makeSound(option){
                if(option){
                    super.makeSound();//calls parent class's makesound if option is true//super key borrow functionality from sub or super class
                }
                console.log("The HouseCat Sound is:",this.HouseCatSound);//print the HouseCat sound
            }
}class Tiger extends Cat{
    constructor(tigerSound="Roar",color,energy,sound, canJumpHigh, canClimbTrees){
                super(sound,canClimbTrees,canJumpHigh,color,energy);
        this.tigerSound=tigerSound;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log(this.tigerSound);//Always print thr Tiger Sound
    }
}
class Parrot extends Bird{
    constructor(canTalk=false,sound="chirp", color, energy){
        super(color,energy);
        this.sound=sound;
        this.canTalk=canTalk;
    }
    makeSound(option){
        if(option){
            super.makeSound()
        }
        if(this.canTalk){
            console.log(this.sound,"I,m a talking parrot!");
        }
    }
}
var polly = new Parrot(true);//passing "true" to constructor, so that polly can talk
var fiji =  new Parrot(false);//passsing "false" to  constuctor, so that the fiji can't talk

fiji.makeSound();//chirp
//fiji.printDetails();
polly.makeSound();//chirp, Iam a talking parrot


polly.color;//yellow
polly.energy;//100
polly.isActive();//enegery decreses, currently 80//dcreease by 20//line 08
polly.printDetails();



var penguin = new Bird("shriek",false,"Black and white", 200);//adding new bird and custom properties
penguin;//Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound;
penguin.canFly;
penguin.color;
penguin.energy;
penguin.isActive();// decrease enegery by 20 ie,180
//penguin.printDetails();

var leo = new HouseCat();//adding new cat
leo.makeSound(false);//meow
leo.makeSound(true);//purr,meow

var cuddles = new Tiger();
cuddles.makeSound(false);//roar
cuddles.makeSound(true);//purr,roar 


