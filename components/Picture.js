const Picture = () => (
    <div className="section color">
      <div className="container">
        <h1 className="title is-3 has-text-centered title">NEW PRODUCTS</h1>
        <div className="columns">
          <div className="column is-one-third has-text-centered">
            <a href="https://colorlib.com/preview/theme/pharma/shop-single.html">
              <img
                src="https://colorlib.com/preview/theme/pharma/images/product_03.png"
                alt="image"
              />
            </a>
            <h3 className="text">
              <a href="https://colorlib.com/preview/theme/pharma/shop-single.html">Umcka Cold Care</a>
            </h3>
            <p className="price">$120.00</p>
          </div>
          <div className="column is-one-third has-text-centered">
            <a href="https://colorlib.com/preview/theme/pharma/shop-single.html">
              <img
                src="https://colorlib.com/preview/theme/pharma/images/product_01.png"
                alt="image"
              />
            </a>
            <h3 className="text">
              <a href="#">Bioderma</a>
            </h3>
            <p className="price">
              <del>$95.00</del> - $55.00
            </p>
          </div>
          <div className="column is-one-third has-text-centered">
            <a href="#">
              <img
                src="https://colorlib.com/preview/theme/pharma/images/product_02.png"
                alt="image"
              />
            </a>
            <h3 className="text">
              <a href="#">Chanca Piedra</a>
            </h3>
            <p className="price">$70.00</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .title {
          margin-top: 3rem;
          font-weight: 200;
          font-family: sans-serif;
          color: #000;
        }
        .color {
          background-color: #f8f9fa;
          margin-top: 4rem;
        }
        .columns {
          margin-top: 4rem;
        }
        .text a {
          color: #000;
          font-size: 1.75rem;
          font-family: sans-serif;
        }
        .price {
          line-height: 1.7;
          color: #000;
          font-weight: 400;
          font-size: 17px;
        }
      `}</style>
    </div>
  );
  export default Picture;
  