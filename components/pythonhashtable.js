
function PythonHashTable() {
    return (
        <div>
            <div className="bg-pink-900 text-red-300 py-4 px-4 rounded-xl min-w-full">
            <pre>
                <code>hashtable.py</code><br/><br/>
                <code>#create class HashTable</code><br/>
                <code>class HashTable:</code><br/><br/>
                <code>      #constructor method</code><br/>
                <code>      def __init__(self, size):</code><br/>
                <code>          self.size = size</code><br/>
                <code>          self.slots = [None] * self.size</code><br/>
                <code>          self.data = [None] * self.size</code><br/><br/>
                <code>      def insertLeft(self, newnode):</code><br/>
                <code>          if self.leftChild == None:</code><br/>
                <code>              self.leftChild = BinaryTree(newnode)</code><br/>
                <code>          else:</code><br/>
                <code>              temporarynode = BinaryTree(newnode)</code><br/>
                <code>              temporarynode.leftChild = self.leftChild</code><br/>
                <code>              self.leftChild = temporarynode</code><br/><br/>
                <code>      def insertRight(self, newnode):</code><br/>
                <code>          if self.rightChild == None:</code><br/>
                <code>              self.rightChild = BinaryTree(newnode)</code><br/>
                <code>          else:</code><br/>
                <code>              temporarynode = BinaryTree(newnode)</code><br/>
                <code>              temporarynode.rightChild = temporarynode</code><br/>
                <code>              self.rightChild = temporarynode</code><br/><br/>
                <code>      def getRoot(self):</code><br/>
                <code>          return self.root</code><br/><br/>
                <code>      def setRoot(self, newroot):</code><br/>
                <code>          self.root = newroot</code><br/><br/>
                <code>      def getLeftChild(self):</code><br/>
                <code>          return self.leftChild</code><br/><br/>
                <code>      def getRightChild(self):</code><br/>
                <code>          return self.rightChild</code><br/><br/>
            </pre>
            </div>
        </div>
    )
}

export default PythonHashTable