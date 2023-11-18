import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Medicine } from "./Entities/medicine.entity";
import { REPO_NAMES } from "src/Utils/constants";


@Injectable()
export class MedicineService {
    
    constructor(
        @Inject(REPO_NAMES.MEDICINE)
        private medicineRepo: Repository<Medicine>,
    ){}
    
    async findAll(): Promise<Medicine[]>{
        return this.medicineRepo.find();
    }
    async findOne(id: number): Promise<Medicine> {
        return this.medicineRepo.findOneBy({id});
    }
}