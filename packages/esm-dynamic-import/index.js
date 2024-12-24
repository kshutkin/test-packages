export const foo = 'foo';

export default async function() {
    const { bar } = await import('./second.js');
    return bar;
}