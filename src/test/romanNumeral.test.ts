import { suite, test, expect } from 'vitest';
import { convertToRoman } from '../romanNumeral.ts'

suite('convertToRoman()', () => {
    test('converts 1 to "I"', () => {
        const result = convertToRoman(1);
        expect(result).toBe('I');
    });

    test('converts 2 to "II"', () => {
        const result = convertToRoman(2);
        expect(result).toBe('II');
    });

    test('converts 3 to "III"', () => {
        const result = convertToRoman(3);
        expect(result).toBe('III');
    });

    test('converts 4 to "IV"', () => {
        const result = convertToRoman(4);
        expect(result).toBe('IV');
    });

    test('converts 5 to "V"', () => {
        const result = convertToRoman(5);
        expect(result).toBe('V');
    });

    test('converts 6 to "VI"', () => {
        const result = convertToRoman(6);
        expect(result).toBe('VI');
    });

    test('converts 7 to "VII"', () => {
        const result = convertToRoman(7);
        expect(result).toBe('VII');
    });

    test('converts 8 to "VIII"', () => {
        const result = convertToRoman(8);
        expect(result).toBe('VIII');
    });

    test('converts 9 to "IX"', () => {
        const result = convertToRoman(9);
        expect(result).toBe('IX');
    });

    test('converts 10 to "X"', () => {
        const result = convertToRoman(10);
        expect(result).toBe('X');
    });

    test('converts 11 to "XI"', () => {
        const result = convertToRoman(11);
        expect(result).toBe('XI');
    });

    test('converts 12 to "XII"', () => {
        const result = convertToRoman(12);
        expect(result).toBe('XII');
    });
});