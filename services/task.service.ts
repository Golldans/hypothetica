import { ServiceSchema } from "moleculer";

export interface TaskEntity {
    id: number;
    name: string;
    description: string;
    id_user: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

const TasksService: ServiceSchema