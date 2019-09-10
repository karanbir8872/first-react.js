const Coupon = ()=>(
<div className="section">
    <div className="container">
    <h2 className="h3 has-text-weight-medium is-size-3">Get In Touch</h2>
    <div className="box">
    <div className="columns">
  <div className="column">
  <div className="field ">
  <label className="label">First Name</label>
  <div className="control">
    <input className="input is-medium" type="text" placeholder="Text area"/>
  </div>
</div>
  </div>
  <div className="column ">
  <div className="field ">
  <label className="label">Last Name</label>
  <div className="control">
    <input className="input is-medium" type="text" placeholder="Text area"/>
  </div>
</div>
  </div>
  </div>
  <div className="field">
  <label className="label">Email</label>
  <div className="control">
    <input className="input is-medium" type="text" placeholder="Text area"/>
  </div>
</div>
<div className="field">
  <label className="label">Subject</label>
  <div className="control">
    <input className="input is-medium" type="text" placeholder="Text area"/>
  </div>
</div>
<div className="field">
  <label className="label">Message</label>
  <div className="control">
  <textarea className="textarea" placeholder="text area" rows="10"></textarea>
  </div>
</div>
<div class="has-text-centered ">
<a  href="#" className="button is-large is-fullwidth is-info is-outlined is-size-4">Send Me</a>
</div>
</div>
</div>
<style jsx>
    {`
    .h3{
        margin-bottom: 2rem;
    margin-top: -2rem;
    }
    `}
</style>
</div>
);
export default Coupon;
