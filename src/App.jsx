  const [newsResults, setNewsResults] = useState(null);
  const [discordMembers, setDiscordMembers] = useState(null);

  useEffect(() => {
    (async () => {
      const [newsData, discordData] = await Promise.all([
        autoFetch("/crypto-panic/api"),
        autoFetch("/discord/api"),
      ]);

      setNewsResults(newsData?.results);
      setDiscordMembers(discordData?.members);
    })().catch((err) => {
      console.log(err);
    });
  }, []);
