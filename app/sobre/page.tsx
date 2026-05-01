'use client'

import BlueBlocks from '../src/components/atoms/BlueBlocks'
import Title from '../src/components/atoms/Title'
import YellowBlocks from '../src/components/atoms/YellowBlocks'
import { EmblaCarousel } from '../src/components/molecules/Carrosel'
import Footer from '../src/components/molecules/Footer'
import NavBar from '../src/components/molecules/NavBar'
import ImageAndDescription from '../src/components/organisms/ImageAndDescription'

const imgs = [
 
  { name: "ECOP Image 2", img: "/about-gallery/ecop-2.webp" },
  { name: "ECOP Image 3", img: "/about-gallery/ecop-3.webp" },
  { name: "ECOP Image 4", img: "/about-gallery/ecop-4.webp" },
  { name: "ECOP Image 5", img: "/about-gallery/ecop-5.webp" },
  { name: "ECOP Image 6", img: "/about-gallery/ecop-6.webp" },
  { name: "ECOP Image 7", img: "/about-gallery/ecop-7.webp" },
  { name: "ECOP Image 8", img: "/about-gallery/ecop-8.webp" },
  { name: "ECOP Image 9", img: "/about-gallery/ecop-9.webp" },
  { name: "ECOP Image 10", img: "/about-gallery/ecop-10.webp" },
  { name: "ECOP Image 11", img: "/about-gallery/ecop-11.webp" },
  { name: "ECOP Image 12", img: "/about-gallery/ecop-12.webp" },
  { name: "ECOP Image 13", img: "/about-gallery/ecop-13.webp" },
  { name: "ECOP Image 14", img: "/about-gallery/ecop-14.webp" },
  { name: "ECOP Image 15", img: "/about-gallery/ecop-15.webp" },
  { name: "ECOP Image 16", img: "/about-gallery/ecop-16.webp" },
  { name: "ECOP Image 17", img: "/about-gallery/ecop-17.webp" }
];

export default function Sobre() {
  return (
    <>
      <div className='bg-[#EFFBFF] py-30'>
        <NavBar />

        <div className='relative'>
          <BlueBlocks top='-top-20' topSm='-top-20' topMd='-top-8' right='right-10' rightMd='right-2' />

          <ImageAndDescription 
          title='MÉDIA DE 600 INSCRIÇÕES POR EDIÇÃO!'
          description={
            <>
              Com palestras, minicursos, mesas redondas, trabalhos científicos, olimpíada de programação, hackathon, salão empresarial, momentos culturais e jogos interativos, etc., tendo uma
              {' '}
              <strong>
                ampla aceitação de discentes da UFERSA e de outras instituições da região e de estados vizinhos
              </strong>
              {' '}
              (e.g., escolas municipais, estaduais, institutos federais e de educação profissional, tecnologia e inovação do RN).
            </>
          }
          img='/ecop-01.webp'
        />

          <ImageAndDescription 
          direction='flex-row-reverse'
          title='ESTÁGIO E NETWORKING COM EMPRESAS'
          description={
            <>
              O ECOP tem como objetivo {' '} <strong>promover a interação entre estudantes, pesquisadores e mercado de trabalho</strong>, {' '} além de apresentar os cursos da área de computação da UFERSA - Campus Pau dos Ferros para os estudantes da região.
            </>
          }
          img='/ecop-02.webp' />

          
          <YellowBlocks bottom='-bottom-[6rem]' bottomMd='-bottom-40' leftMd='left-2'/>
          
        </div>

          
      </div>
      
      {/* GALLERY */}
      <div className='bg-[#CDF4FE] flex flex-col justify-center items-center w-full -mt-[7.2rem] py-20'>
        <div className="flex flex-col w-[60%] justify-center items-center gap-6">
          <Title text="CONFIRA MOMENTOS DAS EDIÇÕES ANTERIORES" showHr />
          <p className="text-center"><strong>Em 2026, será realizada a sua VIII edição presencial</strong>. O evento contou também com duas edições remotas, totalizando 10 edições, contrastando com a idade do Campus Pau dos Ferros (13 anos).</p>
        </div>

        <EmblaCarousel images={imgs} showArrows />
      </div>


      <Footer />
    </>
  )
}

