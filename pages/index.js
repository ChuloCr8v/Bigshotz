import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-900">
      <Head>
        <title>Paul Ray Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-hidden" >
        <Hero />
      </main>
    
    </div>
  )
}
