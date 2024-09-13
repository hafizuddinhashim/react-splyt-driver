export type GetDriverParams = {
    longitude: number,
    latitude: number,
    count?: number
}

export type Driver = {
    driverId: string,
    location: Location,
}

export type Location = {
    longitude: number,
    latitude: number,
    bearing: number,
}