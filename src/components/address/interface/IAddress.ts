// describe the fields

export interface IAddress {
    city: string,
    country: string,
    flat_number: string | number,
    house_number: string | number,
    readonly id: number,
    street: string,
    zip_code: string
}