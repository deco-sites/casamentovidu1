import type { ImageWidget } from "apps/admin/widgets.ts";
import { useEffect, useState } from "preact/hooks";

interface Props {
    title?: string;
    description?: string;
    years?: {
        year: string;
        description: string;
        images: ImageWidget[];
    }[];
}
  
export default function TimelineViduIsland({ title, description, years = [] }: Props) {
    const [currentSlide, setCurrentSlide] = useState<Record<number, number>>({});
    
    // Initialize current slide for each year
    useEffect(() => {
        const initialSlides: Record<number, number> = {};
        years?.forEach((_, index) => {
            initialSlides[index] = 0;
        });
        setCurrentSlide(initialSlides);
    }, [years]);

    // Auto-rotate images every 2 seconds for years with multiple images
    useEffect(() => {
        const timers: NodeJS.Timeout[] = [];
        
        years?.forEach((yearData, yearIndex) => {
            if (yearData.images.length > 1) {
                const timer = setInterval(() => {
                    setCurrentSlide(prev => {
                        const totalImages = yearData.images.length;
                        return {
                            ...prev,
                            [yearIndex]: (prev[yearIndex] + 1) % totalImages
                        };
                    });
                }, 2000);
                
                timers.push(timer);
            }
        });
        
        // Cleanup timers on unmount
        return () => {
            timers.forEach(timer => clearInterval(timer));
        };
    }, [years]);

    return (
        <>
            <style jsx>{`
                /* Removendo os estilos de scrollbar que não serão mais necessários */
            `}</style>
            <div class="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
                {/* Header Section */}
                <div class="max-w-6xl mx-auto mb-8 text-center">
                    {title && <h2 class="text-3xl md:text-4xl font-bold mb-6 text-[#315900]">{title}</h2>}
                    {description && <p class="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>}
                </div>

                {/* Horizontal Timeline */}
                <div class="max-w-full mx-auto relative">
                    {/* Horizontal scrollable container */}
                    <div class="overflow-x-auto pb-4 hide-scrollbar">
                        <div class="flex flex-nowrap space-x-6 md:space-x-8 px-4">
                            {years?.map((yearData, index) => (
                                <div 
                                    key={index} 
                                    class="flex-shrink-0 w-[280px] md:w-[320px]"
                                >
                                    {/* Content Box */}
                                    <div class="bg-white p-6 rounded-lg shadow-md flex flex-col">
                                        <h3 class="text-2xl font-bold mb-3 text-[#315900]">{yearData.year}</h3>
                                        <div class="h-[200px] mb-6 pr-2">
                                            <p class="text-gray-600 text-sm">{yearData.description}</p>
                                        </div>

                                        {/* Simplified Image Display */}
                                        {yearData.images && yearData.images.length > 0 && (
                                            <div class="relative flex flex-col justify-center">
                                                {/* Display current image only */}
                                                <div class="flex justify-center">
                                                    <div class="w-[192px] h-[192px] rounded-full overflow-hidden border-4 border-gray-200">
                                                        {/* Try to display the current image with fallbacks */}
                                                        <img 
                                                            src={yearData.images[currentSlide[index] || 0]} 
                                                            alt={`Year ${yearData.year}`}
                                                            class="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                console.error("Image failed to load:", e);
                                                                console.log("Image data:", yearData.images[currentSlide[index] || 0]);
                                                                (e.target as HTMLImageElement).src = "https://via.placeholder.com/150";
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
  