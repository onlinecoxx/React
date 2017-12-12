const element = (
    <h1 className="greeting">
        Hello, World!
    </h1>
);



const element3 = React.Builder.createElement(
    'h1',
    {className : "greeting"},
    'Hello, World!'
);



//javascript base programme
const element2 = document.createElement('h1');
element2.setAttribute("className", "greeting");
element2.appendChild(document.createTextNode("Hello, World!"));


//create Elements
function React(){}
React.Builder = new React(); //static method
React.prototype.constructor = React; //prototype
React.prototype.createElement = function(tag, attrs, text){
    const element2 = document.createElement(tag);
    for (key in attrs){
        element2.setAttribute(key, attrs[key]);
    }
    const textNode = document.createTextNode(text);
    element2.appendChild(textNode);
    return element2;
};
