import { Component } from "react";

class Constructor extends Component{

constructor(){
    super()
    this.state = {
        name:"Hassan sanata"
    }
    console.log("My constructor hon ...")
}   
    
render(){
return (
    <>
{console.log("My render method hon")}
<h1>Assalam o alikum ! My name is {this.state.name}</h1>
<button onClick={()=>this.setState({name: "Mohammad Haris"})}>Update Name</button>
</>)
}
}
export default Constructor


// 1) CONSTRUCTOR method Life cycle method ky kis phase ka method hay ?
// ANSWER: Constructor method React ke life cycle ke Mounting Phase ka part hota hai. Is phase mein component DOM mein 
// insert hone ki preparation kar raha hota hai.


// 2) Constructor method RENDER method sy phely call hota hay yaah baad my ?
// ANSWER: Constructor method render method se pehle call hota hai. Yeh method component ki initial setup ke liye hota hai
// aur uske baad render method call hota hai, jo JSX ko DOM mein render karta hai.


// 3) CONSTRUCTOR method kab call hota hay ?
// ANSWER: Constructor method us waqt call hota hai jab hum apni class component ka instance new keyword ke zariye create karte hain.
// React ke context mein, jab component ko DOM mein mount hone ke liye prepare kiya jata hai, tab constructor pehle call hota hai. Yaad rahy
// Component ky update hony par Constructor method dobara yah bar bar call nahe hoga. Sirf 1st time call hota hay jab Component 1st time LOAD
// hoga


// 4) Constructor Method use kis liye hota hay REACT my ?
// ANSWER:
// Constructor method ko React mein do primary purposes ke liye use kiya jata hai:

// 1) State ko initialize karne ke liye: Yeh initial state set karne ka kaam karta hai jo component ki default behavior ko define karta hai.
// 2) Props ko initialize karne ke liye: Agar aap parent component se data pass kar rahe hain, toh props ko handle karne ke liye constructor
// mein super(props) likhna zaroori hota hai.
// constructor(props) {
//     super(props);
//     this.state = { count: 0 };
// }

// 5) Constructor method ko kis liye use nahe karna chaihyee ? 
// ANSWER:
// API Calls: API calling ka kaam asynchronous hota hai aur constructor synchronous hota hai. Agar aap API call yahan karte hain toh render hone
// ke waqt data available nahi hoga aur "ERROR" aa sakta hai. API calls ke liye aapko componentDidMount ya useEffect (functional components mein)
// ka use karna chahiye.
// "Error" is liye aa sakta hai kyun ke constructor method render method se pehle chal raha hota hai, aur us waqt React ka DOM structure abhi 
// properly initialize nahi hota. Agar aap constructor mein API call karenge, toh data wapas aane tak React ko maloom hi nahi hoga ki use woh
// data kaha render karna hai, kyun ke abhi render method call hi nahi hua aur component ki UI abhi ready nahi hai.
// Is wajah se ya toh aapko undefined data milega ya error throw hoga.

// Side Effects (DOM Manipulation ya Event Listeners): Constructor sirf initialization ke liye hota hai. Side effects ke liye React lifecycle
// methods ka sahi use karein.