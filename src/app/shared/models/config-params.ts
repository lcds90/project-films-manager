import { CampoGenerico } from "./campo-generico";

export interface ConfigParams {
    page?: number;
    limit?: number;
    search?: string;
    campo?: CampoGenerico;

}
