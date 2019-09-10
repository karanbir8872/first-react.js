const Lorem = () => (
    <div className="section">
      <div className="container">
        <h1 className="title is-3 has-text-centered term">TESTIMONIALS</h1>
        <div className="columns">
          <div className="column is-one-third">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-96x96">
                    <img
                      className="is-rounded"
                      src="https://colorlib.com/preview/theme/pharma/images/person_4.jpg"
                    />
                  </figure>
                </div>
              </div>
              <div className="content">
                “Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                omnis voluptatem consectetur quam tempore obcaecati maiores
                voluptate aspernatur iusto eveniet, placeat ab quod tenetur
                ducimus. Minus ratione sit quaerat unde.”
              </div>
              <p className="subtitle is-6">— Andrew Neel</p>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-96x96">
                    <img
                      className="is-rounded"
                      src="https://colorlib.com/preview/theme/pharma/images/person_1.jpg"
                    />
                  </figure>
                </div>
              </div>
              <div className="content">
                “Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                omnis voluptatem consectetur quam tempore obcaecati maiores
                voluptate aspernatur iusto eveniet, placeat ab quod tenetur
                ducimus. Minus ratione sit quaerat unde.”
              </div>
              <p className="subtitle is-6">— Kelly holmes</p>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-96x96">
                    <img
                      className="is-rounded"
                      src="https://colorlib.com/preview/theme/pharma/images/person_2.jpg"
                    />
                  </figure>
                </div>
              </div>
              <div className="content">
                “Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                omnis voluptatem consectetur quam tempore obcaecati maiores
                voluptate aspernatur iusto eveniet, placeat ab quod tenetur
                ducimus. Minus ratione sit quaerat unde.”
              </div>
              <p className="subtitle is-6">— Locas Gallone</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .term {
            margin-top: 2rem;
            color: #000;
            font-weight: 400;
            letter-spacing: 1px;
            font-family: sans-seri;
          }
          .columns {
            margin-top: 4rem;
          }
          .content {
            color: #000;
            font-family: crimson text, serif;
            font-size: 1.3rem;
            line-height: 1.4;
            font-style: italic;
          }
        `}
      </style>
    </div>
  );
  export default Lorem;
  