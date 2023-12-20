import Content from '@/components/Content'
import Slider from '@/components/Slider'




export default function Home() {

  return (
    <main className='bg-hero-bg lg:!bg-hero-bg-1024 md:!bg-hero-bg-768 sm:!bg-hero-bg-360 bg-cover bg-center bg-no-repeat flex items-center  
    minlg:gap-[90px] lg:gap-[24px] md:!gap-[64px] md:flex-wrap lg:!bg-right
    minlg:h-[700px] lg:h-auto minlg:pt-[120px] lg:pt-[81px] minlg:pb-[98px] minmd:!pb-[200px] relative z-10 md:!pb-[92px] md:pl-[32px] md:!pt-[27px] sm:!pb-[56px] sm:!pl-[16px] sm:!pt-[27px]
    after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:bg-black after:opacity-[0.6] after:z-[-1] after:lg:hidden
    '>
      <Content/>
      <Slider/>
    </main>
  )
}




