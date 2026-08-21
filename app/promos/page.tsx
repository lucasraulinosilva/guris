import localFont from 'next/font/local';
import Link from 'next/link'

const font_titulo = localFont({
  src: [
    {
      path: '../../public/FontshareKit-2608001866/Panchang/Fonts/WEB/fonts/Panchang-Extrabold.woff2'
    }
  ],
  variable: '--font-custom',
})

const font_padrao = localFont({
  src: [
    {
      path: '../../public/FontshareKit-2608001866/Cabinet-Grotesk/Fonts/WEB/fonts/CabinetGrotesk-Regular.woff2'
    }
  ],
  variable: '--font-custom',
})

const font_padrao_bold = localFont({
  src: [
    {
      path: '../../public/FontshareKit-2608001872/Cabinet_Grotesk/Fonts/WEB/fonts/CabinetGrotesk-Bold.woff2'
    }
  ],
  variable: '--font-custom',
})

const font_fundo = localFont({
  src: [
    {
      path: '../../public/Telma/Fonts/WEB/fonts/Telma-Black.woff2'
    }
  ],
  variable: '--font-custom',
})

const font_letreiro = localFont({
  src: [
    {
      path: '../../public/FontshareKit-2608002388/Zodiak/Fonts/WEB/fonts/Zodiak-Bold.woff2'
    }
  ],
  variable: '--font-custom',
})

export default function Promos() {
  return (
    <div className='bg-[#F0EFDB]'>
      <nav className="w-19/20 mx-auto bg-[#E25829] h-15 m-5 rounded-xl flex flex-row text-[#F0EFDB]">
        <div className="md:basis-3/7 text-lg flex flex-row">
          <img src="/logo_agencia.png" alt="" className='p-1' />
          <Link href="/"><p className={`${font_padrao_bold.className} mt-4 ms-4 me-2 underline cursor-pointer flex`}>Início</p></Link>
          <Link href="/promos"><p className={`${font_padrao_bold.className} mt-4 ms-2 me-2 underline cursor-pointer hidden md:flex`}>Promoções</p></Link>
        </div>
        <div className="basis-1/1 md:basis-1/7 text-center ">
          <h1 className={`${font_titulo.className} mt-4 float-end me-2 md:me-0 md:float-none`}>SCJ</h1>
        </div>
        <div className="md:basis-3/7">

        </div>
      </nav>

      <div className='w-full'>
        <div className="relative overflow-hidden bg-background hover:pointer-events-none hover:absolute hover:inset-y-0 hover:start-0 hover:z-2 hover:w-16 hover:bg-[linear-gradient(to_right,var(--color-background),transparent)] after:pointer-events-none after:absolute after:inset-y-0 after:end-0 after:z-2 after:w-16 after:bg-[linear-gradient(to_left,var(--color-background),transparent)] ">
          <div className="flex overflow-hidden">
            <div className="marquee-track-x [animation:marquee-x_40s_linear_infinite]  flex w-max gap-4 py-2.5">
              <div className="flex items-center gap-10 ps-4 text-sm text-foreground ">
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-al text-3xl"></span> Albânia</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-mg text-3xl"></span> Madagascar</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-fr text-3xl"></span> França</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-br text-3xl"></span> Brasil</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-bs text-3xl"></span> Bangladesh</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-eg text-3xl"></span> Egito</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-de text-3xl"></span> Alemanha</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-gr text-3xl"></span> Grécia</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-jp text-3xl"></span> Japão</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-ch text-3xl"></span> China</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-mv text-3xl"></span> Maldivas</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-mn text-3xl"></span> Mongólia</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-np text-3xl"></span> Nepal</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-no text-3xl"></span> Noruega</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-kr text-3xl"></span> Coreia do Sul</span>
              </div>
              <div className="flex items-center gap-10 pe-4 text-sm text-foreground " aria-hidden="true">
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-al text-3xl"></span> Albânia</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-mg text-3xl"></span> Madagascar</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-fr text-3xl"></span> França</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-br text-3xl"></span> Brasil</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-bs text-3xl"></span> Bangladesh</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-eg text-3xl"></span> Egito</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-de text-3xl"></span> Alemanha</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-gr text-3xl"></span> Grécia</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-jp text-3xl"></span> Japão</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-ch text-3xl"></span> China</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-mv text-3xl"></span> Maldivas</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-mn text-3xl"></span> Mongólia</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-np text-3xl"></span> Nepal</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-no text-3xl"></span> Noruega</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-kr text-3xl"></span> Coreia do Sul</span>
              </div>
              <div className="flex items-center gap-10 pe-4 text-sm text-foreground" aria-hidden="true">
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-al text-3xl"></span> Albânia</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-mg text-3xl"></span> Madagascar</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-fr text-3xl"></span> França</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-br text-3xl"></span> Brasil</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-bs text-3xl"></span> Bangladesh</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-eg text-3xl"></span> Egito</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-de text-3xl"></span> Alemanha</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-gr text-3xl"></span> Grécia</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-jp text-3xl"></span> Japão</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-ch text-3xl"></span> China</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-mv text-3xl"></span> Maldivas</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-mn text-3xl"></span> Mongólia</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-np text-3xl"></span> Nepal</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-no text-3xl"></span> Noruega</span>
                <span className={`${font_padrao_bold.className} inline-flex items-center gap-2 whitespace-nowrap text-lg`}><span className="fi fi-kr text-3xl"></span> Coreia do Sul</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className={`w-full items-baseline flex`}>
            <h1 className={`${font_titulo.className} ms-7 text-2xl md:text-[120px]`}>SCJ</h1>
            <h1 className={`${font_padrao_bold.className} text-2xl ms-5`}>Promoções</h1>

          </div>
        </div>
      </div>
      <div className='bg-[#E25829]'>

        <div className='p-2 flex md:flex-row flex-col flex-wrap justify-around md:p-5'>

          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-4xl md:text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black select-none`}>Rio de Janeiro</h1>
            <div className="bg-[#F0EFDB]/90 w-xs md:w-sm absolute top-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity ">
              <h1 className={`${font_titulo.className}`}>Copacabana</h1>
              <img src="/copacabana.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>5x de R$ 344 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Galeão<span className='border-r-3 border-b-3 float-end'>3x de R$ 140 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Galeão<span className='border-r-3 border-b-3 float-end'>2x de R$ 225 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>6x de R$ 80 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>4x de R$ 115 — ida e volta</span></p>
            </div>
          </div>

          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-4xl md:text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black select-none`}>Xangai</h1>
            <div className="bg-[#F0EFDB]/90 w-xs md:w-sm absolute top-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity ">
              <h1 className={`${font_titulo.className}`}>Xintiandi</h1>
              <img src="/xintiandi.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Xangai Pudong<span className='border-r-3 border-b-3 float-end'>10x de R$ 780 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Xangai Pudong<span className='border-r-3 border-b-3 float-end'>8x de R$ 950 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Xangai Pudong<span className='border-r-3 border-b-3 float-end'>6x de R$ 1.250 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Xangai Pudong<span className='border-r-3 border-b-3 float-end'>12x de R$ 625 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Xangai Pudong<span className='border-r-3 border-b-3 float-end'>5x de R$ 1.520 — ida e volta</span></p>
            </div>
          </div>


          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-4xl md:text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black select-none`}>Tirana</h1>
            <div className="bg-[#F0EFDB]/90 w-xs md:w-sm absolute top-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity ">
              <h1 className={`${font_titulo.className}`}>Rinas</h1>
              <img src="/tirana.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Madre Teresa<span className='border-r-3 border-b-3 float-end'>10x de R$ 580 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Madre Teresa<span className='border-r-3 border-b-3 float-end'>6x de R$ 940 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Madre Teresa<span className='border-r-3 border-b-3 float-end'>5x de R$ 1.160 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Madre Teresa<span className='border-r-3 border-b-3 float-end'>12x de R$ 465 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Madre Teresa<span className='border-r-3 border-b-3 float-end'>4x de R$ 1.420 — ida e volta</span></p>
            </div>
          </div>

          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-4xl md:text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black select-none`}>Antananarivo</h1>
            <div className="bg-[#F0EFDB]/90 w-xs md:w-sm absolute top-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity ">
              <h1 className={`${font_titulo.className}`}>Ivato</h1>
              <img src="/antananarivo.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Ivato<span className='border-r-3 border-b-3 float-end'>10x de R$ 850 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Ivato<span className='border-r-3 border-b-3 float-end'>6x de R$ 1.380 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Ivato<span className='border-r-3 border-b-3 float-end'>5x de R$ 1.660 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Ivato<span className='border-r-3 border-b-3 float-end'>12x de R$ 690 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Ivato<span className='border-r-3 border-b-3 float-end'>4x de R$ 2.050 — ida e volta</span></p>
            </div>
          </div>

          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-4xl md:text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black select-none`}>Paris</h1>
            <div className="bg-[#F0EFDB]/90 w-xs md:w-sm absolute top-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity ">
              <h1 className={`${font_titulo.className}`}>Roissy-en-France</h1>
              <img src="/paris.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Charles de Gaulle<span className='border-r-3 border-b-3 float-end'>10x de R$ 450 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Orly<span className='border-r-3 border-b-3 float-end'>6x de R$ 730 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Orly<span className='border-r-3 border-b-3 float-end'>5x de R$ 860 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Charles de Gaulle<span className='border-r-3 border-b-3 float-end'>12x de R$ 360 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Charles de Gaulle<span className='border-r-3 border-b-3 float-end'>4x de R$ 1.100 — ida e volta</span></p>
            </div>
          </div>

          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-4xl md:text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black select-none`}>Daca</h1>
            <div className="bg-[#F0EFDB]/90 w-xs md:w-sm absolute top-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity ">
              <h1 className={`${font_titulo.className}`}>Kurmitola</h1>
              <img src="/daca.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Hazrat Shahjalal<span className='border-r-3 border-b-3 float-end'>10x de R$ 890 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Hazrat Shahjalal<span className='border-r-3 border-b-3 float-end'>8x de R$ 1.080 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Hazrat Shahjalal<span className='border-r-3 border-b-3 float-end'>6x de R$ 1.450 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Hazrat Shahjalal<span className='border-r-3 border-b-3 float-end'>12x de R$ 720 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Hazrat Shahjalal<span className='border-r-3 border-b-3 float-end'>5x de R$ 1.720 — ida e volta</span></p>
            </div>
          </div>

          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-4xl md:text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black select-none`}>Cairo</h1>
            <div className="bg-[#F0EFDB]/90 w-xs md:w-sm absolute bottom-full md:bottom-auto md:top-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity ">
              <h1 className={`${font_titulo.className}`}>Heliópolis</h1>
              <img src="/cairo.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Cairo<span className='border-r-3 border-b-3 float-end'>10x de R$ 560 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Cairo<span className='border-r-3 border-b-3 float-end'>8x de R$ 690 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Cairo<span className='border-r-3 border-b-3 float-end'>6x de R$ 910 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Cairo<span className='border-r-3 border-b-3 float-end'>12x de R$ 450 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Cairo<span className='border-r-3 border-b-3 float-end'>4x de R$ 1.380 — ida e volta</span></p>
            </div>
          </div>

          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-4xl md:text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black select-none`}>Berlim</h1>
            <div className="bg-[#F0EFDB]/90 w-xs md:w-sm absolute bottom-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity ">
              <h1 className={`${font_titulo.className}`}>Schönefeld</h1>
              <img src="/berlim.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Berlim-Brandemburgo<span className='border-r-3 border-b-3 float-end'>10x de R$ 480 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Berlim-Brandemburgo<span className='border-r-3 border-b-3 float-end'>6x de R$ 780 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Berlim-Brandemburgo<span className='border-r-3 border-b-3 float-end'>5x de R$ 920 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Berlim-Brandemburgo<span className='border-r-3 border-b-3 float-end'>12x de R$ 390 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Berlim-Brandemburgo<span className='border-r-3 border-b-3 float-end'>4x de R$ 1.180 — ida e volta</span></p>
            </div>
          </div>

          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-4xl md:text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black select-none`}>Atenas</h1>
            <div className="bg-[#F0EFDB]/90 w-xs md:w-sm absolute bottom-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity ">
              <h1 className={`${font_titulo.className}`}>Spata</h1>
              <img src="/atenas.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Atenas<span className='border-r-3 border-b-3 float-end'>10x de R$ 520 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Atenas<span className='border-r-3 border-b-3 float-end'>8x de R$ 630 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Atenas<span className='border-r-3 border-b-3 float-end'>5x de R$ 1.020 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Atenas<span className='border-r-3 border-b-3 float-end'>12x de R$ 420 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Atenas<span className='border-r-3 border-b-3 float-end'>4x de R$ 1.280 — ida e volta</span></p>
            </div>
          </div>

          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-4xl md:text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black select-none`}>Tóquio</h1>
            <div className="bg-[#F0EFDB]/90 w-xs md:w-sm absolute bottom-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity ">
              <h1 className={`${font_titulo.className}`}>Ōta</h1>
              <img src="/tokyo.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Tóquio<span className='border-r-3 border-b-3 float-end'>10x de R$ 720 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Tóquio<span className='border-r-3 border-b-3 float-end'>8x de R$ 890 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Tóquio<span className='border-r-3 border-b-3 float-end'>6x de R$ 1.180 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Tóquio<span className='border-r-3 border-b-3 float-end'>12x de R$ 580 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Tóquio<span className='border-r-3 border-b-3 float-end'>5x de R$ 1.420 — ida e volta</span></p>
            </div>
          </div>

          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-4xl md:text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black select-none`}>Malé</h1>
            <div className="bg-[#F0EFDB]/90 w-xs md:w-sm absolute bottom-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity ">
              <h1 className={`${font_titulo.className}`}>Ilha de Hulhulé</h1>
              <img src="/maldivas.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Velana<span className='border-r-3 border-b-3 float-end'>10x de R$ 790 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Velana<span className='border-r-3 border-b-3 float-end'>8x de R$ 980 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Velana<span className='border-r-3 border-b-3 float-end'>6x de R$ 1.290 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Velana<span className='border-r-3 border-b-3 float-end'>12x de R$ 640 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Velana<span className='border-r-3 border-b-3 float-end'>5x de R$ 1.550 — ida e volta</span></p>
            </div>
          </div>

          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-4xl md:text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black select-none`}>Ulan Bator</h1>
            <div className="bg-[#F0EFDB]/90 w-xs md:w-sm absolute bottom-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity ">
              <h1 className={`${font_titulo.className}`}>Khöshig</h1>
              <img src="/mongolia.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Chinggis Khaan<span className='border-r-3 border-b-3 float-end'>10x de R$ 920 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Chinggis Khaan<span className='border-r-3 border-b-3 float-end'>8x de R$ 1.150 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Chinggis Khaan<span className='border-r-3 border-b-3 float-end'>6x de R$ 1.520 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Chinggis Khaan<span className='border-r-3 border-b-3 float-end'>12x de R$ 740 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Chinggis Khaan<span className='border-r-3 border-b-3 float-end'>5x de R$ 1.810 — ida e volta</span></p>
            </div>
          </div>

          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-4xl md:text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black select-none`}>Oslo</h1>
            <div className="bg-[#F0EFDB]/90 w-xs md:w-sm absolute bottom-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity ">
              <h1 className={`${font_titulo.className}`}>Gardermoen</h1>
              <img src="/noruega.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Oslo Gardermoen<span className='border-r-3 border-b-3 float-end'>10x de R$ 510 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Oslo Gardermoen<span className='border-r-3 border-b-3 float-end'>8x de R$ 620 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Oslo Gardermoen<span className='border-r-3 border-b-3 float-end'>5x de R$ 1.000 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Oslo Gardermoen<span className='border-r-3 border-b-3 float-end'>12x de R$ 410 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Oslo Gardermoen<span className='border-r-3 border-b-3 float-end'>4x de R$ 1.250 — ida e volta</span></p>
            </div>
          </div>

          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-4xl md:text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black select-none`}>Seul</h1>
            <div className="bg-[#F0EFDB]/90 w-xs md:w-sm absolute bottom-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity ">
              <h1 className={`${font_titulo.className}`}>Jung-gu</h1>
              <img src="/seul.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Incheon<span className='border-r-3 border-b-3 float-end'>10x de R$ 740 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Incheon<span className='border-r-3 border-b-3 float-end'>8x de R$ 910 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Incheon<span className='border-r-3 border-b-3 float-end'>6x de R$ 1.210 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Incheon<span className='border-r-3 border-b-3 float-end'>12x de R$ 590 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Incheon<span className='border-r-3 border-b-3 float-end'>5x de R$ 1.450 — ida e volta</span></p>
            </div>
          </div>

          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-4xl md:text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black select-none`}>Katmandu</h1>
            <div className="bg-[#F0EFDB]/90 w-xs md:w-sm absolute bottom-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity ">
              <h1 className={`${font_titulo.className}`}>Sinamangal</h1>
              <img src="/nepal.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Tribhuvan<span className='border-r-3 border-b-3 float-end'>10x de R$ 820 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Tribhuvan<span className='border-r-3 border-b-3 float-end'>8x de R$ 1.010 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Tribhuvan<span className='border-r-3 border-b-3 float-end'>6x de R$ 1.350 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Tribhuvan<span className='border-r-3 border-b-3 float-end'>12x de R$ 660 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Tribhuvan<span className='border-r-3 border-b-3 float-end'>5x de R$ 1.620 — ida e volta</span></p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}