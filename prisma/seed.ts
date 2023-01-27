import prisma from "../src/config/database.js";

async function populatedUser() {
    try {
        await prisma.user.createMany({
            data:[
                {
                    "name": "Joãozinho",
                    "email": "joao@joaomaria.com",
                    "password":"populateTEST"
                },
                {
                    "name": "Maria",
                    "email": "maria@joaomaria.com",
                    "password": "populateTEST"
                },
                {
                    "name": "Bruxa_Doceira",
                    "email": "doces_veganos@delivery.com",
                    "password": "populateTEST"
                }
            ]
        });
        return true
    } catch (error) {
        console.error(error)
        return false
    }
};

async function populatedPost() {
    try {   
        await prisma.post.createMany({
            data:[
                {
                    "description": "Semana passada acabei fazendo mais doces do que consigo comer, alguém quer?",
                    "userIdPost": 3
                },
                {
                    "description":"Eu e minha irmã, somos loucos, tamo indo pra casa de uma estranha, mas to meio perdido",
                    "userIdPost": 1
                },
                {
                    "description": "Meu irmão só me coloca em FURADA!",
                    "userIdPost": 2
                }
            ]
        });

        return true
    } catch (error) {
        console.error(error);
        return false;
    }
};

async function populatedComment() {
    try {
        await prisma.comment.createMany({
            data:[
                {
                    "comment": "Opa, fala onde é, eu e minha irmã tamo indo!",
                    "postId": 1,
                    "userIdComment": 1
                },
                {
                    "comment": "João, estão perdidos não! Eu moro meio longe mesmo :9 Mas só continuar seguindo a estrada!",
                    "postId": 2,
                    "userIdComment": 3
                },
                {
                    "comment": "Sorry maninha, mas vai dizer que agora que estamos em casa, de bucho cheio, o role não valeu a pena?",
                    "postId":3,
                    "userIdComment": 1
                },
                {
                    "comment": "Garotos, vocês são muito simpáticos! Se um dia quiserem comprar os meus doces, só me ligar!",
                    "postId":3,
                    "userIdComment":3
                },
                {
                    "comment": "Pode deixar Bruxa, AMEI te conhecer, e já quero mais dos doces! hahaha",
                    "postId":3,
                    "userIdComment":2
                }
            ]
        })
        return true
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function main() {
    let user = await prisma.user.findFirst();

    if(!user){
        const successfulPopulatedTableUser = await populatedUser();

        if(successfulPopulatedTableUser){
            console.log("Successful populated Users table!")
            const successfulPopulatedTablePost = await populatedPost();
            
            if(successfulPopulatedTablePost){
                console.log("Successful populated Posts table!")
                const successfulPopulatedTableComment = await populatedComment();

                if(successfulPopulatedTableComment){
                    console.log("Successful populated Comments table!")
                }
            }
        }   
    }
}

main()
    .then(()=>{
        console.log("All tables were successfully populated!")
    })
    .catch(e=>{
        console.error(e);
        process.exit(1);
    })
    .finally(async ()=>{
        await prisma.$disconnect();
    })