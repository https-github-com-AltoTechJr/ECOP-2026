import { BiLocationPlus } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { LiaLinkedinIn } from "react-icons/lia";
import { PiPhone } from "react-icons/pi";

const ICON_SIZE = 24;

const CONTACT = {
    title: 'Contato',
    items: [
        { label: 'ecop@ufersa.edu.br', icon: <CgMail size={ICON_SIZE} /> },
        { label: '(11) 1234-5678', icon: <PiPhone size={ICON_SIZE} /> },
        { label: 'Pau dos Ferros - RN, Brasil', icon: <BiLocationPlus size={ICON_SIZE} /> },
    ]
}

const FAST_LINKS = {
    title: 'Links Rápidos',
    links: [
        { label: 'Sobre o Evento', href: '/' },
        { label: 'Palestras', href: '/' },
        { label: 'Minicursos', href: '/' },
        { label: 'Programação', href: '/' },
        { label: 'Patrocinadores', href: '/' },
    ]
}

const SOCIAL_MEDIA = {
    title: 'Redes Sociais',
    description: 'Siga-nos nas redes sociais e fique por dentro de todas as novidades!',
    links: [
        { icon: <BsInstagram size={ICON_SIZE} />, backgroundColor: 'bg-tertiary', href: 'https://www.instagram.com/ecop.ufersa/' },
        { icon: <LiaLinkedinIn size={ICON_SIZE} />, backgroundColor: 'bg-primary', href: 'https://www.linkedin.com/company/ecop.ufersa/' },
    ]
}

export {
    CONTACT,
    FAST_LINKS,
    SOCIAL_MEDIA
}