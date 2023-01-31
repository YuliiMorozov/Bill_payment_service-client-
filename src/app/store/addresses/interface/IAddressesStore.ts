// describe the fields
import { IAddress } from "../../../../components/address/interface/IAddress";

export interface IAddressStore {
    loading: string,
    addresses: Array<IAddress>    
}