'use client'

import BlueBlocks from '../src/components/atoms/BlueBlocks'
import YellowBlocks from '../src/components/atoms/YellowBlocks'
import Footer from '../src/components/molecules/Footer'
import NavBar from '../src/components/molecules/NavBar'
import ImageAndDescription from '../src/components/organisms/ImageAndDescription'

export default function Sobre() {
  return (
    <div className='bg-[#EFFBFF] pt-30'>
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

        
      <Footer />
    </div>
  )
}

