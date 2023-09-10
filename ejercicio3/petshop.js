const axios = require('axios');

const BASE_URL = 'https://petstore.swagger.io/v2';

async function createUserAndFetch() {
    const user = {
        id: Date.now(),
        username: "camilond",
        firstName: "Camilo",
        lastName: "Nunez",
        email: "ecamilonunezd@gmail.com",
        password: "123456789",
        phone: "3013254995",
        userStatus: 1
    };

    try {
        await axios.post(`${BASE_URL}/user`, user);
        const response = await axios.get(`${BASE_URL}/user/${user.username}`);
        console.log(response.data);
    } catch (error) {
        console.error('Error creating or fetching user:', error);
    }
}

createUserAndFetch();


async function listPetsSold() {
    try {
        const response = await axios.get(`${BASE_URL}/pet/findByStatus?status=sold`);
        const pets = response.data;
        const formattedPets = pets.map(pet => ({ id: pet.id, name: pet.name }));
        console.log(formattedPets);
        return formattedPets;
    } catch (error) {
        console.error('Error fetching pets:', error);
    }
}


class PetsList {
    constructor(pets) {
        this.pets = pets;
    }

    countSameNames() {
        const nameCount = {};

        for (const pet of this.pets) {
            if (nameCount[pet.name]) {
                nameCount[pet.name]++;
            } else {
                nameCount[pet.name] = 1;
            }
        }

        return nameCount;
    }
}


(async function() {
    const petsSold = await listPetsSold();
    const petsListInstance = new PetsList(petsSold);
    console.log(petsListInstance.countSameNames());
})();