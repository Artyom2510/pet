import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/assets/images/logo.png' width='64' height='64' alt='logo' />
    </Link>
  );
};
