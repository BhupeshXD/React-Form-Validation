import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstname: "", lastname: "", email: "", country: "India", streetAddress: "", city: "", state: "", postalCode: "", comments: false, candidates: false, offers: false, pushNotifications: ""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the value of Form Data");
    console.log(formData);
  }
  return (
    <div className=" flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name </label><br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Bhupesh"
          value={formData.firstName}
          onChange={changeHandler} className='outline' />
        <br />

        <label htmlFor="lastName">Last Name </label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Dhapola"
          value={formData.lastName}
          onChange={changeHandler}
          className='outline' /> <br />

        <label htmlFor="email">Enter Email Address </label> <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="bhupesh@example.com"
          value={formData.email}
          onChange={changeHandler}
          className='outline' /> <br />

        <label htmlFor="country">Country </label><br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className='outline'
        >
          <option value="India">India</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="Japan">Japan</option>
        </select>

        <br />

        <label htmlFor="streetAddress">Street Address </label> <br />
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          placeholder="Enter your Address here"
          value={formData.streetAddress}
          onChange={changeHandler}
          className='outline' /><br />

        <label htmlFor="city">City</label><br />
        <input
          type="text"
          id="city"
          name="city"
          onChange={changeHandler}
          placeholder="Mumbai"
          value={formData.city}
          className='outline' /><br />

        <label htmlFor="state">State / Province</label><br />
        <input
          type="text"
          id="state"
          name="state"
          onChange={changeHandler}
          placeholder="Maharashtra"
          value={formData.state}
          className='outline' /><br />

        <label htmlFor="postalCode">Postal Code</label><br />
        <input
          type="number"
          id="postalCode"
          name="postalCode"
          onChange={changeHandler}
          placeholder="400001"
          value={formData.postalCode}
          className='outline' /> <br />

<br />
        <fieldset>
          <legend>By Email</legend>

          <div className="flex">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>
<br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your phone.</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>
          <br />

          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as Email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as email</label>
          <br />
          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notification"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notifications</label>
          <br />
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>


      </form>
    </div>
  );
}

export default App;
