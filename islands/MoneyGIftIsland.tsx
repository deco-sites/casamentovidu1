import { useState } from 'preact/hooks';

interface GiftOption {
    value: number;
    description: string;
}

interface Props {
    title: string;
    description: string;
    pixKey: string;
    giftOptions: GiftOption[];
    amazonLogoUrl: string;
    amazonListUrl: string;
    pixLogoUrl: string;
    successMessage?: string;
    errorMessage?: string;
}

export default function MoneyGiftIsland({ 
    title,
    description,
    pixKey,
    giftOptions,
    amazonLogoUrl,
    amazonListUrl,
    pixLogoUrl,
    successMessage = 'PIX copiado!',
    errorMessage = 'Falha ao copiar'
}: Props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [copySuccess, setCopySuccess] = useState('');

    const handleCopyPix = async (e: any) => {
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(pixKey);
            setCopySuccess(successMessage);
            setTimeout(() => setCopySuccess(''), 2000);
        } catch (err) {
            setCopySuccess(errorMessage);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full bg-[#F9F1E3] py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-[#315900] mb-6 text-center">
                    {title}
                </h2>
                <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 text-lg">
                    {description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`bg-white rounded-xl shadow-md transition-all duration-300 cursor-pointer
                                  ${isExpanded ? 'p-8' : 'p-8 hover:shadow-xl hover:scale-105'}
                                  border border-gray-100`}
                    >
                        <div className="flex flex-col items-center gap-4">
                            <img 
                                src={pixLogoUrl}
                                alt="PIX Logo" 
                                className="h-16 w-16 object-contain"
                            />
                            <p className="text-lg font-semibold text-[#315900]">
                                Presente em PIX
                            </p>
                        </div>

                        {isExpanded && (
                            <div className="mt-8 space-y-6" onClick={e => e.stopPropagation()}>
                                <div className="grid grid-cols-2 gap-4">
                                    {giftOptions.map((option, index) => (
                                        <div 
                                            key={index}
                                            className="bg-[#F9F1E3] p-5 rounded-lg text-center
                                                     transition-transform hover:scale-105"
                                        >
                                            <span className="text-2xl font-bold text-[#315900] block">
                                                R$ {option.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-200 pt-6 mt-6">
                                    <p className="text-sm text-gray-700 mb-3 font-medium">
                                        Chave PIX:
                                    </p>
                                    <div className="flex gap-3 items-center">
                                        <code className="bg-[#F9F1E3] p-3 rounded-lg flex-1 text-gray-700">
                                            {pixKey}
                                        </code>
                                        <button
                                            onClick={handleCopyPix}
                                            className="bg-[#315900] text-white px-6 py-3 rounded-lg
                                                     hover:bg-[#264400] transition-colors font-medium
                                                     hover:shadow-md"
                                        >
                                            Copiar
                                        </button>
                                    </div>
                                    <div className="mt-4 text-sm text-gray-600">
                                        <p className="mb-1">
                                            <span className="font-medium">Titular:</span> Vinicius Trindade Rocha Ribeiro
                                        </p>
                                        <p>
                                            <span className="font-medium">Banco:</span> Nubank
                                        </p>
                                    </div>
                                    {copySuccess && (
                                        <p className="text-green-600 font-medium text-sm mt-3">
                                            {copySuccess}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <a 
                        href={amazonListUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all 
                                 flex flex-col items-center justify-center text-center gap-6
                                 hover:scale-105 cursor-pointer border border-gray-100 h-auto"
                    >
                        <img 
                            src={amazonLogoUrl} 
                            alt="Amazon Logo" 
                            className="h-16 object-contain"
                        />
                        <p className="text-lg font-semibold text-[#315900]">
                            Lista Amazon
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}
  