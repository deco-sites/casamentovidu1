interface Props {
  title?: string;
  description?: string;
}

export default function Section({ title, description }: Props) {
  return (
    <div className="flex items-center justify-center bg-gray-50 w-full" id="pedido">
      <div className="flex flex-col items-center p-4 max-w-3xl mx-auto gap-4">
        <h1 className="text-2xl font-bold text-[#315900]">{title}</h1>
        <p className=" text-gray-600">{description}</p>
        <video
          className="w-full aspect-square rounded-lg object-cover"
          controls
          preload="metadata"
        >
          <source
            src="https://raw.githubusercontent.com/viniciustrr/wedding/main/pedido.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </div>
  );
}
