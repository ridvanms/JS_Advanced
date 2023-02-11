function sortedList(){
    class List{
        constructor(){
            this.listOfNumbers = [].sort((a,b)=>a-b)
        }
        add(el){
            this.listOfNumbers.push(el)
        }
        remove(index){
            if(index >= this.listOfNumbers.length)return
            this.listOfNumbers.splice(index,1)
        }
        get(index){
            if(index >= this.listOfNumbers.length)return
            return this.listOfNumbers[index]
        }
        size(){
            return this.listOfNumbers.length
        }
    }
    let list = new List();
    list.add(5);
    list.add(6);
    list.add(7);
    console.log(list.get(1)); 
    list.remove(1);
    console.log(list.get(1));
}
sortedList();