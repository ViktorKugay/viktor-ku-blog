export const isTest = process.env.NODE_ENV === 'test';

export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
