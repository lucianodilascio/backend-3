import supertest from "supertest";
import chai from "chai";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("Router de Adopciones", () => {
    describe("GET /api/adoptions", () => {
        it("debería retornar lista de adopciones", async () => {
            const { status } = await requester.get("/api/adoptions");
            expect(status).to.equal(200);
        });

        it("me retorna 404 si la ruta no existe", async () => {
            const { status } = await requester.get("/adoptions/noexiste");
            expect(status).to.equal(404);
        });

        it("buscamos que nos retorne info de una adopción que exista", async () => {
            let aid = "67a013953d6a09d6cfb86361"; // Adopción de Luna por Pedro Diaz

            const { status } = await requester.get(`/api/adoptions/${aid}`);
            expect(status).to.equal(200);
        });

        it("nos debe retornar 404 si la adopción no existe", async () => {
            let noExisteAid = "67a013953d6a09d6cfb86363"; // ID de adopción no válida
            const { status } = await requester.get(`/api/adoptions/${noExisteAid}`);
            expect(status).to.equal(404);
        });

        it("creamos una adopción", async () => {
            let uid = "675708907280c86d1609dac9"; // Usuario Pedro Diaz
            let pid = "675708907280c86d1609daf3"; // Mascota Oscar

            const { status } = await requester.post(`/api/adoptions/${uid}/${pid}`);
            expect(status).to.equal(200);
        });

        it("retorna 400 si la mascota ya fue adoptada", async () => {
            let uid = "675708907280c86d1609dad0"; // Usuario Carlos Sanchez
            let pid = "675708907280c86d1609daf1"; // Mascota Cleo, ya adoptada

            const { status } = await requester.post(`/api/adoptions/${uid}/${pid}`);
            expect(status).to.equal(400);
        });

        it("debe retornar error si el usuario no existe", async () => {
            let noexisteUid = "64a987654321abcdef987654"; // Usuario no válido
            let pid = "675708907280c86d1609daf2"; // Mascota Bella

            const { status } = await requester.post(`/api/adoptions/${noexisteUid}/${pid}`);
            expect(status).to.equal(404);
        });

        it("debe retornar error si la mascota no existe", async () => {
            let uid = "675708907280c86d1609dad4"; // Usuario Pedro Diaz
            let noexistePid = "675708907280c86d1609daf5"; // Mascota no válida

            const { status } = await requester.post(`/api/adoptions/${uid}/${noexistePid}`);
            expect(status).to.equal(404);
        });

        it("debe retornar 404 si los parámetros son inválidos", async () => {
            const noExisteUid = "675708907280c86d1609dad9"; // Usuario no válido
            const noExistePid = "675708907280c86d1609daf6"; // Mascota no válida

            const { status } = await requester.post(`/api/adoptions/${noExisteUid}/${noExistePid}`);
            expect(status).to.equal(404);
        });
    });
});

