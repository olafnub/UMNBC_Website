import Image from 'next/image';

interface DiscordMember {
  avatar_url: string;
  username: string;
}

interface DiscordMemberListProps {
  discordMembers?: DiscordMember[];
}

const DiscordMemberList: React.FC<DiscordMemberListProps> = ({ discordMembers }) => {
  return (
    <>
      <h3>Discord Members</h3>
      <div className="discord-box">
        <ul>
          {discordMembers && discordMembers?.length >  0 ? (
            discordMembers.map((member, key) => (
              <li key={key}>
                <Image src={member.avatar_url} alt="profile" width={50} height={50} />
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
};

export default DiscordMemberList;