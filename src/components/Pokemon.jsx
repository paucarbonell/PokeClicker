export default function Pokemon({pokemon}) {
    return (
        <>
            <main className="flex flex-col justify-center items-center size-30 bg-gray border-2 border-black">
                <img src={pokemon.sprites.front_default} className="size-20" alt="sprite" />
                <section>
                    <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                </section>
            </main>
        </>
    )
}