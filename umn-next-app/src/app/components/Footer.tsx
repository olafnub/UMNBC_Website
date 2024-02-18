import Image from 'next/image';

const Footer: React.FC = () => {
    return (
      <footer>
        <div>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem"}}>UMN Blockchain</h2>
          <p style={{fontSize: "small", fontWeight: "200"}}>@  2023 UMN Blockchain. All Rights Reserved </p>
        </div>
        <Image
          src="https://1000logos.net/wp-content/uploads/2021/07/Minnesota-Golden-Gophers-logo.png"
          alt="University of Minnesota Logo"
          width={175} // Replace with the actual width of the logo
          height={100} // Replace with the actual height of the logo
          // Additional props for optimization
          // layout="responsive" // Uncomment if you want a responsive layout
          // quality={75} // Uncomment to set a specific quality level
          // priority // Uncomment to mark the image as high priority
        />
        <ul>
          <li><a href="https://www.instagram.com/umn_blockchain">Instagram</a></li>
          <li><a href="https://discord.com/invite/EeVuh24q8E">Discord</a></li>
          <li><a href="https://discord.gg/HYxB7hkrub">Calendar</a></li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;