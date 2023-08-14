import Image from "next/image";

const Avatar = () => {
  return (
    <Image
    src='/avatar.png'
    alt=''
    width={487}
    height={388}
    className='translate-z-0 w-full h-full'
     />
  )
};

export default Avatar;
