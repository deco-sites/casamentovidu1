import { useState } from 'preact/hooks';

interface PixKeyItem {
    label?: string;
    value: string;
    holderName?: string;
    bankName?: string;
}

interface Props {
    title?: string;
    description?: string;
    keys: PixKeyItem[];
    successMessage?: string;
    errorMessage?: string;
}

export default function PixIsland({
    title,
    description,
    keys,
    successMessage = 'PIX copiado!',
    errorMessage = 'Falha ao copiar'
}: Props) {
    const [feedbackByIndex, setFeedbackByIndex] = useState<Record<number, string>>({});

    const handleCopy = async (index: number, keyValue: string) => {
        try {
            await navigator.clipboard.writeText(keyValue);
            setFeedbackByIndex((prev) => ({ ...prev, [index]: successMessage }));
            setTimeout(() => {
                setFeedbackByIndex((prev) => {
                    const clone = { ...prev };
                    delete clone[index];
                    return clone;
                });
            }, 2000);
        } catch (_err) {
            setFeedbackByIndex((prev) => ({ ...prev, [index]: errorMessage }));
        }
    };

    return (
        <section className="w-full bg-[#F9F1E3] py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                {title && (
                    <h2 className="text-4xl font-bold text-[#315900] mb-4 text-center">{title}</h2>
                )}
                {description && (
                    <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10 text-lg">{description}</p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {keys.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1 min-w-0">
                                    {item.label && (
                                        <p className="text-sm font-medium text-[#315900] mb-1">{item.label}</p>
                                    )}
                                    <code className="block bg-[#F9F1E3] text-gray-800 rounded-md p-3 break-words">
                                        {item.value}
                                    </code>
                                    {(item.holderName || item.bankName) && (
                                        <div className="mt-3 text-sm text-gray-600">
                                            {item.holderName && (
                                                <p><span className="font-medium">Titular:</span> {item.holderName}</p>
                                            )}
                                            {item.bankName && (
                                                <p><span className="font-medium">Banco:</span> {item.bankName}</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={() => handleCopy(index, item.value)}
                                    className="shrink-0 bg-[#315900] text-white px-5 py-2.5 rounded-lg hover:bg-[#264400] transition-colors font-medium hover:shadow-md"
                                >
                                    Copiar
                                </button>
                            </div>
                            {feedbackByIndex[index] && (
                                <p className="text-green-600 font-medium text-sm mt-3">{feedbackByIndex[index]}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
