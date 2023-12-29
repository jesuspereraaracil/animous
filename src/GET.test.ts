import { describe, expect, test } from "bun:test";
import { GET } from "index";

describe('GET function', () => {
    test('should work', async () => {
        const test = await GET('https://httpbin.org/get')
        
        expect(test).not.toBeEmpty()
    })
})