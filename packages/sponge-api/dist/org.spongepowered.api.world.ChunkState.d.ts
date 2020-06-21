declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * Represents the state of a {@link Chunk}.
                 */
                // @ts-ignore
                class ChunkState extends java.lang.Enum<org.spongepowered.api.world.ChunkState> {
                    /**
                     * The chunk is not loaded into memory. Whether the chunk has been generated
                     * is unknown while in this state.
                     */
                    // @ts-ignore
                    readonly UNLOADED: org.spongepowered.api.world.ChunkState
                    /**
                     * The chunk is loaded but has not yet been generated.
                     */
                    // @ts-ignore
                    readonly NOT_GENERATED: org.spongepowered.api.world.ChunkState
                    /**
                     * The chunk has been generated (implying that the shape of the terrain has
                     * been formed out of a basic block) but none of the populators or
                     * structures have been applied yet.
                     */
                    // @ts-ignore
                    readonly NOT_POPULATED: org.spongepowered.api.world.ChunkState
                    /**
                     * The chunk is fully generated and loaded into the world.
                     */
                    // @ts-ignore
                    readonly LOADED: org.spongepowered.api.world.ChunkState
                    // @ts-ignore
                    values(): org.spongepowered.api.world.ChunkState[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.spongepowered.api.world.ChunkState
                }
            }
        }
    }
}
