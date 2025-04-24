import { ImageWidget } from "apps/admin/widgets.ts";
import { useState } from "preact/hooks";

interface Props {
    description?: string;
    products?: {
        name: string;
        price: number;
        image: ImageWidget;
        link: string;
    }[];
}

export default function ListaPresentesIsland({ products = [], description }: Props) {
    const [displayCount, setDisplayCount] = useState(14);
    const displayedProducts = products.slice(0, displayCount);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 w-full py-12 px-4" id="pedido">
            <h2 className="text-3xl font-bold text-[#315900] mb-8">Lista de Presentes</h2>

            {description && (
                <p className="text-gray-600 mb-4 text-center">{description}</p>
            )}  
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl">
                {displayedProducts.map((product, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4">R$ {product.price.toFixed(2)}</p>
                            <div className="mt-auto">
                                <a 
                                    href={product.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-[#315900] text-white text-center py-2 rounded-md transition-colors"
                                >
                                    Ver Presente
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {displayCount < products.length && (
                <button
                    onClick={() => setDisplayCount((prev: number) => prev + 14)}
                    className="mt-8 px-6 py-3 bg-[#315900] text-white rounded-md transition-colors"
                >
                    Carregar Mais Presentes
                </button>
            )}
        </div>
    );
}
  