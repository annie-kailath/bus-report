export interface BusServiceDetails {
    organisation: string;
    date: string;
    busData: BusData[];
}

interface BusData {
    busId: number;
    routeVariant: string;
    deviationFromTimetable: number;
}