function getPerson(){
    class Person {
        constructor(firstName,lastName,age,email){
            this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.email = email
        }
        toString(){
            console.log(`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`)
        }
    }
    let arr = []
    let p1 = new Person('Anna','Simpson','22','anna@yahoo.com')
    arr.push(p1.toString())
    let p2 = new Person('SoftUni')
    arr.push(p2.toString())
    let p3 = new Person('Stephan','Johnson','25')
    arr.push(p3.toString())
    let p4 = new Person('Gabriel','Peterson','24','g.p@gmail.com')
    arr.push(p4.toString())
    
    console.log(arr)
}