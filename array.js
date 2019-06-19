const animals = ['elephant', 'tiger', 'zebra', 'dragon', 'dog'];

const o = animals
    //.filter(item => item.length() )
    .filter(val => val.length<7)
    .map((val, index) => {
        if (index) {
            return ', ' + val;
        }
        return val;
    })
        
        //return item.length <8})
    .reduce((prev, item) => prev+= item,'Animals: ')
    .replace(" ,", " ").replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    
document.write(o.fontsize(5).bold());




















//var myWindow = window.open("", "MsgWindow", "width=200, height=100");
//myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");