
function PythonList() {
    return (
        <div>
            <div className="bg-pink-900 text-red-300 py-4 px-4 rounded-xl min-w-full">
                <code>pythonlist.py</code>
                <br/>
                <br />
                <code>#create a list</code><br />
                <code>examplelist = []</code><br /><br />
                <code>#create a 2D list</code><br />
                <code>example2Dlist = [1, 2, 3][4, 5, 6]</code><br/><br/>
                <code>#initialize list with values</code><br />
                <code>examplelist = [True, 3.5, "Hello world!", 90]</code><br /><br />
                <code>#add "hello" to end of list</code><br />
                <code>examplelist.append("hello")</code><br /><br />
                <code>#remove item at end of list</code><br />
                <code>examplelist.pop()</code><br /><br />
                <code>#remove item at index 0 of list</code><br />
                <code>examplelist.pop(0)</code><br /><br />
                <code>#insert "hello" at index 0 of list</code><br />
                <code>examplelist.insert(0, "hello")</code><br /><br />
                <code>#remove first item of value "hello"</code><br />
                <code>examplelist.remove("hello")</code><br /><br />
                <code>#count number of times "hello" appears in list</code><br />
                <code>examplelist.count("hello")</code><br /><br />
                <code>#sort the list in ascending order</code><br />
                <code>examplelist.sort()</code><br /><br />
                <code>#reverse the order of list</code><br />
                <code>examplelist.reverse()</code><br /><br />
            </div>
        </div>
    )
}

export default PythonList