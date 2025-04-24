import { ImageWidget } from "apps/admin/widgets.ts";
import ListaPresentesIsland from "site/islands/ListaPresentesIsland.tsx";

interface Props {
    description?: string;
    products?: {
        name: string;
        price: number;
        image: ImageWidget;
        link: string;
    }[];
}

  export default function Section({ products, description }: Props) {
    return (
        <ListaPresentesIsland products={products} description={description} />
    );
  }
  