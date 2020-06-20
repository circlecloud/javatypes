declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * An enumeration of the possible {@link ChunkRegenerateFlag}s.
                 * <p>{@link ChunkRegenerateFlag}s can be combined using the
                 * {@link ChunkRegenerateFlag#andFlag(ChunkRegenerateFlag)} and
                 * {@link ChunkRegenerateFlag#andNotFlag(ChunkRegenerateFlag)} operators.</p>
                 */
                // @ts-ignore
                class ChunkRegenerateFlags extends java.lang.Object {
                    /**
                     * All the available flags are applied through the AND operator.
                     */
                    // @ts-ignore
                    readonly ALL: org.spongepowered.api.world.ChunkRegenerateFlag
                    /**
                     * A flag that defines whether a chunk should be created.
                     */
                    // @ts-ignore
                    readonly CREATE: org.spongepowered.api.world.ChunkRegenerateFlag
                    /**
                     * A flag that defines whether a chunk should preserve entities.
                     * Note: It is up to the implementation to decide whether this will
                     * include moving entities to safe locations.
                     */
                    // @ts-ignore
                    readonly ENTITIES: org.spongepowered.api.world.ChunkRegenerateFlag
                    /**
                     * No flags are set, triggers nothing.
                     */
                    // @ts-ignore
                    readonly NONE: org.spongepowered.api.world.ChunkRegenerateFlag
                }
            }
        }
    }
}
