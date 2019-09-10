import Link from "next/link";
const Product = () => (
  <div className="section">
    <div className="container">
      <h1 className=" popular has-text-centered is-size-3 is-family-sans-serif has-text-weight-medium">POPOLUAR PRODUCTS</h1>
      <div className="columns">
        <div className="column is-one-third has-text-centered">
          <span className="tag">SALE</span>
          <Link href="/about">
            <img
              src="https://colorlib.com/preview/theme/pharma/images/product_01.png"
              alt="image"
            />
          </Link>
          <h3 className="text">
            <a href="#">Bioderma</a>
          </h3>
          <p className="price">
            <del>$95.00</del> - $55.00
          </p>
          <Link href="about">
            <img
              src="https://colorlib.com/preview/theme/pharma/images/product_04.png"
              alt="image"
            />
          </Link>
          <h3 className="text">
            <a href="#">Cetyl Pure</a>
          </h3>
          <p className="price">
            <del>$45.00</del> - $20.00
          </p>
        </div>
        <div className="column is-one-third has-text-centered">
          {" "}
          <Link href="/about">
            <img
              src="https://colorlib.com/preview/theme/pharma/images/product_02.png"
              alt="image"
            />
          </Link>
          <h3 className="text">
            <a href="#">Chanca Piedra</a>
          </h3>
          <p className="price">$70.00</p>
          <Link href="/about">
            <img
              src="https://colorlib.com/preview/theme/pharma/images/product_05.png"
              alt="image"
            />
          </Link>
          <h3 className="text">
            <a href="#">CLA Core</a>
          </h3>
          <p className="price">$38.00</p>
        </div>
        <div className="column is-one-third has-text-centered">
          {" "}
          <Link href="/about">
            <img
              src="https://colorlib.com/preview/theme/pharma/images/product_03.png"
              alt="image"
            />
          </Link>
          <h3 className="text">
            <a href="#">Umcka Cold Care</a>
          </h3>
          <p className="price">$120.00</p>
          <span className="tag">SALE</span>
          <Link href="/about">
            <img
              src="https://colorlib.com/preview/theme/pharma/images/product_06.png"
              alt="image"
            />
          </Link>
          <h3 className="text">
            <a href="#">Poo Pourri</a>
          </h3>
          <p className="price">
            <del className="del ">$89</del> - $38.00
          </p>
        </div>
      </div>
      <div className=" padding has-text-centered">
      <a className="button is-link is-outlined is-size-5 ">VIEW ALL PRODUCTS</a>
      </div>
    </div>
    <style jsx>
      {`
      .popular{
          padding-top:3rem;
      }
       
        .columns {
          padding-top: 9rem;
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
        .tag {
          position: absolute;
          background: #e86b00;
          color: #fff;
          letter-spacing: 0.2em;
          padding: 7px 20px;
          font-size: 0.8rem;
          font-weight: 900;
        }
        .padding{
            padding-top:4rem;
        }
      `}
    </style>
  </div>
);
export default Product;