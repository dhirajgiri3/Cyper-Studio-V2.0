import styled from 'styled-components';
import TextLink from './TextLink';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const SocialMediaLinksContainer = styled.div`
  .links {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
    }
  }
`;

export default function SocialMediaLinks() {
  return (
    <SocialMediaLinksContainer>
      <div className="links">
        <ul>
          <li>
            <TextLink href="/" icon={<LinkedInIcon />} title="Linkedin" />
          </li>
          <li>
            <TextLink href="/products" icon={<InstagramIcon />} title="Instagram" />
          </li>
          <li>
            <TextLink href="/services" icon={<FacebookIcon />} title="Facebook" />
          </li>
          <li>
            <TextLink href="/our-work" icon={<XIcon />} title="X (Twitter)" />
          </li>
        </ul>
      </div>
    </SocialMediaLinksContainer>
  );
}