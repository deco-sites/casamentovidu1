import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
    title: string;
    description: string;
    whatsappNoivo: string;
    whatsappNoiva: string;
    whatsappLogo: ImageWidget;
}

export default function ConfirmePresenca({ 
    title,
    description,
    whatsappNoivo,
    whatsappNoiva,
    whatsappLogo
}: Props) {
    return (
        <div className="flex flex-col items-center justify-center w-full bg-white py-16 px-4" id="confirme-presenca">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-4xl font-bold text-[#315900] mb-6">
                    {title}
                </h2>
                <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
                    {description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                        href={whatsappNoivo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 
                                 rounded-full hover:bg-[#20BD5A] transition-all duration-300
                                 hover:shadow-lg font-medium text-lg min-w-[200px]"
                    >
                        <img 
                            src={whatsappLogo}
                            alt="WhatsApp" 
                            className="h-6 w-6 object-contain"
                        />
                        Noivo
                    </a>

                    <a 
                        href={whatsappNoiva}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 
                                 rounded-full hover:bg-[#20BD5A] transition-all duration-300
                                 hover:shadow-lg font-medium text-lg min-w-[200px]"
                    >
                        <img 
                            src={whatsappLogo}
                            alt="WhatsApp" 
                            className="h-6 w-6 object-contain"
                        />
                        Noiva
                    </a>
                </div>
            </div>
        </div>
    );
}
  