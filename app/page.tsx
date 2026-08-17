import Image from "next/image";
import localFont from 'next/font/local';
import { useInView } from 'react-intersection-observer';

const font_titulo = localFont({
  src: [
    {
      path: '../public/FontshareKit-2608001866/Panchang/Fonts/WEB/fonts/Panchang-Extrabold.woff2'
    }
  ],
  variable: '--font-custom',
})

const font_padrao = localFont({
  src: [
    {
      path: '../public/FontshareKit-2608001866/Cabinet-Grotesk/Fonts/WEB/fonts/CabinetGrotesk-Regular.woff2'
    }
  ],
  variable: '--font-custom',
})

const font_padrao_bold = localFont({
  src: [
    {
      path: '../public/FontshareKit-2608001872/Cabinet_Grotesk/Fonts/WEB/fonts/CabinetGrotesk-Bold.woff2'
    }
  ],
  variable: '--font-custom',
})

const font_fundo = localFont({
  src: [
    {
      path: '../public/Telma/Fonts/WEB/fonts/Telma-Black.woff2'
    }
  ],
  variable: '--font-custom',
})

export default function Home() {
  return (
    <div>

      <div className="w-full md:h-screen relative">
        <img src="/imagem_principal.jpg" alt="" className="brightness-50 h-150 md:h-screen w-full bg-center" />
        <div className="absolute top-0 right-0 w-full h-screen">
          <nav className="w-19/20 mx-auto bg-[#E25829] h-15 m-5 rounded-xl flex flex-row text-[#F0EFDB]">
            <div className="md:basis-3/7 text-lg flex flex-row">
              <p className={`${font_padrao_bold.className} mt-4 ms-4 me-2 underline cursor-pointer hidden md:flex`}>Início</p>
              <p className={`${font_padrao_bold.className} mt-4 ms-2 me-2 underline cursor-pointer hidden md:flex`}>Pacotes</p>
              <p className={`${font_padrao_bold.className} mt-4 ms-2 me-2 underline cursor-pointer hidden md:flex`}>Promoções</p>
              <p className={`${font_padrao_bold.className} mt-4 ms-2 me-2 underline cursor-pointer hidden md:flex`}>Hotéis</p>
            </div>
            <div className="basis-1/1 md:basis-1/7 text-center ">
              <h1 className={`${font_titulo.className} mt-4`}>GURI'S</h1>
            </div>
            <div className="md:basis-3/7">

            </div>
          </nav>
          <div className="w-full flex flex-col md:flex-row mt-[150] md:mt-[220]">
            <div className="basis-3/7 md:text-right text-[#F0EFDB] text-3xl p-3">
              <h1 className={`${font_padrao_bold.className}`}>Viagens Seguras.</h1>
              <h1 className={`${font_padrao_bold.className}`}>Promoções Imperdíveis.</h1>
              <h1 className={`${font_padrao_bold.className}`}>Disponíveis 24 Horas por Dia.</h1>
            </div>
            <div className="basis-1/7">

            </div>
            <div className="basis-3/7 text-left text-[#F0EFDB] text-lg p-3">
              <div className="w-80">
                <p className={`${font_padrao.className}`}>Guri's possui as melhores promoções e assistência ao cliente, com inúmeros serviços para tornar a viagem ainda mais tranquila.</p>
                <a href="#saiba_mais">
                  <button className={`${font_padrao_bold.className} bg-[#E25829] p-3 ps-5 pe-5 rounded-full hover:bg-[#E25829]/80 cursor-pointer mt-2`}>Saiba Mais</button>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full text-center hidden md:block">
            <h1 className={`${font_titulo.className} text-[#F0EFDB] text-[200px] animate-fade-up`}>GURI'S</h1>
          </div>
        </div>
      </div>

      <div className="bg-[#F0EFDB] w-full">

        <div id="saiba_mais" className="w-full">
          <div className="flex flex-row mx-auto p-5">
            <div className="hidden 2xl:flex basis-1/2 p-5 mt-[40] mb-[70]">
              <img src="/relaxa.png" />
            </div>
            <div className="md:mx-auto md:w-1/2 2xl:basis-1/2 2xl:w-auto p-5 mt-[40] mb-[70]">
              <h1 className={`${font_fundo.className} text-[#E25829] text-3xl md:text-[60px] 2xl:text-[100px]`}>TRANQUILIDADE</h1>
              <div className="w-full">
                <h1 className={`${font_padrao_bold.className} text-5xl  underline decoration-[#E25829] decoration-double`}>Viagens Tranquilas.</h1>
                <p className={`${font_padrao.className} text-sm text-black/75 mt-3`}>Sempre bem, sem preocupações e estresse, escolha já seu próximo destino.</p>
                <table className={`w-full mt-2`}>
                  <thead>
                    <tr className="text-left">
                      <th className={`${font_padrao_bold.className}`}>Compania</th>
                      <th className={`${font_padrao_bold.className}`}>Destino</th>
                      <th className={`${font_padrao_bold.className}`}>Data</th>
                      <th className={`${font_padrao_bold.className}`}>Horario</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>LATAM</td>
                      <td className={`${font_padrao.className}`}>São Paulo (GRU)</td>
                      <td className={`${font_padrao.className}`}>15/10/2026</td>
                      <td className={`${font_padrao.className}`}>08:30</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>Gol</td>
                      <td className={`${font_padrao.className}`}>Rio de Janeiro (GIG)</td>
                      <td className={`${font_padrao.className}`}>15/10/2026</td>
                      <td className={`${font_padrao.className}`}>10:15</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>Azul</td>
                      <td className={`${font_padrao.className}`}>Salvador (SSA)</td>
                      <td className={`${font_padrao.className}`}>16/10/2026</td>
                      <td className={`${font_padrao.className}`}>13:40</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>TAP Air Portugal</td>
                      <td className={`${font_padrao.className}`}>Lisboa (LIS)</td>
                      <td className={`${font_padrao.className}`}>16/10/2026</td>
                      <td className={`${font_padrao.className}`}>18:20</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>American Airlines</td>
                      <td className={`${font_padrao.className}`}>Miami (MIA)</td>
                      <td className={`${font_padrao.className}`}>17/10/2026</td>
                      <td className={`${font_padrao.className}`}>21:05</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>Air France</td>
                      <td className={`${font_padrao.className}`}>Paris (CDG)</td>
                      <td className={`${font_padrao.className}`}>18/10/2026</td>
                      <td className={`${font_padrao.className}`}>23:10</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>Iberia</td>
                      <td className={`${font_padrao.className}`}>Madrid (MAD)</td>
                      <td className={`${font_padrao.className}`}>19/10/2026</td>
                      <td className={`${font_padrao.className}`}>06:45</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>Lufthansa</td>
                      <td className={`${font_padrao.className}`}>Frankfurt (FRA)</td>
                      <td className={`${font_padrao.className}`}>20/10/2026</td>
                      <td className={`${font_padrao.className}`}>14:15</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>Emirates</td>
                      <td className={`${font_padrao.className}`}>Dubai (DXB)</td>
                      <td className={`${font_padrao.className}`}>20/10/2026</td>
                      <td className={`${font_padrao.className}`}>19:50</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>British Airways</td>
                      <td className={`${font_padrao.className}`}>Londres (LHR)</td>
                      <td className={`${font_padrao.className}`}>21/10/2026</td>
                      <td className={`${font_padrao.className}`}>16:30</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>United Airlines</td>
                      <td className={`${font_padrao.className}`}>Nova York (EWR)</td>
                      <td className={`${font_padrao.className}`}>21/10/2026</td>
                      <td className={`${font_padrao.className}`}>22:10</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>Delta Air Lines</td>
                      <td className={`${font_padrao.className}`}>Atlanta (ATL)</td>
                      <td className={`${font_padrao.className}`}>22/10/2026</td>
                      <td className={`${font_padrao.className}`}>09:00</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>Copa Airlines</td>
                      <td className={`${font_padrao.className}`}>Cidade do Panamá (PTY)</td>
                      <td className={`${font_padrao.className}`}>22/10/2026</td>
                      <td className={`${font_padrao.className}`}>12:25</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>Avianca</td>
                      <td className={`${font_padrao.className}`}>Bogotá (BOG)</td>
                      <td className={`${font_padrao.className}`}>23/10/2026</td>
                      <td className={`${font_padrao.className}`}>17:40</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>Qatar Airways</td>
                      <td className={`${font_padrao.className}`}>Doha (DOH)</td>
                      <td className={`${font_padrao.className}`}>23/10/2026</td>
                      <td className={`${font_padrao.className}`}>20:15</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>KLM</td>
                      <td className={`${font_padrao.className}`}>Amsterdã (AMS)</td>
                      <td className={`${font_padrao.className}`}>24/10/2026</td>
                      <td className={`${font_padrao.className}`}>11:05</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>Swiss International</td>
                      <td className={`${font_padrao.className}`}>Zurique (ZRH)</td>
                      <td className={`${font_padrao.className}`}>24/10/2026</td>
                      <td className={`${font_padrao.className}`}>15:50</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>Turkish Airlines</td>
                      <td className={`${font_padrao.className}`}>Istambul (IST)</td>
                      <td className={`${font_padrao.className}`}>25/10/2026</td>
                      <td className={`${font_padrao.className}`}>04:30</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>Air Canada</td>
                      <td className={`${font_padrao.className}`}>Toronto (YYZ)</td>
                      <td className={`${font_padrao.className}`}>25/10/2026</td>
                      <td className={`${font_padrao.className}`}>21:40</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>ITA Airways</td>
                      <td className={`${font_padrao.className}`}>Roma (FCO)</td>
                      <td className={`${font_padrao.className}`}>26/10/2026</td>
                      <td className={`${font_padrao.className}`}>14:20</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className={`${font_padrao.className}`}>Aeroméxico</td>
                      <td className={`${font_padrao.className}`}>Cidade do México (MEX)</td>
                      <td className={`${font_padrao.className}`}>26/10/2026</td>
                      <td className={`${font_padrao.className}`}>23:55</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className="bg-[#1C1314] w-full text-[#F0EFDB] relative p-5 md:p-0">

        <div className="hidden md:absolute w-full text-center z-1">
          <h1 className={`${font_titulo.className} text-[#F0EFDB] text-[350px] mt-[180]`}>GURI'S</h1>
        </div>

        <div className="w-full md:w-2/3 md:mx-auto flex flex-col md:flex-row">
          <div className="w-full md:mt-[100] md:mb-[100] mb-5">
            <h1 className={`${font_padrao_bold.className} text-5xl mt-8 underline decoration-[#E25829] decoration-double`}>Melhores Promoções</h1>
            <p className={`${font_padrao.className} text-lg mt-2`}>Sempre o melhor preço, para o melhor lugar.</p>

            <div className="w-full flex flex-col md:flex-row mt-3 md:h-[600]">

              <div className="basis-1/3 mb-5 md:mb-0 md:me-5 rounded-xl shadow-md shadow-black/50 z-2 bg-[#1C1314]/90">
                <img src="/copacabana.jpg" alt="" className="h-[250] w-full rounded-xl" />
                <div className="p-5">
                  <img src="/airplan.png" alt="" />
                  <h1 className={`${font_padrao_bold.className} text-2xl mt-2`}>Rio de Janeiro</h1>
                  <p className={`${font_padrao.className} text-sm text-[#F0EFDB]/75`}>Saindo de SAO</p>
                  <p className={`${font_padrao.className} text-base text-[#F0EFDB] mt-5`}>Ida: 20/08/2026</p>
                  <p className={`${font_padrao.className} text-base text-[#F0EFDB]`}>Volta: 30/08/2026</p>
                  <p className={`${font_padrao.className} text-sm mt-5 text-[#F0EFDB]/75`}>Ida e volta</p>
                  <p className={`${font_padrao_bold.className} text-2xl mt-1`}>5X de R$ 344</p>
                  <p className={`${font_padrao.className} text-sm text-[#F0EFDB]/75 mt-1`}>A partir de R$1.718</p>
                  <h1 className={`${font_titulo.className} text-3xl mt-3 cursor-pointer w-fit hover:animate-wiggle animate-once`} >GO!</h1>
                </div>
              </div>

              <div className="basis-1/3 mb-5 md:mb-0 md:me-5 rounded-xl shadow-md shadow-black/50 z-2 bg-[#1C1314]/90">
                <img src="/madagascar_img1.jpg" alt="" className="h-[250] w-full rounded-xl" />
                <div className="p-5">
                  <img src="/airplan.png" alt="" />
                  <h1 className={`${font_padrao_bold.className} text-2xl mt-2`}>Madagascar</h1>
                  <p className={`${font_padrao.className} text-sm text-[#F0EFDB]/75`}>Saindo de SAO</p>
                  <p className={`${font_padrao.className} text-base text-[#F0EFDB] mt-5`}>Ida: 21/08/2026</p>
                  <p className={`${font_padrao.className} text-base text-[#F0EFDB]`}>Volta: 31/08/2026</p>
                  <p className={`${font_padrao.className} text-sm mt-5 text-[#F0EFDB]/75`}>Ida e volta</p>
                  <p className={`${font_padrao_bold.className} text-2xl mt-1`}>4X de R$ 463</p>
                  <p className={`${font_padrao.className} text-sm text-[#F0EFDB]/75 mt-1`}>A partir de R$1.852</p>
                  <h1 className={`${font_titulo.className} text-3xl mt-3 cursor-pointer w-fit hover:animate-wiggle animate-once`} >GO!</h1>
                </div>
              </div>

              <div className="basis-1/3 mb-5 md:mb-0 md:me-5 rounded-xl shadow-md shadow-black/50 z-2 bg-[#1C1314]/90">
                <img src="/disney.jpg" alt="" className="h-[250] w-full rounded-xl" />
                <div className="p-5">
                  <img src="/airplan.png" alt="" />
                  <h1 className={`${font_padrao_bold.className} text-2xl mt-2`}>Orlando</h1>
                  <p className={`${font_padrao.className} text-sm text-[#F0EFDB]/75`}>Saindo de SAO</p>
                  <p className={`${font_padrao.className} text-base text-[#F0EFDB] mt-5`}>Ida: 14/08/2026</p>
                  <p className={`${font_padrao.className} text-base text-[#F0EFDB]`}>Volta: 24/08/2026</p>
                  <p className={`${font_padrao.className} text-sm mt-5 text-[#F0EFDB]/75`}>Ida e volta</p>
                  <p className={`${font_padrao_bold.className} text-2xl mt-1`}>4X de R$ 1048</p>
                  <p className={`${font_padrao.className} text-sm text-[#F0EFDB]/75 mt-1`}>A partir de R$4.191</p>
                  <h1 className={`${font_titulo.className} text-3xl mt-3 cursor-pointer w-fit hover:animate-wiggle animate-once`} >GO!</h1>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
