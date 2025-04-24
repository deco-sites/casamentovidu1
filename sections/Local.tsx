import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
    places?: {
        name: string;
        description: string;
        image: ImageWidget;
        street: string;
    }[];
}
  
export default function Section({ places }: Props) {
    return (
      <div className="container mx-auto py-8 px-4" id="local">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#315900]">Local</h2>
        
        {places && places.length > 0 ? (
          <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center">
            {places.map((place, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-md w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                {place.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={place.image} 
                      alt={place.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                  <p className="text-gray-600 mb-3 bg-gray-50 p-2 rounded-md">{place.street}</p>
                  <p className="text-gray-700">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No places to display</p>
        )}
      </div>
    );
}
  