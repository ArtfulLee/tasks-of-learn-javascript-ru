'use strict'

describe("pow", function () {

    describe("возводит x в степень 3", function () {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} в степени 3 будет ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    it("для отрицательных n возвращает NaN", function () {
        assert.isNaN(pow(2, -1));
    });

    it("для дробных n возвращает NaN", function () {
        assert.isNaN(pow(2, 1.5));
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////
// Что не так в нижеприведённом тесте функции pow ?
//
//     it("Возводит x в степень n", function () {
//         let x = 5;
//
//         let result = x;
//         assert.equal(pow(x, 1), result);
//
//         result *= x;
//         assert.equal(pow(x, 2), result);
//
//         result *= x;
//         assert.equal(pow(x, 3), result);
//     });
//
// P.S.Тест не содержит синтаксических ошибок и успешно проходит.

/* describe("pow", function () {

    describe("Возводит x в степень n", function () {
        let x = 5;
        let result;

        it(`${x} в степени 1 будет 5`, function () {
            result = x;
            assert.equal(pow(x, 1), result);
        });

        it(`${x} в степени 2 будет 25`, function () {
            result = x * x;
            assert.equal(pow(x, 2), result);
        });

        it(`${x} в степени 3 будет 125`, function () {
            result = x * x * x;
            assert.equal(pow(x, 3), result);
        });
    });
}); */

//////////////////////////////////////////////////////////////////////////////////////////////////