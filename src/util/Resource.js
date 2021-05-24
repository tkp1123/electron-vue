export class Resource {
    constructor(name, id, parentId) {
        if (name) {
            this.name = name;
        }
        if (id) {
            this.id = id;
        }
        if (parentId) {
            this.parentId = parentId;
        }
    }

    name = '';
    id = '';
    parentId = '';
}