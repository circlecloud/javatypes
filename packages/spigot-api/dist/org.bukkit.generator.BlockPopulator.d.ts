declare namespace org {
    namespace bukkit {
        namespace generator {
            /**
             * A block populator is responsible for generating a small area of blocks.
             * <p>
             * For example, generating glowstone inside the nether or generating dungeons
             * full of treasure
             */
            // @ts-ignore
            class BlockPopulator extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Populates an area of blocks at or around the given chunk.
                 * <p>
                 * The chunks on each side of the specified chunk must already exist; that
                 * is, there must be one north, east, south and west of the specified
                 * chunk. The "corner" chunks may not exist, in which scenario the
                 * populator should record any changes required for those chunks and
                 * perform the changes when they are ready.
                 * @param world The world to generate in
                 * @param random The random generator to use
                 * @param source The chunk to generate for
                 */
                // @ts-ignore
                abstract populate(world: org.bukkit.World, random: java.util.Random, source: org.bukkit.Chunk): void
            }
        }
    }
}
