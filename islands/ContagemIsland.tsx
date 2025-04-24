import { useSignal, useComputed } from '@preact/signals';
import { useEffect } from 'preact/hooks';

export default function ContagemIsland() {
    const targetDate = new Date('2025-10-03T00:00:00');
    const timeLeft = useSignal(targetDate.getTime() - Date.now());

    const days = useComputed(() => Math.floor(timeLeft.value / (1000 * 60 * 60 * 24)));
    const hours = useComputed(() => Math.floor((timeLeft.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = useComputed(() => Math.floor((timeLeft.value % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = useComputed(() => Math.floor((timeLeft.value % (1000 * 60)) / 1000));

    useEffect(() => {
        const interval = setInterval(() => {
            timeLeft.value = targetDate.getTime() - Date.now();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col gap-4 items-center justify-center bg-[#F9F1E3] w-full py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <TimeUnit value={days} label="dias" />
                <TimeUnit value={hours} label="horas" />
                <TimeUnit value={minutes} label="minutos" />
                <TimeUnit value={seconds} label="segundos" />
            </div>
        </div>
    );
}

interface TimeUnitProps {
    value: { value: number };
    label: string;
}

function TimeUnit({ value, label }: TimeUnitProps) {
    const formattedValue = value.value.toString().padStart(2, '0');
    
    return (
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md min-w-[120px]">
            <span className="text-3xl md:text-4xl font-bold text-[#315900]">
                {formattedValue}
            </span>
            <span className="text-sm md:text-base text-gray-600 font-medium">
                {label}
            </span>
        </div>
    );
}
  