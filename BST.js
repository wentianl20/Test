function BinarySearchTree() {
    const Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    // 根节点
    let root = null;

    this.show = () => {
        console.log('root=', root);
    };

    // 插入
    this.insert = key => {
        let newNode = new Node(key);
        if (root == null) {
            root = newNode;
        } else {
            insertNode(root, newNode)
        }
    };
    let insertNode = (node, newNode) => {
        if (newNode.key < node.key) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    // 搜索
    this.search = key => { searchNode(root, key) };
    let searchNode = (node, key) => {
        if (node == null) {
            return false;
        }
        if (key < node.key) {
            searchNode(node.left, key)
        } else if (key > node.key) {
            searchNode(node.right, key)
        } else {
            return true;
        }
    };
    // 删除
    this.remove = key => { root = removeNode(root, key) };
    let removeNode = (node, key) => {
        if (node == null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
        } else {
            // 没有左右子节点的情况
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            // 只有一个子节点(如只有左节点或只有右节点)
            if (node.left == null && node.right !== null) {
                node = node.right;
                return node;
            } else if (node.right == null && node.left !== null) {
                node = node.left;
                return node;
            }
            // 两个子节点的节点(左右节点都存在)
            if (node.left && node.right) {
                // 找到该节点右侧的最小节点，替换当前节点
                let findRightMin = (node) => {
                    while (node && node.left !== null) {
                        node = node.left;
                    }
                    return node;
                };
                // 用右侧最小节点去替换当前节点
                let aux = findRightMin(node.right);
                node.key = aux.key;
                node.right = removeNode(node.right, aux.key);
                // 同事需要删除右侧最小节点
                return node;
            }

        }

    };
    // 中序遍历
    this.inOrder = () => {
        inOrderNode(root, (nodeKey) => { console.log(nodeKey) })
    };
    let inOrderNode = (node, callback) => {
        if (node !== null) {
            inOrderNode(node.left, callback);
            callback(node.key);
            inOrderNode(node.right, callback);
        }
    };
    // 前序遍历
    this.preOrder = () => { preOrderNode(root, (nodeKey) => { console.log(nodeKey) }) };
    let preOrderNode = (node, callback) => {
        if (node !== null) {
            callback(node.key);
            preOrderNode(node.left, callback);
            preOrderNode(node.right, callback);
        }
    };
    // 后序遍历
    this.postOrder = () => { postOrderNode(root, (nodeKey) => { console.log(nodeKey) }) };
    let postOrderNode = (node, callback) => {
        if (node !== null) {
            postOrderNode(node.left, callback);
            postOrderNode(node.right, callback);
            callback(node.key);
        }
    };
    // 树的最小值
    this.min = () => { return minNode(root) };
    let minNode = (node) => {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }

            return node.key;
        }
        return null;
    };
    // 树的最大值
    this.max = () => { return maxNode(root) };
    let maxNode = (node) => {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }

            return node.key;
        }
        return null;
    }


}
