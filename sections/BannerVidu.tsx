import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
    title?: string;
    weddingDate?: string;
    image?: ImageWidget;
}
  
export default function Section({ title, weddingDate, image }: Props) {
    return (
        <>
            <div id="home" className="relative w-full" style={{ 
                height: "500px", // You can adjust this height as needed
            }}>
                {/* Background Image */}
                {image && (
                    <div 
                        className="absolute inset-0 w-full h-full"
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Inner Border */}
                        <div className="absolute inset-0 border-[4px] border-white/80 m-4"></div>
                    </div>
                )}
                
                {/* Title - Centered */}
                {title && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg px-4 text-center">
                            {title}
                        </h1>
                    </div>
                )}
                
                {/* Wedding Date - Bottom Center */}
                {weddingDate && (
                    <div className="absolute bottom-8 w-full flex justify-center">
                        <p className="text-xl md:text-2xl font-semibold text-white drop-shadow-lg px-4 py-2 bg-[#80965F] rounded">
                            {weddingDate}
                        </p>
                    </div>
                )}
            </div>
            
            {/* Action Buttons Section */}
            <div className="bg-[#f8f5f0] py-8 flex flex-col items-center">
                <p className="text-xl font-medium text-[#315900] mb-4">Eu vim aqui para:</p>
                <div className="flex flex-row gap-4">
                    <a 
                        href="#confirmar-presenca" 
                        className="px-2 py-3 bg-[#80965F] text-white font-medium rounded-md hover:bg-[#3e6b00] transition-colors"
                    >
                        Confirmar Presença
                    </a>
                    <a 
                        href="#presentes" 
                        className="px-2 py-3 bg-[#F9F1E3] text-[#80965F] font-medium rounded-md border border-[#FFE6B9] hover:bg-[#3e6b00] transition-colors"
                    >
                        Escolher Presente
                    </a>
                </div>
            </div>
        </>
    );
}
  