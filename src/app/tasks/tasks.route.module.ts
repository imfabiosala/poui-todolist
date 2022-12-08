import { Routes } from "@angular/router";

import { ListComponent } from "./list";
import { AddComponent } from "./add";

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: ListComponent
    },
    {
        path: 'tasks/add',
        component: AddComponent
    }
];