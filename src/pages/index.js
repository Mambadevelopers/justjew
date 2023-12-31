import Head from 'next/head'
import Layout from '../components/Layout';
import Image from 'next/image';
import profilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from '../components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '../components/HireMe';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import Transition from '@/components/Transition';



export default function Home() {
  return (
    <>
      <Head>
  <title>Paulscottdesigns - High-End Jewelry for Every Occasion</title>
  <meta name="description" content="Discover exquisite high-end jewelry at Paulscottdesigns. Explore our stunning collection of fine jewelry, including engagement rings, diamond earrings, and more." />
      </Head>
      <Transition />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image src={profilePic} alt="Baluba" className="w-full h-auto lg:hidden md:inline-block md:w-full" 
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text="Crafting Dreams Into Reality With Jewelry Design." className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">Hi, I am Paul Scott, a jewelry designer with a passion for creating exquisite, 
                one-of-a-kind pieces that capture the beauty and emotions of life. 
                With 15 years of experience in the field, I am always seeking 
                inspiration from nature, art, and 
                personal stories to create timeless 
                jewelry that holds sentimental value.
                </p>
                <div className="flex items-center self-start mt-2 lg:self-center">
                  <Link href="/dummy.pdf" target={"_blank"} className="flex items-center bg-dark text-light 
                  p-2.5 px-6 rounded-full text-lg font-semibold 
                  hover:bg-light hover:text-dark border-2 border-solid 
                  border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark 
                  hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base" 
                  download={true}>Resume<LinkArrow  /></Link>
                  <Link href="mailto:techmamba97@gmail.com" target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                  md:text-base
                  "
                  >
                    Contact</Link>

                </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='Mambatech' className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}
