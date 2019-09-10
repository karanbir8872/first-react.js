const Team = ()=>(
<section className="hero is-info is-large">
  <div className="hero-body">
    <div className="container has-text-centered">
      <h1 className=" is-family-sans-serif us">
        ABOUT US
      </h1>
      <h2 className="subtitle is-5 is-family-sans-serif has-text-weight-normal run">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum</h2>
      <h2 className="subtitle is-5 is-family-sans-serif has-text-weight-normal  run "> obcaecati natus iure voluptatum eveniet harum recusandae</h2>
      <h2 className="subtitle is-5 is-family-sans-serif has-text-weight-normal run">ducimus saepe.</h2>
    </div>
    <style jsx>
        {`
        .hero-body{
            background:url("https://colorlib.com/preview/theme/pharma/images/hero_1.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
    position: relative;
        }
        .run{
            margin-bottom: 0rem;
        }
        .us{
            margin-bottom: 0rem;
            font-weight:900;
            font-size: 4rem;
        }
        `}
        </style>
  </div>
</section>
);
export default Team;