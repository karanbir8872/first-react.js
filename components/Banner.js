const Banner = () => (
    <div className="back">
      <div className=" main has-text-centered ">
        <p className=" subtitle is-5  has-text-white is-size-6">
          EFFECTIVE MEDICINE, NEW MEDICINE EVERYDAY
        </p>
        <p className=" welcome title is-1 has-text-white has-text-weight-bold is-family-sans-serif ">
          WELCOME TO
        </p>
        <p className=" welcome title is-1 has-text-white has-text-weight-bold is-family-sans-serif ">
          PHARMA
        </p>
        <a href="/about" className="button is-primary is-outlined is-size-6 ">
          SHOP NOW
        </a>
      </div>
      <style Jsx>
        {`
      .back{
        background:url("https://colorlib.com/preview/theme/pharma/images/hero_1.jpg");
        height: 46rem;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: -2rem;
        
      }
      .main{
        padding-top: 20rem;
      }
      .welcome{}
      `}
      </style>
    </div>
  );
  export default Banner;
  