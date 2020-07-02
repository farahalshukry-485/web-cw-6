logger();

function logger() {
    for (let numbers=0; numbers < 5 ; numbers++ )
    { console.log ( numbers);}
}

hottestDays();

let temp =[ 20,25,30,35,40,45];
 let overtemp = temp.filter(hottestDays);
 console.log( overtemp)
function hottestDays(value) {
  return value > 30;
}


let books = [
    { 
    book:"first book",
    bookId:1,
    },
    {
      book:" second book",
      bookId:2,
    }
];
 let result= getBookById(books,2);
if (result==1) {
  console.log("found")
}
else{
  console.log ( " undefined ")
}


function getBookById(books,bookId) {
   for (i of books ){
     if ( i.bookId == bookId){
      return 1
     }
   }
}                    

// need help with the bellow 

let done=[];
let bag=[];
let items =[ ];
let price=[];
let bill=[];
let quantity=[];

while (done!="انتهيت" ) {
{ 
  items = prompt( " write down your list "); 
  price= prompt( " write down the price");
  quantity= prompt( " write down the quantity")

  bag.push( items);
  bag.push ( price);
  bag.push(quantity );
}
{bill=prompt( " write down انتهيتif your done")

  if (done=" انتهيت")
    console.log ( items);
    console.log ( price);}
{
function bill() { 
  console.log( items)
  console.log( prices)
  
}
}

}



