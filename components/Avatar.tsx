import Image from "next/image";

interface Props {
  url: string;
  className: string;
}

function Avatar({ url, className }: Props) {
  return (
    <Image
      src={url}
      width={40}
      height={40}
      alt="profile pic"
      className={`h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      loading="lazy"
      title="Google Account"
    />
  );
}

export default Avatar;
