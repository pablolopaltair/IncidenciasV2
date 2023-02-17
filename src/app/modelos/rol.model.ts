//Modelo con los roles
export interface Roles{
    usuario: boolean;
    mantenimiento: boolean;
    directivo: boolean;
    admin: boolean;
}

export class UserInterface {
    email: string;
    rol: Roles;
}
