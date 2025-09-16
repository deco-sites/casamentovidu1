import PixIsland from "site/islands/PixIsland.tsx";

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

export default function PixSection({
    title,
    description,
    keys,
    successMessage,
    errorMessage
}: Props) {
    return (
        <PixIsland
            title={title}
            description={description}
            keys={keys}
            successMessage={successMessage}
            errorMessage={errorMessage}
        />
    );
} 