import { Injectable } from '@angular/core';
import { Model, ModelFactory } from 'ngx-model';

@Injectable({ providedIn: 'root' })
export class UserStore {

    public model: Model<UserState>;

    constructor(private modelFactory: ModelFactory<UserState>) {
        if (sessionStorage.getItem('USER')) {
            this.model = this.modelFactory.create(JSON.parse(sessionStorage.getItem('USER')));
        } else {
            this.model = this.modelFactory.create({
                name: '',
                mail: '',
                token: ''
            });
        }

    }

    update(values: any) {
        const modelSnapshot = this.model.get();

        const newModel = { ...modelSnapshot, ...values };
        if (newModel.name === '') {
            sessionStorage.removeItem('USER');
        } else {
            sessionStorage.setItem('USER', JSON.stringify(newModel));
        }
        this.model.set(newModel);
        // console.log(this.model.get());
    }


}

export interface UserState {
    mail: string;
    name: string;
    token: string;
}
