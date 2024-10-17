//links
import Link from "next/link";

//icons
import {
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine
} from 'react-icons/ri'


const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.instagram.com/dinkar99390/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/dinkar-kumar-6aba3b252/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/Dinkar12'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
    </div>
  )
};

export default Socials;
