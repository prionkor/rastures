export type TableGridItemType = {
	id: number;
	guid: string;
	totalSeats: number;
};

export type clickEventCallback = (e: React.MouseEvent<HTMLElement>) => void;
