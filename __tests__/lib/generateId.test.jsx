import generateId from "../../lib/generateId";

describe("generateId - Library", () => {
    it("should fail from invalid prop", () => {
        try {
            generateId("lol");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe('Invalid action');
        }
    });

    it("should return new id as string with correct length", () => {
        const id = generateId(6);
        expect(id.length).toBe(6);
        expect(typeof id).toBe('string');
    });
});
