const Node = require('./node');

class LinkedList {
   constructor() { 
    this.length = 0;
    this.header = new Node (null, null, null);
    this.header.next = this.header.prev = this.header;
    this._tail = null;
    this._head = null;
    }

append (value){ 
        var newNode = new Node(value, this.header.prev, this.header);
        if (this.isEmpty()){
        this._head = newNode;
        this._tail = newNode;
        }
        newNode.next.prev = newNode;
        newNode.prev.next = newNode;
        this.length++;
        return this;
}

head (){
    if(!this.isEmpty()){
        return this.header.next.data;
    }
    else {
        return null;
    }
}

tail(){
    if(!this.isEmpty()){
    return this.header.prev.data;
    }else {
    return null;
    }
}
at(index){
    if(!this.isEmpty())
    return this.getNodebyIndex(index).data;
}

isEmpty(){
    if (this.header.next == this.header && this.header.prev == this.header ){
    return true;
} else {
    return false}
}

insertAt(index, data){
    if(this.isEmpty()){
        this.append(data);
    } else {
        var newNode = new Node(data,this.getNodebyIndex(index).prev , this.getNodebyIndex(index));
        newNode.next.prev = newNode;
        newNode.prev.next = newNode;
        this.length++;
    }
    return this;
}

deleteAt(index){
    var deletedNode = this.getNodebyIndex(index);
    deletedNode.prev.next = deletedNode.next;
    deletedNode.next.prev = deletedNode.prev;
    this.length--;
    return this;
    }

clear(){  // with automatic Garbage Collector
    this.header.next = this.header;
    this.header.prev = this.header;
    this.length = 0;
    return this;
    }

reverse(){
    var nodeTemp = this.header;
    for(var i=0; i<=this.length; i++){
        var x = nodeTemp.next;
        nodeTemp.next = nodeTemp.prev;
        nodeTemp.prev = x;
        nodeTemp = x;
        }
        return this;
    }

indexOf(data){
    var resultNode = this.header;
    var resultIndex = -1;
    if(!this.isEmpty()){
        for(var i=0; i<this.length; i++){
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
    if(index <= this.length && index>=0){
    for(var i=0; i<=index; i++){
    resultNode = resultNode.next;
        }
        return resultNode;
    } else return NaN;  // !!!!! ????
}

 }

module.exports = LinkedList;
