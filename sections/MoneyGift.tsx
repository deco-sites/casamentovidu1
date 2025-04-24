import MoneyGiftIsland from "../islands/MoneyGIftIsland.tsx";

interface GiftOption {
    value: number;
    description: string;
}

interface Props {
    title: string;
    description: string;
    pixKey: string;
    giftOptions: GiftOption[];
    successMessage?: string;
    errorMessage?: string;
    amazonLogoUrl: string;
    amazonListUrl: string;
    pixLogoUrl: string;
}

export default function MoneyGift({ 
    title,
    description,
    pixKey,
    giftOptions,
    successMessage = 'PIX copiado!',
    errorMessage = 'Falha ao copiar',
    amazonLogoUrl,
    amazonListUrl,
    pixLogoUrl
}: Props) {
   
    return (
        <div id="presentes">
        <MoneyGiftIsland
            title={title}
            description={description}
            pixKey={pixKey}
            giftOptions={giftOptions}
            successMessage={successMessage}
            errorMessage={errorMessage}
            amazonLogoUrl={amazonLogoUrl}
            amazonListUrl={amazonListUrl}
            pixLogoUrl={pixLogoUrl}
        />
        </div>
    )
}
  