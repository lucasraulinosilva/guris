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


export default function Hoteis() {
  return (
    <div className='bg-[#F0EFDB]'>
      <nav className="w-19/20 mx-auto bg-[#E25829] h-15 m-5 rounded-xl flex flex-row text-[#F0EFDB]">
        <div className="md:basis-3/7 text-lg flex flex-row">
          <img src="/logo_agencia.png" alt="" className='p-1' />
          <Link href="/"><p className={`${font_padrao_bold.className} mt-4 ms-4 me-2 underline cursor-pointer hidden md:flex`}>Início</p></Link>
          <Link href="/pacotes"><p className={`${font_padrao_bold.className} mt-4 ms-2 me-2 underline cursor-pointer hidden md:flex`}>Pacotes</p></Link>
          <Link href="/promos"><p className={`${font_padrao_bold.className} mt-4 ms-2 me-2 underline cursor-pointer hidden md:flex`}>Promoções</p></Link>
          <Link href="/hoteis"><p className={`${font_padrao_bold.className} mt-4 ms-2 me-2 underline cursor-pointer hidden md:flex`}>Hotéis</p></Link>
        </div>
        <div className="basis-1/1 md:basis-1/7 text-center ">
          <h1 className={`${font_titulo.className} mt-4`}>SCJ</h1>
        </div>
        <div className="md:basis-3/7">

        </div>
      </nav>
      <div className='w-full'>
        <div className="relative overflow-hidden bg-background before:pointer-events-none before:absolute before:inset-y-0 before:start-0 before:z-2 before:w-16 before:bg-[linear-gradient(to_right,var(--color-background),transparent)] after:pointer-events-none after:absolute after:inset-y-0 after:end-0 after:z-2 after:w-16 after:bg-[linear-gradient(to_left,var(--color-background),transparent)] ">
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
            <h1 className={`${font_padrao_bold.className} text-2xl ms-5`}>Hotéis</h1>
          </div>
        </div>
      </div>
      <div className='bg-[#E25829] h-180'>
        <div className="w-full flex flex-col md:flex-row p-2">

          <div className="basis-1/5 mb-5 md:mb-0 md:me-5 rounded-xl shadow-md shadow-black/50 bg-[#F0EFDB] mt-5">
            <img src="/copacabana.jpg" alt="" className="h-[250] w-full rounded-xl" />
            <div className="p-5">
              <img src="/airplan.png" alt="" />
              <h1 className={`${font_padrao_bold.className} text-2xl mt-2 text-black`}>Rio de Janeiro</h1>
              <p className={`${font_padrao.className} text-sm text-black/75`}>Saindo de SAO</p>
              <p className={`${font_padrao.className} text-base text-black mt-5`}>Ida: 20/08/2026</p>
              <p className={`${font_padrao.className} text-base text-black`}>Volta: 30/08/2026</p>
              <p className={`${font_padrao.className} text-sm mt-5 text-black/75`}>Ida e volta</p>
              <p className={`${font_padrao_bold.className} text-2xl mt-1 text-black`}>5X de R$ 344</p>
              <p className={`${font_padrao.className} text-sm text-black/75 mt-1`}>A partir de R$1.718</p>
            </div>
          </div>

          <div className="basis-1/5 mb-5 md:mb-0 md:me-5 rounded-xl shadow-md shadow-black/50 bg-[#F0EFDB] mt-5">
            <img src="/copacabana.jpg" alt="" className="h-[250] w-full rounded-xl" />
            <div className="p-5">
              <img src="/airplan.png" alt="" />
              <h1 className={`${font_padrao_bold.className} text-2xl mt-2 text-black`}>Rio de Janeiro</h1>
              <p className={`${font_padrao.className} text-sm text-black/75`}>Saindo de SAO</p>
              <p className={`${font_padrao.className} text-base text-black mt-5`}>Ida: 20/08/2026</p>
              <p className={`${font_padrao.className} text-base text-black`}>Volta: 30/08/2026</p>
              <p className={`${font_padrao.className} text-sm mt-5 text-black/75`}>Ida e volta</p>
              <p className={`${font_padrao_bold.className} text-2xl mt-1 text-black`}>5X de R$ 344</p>
              <p className={`${font_padrao.className} text-sm text-black/75 mt-1`}>A partir de R$1.718</p>
            </div>
          </div>
          <div className="basis-1/5 mb-5 md:mb-0 md:me-5 rounded-xl shadow-md shadow-black/50 bg-[#F0EFDB] mt-5">
            <img src="/copacabana.jpg" alt="" className="h-[250] w-full rounded-xl" />
            <div className="p-5">
              <img src="/airplan.png" alt="" />
              <h1 className={`${font_padrao_bold.className} text-2xl mt-2 text-black`}>Rio de Janeiro</h1>
              <p className={`${font_padrao.className} text-sm text-black/75`}>Saindo de SAO</p>
              <p className={`${font_padrao.className} text-base text-black mt-5`}>Ida: 20/08/2026</p>
              <p className={`${font_padrao.className} text-base text-black`}>Volta: 30/08/2026</p>
              <p className={`${font_padrao.className} text-sm mt-5 text-black/75`}>Ida e volta</p>
              <p className={`${font_padrao_bold.className} text-2xl mt-1 text-black`}>5X de R$ 344</p>
              <p className={`${font_padrao.className} text-sm text-black/75 mt-1`}>A partir de R$1.718</p>
            </div>
          </div>
          <div className="basis-1/5 mb-5 md:mb-0 md:me-5 rounded-xl shadow-md shadow-black/50 bg-[#F0EFDB] mt-5">
            <img src="/copacabana.jpg" alt="" className="h-[250] w-full rounded-xl" />
            <div className="p-5">
              <img src="/airplan.png" alt="" />
              <h1 className={`${font_padrao_bold.className} text-2xl mt-2 text-black`}>Rio de Janeiro</h1>
              <p className={`${font_padrao.className} text-sm text-black/75`}>Saindo de SAO</p>
              <p className={`${font_padrao.className} text-base text-black mt-5`}>Ida: 20/08/2026</p>
              <p className={`${font_padrao.className} text-base text-black`}>Volta: 30/08/2026</p>
              <p className={`${font_padrao.className} text-sm mt-5 text-black/75`}>Ida e volta</p>
              <p className={`${font_padrao_bold.className} text-2xl mt-1 text-black`}>5X de R$ 344</p>
              <p className={`${font_padrao.className} text-sm text-black/75 mt-1`}>A partir de R$1.718</p>
            </div>
          </div>
          <div className="basis-1/5 mb-5 md:mb-0 rounded-xl shadow-md shadow-black/50 bg-[#F0EFDB] mt-5">
            <img src="/copacabana.jpg" alt="" className="h-[250] w-full rounded-xl" />
            <div className="p-5">
              <img src="/airplan.png" alt="" />
              <h1 className={`${font_padrao_bold.className} text-2xl mt-2 text-black`}>Rio de Janeiro</h1>
              <p className={`${font_padrao.className} text-sm text-black/75`}>Saindo de SAO</p>
              <p className={`${font_padrao.className} text-base text-black mt-5`}>Ida: 20/08/2026</p>
              <p className={`${font_padrao.className} text-base text-black`}>Volta: 30/08/2026</p>
              <p className={`${font_padrao.className} text-sm mt-5 text-black/75`}>Ida e volta</p>
              <p className={`${font_padrao_bold.className} text-2xl mt-1 text-black`}>5X de R$ 344</p>
              <p className={`${font_padrao.className} text-sm text-black/75 mt-1`}>A partir de R$1.718</p>
            </div>
          </div>

        </div>
      </div>



    </div>
  )
}
