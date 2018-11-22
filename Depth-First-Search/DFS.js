class Node {
    constructor(data) {
      this.data = data
      this.children = []
      this.parent = null
    }
  
    insertChild(child) {
      this.children.push(child)
      child.setParent(this)
    }
  
    setParent(parent) {
      this.parent = parent
    }
  
  }
  
  /*构造 tree */
  
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
  
  function dfsSearch(root , value){
      let list = []
      let target
      let firstUncheckedChild
      list.push(root)
      while(list.length){
          target = list.shift()
          target.checked = true
          if(target.data === value) return value

          firstUncheckedChild = target.children.filter(v=>!v.checked)[0]
          if(firstUncheckedChild){
              list.push(firstUncheckedChild)
          }else if(target.parent) {
                  list.push(target.parent)
        }
      }
  }
  console.log(dfsSearch(node0, 'hello'))