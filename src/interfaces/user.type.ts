export interface ILocation{
    address: string,
    state: string,
    municipality: string,
    postalCode?: string
}

export interface IUser{
    id?: string
    fullname: string,
    email: string,
    password: string 
    role: string
    location: ILocation
} 

export interface IAuth{
    email: string,
    password: string
}