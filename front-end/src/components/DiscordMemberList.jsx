function DiscordMemberList({ discordMembers }) {
  return (
    <>
      <h3>Discord Members</h3>
      <div className="discord-box">
        <ul>
          {discordMembers?.length > 0 ? (
            discordMembers.map((member, key) => (
              <li id={key}>
                <img src={member.avatar_url} alt="profile" />
                {member.username}
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
      {/* Discord Iframe code (replace later) */}
    </>
  );
}
export default DiscordMemberList;
