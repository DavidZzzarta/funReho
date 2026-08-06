import { SocialIcon } from "react-social-icons";

export function SocialIcons({ size }: { size?: number }) {
  return (
    <>
      <SocialIcon
        style={{ height: size ?? 44, width: size ?? 44 }}
        bgColor="transparent"
        fgColor="white"
        url="https://web.facebook.com/RehobotFundacion/?_rdc=1&_rdr#"
        target="_blank"
        rel="noopener noreferrer"
      />
      <SocialIcon
        style={{ height: size ?? 44, width: size ?? 44 }}
        bgColor="transparent"
        fgColor="white"
        url="https://www.instagram.com/p/CD2pHyFHb8Q/"
        target="_blank"
        rel="noopener noreferrer"
      />
      <SocialIcon
        style={{ height: size ?? 44, width: size ?? 44 }}
        bgColor="transparent"
        fgColor="white"
        url="https://www.youtube.com/channel/UCIT3vdiGrjk2PLyXT9GgKCQ"
        target="_blank"
        rel="noopener noreferrer"
      />
      <SocialIcon
        style={{ height: size ?? 44, width: size ?? 44 }}
        bgColor="transparent"
        fgColor="white"
        url="https://wa.me/573236410946"
        target="_blank"
        rel="noopener noreferrer"
      />
    </>
  );
}
