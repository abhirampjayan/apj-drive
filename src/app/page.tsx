import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {/* split in two two colums */}
      <div className='flex flex-col items-center justify-center w-1/2'>
        <h1 className='text-4xl font-bold text-center'>Welcome to APJ Drive</h1>
        <p className='text-center'>
          The best place to find your next job or internship
        </p>
      </div>
      <div className='w-1/2'>
        <Image
          src='/images/hero.svg'
          alt='Hero'
          width={500}
          height={500}
          layout='responsive'
        />
      </div>
    </main>
  );
}
