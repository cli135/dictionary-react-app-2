import PropTypes from "prop-types";

function Definitions(props) {
  // data and display functionality separated

  // data below
  // instead of storing data in defintiions,
  // we want store data in parent app
  // and update data there
  // and let it flow downstream to the child class
  // definitions
  // via a parameter/argument potato passing scheme
  // passing by reference i hope
  // gotta learn about javascript functions too though
  const { meanings } = props;

  // display code below
  return (
    <section className="section is-medium pt-0 pb-6" id="definitions">
      <h1 className="title">Definitions</h1>
      {
        meanings.map((meaning, index) => {
          return (
            <article className="message is-info is-medium" key={index}>
              <div className="message-header">
                <p>{meaning.partOfSpeech}</p>
              </div>
              <div className="message-body">
                <div className="content">
                  <ul style={{marginTop: 0}}>
                    {
                      meaning.definitions.map((item, i) => <li key={i}>{item.definition}</li>)
                    }
                  </ul>
                </div>
              </div>
            </article>
          );
        })
      }
    </section>
  );
}

// something about type checking the props / inputs to a component / class in React
Definitions.propTypes = {
  meanings: PropTypes.array.isRequired
};

export default Definitions;
