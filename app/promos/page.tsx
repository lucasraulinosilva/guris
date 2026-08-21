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
          <h1 className={`${font_titulo.className} mt-4`}>SCJ</h1>
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
            <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Rio de Janeiro</h1>
            <div className="bg-[#F0EFDB]/90 w-xs absolute top-full ms-50 md:ms-0 md:left-1/2 -translate-x-1/2 mb-2 hidden group-active:block group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity">
              <h1 className={`${font_titulo.className}`}>Copacabana</h1>
              <img src="/copacabana.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>5x de R$ 344 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Galeão<span className='border-r-3 border-b-3 float-end'>3x de R$ 630 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Galeão<span className='border-r-3 border-b-3 float-end'>2x de R$ 504 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>6x de R$ — 122 ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>4x de R$ — 493 ida e volta</span></p>
            </div>
          </div>
          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Rio de Janeiro</h1>
            <div className="bg-[#F0EFDB]/90 absolute top-full left-1/2 -translate-x-1/2 mb-2 hidden group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity">
              <h1 className={`${font_titulo.className}`}>Copacabana</h1>
              <img src="/copacabana.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>5x de R$ 344 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Galeão<span className='border-r-3 border-b-3 float-end'>3x de R$ 630 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Galeão<span className='border-r-3 border-b-3 float-end'>2x de R$ 504 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>6x de R$ — 122 ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>4x de R$ — 493 ida e volta</span></p>
            </div>
          </div>
          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Rio de Janeiro</h1>
            <div className="bg-[#F0EFDB]/90 absolute top-full left-1/2 -translate-x-1/2 mb-2 hidden group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity">
              <h1 className={`${font_titulo.className}`}>Copacabana</h1>
              <img src="/copacabana.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>5x de R$ 344 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Galeão<span className='border-r-3 border-b-3 float-end'>3x de R$ 630 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Galeão<span className='border-r-3 border-b-3 float-end'>2x de R$ 504 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>6x de R$ — 122 ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>4x de R$ — 493 ida e volta</span></p>
            </div>
          </div>
          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Rio de Janeiro</h1>
            <div className="bg-[#F0EFDB]/90 absolute top-full left-1/2 -translate-x-1/2 mb-2 hidden group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity">
              <h1 className={`${font_titulo.className}`}>Copacabana</h1>
              <img src="/copacabana.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>5x de R$ 344 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Galeão<span className='border-r-3 border-b-3 float-end'>3x de R$ 630 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Galeão<span className='border-r-3 border-b-3 float-end'>2x de R$ 504 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>6x de R$ — 122 ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>4x de R$ — 493 ida e volta</span></p>
            </div>
          </div>
          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Rio de Janeiro</h1>
            <div className="bg-[#F0EFDB]/90 absolute top-full left-1/2 -translate-x-1/2 mb-2 hidden group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity">
              <h1 className={`${font_titulo.className}`}>Copacabana</h1>
              <img src="/copacabana.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>5x de R$ 344 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Galeão<span className='border-r-3 border-b-3 float-end'>3x de R$ 630 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Galeão<span className='border-r-3 border-b-3 float-end'>2x de R$ 504 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>6x de R$ — 122 ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>4x de R$ — 493 ida e volta</span></p>
            </div>
          </div>
          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Rio de Janeiro</h1>
            <div className="bg-[#F0EFDB]/90 absolute top-full left-1/2 -translate-x-1/2 mb-2 hidden group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity">
              <h1 className={`${font_titulo.className}`}>Copacabana</h1>
              <img src="/copacabana.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>5x de R$ 344 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Galeão<span className='border-r-3 border-b-3 float-end'>3x de R$ 630 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Galeão<span className='border-r-3 border-b-3 float-end'>2x de R$ 504 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>6x de R$ — 122 ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>4x de R$ — 493 ida e volta</span></p>
            </div>
          </div>
          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Rio de Janeiro</h1>
            <div className="bg-[#F0EFDB]/90 absolute top-full left-1/2 -translate-x-1/2 mb-2 hidden group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity">
              <h1 className={`${font_titulo.className}`}>Copacabana</h1>
              <img src="/copacabana.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>5x de R$ 344 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Galeão<span className='border-r-3 border-b-3 float-end'>3x de R$ 630 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Galeão<span className='border-r-3 border-b-3 float-end'>2x de R$ 504 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>6x de R$ — 122 ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>4x de R$ — 493 ida e volta</span></p>
            </div>
          </div>
          <div className='group relative'>
            <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Xangai</h1>
            <div className="bg-[#F0EFDB]/90 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-100 p-3 z-50 transition-opacity">
              <h1 className={`${font_titulo.className}`}>Xintiandi</h1>
              <img src="/xintiandi.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>13:30</span>Xangai Pudong</p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Xangai Pudong</p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Xangai Pudong</p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Xangai Pudong</p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Xangai Pudong</p>
            </div>
          </div>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Malé</h1>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Ulan Bator</h1>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Katmandu</h1>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Oslo</h1>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Seul</h1>
        </div>
      </div>

      {/* <div className='bg-[#E25829]'>
        <div className='p-2 flex md:flex-row flex-col flex-wrap justify-around md:p-5'>
          <div className='group relative me-5'>
            <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] md:transition-colors md:duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Rio de Janeiro</h1>
            <div className="bg-[#F0EFDB]/90 absolute top-full left-1/2 -translate-x-1/2 mb-2 hidden group-focus:block group-hover:block w-100 p-3 z-50 transition-opacity">
              <h1 className={`${font_titulo.className}`}>Copacabana</h1>
              <img src="/copacabana.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 w-full`}><span className='border-r-3 border-b-3'>13:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>5x de R$ 344 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Galeão<span className='border-r-3 border-b-3 float-end'>3x de R$ 630 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Galeão<span className='border-r-3 border-b-3 float-end'>2x de R$ 504 — ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>6x de R$ — 122 ida e volta</span></p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Santos Dumont<span className='border-r-3 border-b-3 float-end'>4x de R$ — 493 ida e volta</span></p>
            </div>
          </div>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Tirana</h1>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Antananarivo</h1>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Paris</h1>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Daca</h1>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Cairo</h1>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Berlim</h1>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Atenas</h1>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Tóquio</h1>
          <div className='group relative'>
            <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Xangai</h1>
            <div className="bg-[#F0EFDB]/90 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-100 p-3 z-50 transition-opacity">
              <h1 className={`${font_titulo.className}`}>Xintiandi</h1>
              <img src="/xintiandi.jpg" alt="" />
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>13:30</span>Xangai Pudong</p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>15:30</span>Xangai Pudong</p>
              <p className={`${font_padrao.className} p-1`}><span className='border-r-3 border-b-3'>18:00</span>Xangai Pudong</p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>10:00</span>Xangai Pudong</p>
              <p className={`${font_padrao.className} p-1 `}><span className='border-r-3 border-b-3'>22:30</span>Xangai Pudong</p>
            </div>
          </div>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Malé</h1>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Ulan Bator</h1>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Katmandu</h1>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Oslo</h1>
          <h1 className={`${font_letreiro.className} text-8xl text-[#F0EFDB] cursor-pointer hover:bg-[#F0EFDB] transition-colors duration-300 hover:-skew-y-3 hover:-inset-1 hover:italic hover:text-black`}>Seul</h1>
        </div>
      </div> */}

    </div>
  )
}