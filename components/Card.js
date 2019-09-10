const card = () => (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <div className="card">
              <div className="content">
                <h5 className="free">Free Shipping</h5>
                <h6 className="title is-4">Amet sit amet dolor</h6>
                <p className="subtitle is-6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="card one">
              <div className="content1">
                <h5 className="free">Season Sale 50% off</h5>
                <h6 className="title is-4">Amet sit amet dolor</h6>
                <p className="subtitle is-6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="card two">
              <div className="content">
                <h5 className="free">Buy A Gift Card</h5>
                <h6 className="title is-4">Amet sit amet dolor</h6>
                <p className="subtitle is-6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style JSX>
        {`
             .card{
              padding-top: 1rem;
              padding-left: 4rem;
              padding-bottom: 1rem;
              background: #51EAEA;
            }
            .one{
              background: #74D12B
            }
            .two{
              background: #FFC107;
            }
            .content h5{
              text-align:center;
              margin-left: 3rem;
              margin-right: 6rem;
              margin-top: 1rem;
              font-size: 32px;
              font-family: sans-serif;
              font-weight: 400;
              color:white;
            
            }
            .content1 h5{
              color:white;
              font-family: sans-serif;
            }
            .content1 h6{
              margin-top: -3rem;
              margin-left: 1rem;
              color: white;
              font-weight: 400;
            }
            .content1 p{
              margin-bottom: 3rem;
              text-align: -webkit-center;
              margin-left: -3rem;
              color: white;
            }
            .content h6{
              margin-top: -12.5px;
              margin-left: 1rem;
              font-size: 25px;
              font-weight: 400;
              color:white;
            }
            .content p{
              text-align: center;
              margin-top: -17px;
              margin-bottom: 3rem;
              margin-left: -46px;
              color:white;
            }
            .columns{
              margin-top: -8rem;
            }
            .content1 h5{
              font-size: 32px;
              text-align: -webkit-center;
              margin-left: 2rem;
              margin-right: 5rem;
              margin-bottom: 3.5rem;
              color:white;
            }
  
          `}
      </style>
    </div>
  );
  export default card;
  