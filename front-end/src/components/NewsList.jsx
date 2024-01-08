function NewsList({ newsResults }) {
  function convertTime(timeInput) {
    let currentTime = new Date();
    let givenTime = new Date(timeInput);

    let monthDifference =
      (currentTime.getFullYear() - givenTime.getFullYear()) * 12 +
      currentTime.getMonth() -
      givenTime.getMonth();

    if (monthDifference > 0) {
      return monthDifference > 1
        ? monthDifference + " months ago"
        : monthDifference + " month ago";
    } else {
      let dayDifference = currentTime.getDate() - givenTime.getDate();
      if (dayDifference > 0) {
        return dayDifference > 1
          ? dayDifference + " days ago"
          : dayDifference + " day ago";
      } else {
        let minuteDifference =
          currentTime.getMinutes() - givenTime.getMinutes();
        if (minuteDifference > 0) {
          return minuteDifference > 1
            ? minuteDifference + " minutes ago"
            : minuteDifference + " minute ago";
        } else {
          return "Just now";
        }
      }
    }
  }

  return (
    <>
      <h3>Latest news</h3>
      <div className="news-box">
        <ul>
          {newsResults?.length > 0 ? (
            newsResults.map((news, i) => (
              <li key={i}>
                <a href={news.url}>{news.title}</a>
                <p> {convertTime(news.created_at)}</p>
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default NewsList;
