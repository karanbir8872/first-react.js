const Last = () => (
    <div className="section">
      <div className="container">
      <div className="columns foot">
  <div className="column is-two-fifths ">
  <h2 className="title is-5">About Us</h2>
            <h4 >Lorem ipsum dolor sit amet,</h4>
           <h4> consectetur adipisicing elit. Eius</h4>
            <h4>quae reiciendis distinctio</h4>  
            <h4>voluptates sed dolorum excepturi</h4> 
            <h4>iure eaque,aut unde.</h4>
  </div>
  <div className="column is-two-fifths ">
  <h2 className="title is-5">Quick Us</h2>
            <ul className="is-size-5">
              <li>
                <a href="#">Supplement</a>
              </li>
              <li>
                <a href="#">Vitamins</a>
              </li>
              <li>
                <a href="#">Diet & Nutrition</a>
              </li>
              <li>
                <a href="#">Tea & Coffee</a>
              </li>
            </ul>
  </div>
  <div className="column ">
    <h2 className="title is-5 has-text-left">Contuct Us</h2>
    <div>
      <span>
            < i className="fas fa-address-card"></ i>
              <span className="span">203 Fake St. Mountain View, San Francisco, California, USA</span>
              </span>
              </div>
            <div>
                <a href="#">
                    <i className="fas fa-phone"></i>
                  <span className="span">235469699</span>
                </a>
                </div>
                <div>
                <span>
                    <i className="fas fa-envelope-square"></i>
                  <span className="span">emailaddress.com</span>
                </span>
            </div>
   </div>

   </div>
    <div className="content has-text-centered">
        <p className="has-text-grey-light  ">
          Copyright © 2019 All rights reserved | This template is made with
          <span className="icon">
            <i className="fas fa-home" />
          </span>
          by
          <a href="#"> Colorlib</a>
        </p>
      </div>
    </div>
      <style jsx>
        {`
      .foot{
        margin-top: 3rem;
      }
      .content{
             margin-top:6rem;
      }
      .span{
        margin-left:0.75rem;
      }  
        `}
      </style>
    </div>

  );
  export default Last;
  