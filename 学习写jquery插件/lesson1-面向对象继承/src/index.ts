// 用ts语法学习继承
class People {
    public name: string //默认都为public，可写可不写
    public age: number
    protected weight: number // 只有自己和子类可以访问
    constructor(_name: string, _age: number) {
        this.name = _name;
        this.age = _age;
        this.weight = 123;
    }
    eat() {
        alert(`${this.name} is eating`)
    }
    speak() {
        alert(`my weight is ${this.weight}`)
    }
}

class Student extends People {
    number: number
    private girlFriend: string// 只有自己可以访问
    constructor(_name:string, _age:number, _number:number) {
        super(_name, _age)
        this.number = _number
        this.girlFriend = '呆呆'
    }
    getWeight() {
        alert(`父类的weigh是${this.weight}`)
        console.log(111111111111)
    }
}

let xiaoming = new Student('小明', 22, 10086)
xiaoming.getWeight()
