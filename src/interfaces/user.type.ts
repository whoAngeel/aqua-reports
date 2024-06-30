export interface ILocation{
    address: string,
    state: string,
    municipality: string,
    postalCode?: string
}

export interface User{
    fullname: string,
    email: string,
    password: string,
    role: string
    location: ILocation
} 