import './Regform.css';
import {useState} from "react";

function Regform(){
const[firstname,setFirstname]=useState("");
const[lastname,setLastname]=useState("");
const[mobilenumber,setMobilenumber]=useState("");
const[email,setEmail] = useState("");
const[password,setPassword] = useState("");
const[confpassword,setConfPassword] = useState("");
const[dob,setDob] = useState("");
const[gender,setSelectedOption] = useState("");
const[selectstate,setSelectstate] = useState("");
const[selectcourse,setSelectcourse] = useState("");
const[deliverymode,setSelectDeliveryMode] = useState("");
const[comments,setComments] = useState("");
const[passwordError,setPasswordError] = useState("false");


const handleOptionChange=(event) => {
    setSelectedOption(event.target.value);
}

const handleOption=(event) => {
    setSelectDeliveryMode(event.target.value);
}

const handleSubmit=(e)=>{
e.preventDefault();
if(password !== confpassword) {
    setPasswordError(true);
}
else{
    setPasswordError(false);

console.log("First name"+firstname);
console.log("Last name"+lastname);
console.log("Mobile number"+mobilenumber);
console.log("Email"+email);
console.log("Password"+password);
console.log("Conf Password"+confpassword);
console.log("Dob"+dob);
console.log("gender"+gender);
console.log("Select state"+selectstate);
console.log("Course"+selectcourse);
console.log("DeliveryMode"+deliverymode);
console.log("Comments"+comments);
alert("Your response is updated successfully");
}
}

    return(
        <>
        <form className='registration-form' onSubmit={handleSubmit}>
            <fieldset>
                <legend>Personal Information</legend>
           <div className="form-group">
            <label htmlform="firstName">FirstName: </label>
            <input type="text" placeholder="Enter your First Name" 
            onChange={(e)=>setFirstname(e.target.value)} value={firstname}id="firstname" required/>
            </div> 
            <div className="form-group">
                <label htmlform="lastName">LastName: </label>
                <input type="text" placeholder="Enter your Last Name" onChange={(e)=>setLastname(e.target.value)} value={lastname} id="lastname"></input>
            </div>
            <div className="form-group">
                <label htmlform="mobilenumber">Mobile Number:</label>
                <input type="number" placeholder="Enter your Mobile No"onChange={(e)=>setMobilenumber(e.target.value)} value={mobilenumber} id="mobile no"></input>  
            </div>
            <div className="form-group">
                <label htmlform="email">Email: </label>
                <input type="email" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} value={email} id="email"></input>
            </div>
            <div className="form-group">
                <label htmlform="password">Password: </label>
                <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value={password} id="password"name="password" maxLength={"10"}></input>
            </div>
            <div className="form-group">
                <label htmlform="confirm password">Confirm Password: </label>
                <input type="password" placeholder="Confirm Password" onChange={(e)=>setConfPassword(e.target.value)} value={confpassword}id="confirm id" name="confirm password" maxLength={"10"}></input>
            </div>
            <div className="form-group">
                <label htmlform="dob">DOB: </label>
                <input type="date" onChange={(e)=>setDob(e.target.value)} value={dob}id="dob" required/>
            </div>
            <div className="form-group1">
                <label htmlform="gender">Gender: </label>
                <input type="radio" value="Male" className="gender" onChange={handleOptionChange} checked={gender==="Male"}/><label>Male</label>
                <input type="radio" value="Female" className="gender" onChange={handleOptionChange} checked={gender==="Female"}/><label>Female</label>
                <input type="radio" value="Others" className="gender" onChange={handleOptionChange} checked={gender==="Others"}/><label>Others</label>
            </div>
            <div className="form-group">
                <label htmlform="SelectState">Select State </label>
                <select id="select state"onChange={(e)=>setSelectstate(e.target.value)} value={selectstate}>
                    <option></option>
                    <option>Karnataka</option>
                    <option>TamilNadu</option>
                    <option>Andhra Pradesh</option>
                    <option>Kerala</option>
                    <option>Telangana</option>                
                    </select>
            </div>
            <div className="form-group">
                <label htmlform="Selectcourse">Select Course: </label>
                <select id="select course" onChange={(e)=>setSelectcourse(e.target.value)} value={selectcourse}>
                    <option></option>
                    <option>Java Full Stack</option>
                    <option>Python Full Stack</option>
                    <option>Software Testing</option>
                </select>
            </div>
            </fieldset>
            <fieldset>
                <legend>Course Information</legend>
            <div className="form-group1">
                <label htmlform="deliverymode">Delivery Mode: </label>
                <input type="radio" value="Online" className="delivery" onChange={handleOption}checked={deliverymode==="Online"}/><label>Online</label>
                <input type="radio" value="Offline" className="delivery" onChange={handleOption}checked={deliverymode==="Offline"}/><label>Offline</label>
            </div>
            <div className="form-group">
                <label htmlfor="comments">Comments </label>
                <textarea id="comments" onChange={(e)=>setComments(e.target.value)} value={comments} required></textarea>
            </div>
            </fieldset>
            <br></br>
            {passwordError && <p className='warning'>*Password does not match</p>}
            <button type="submit">Register</button>
        </form>
        </>
    )
}
export default Regform;