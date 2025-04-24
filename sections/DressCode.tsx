import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  title?: string;
  description?: string;
  images?: ImageWidget[];
}

export default function Section(
  { title = "Dress Code", description, images = [] }: Props,
) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-50 w-full py-12 px-4"
      id="dress-code"
    >
      <h2 className="text-3xl font-bold text-[#315900] mb-8">{title}</h2>

      {description && (
        <p className="text-gray-600 mb-8 text-center max-w-2xl">
          {description}
        </p>
      )}

      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src={image}
              alt={`Dress Code Example ${index + 1}`}
              className="absolute inset-0 w-full h-full object-contain"
              width={1024}
              height={1536}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
