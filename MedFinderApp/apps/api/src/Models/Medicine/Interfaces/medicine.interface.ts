import { Illness } from "src/Models/Treatable/Entities/illness.entity";
import { Symptom } from "src/Models/Treatable/Entities/symptom.entity";

export interface IMedicine{
    name: string,
    description: string,
    manufacturer: string,
    illnessTreatment: Illness[],
    symptomTreatment: Symptom[],

}