let root=ReactDOM.createRoot(document.getElementById("root"));

let e2=React.createElement("div",{
    id : "s2",
    className : "head2",
    style :{color : "red"}
},["namaste !!",
    React.createElement("p",{
        id:"p1",
        className : "paragraph"
    },"This is a paragraph")]
);
let e1=React.createElement("h1",{
    id : "s1",
    className : "head",
    style :{color : "green"}
},"Hello everyOne !!");
let container = React.createElement("div",{
    id : "conatiner",
    className : "global"
},[e1,e2]);
root.render(container);
