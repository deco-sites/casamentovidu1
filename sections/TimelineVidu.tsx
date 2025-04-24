import type { ImageWidget } from "apps/admin/widgets.ts";
import TimelineViduIsland from "../islands/TimelineViduIsland.tsx";
interface Props {
    title?: string;
    description?: string;
    years?: {
        year: string;
        description: string;
        images: ImageWidget[];
    }[];
}
  
export default function Section({ title, description, years = [] }: Props) {


    return (
        <div id="sobre-nos">
        <TimelineViduIsland
            title={title}
            description={description}
            years={years}
        />
        </div>
    );
}
  