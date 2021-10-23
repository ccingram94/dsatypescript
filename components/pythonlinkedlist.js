
function PythonLinkedList() {
    return (
        <div>
            <div className="bg-pink-900 text-red-300 py-4 px-4 rounded-xl min-w-full">
            <pre>
                <code>linkedlist.py</code><br/><br/>
                <code>#create class Node</code><br/>
                <code>class Node:</code><br/><br/>
                <code>      #constructor method</code><br/>
                <code>      def __init__(self, data):</code><br/>
                <code>          self.data = data</code><br/>
                <code>          self.next = None</code><br/><br/>
                <code>      def getData(self):</code><br/>
                <code>          return self.data</code><br/><br/>
                <code>      def setData(self, newdata):</code><br/>
                <code>          self.data = newdata</code><br/><br/>
                <code>      def getNext(self):</code><br/>
                <code>          return self.next</code><br/><br/>
                <code>      def setNext(self, newnext):</code><br/>
                <code>          self.next = newnext</code><br/><br/>
                <code>#create class LinkedList</code><br/>
                <code>class LinkedList:</code><br/><br/>
                <code>      #constructor method</code><br/>
                <code>      def __init__(self):</code><br/>
                <code>          self.head = None</code><br/><br/>
                <code>      def addNode(self, newdata):</code><br/>
                <code>          tempnode = Node(newdata)</code><br/>
                <code>          tempnode.setNext(self.head)</code><br/>
                <code>          self.head = tempnode</code><br/><br/>
                <code>      def deleteNode(self, givendata):</code><br/>
                <code>          current = self.head</code><br/>
                <code>          previous = None</code><br/>
                <code>          found = False</code><br/>
                <code>          while not found:</code><br/>
                <code>              if current.getData() == givendata:</code><br/>
                <code>                  found = True</code><br/>
                <code>              else:</code><br/>
                <code>                  previous = current</code><br/>
                <code>                  current = current.getNext()</code><br/>
                <code>              if previous == None:</code><br/>
                <code>                  self.head = current.getNext()</code><br/>
                <code>              else:</code><br/>
                <code>                  previous.setNext(current.getNext())</code><br/><br/>
                <code>      def isEmpty(self):</code><br/>
                <code>          return self.head == None</code><br/><br/>
                <code>      def search(self, givendata):</code><br/>
                <code>          current = self.head</code><br/>
                <code>          found = False</code><br/>
                <code>          while current != None and not found:</code><br/>
                <code>              if current.getData() == givendata:</code><br/>
                <code>                  found = True</code><br/>
                <code>              else:</code><br/>
                <code>                  current = current.getNext()</code><br/>
                <code>          return found</code><br/><br/>
                <code>      def size(self):</code><br/>
                <code>          current = self.head</code><br/>
                <code>          count = 0</code><br/>
                <code>          while current != None:</code><br/>
                <code>              count += 1</code><br/>
                <code>              current = current.getNext()</code><br/>
                <code>          return count</code><br/><br/>
            </pre>
            </div>
        </div>
    )
}

export default PythonLinkedList