global.window = global;
require('../src/cipher');


describe('cipher', () => {
    it('debería ser un object', () => {
        expect(typeof cipher).toBe('object');


    });
    describe('cipher.encode', () => {
        it('debería ser una función', () => {
            expect(typeof cipher.encode).toBe('function');
        });
        it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
        expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
        });
        // Hacker edition
        //
        // [Español]
        // Si decides agregar soporte para minúsculas descomenta el test a
        // continuación.
        //
        it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
            expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
        });

        it('debería retornar "3456789012" para "0123456789" with offset 33', () => {
            expect(cipher.encode(33, '0123456789')).toBe('3456789012');
        });
        it('debería retornar " !@" para " !@"', () => {
            expect(cipher.encode(33, ' !@')).toBe(' !@');
        });

        // Hacker edition
        //
        // [Español]
        // Si decides implementar soporte para caracteres no alfabéticos descomenta
        // el test a continuación.
        //
        //
        // it('debería retornar " !@" para " !@"', () => {
        //   expect(cipher.encode(33, ' !@')).toBe(' !@');
        // });
    })
    describe('cipher.decode', () => {
        it('debería ser una función', () => {
            expect(typeof cipher.decode).toBe('function');
        });
        it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
            expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        });

        it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
            expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
        
        });
        //

        it('debería retornar " !@" para " !@"', () => {
            expect(cipher.decode(33, ' !@')).toBe(' !@');
        });

        it('debería retornar "0123456789" para "3456789012" with offset 33', () => {
            expect(cipher.decode(33, '3456789012')).toBe('0123456789');
        });
    });
});
