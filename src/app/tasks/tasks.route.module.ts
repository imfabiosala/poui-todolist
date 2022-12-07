import { Routes } from "@angular/router";

import { ListComponent } from "./list";

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: ListComponent
    }
];