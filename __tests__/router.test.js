/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js';


describe("test pushToHistory", () => {
    test("tests length of history", () => {
        expect(pushToHistory("entry", 5).length).toBe(2);
        expect(pushToHistory("entry", 5).length).toBe(3);
    });
    test("tests current state object", () => {
        expect(pushToHistory("settings", 5).state).toStrictEqual({"page": "settings"});
        expect(pushToHistory("entry", 4).state).toStrictEqual({"page": "entry4"})
    })
});
