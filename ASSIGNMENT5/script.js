const data = [
  {
    type: "div",
    children: [
      { type: "h1", children: [{ type: "p" }] },
      { type: "ul", children: [{ type: "li" }, { type: "li" }] },
    ],
  },
];


// console.log(data[0].type);
// console.log(data[0].children[0].type);
// console.log(data[0].children[0].children[0].type);
// console.log(data[0].children[1].type);
// console.log(data[0].children[1].children[0].type);
// console.log(data[0].children[1].children[1].type);


// function createStructure(){
//   const para=document.createElement("h1");
//   para.setAttribute('id','para-1');
//   const node=document.createTextNode("Heading");
//   para.appendChild(node);
//   const app=document.getElementById("div1");
//   app.appendChild(para);


//   const para2=document.createElement("p");
//   const node2=document.createTextNode("Paragraph");
//   para2.appendChild(node2);
//   const app2=document.getElementById("para-1");
//   app2.appendChild(para2);

  



//   const para1=document.createElement("ul");
//   const node1=document.createTextNode("Unordered List");
//   para1.appendChild(node1);
//   const app1=document.getElementById("div1");
//   app1.appendChild(para1);
// }
//createStructure()



function levelStructure(eleData,lev){
  const element = document.createElement(eleData.type);
 
   document.body.appendChild(element);
  const ind= '  '.repeat(lev);
  console.log(`${ind}${eleData.type}-level ${lev}`)
  
  
  const container = element;
  if(eleData.children){
    eleData.children.forEach(celement => {

      const childElement = levelStructure(celement,lev+1) 
      container.appendChild(childElement);
      
    });
  }
  return element;
}

const ctop=data[0];
levelStructure(ctop,0);







// function elementFromHtml(html){
//   const template=document.createElement("template");
//   template.innerHTML=html.trim();
//   return template.content.firstElementChild;
// }

// const mylist=elementFromHtml(`
// <ul>
// <li> List1</li>
// <ul>
//   `
// );

// document.body.appendChild(mylist)
