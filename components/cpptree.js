
function CppTree() {
    return (
        <div>
            <div className="bg-pink-900 text-red-300 py-4 px-4 rounded-xl min-w-full">
            <pre>
                <code>treenode.h</code><br/><br/>
                <code>#ifndef BINARY_NODE_H</code><br/>
                <code>#define BINARY_NODE_H</code><br/><br/>
                <code>struct Node {"{"}</code><br/>
                <code>      int data;</code><br/>
                <code>      Node *left;</code><br/>
                <code>      Node *right;</code><br/>
                <code>      Node(int x) : val(x), left(NULL), right(NULL) {"{}"}</code><br/><br/>
                <code>{"};"}</code><br/>
                <code>#endif //BINARY_NODE_H</code><br/><br/>
            </pre>
            </div>
        </div>
    )
}

export default CppTree