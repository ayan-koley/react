# In React implementation doesn't work 
 const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click to visit Google.com'
}

type of code.
# Initially React render method take this type of obj and work onto that 
const reactElement = React.createElement(
    'a',
    {href: "https://google.com", target: "_blank"},
    "click me to visit Google.com"
)

React.createRoot(document.querySelector('#root').
render(
    reactElement
));
