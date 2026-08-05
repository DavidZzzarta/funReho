import { SocialIcon } from "react-social-icons";

export function SocialIcons({ size }: { size?: number }) {
  return (
    <>
      <SocialIcon
        style={{ height: size ?? 44, width: size ?? 44 }}
        bgColor="transparent"
        fgColor="white"
        url="https://facebook.com/couetilc"
      />
      <SocialIcon
        style={{ height: size ?? 44, width: size ?? 44 }}
        bgColor="transparent"
        fgColor="white"
        url="https://instagram.com/couetilc"
      />
      <SocialIcon
        style={{ height: size ?? 44, width: size ?? 44 }}
        bgColor="transparent"
        fgColor="white"
        url="https://youtube.com/couetilc"
      />
      <SocialIcon
        style={{ height: size ?? 44, width: size ?? 44 }}
        bgColor="transparent"
        fgColor="white"
        url="mailto:contacto@fundacion.org"
      />
      <SocialIcon
        style={{ height: size ?? 44, width: size ?? 44 }}
        bgColor="transparent"
        fgColor="white"
        url="https://wa.me/573000000000"
      />
    </>
  );
}
