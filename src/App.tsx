import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
  query {
    testField
  }
`;

function App() {
  const { loading, error, data } = useQuery(QUERY);

  console.log({ loading, error, data });

  return (
    <main className="container mx-auto mt-10 px-5 flex">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-3xl">Tech Hot Takes 🔥</h1>
          <a href="#">
            <button className="btn btn-primary ">+Post</button>
          </a>
        </div>

        {/* Can comment and react variant */}
        <div
          id="posts"
          className="min-w-full grid md:grid-cols-2 xl:grid-cols-3 gap-3"
        >
          <article
            id="content_post_176"
            className="card max-w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title">
                Photo booth echo poutine cronut chambray truffaut salvia.
              </h2>
              <span className="text-sm text-gray-400 font-light">
                by: björn
              </span>

              <p>
                Drinking skateboard aesthetic. Keytar lomo brunch keffiyeh wes
                anderson bicycle rights. Xoxo mustache celiac yuccie typewriter.
                Banh mi hashtag typewriter hella food truck kogi selvage
                meggings. Chambray synth food truck yolo taxidermy hashtag
                marfa.
              </p>

              <section className="comments">
                <h3 className="font-bold mb-2">
                  Here is what people said recently:
                </h3>
                <ul className="list-disc list-inside">
                  <li className="italic font-light text-sm">
                    Bespoke brooklyn pop-up pabst aesthetic fixie vhs.
                  </li>
                  <li className="italic font-light text-sm">
                    Craft beer offal health.
                  </li>
                </ul>
              </section>

              <section className="reactions">
                <div className="card-actions">
                  <button className="btn btn-outline btn-accent btn-circle btn-sm">
                    🙁
                  </button>
                  <button className="btn btn-outline btn-accent btn-circle btn-sm">
                    😑
                  </button>
                  <button className="btn btn-outline btn-accent btn-circle btn-sm">
                    😀
                  </button>

                  <button className="btn btn-link btn-sm ml-auto">
                    +Comment
                  </button>
                </div>
              </section>
            </div>
          </article>

          {/* Can neither comment nor react variant */}
          <article
            id="content_post_179"
            className="card max-w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title">
                Lomo mustache farm-to-table messenger bag deep v wes anderson.
              </h2>
              <span className="text-sm text-gray-400 font-light">
                by: sasho
              </span>

              <p>
                Organic neutra scenester beard portland tote bag. Banh mi
                organic narwhal wayfarers pop-up intelligentsia blog. Forage
                fingerstache flannel neutra. Organic trust fund chambray
                kombucha.
              </p>

              <section className="comments">
                <h3 className="font-bold mb-2">
                  Here is what people said recently:
                </h3>
                <ul className="list-disc list-inside">
                  <li className="italic font-light text-sm">
                    Green juice shabby chic austin paleo.
                  </li>
                  <li className="italic font-light text-sm">
                    Kickstarter asymmetrical knausgaard butcher waistcoat
                    bicycle rights.
                  </li>
                </ul>
              </section>

              <section className="reactions">
                <div className="card-actions">
                  <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col items-center">
                      🙁
                      <span className="countdown text-sm font-bold text-gray-400">
                        1
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      😑
                      <span className="countdown text-sm font-bold text-gray-400">
                        6
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      😀
                      <span className="countdown text-sm font-bold text-gray-400">
                        3
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default App;
