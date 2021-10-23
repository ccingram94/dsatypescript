
function PythonQueue() {
    return (
        <div>
            <div className="bg-pink-900 text-red-300 py-4 px-4 rounded-xl min-w-full">
            <pre>
                <code>queue.py</code><br/><br/>
                <code>#create class Queue</code><br/>
                <code>class Queue:</code><br/><br/>
                <code>      #constructor method</code><br/>
                <code>      def __init__(self, items):</code><br/>
                <code>          self.items = []</code><br/><br/>
                <code>      def enqueue(self, element):</code><br/>
                <code>          self.items.append(element)</code><br/><br/>
                <code>      def dequeue(self):</code><br/>
                <code>          self.items.pop(0)</code><br/><br/>
                <code>      def peek(self):</code><br />
                <code>          return self.items[0]</code><br/><br/>
                <code>      def isEmpty(self):</code><br/>
                <code>          return self.items == []</code>
            </pre>
            </div>
        </div>
    )
}

export default PythonQueue