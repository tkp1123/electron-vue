import { Resource } from './Resource'
import store from '@/store'
export class Validation {
    static checkResource(val) {
        let resource = JSON.parse(store.state.user.role)
        return resource.filter(x => x == val.id).length > 0;
    }
}