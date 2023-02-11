function lenghtLimit(){
    class Stringer{
        constructor(str,initialLength){
            this.str = str,
            this.initialLength = initialLength
        }
        increase(num){
            this.initialLength += num
            
        }
        decrease(num){
            this.initialLength -= num
            if(this.initialLength < 0)this.initialLength = 0
        }
        toString(){
            if(this.str.length > this.initialLength){
                return `${this.str.slice(0,this.initialLength)}...`
            }
            if(this.initialLength === 0){
                return `...`
            }
            return this.str
            
        }
    }
    let test = new Stringer("Test", 5);
    console.log(test.toString()); // Test
    test.decrease(3);
    console.log(test.toString()); // Te...
    test.decrease(5);
    console.log(test.toString()); // ...
    test.increase(4);
    console.log(test.toString()); // Test
}

lenghtLimit()