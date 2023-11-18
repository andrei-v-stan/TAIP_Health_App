import { Controller, Get, Param } from "@nestjs/common";
import { MedicineService } from "./medicine.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Medicine')
@Controller('medicine')
export class MedicineController{
    constructor(private readonly medicineService: MedicineService){}

    @Get()
    findAll(){
        return this.medicineService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id : string){
        return this.medicineService.findOne(+id);
    }
}