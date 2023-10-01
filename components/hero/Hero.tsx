import Image from 'next/image';
import ImgBackground from '../../public/images/npD65vPa4vvn1ZHpp3o05A5vdKT.jpg';


export const Hero = () => {
  return (
    <div className='container mx-auto flex items-center rounded-lg my-3 border-20'>

        <div className='absolute'>
          <h2 className=' md:text-4xl text-1xl text-shadow text-white font-bold md:p-6 p-2'>
            Bienvenidos a FilmsApp,</h2>
            
          <h3 className=' md:text-4xl text-1xl text-shadow text-white font-bold md:p-6 p-2'>
            encuentra tu película favorita en nuestro catálogo
          </h3>
        </div>


        <Image

          height={600}
          alt='Image background'
          width={1920}
          src={ImgBackground}
        />
      </div>
  )
}
