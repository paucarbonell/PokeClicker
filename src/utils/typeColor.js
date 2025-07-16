export default async function typeColor() {
    const url = "https://pokeapi.co/api/v2/type?limit=17";
    const res = await fetch(url);
    return types = await JSON(res);
}   