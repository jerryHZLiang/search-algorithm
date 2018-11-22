class Node{
    constructor(data){
        this.data = data
        this.children = []
        this.parent = null
    }
    insertChild(child){
        this.children.push(child)
        this.setParent(this)
    }
    setParent(parent){
        this.parent = parent
    }
}
let node0 = new Node(0)
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node('hello')
let node4 = new Node(4)
let node5 = new Node(5)

node0.insertChild(node1)
node0.insertChild(node2)
node1.insertChild(node3)
node1.insertChild(node4)
node2.insertChild(node5)

function bfsSearch(root, value) {
    let list = []
    let target
    list.push(root)
    while(list.length){
        target = list.shift()
        if(target.data === value) return value
        list.push(...target.children)
    }
  }

console.log(bfsSearch(node0,'hello'))