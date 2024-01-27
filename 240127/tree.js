//선순위 순회
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}
// 이진트리
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert([left, right]) {
    this.left = new BinaryTreeNode(left);
    this.right = new BinaryTreeNode(right);
  }
}

class BinaryTree {
  constructor(root) {
    this._root = root;
  }

  insert([left, right]) {
    this._root.insert([left, right]);
  }
  //DFS
  traversePreOrder() {
    traversePreOrderHelper(this._root);
  }
  traverseInOrder() {
    traverseInOrderHelper(this._root);
  }
  traversePostOrder() {
    traversePostOrderHelper(this._root);
  }
  //BFS
  traverseLevelOrder() {
    const root = this._root;
    const queue = [];

    if (!root) return;

    queue.push(root); //대기

    while (queue.length) {
      const temp = queue.shift();
      console.log(temp.value); //left

      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
    //queue :[{value, left, right}]
    //queue : [], temp ={value, left, right}
    //
  }
}

function traversePreOrderHelper(node) {
  if (!node) return;
  console.log("node value", node.value);
  traversePreOrderHelper(node.left);
  traversePreOrderHelper(node.right);
}
//중순위 순회
function traverseInOrderHelper(node) {
  if (!node) return;

  traverseInOrderHelper(node.left);
  console.log("node value", node.value);
  traverseInOrderHelper(node.right);
}
//후순위 선회
function traversePostOrderHelper(node) {
  if (!node) return;

  traversePostOrderHelper(node.left);
  traversePostOrderHelper(node.right);
  node.value && console.log("node value", node.value);
}

const btree = new BinaryTree(new BinaryTreeNode(42));
btree.insert([41, 50]);
btree._root.left.insert([10, 40]);
btree._root.right.insert([45, 75]);
console.log("btree", btree);

console.log("pre-------------------------");
btree.traversePreOrder();
console.log("in--------------------------");
btree.traverseInOrder();
console.log("post------------------------");
btree.traversePostOrder();
console.log("Level-----------------------");
btree.traverseLevelOrder();

// console.log("btree", JSON.stringify(btree));

//BFS : breadth first search
//DFS : depth first search(선순위 탐색)
