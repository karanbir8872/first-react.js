const Footer = () => (
  <div className="section picture">
    <div className="container" />
    <div className="columns is-desktop ">
      <div className="column  amet">
      <div className="was">
      <h2 className="has-text-weight-bold is-uppercase is-size-3">Pharma</h2>
      <h2 className="has-text-weight-bold is-uppercase is-size-3 bold">Products</h2>
      <p>Lorem, ipsum dolor sit</p>
      <p>amet consectetur adipisicing elit.</p>
      <p> Molestiae exad minus rem </p> 
      <p>odio voluptatem.</p>
      </div>
      </div>
      <div className="column sit">
        <div className="with">
        <h2 className="has-text-weight-bold is-uppercase is-size-3">Pharma</h2>
      <h2 className="has-text-weight-bold is-uppercase is-size-3 bold">Products</h2>
      <p>Lorem, ipsum dolor sit</p>
      <p>amet consectetur adipisicing elit.</p>
      <p> Molestiae exad minus rem </p>
      <p>odio voluptatem.</p>
      </div>
    </div>
    </div>
    <style jsx>
      {`
      .amet{
        background-image: url(https://colorlib.com/preview/theme/pharma/images/bg_1.jpg);
        background-size: cover;
        background-position: center;
        margin-right: 3rem;
        margin-left: 7rem;
        padding-bottom: 5rem;
      }
      .sit{
        background-image: url(https://colorlib.com/preview/theme/pharma/images/bg_2.jpg);
        background-size:cover;
        background-position: center;
        margin-right: 5rem;
      }
        .picture {
          background-color: #53e1e3;
          margin-top: 8rem;
        }
        .columns {
          margin-top: 2rem;
        }
        .bold{
          margin-top:-1rem;
        }
        .with{
          margin-left:16rem;
          margin-top: 2rem;
        }
        .was{
          margin-left:1rem;
          margin-top:2rem
        }
      `}
    </style>
  </div>
);
export default Footer;