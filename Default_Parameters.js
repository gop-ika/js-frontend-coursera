class WithDefaultParams{
    constructor(num1=1, num2=2, num3=3, string="Result", bool1=true){
        this.num1=num1;
        this.num2=num2;
        this.num3=num3;
        this.string=string;
        this.bool1=bool1;
    }
    calculate(){
    if (this.bool1) {
        console.log(this.string,this.num1+ this.num2+ this.num3);
        return;
    }
    return"The value in bool1 is incorrect "
}
}
var better= new WithDefaultParams();
better.calculate();//6

//without Default Parameters

class withoutDefaultPara{
    constructor(num1, num2, num3, string, bool1){
        this.num1=num1;
        this.num2=num2;
        this.num3=num3;
        this.string=string;
        this.bool1=bool1;
    }
    calculate(){
        if(this.bool1){
            console.log(this.string, this.num1 + this.num2 + this.num3);
            return;
        }
        return"The value in bool1 is False"
    }
}
var better=new withoutDefaultPara(1,2,3,"Result:",true);
better.calculate();