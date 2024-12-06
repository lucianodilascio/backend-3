import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";
import { petsService, usersService } from "./index.js";
import PetDTO from "../dto/Pet.dto.js";
import UserDTO from "../dto/User.dto.js";


class MockingService {
    
    static async generateMockingPets(num) {
        const pets = [];

        for(let i = 0; i < num; i++){
            pets.push({
                name: faker.animal.petName(),
                specie: faker.animal.type(),
                adopted: false,
                birthDate: faker.date.birthdate(),
                img: "https://via.placeholder.com/344"
            })
        }
        return pets
    }

    static async generateMockingUsers(num){
        const users = [];

        for(let i = 0; i < num; i++ ){
            users.push({
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: await createHash("coder123"),
                role: faker.helpers.arrayElement(["user, admin"]),
                pets: [],
            })
        }
        return users;
    }


    static async generateData(amountPets, amountUsers) {
        
        const pets = [];
        const users = [];

        try {

            for(let i = 0; i < amountPets; i++) {
    
                const pet = PetDTO.getPetInputFrom({    
                    name: faker.animal.petName(),
                    specie: faker.animal.type(),
                    adopted: false,
                    birthDate: faker.date.birthdate(),
                    img: "https://via.placeholder.com/344"
                })
    
                const newPet = await petsService.create(pet);
                pets.push(newPet);
            }

            for(let i = 0; i < amountUsers; i++){
                const user = {

                    first_name: faker.person.firstName(),
                    last_name: faker.person.lastName(),
                    email: faker.internet.email(),
                    password: await createHash("coder123"),
                    role: faker.helpers.arrayElement(["user", "admin"]),
                    pets: [],

                };

                const newUser = await usersService.create(user);
                users.push(newUser);
            }

            return console.log("Data cargada correctamente");
            
          
        } catch (error) {
            console.log(`Error al procesar el pedido: ${error.message}`);
            
            
        }

    }


}

export default MockingService;