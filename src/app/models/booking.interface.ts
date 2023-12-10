export interface Booking {
    fullName: string | null,
    location: string | null,
    roomType: string | null,
    nOfGuests: number | null,
    startDate: Date | null,
    endDate: Date | null,
    breakfast: boolean | null
}