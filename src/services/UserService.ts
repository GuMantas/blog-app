import { AxiosResponse } from "axios";
import { User } from "src/scripts/classes";
import  Crud  from "../scripts/classes/Crud.class";

class UserService extends Crud {
    private url: string = 'https://jsonplaceholder.typicode.com'

    private _paths = {
        users: '/users'
    }

    getUsersById(id:string): Promise<AxiosResponse> {
        return this.get(`${this.url}${this._paths.users}`)
    }
    getUsers(): Promise<AxiosResponse> {
        return this.get(`${this.url}${this._paths.users}`)
    }
    createUsers(data:any): Promise<AxiosResponse>{
        return this.post(`${this.url}${this._paths.users}`, data)
    }
    patchUsers(id:string, data: any): Promise<AxiosResponse> {
        return this.patch(`${this.url}${this._paths.users}/${id}`, data)
    }
    putUsers(id:string, data:any): Promise<AxiosResponse> {
        return this.put(`${this.url}${this._paths.users}/${id}`, data)
    }
    deleteUsers(id:string, data: any): Promise<AxiosResponse> {
        return this.delete(`${this.url}${this._paths.users}/${id}`, data)
    }
}

export default new UserService();