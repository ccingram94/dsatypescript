
function PythonStack() {
    return (
        <div>
            <div className="bg-pink-900 text-red-300 py-4 px-4 rounded-xl min-w-full">
            <pre>
                <code>pythonstack.py</code><br/><br/>
                <code>#create class Stack</code><br/>
                <code>class Stack:</code><br/><br/>
                <code>      #constructor method</code><br/>
                <code>      def __init__(self, items):</code><br/>
                <code>          self.items = []</code><br/><br/>
                <code>      def push(self, element):</code><br/>
                <code>          self.items.append(element)</code><br/><br/>
                <code>      def pop(self):</code><br/>
                <code>          self.items.pop()</code><br/><br/>
                <code>      def peek(self):</code><br />
                <code>          return self.items[-1]</code><br/><br/>
                <code>      def isEmpty(self):</code><br/>
                <code>          return self.items == []</code>
            </pre>
            </div>
        </div>
    )
}

export default PythonStack