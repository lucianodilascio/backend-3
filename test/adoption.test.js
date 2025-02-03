import supertest from "supertest";
import chai from "chai";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("router de Adopciones", () => {
    describe("GET /api/adoptions", () => {
        it("deberia retornar lista de adopciones", async () => {
            const { status } = await requester.get("/api/adoptions");
            expect(status).to.equal(200);
        });

        it("me retorna 404 si la ruta no existe", async () => {
            const { status } = await requester.get("/adoptions/noexiste");
            expect(status).to.equal(404);
        });

        it("buscamos que nos retorne info de una adopcion que exista", async () => {
            let aid = "67a013953d6a09d6cfb86361";

            const { status } = await requester.get(`/api/adoptions/${aid}`);
            expect(status).to.equal(200);
        });

        it("nos debe retornar 404 si la adopcion no existe", async () => {
            let noExisteAid = "67a013953d6a09d6cfb86363";
            const { status } = await requester.get(`/api/adoptions/${noExisteAid}`);
            expect(status).to.equal(404);
        });

        it("creamos una adopción", async () => {
            let uid = "675708907280c86d1609dad0";
            let pid = "675708907280c86d1609daf1";


            const { status } = await requester.post(`/api/adoptions/${uid}/${pid}`);
            expect(status).to.equal(200);
        });

        

        

    });
});
