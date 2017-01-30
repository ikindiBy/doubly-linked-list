const Node = require('./node');

class LinkedList {
   constructor() { 
    this.size = 0;
    this.header = new Node (null, null, null);
    this.header.next = this.header.prev = this.header;
    }

append (value){ 
    // if (header.next == header) { 
newNode = new Node(value, this.header.prev, this.header);
newNode.next.prev = newNode;
newNode.prev.next = newNode;
this.size++;
}

head (){
    if(!this.isEmpty())
    return this.header.next.data;
}

tail(){
    if(!this.isEmpty())
return this.header.prev.data;
}

at(index){
    if(!this.isEmpty())
    return this.getNodebyIndex(index).data;
}

isEmpty(){
    if (this.header.next == this.header && this.header.prev == this.header ){
    return true;} else {return false}
}

insertAt(index, data){  
    newNode = new Node(data,this.getNodebyIndex(index).prev , this.getNodebyIndex(index));
    newNode.next.prev = newNode;
    newNode.prev.next = newNode;
    this.size++;
}

deleteAt(index){
    var deletedNode = this.getNodebyIndex(index);
    deletedNode.prev.next = deletedNode.next;
    deletedNode.next.prev = deletedNode.prev;
    this.size--;
    }

clear(){  // with automatic Garbage Collector
    this.header.next = this.header;
    this.header.prev = this.header;
    this.size = 0;
    }

reverse(){
    var nodeTemp = this.header;
    for(var i=0; i<=this.size; i++){
        var x = nodeTemp.next;
        nodeTemp.next = nodeTemp.prev;
        nodeTemp.prev = x;
        nodeTemp = x;
        }
    }

indexOf(data){
    var resultNode = this.header;
    var resultIndex = -1;
    if(!this.isEmpty()){
        for(var i=0; i<this.size; i++){
            resultNode = resultNode.next;
            if (resultNode.data == data){
                resultIndex = i;
                break;
            } 
        }
        return resultIndex;
    }
}

getNodebyIndex(index){
    var resultNode = this.header;
    if(index <= this.size && index>=0){
    for(var i=0; i<=index; i++){
    resultNode = resultNode.next;
        }
        return resultNode;
    } else return NaN;  
}

}

module.exports = LinkedList;
