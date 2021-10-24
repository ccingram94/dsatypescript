
function PythonTree() {
    return (
        <div>
            <div className="bg-pink-900 text-red-300 py-4 px-4 rounded-xl min-w-full">
            <pre>
                <code>binarytree.py</code><br/><br/>
                <code>#create class BinaryTree</code><br/>
                <code>class BinaryTree:</code><br/><br/>
                <code>      #constructor method</code><br/>
                <code>      def __init__(self, data):</code><br/>
                <code>          self.data = data</code><br/>
                <code>          self.left = None</code><br/>
                <code>          self.right = None</code><br/><br/>
                <code>      def insertLeft(self, newnode):</code><br/>
                <code>          if self.left == None:</code><br/>
                <code>              self.left = BinaryTree(newnode)</code><br/>
                <code>          else:</code><br/>
                <code>              temporarynode = BinaryTree(newnode)</code><br/>
                <code>              temporarynode.left = self.left</code><br/>
                <code>              self.left = temporarynode</code><br/><br/>
                <code>      def insertRight(self, newnode):</code><br/>
                <code>          if self.right == None:</code><br/>
                <code>              self.right = BinaryTree(newnode)</code><br/>
                <code>          else:</code><br/>
                <code>              temporarynode = BinaryTree(newnode)</code><br/>
                <code>              temporarynode.right = temporarynode</code><br/>
                <code>              self.right = temporarynode</code><br/><br/>
                <code>      def getRoot(self):</code><br/>
                <code>          return self.root</code><br/><br/>
                <code>      def setRoot(self, newroot):</code><br/>
                <code>          self.root = newroot</code><br/><br/>
                <code>      def getLeftChild(self):</code><br/>
                <code>          return self.left</code><br/><br/>
                <code>      def getRightChild(self):</code><br/>
                <code>          return self.right</code><br/><br/>
            </pre>
            </div>
        </div>
    )
}

export default PythonTree