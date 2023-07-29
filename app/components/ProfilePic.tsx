import Image from 'next/image'

export default function ProfilePic() {
  return (
    <section className='w-full mx-auto'>
      <Image
        className='border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-md mx-auto mt-8'
        src='/images/profilePicture.png'
        width={200}
        height={200}
        alt='Edoardo Busano'
        priority={true}
      />
    </section>
  )
}
