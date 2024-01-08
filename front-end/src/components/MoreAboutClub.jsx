function MoreAboutClub() {
    return (
        <>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            More About Our Club
          </h2>
          <div className="card-wrap">
            <div className="card">
              <p>
                Blockchain is an emerging field with over 300 million people
                involved in either investing or developing
              </p>
            </div>
            <div className="card">
              <p>
                Great way to network and meet people in the web3 industry as
                well software engineers, lawyers, economists, artists, and more
              </p>
            </div>
            <div className="card">
              <p>
                We meet every wednesday from 7pm-8pm and will also have free
                food. We teach terms and discuss with each other every meeting
              </p>
            </div>
          </div>
          <a href="https://discord.com/invite/EeVuh24q8E">
            <button id="discord-button">View our upcoming</button>
          </a>
        </>
    );
};

export default MoreAboutClub;
