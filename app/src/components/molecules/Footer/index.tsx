import Link from "next/link";
import { CONTACT, FAST_LINKS, SOCIAL_MEDIA } from "./constants";
import { Route } from "next";

const Footer: React.FC = () => {
    return (
        <footer className="bg-stormy text-white py-16 px-4 sm:px-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-6">
                    <div className="w-full text-left">
                        <h3 className="text-lg font-bold mb-2 font-press_start text-primary">
                            {CONTACT.title}
                        </h3>

                        <ul className="space-y-2">
                            {CONTACT.items.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span>{item.icon}</span>
                                    <span>{item.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full text-left">
                        <h3 className="text-lg font-bold mb-2 font-press_start text-tertiary">
                            {FAST_LINKS.title}
                        </h3>

                        <ul className="space-y-2">
                            {FAST_LINKS.links.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href as Route} className="inline-block hover:underline">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full text-left">
                        <h3 className="text-lg font-bold mb-2 font-press_start text-secondary">
                            {SOCIAL_MEDIA.title}
                        </h3>

                        <p className="mb-2">{SOCIAL_MEDIA.description}</p>

                        <ul className="flex flex-wrap gap-3">
                            {SOCIAL_MEDIA.links.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href as Route}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${link.backgroundColor} hover:opacity-80 transition-opacity shrink-0`}
                                    >
                                        {link.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <p>&copy; 2026 Copyright. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;