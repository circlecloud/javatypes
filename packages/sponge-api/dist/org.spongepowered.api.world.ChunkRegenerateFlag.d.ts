declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * A flag of sorts that determines whether a chunk regeneration will perform
                 * various tasks such as creating a chunk, or preserving entities.
                 */
                // @ts-ignore
                interface ChunkRegenerateFlag {
                    /**
                     * Gets whether this flag defines that a chunk should be created if it does
                     * not exist.
                     * @return True if this is set to create chunks
                     */
                    // @ts-ignore
                    create(): boolean
                    /**
                     * Gets whether this flag will preserve entities in chunks that are
                     * regenerated.
                     * Note: It is up to the implementation to decide whether this will
                     * include moving entities to safe locations.
                     * @return True if this is set to preserve entities
                     */
                    // @ts-ignore
                    entities(): boolean
                    /**
                     * Gets the equivalent {@link ChunkRegenerateFlag} of this flag with all
                     * other flags while having the desired {@code create} as defined by the
                     * parameter.
                     * @param create Whether to create chunk
                     * @return The relative flag with the desired create
                     */
                    // @ts-ignore
                    withCreate(create: boolean): org.spongepowered.api.world.ChunkRegenerateFlag
                    /**
                     * Gets the equivalent {@link ChunkRegenerateFlag} of this flag with all
                     * other flags while having the desired {@code entities} as defined by the
                     * parameter.
                     * @param entities Whether to preserve entities
                     * @return The relative flag with the desired entities
                     */
                    // @ts-ignore
                    withEntities(entities: boolean): org.spongepowered.api.world.ChunkRegenerateFlag
                    /**
                     * Gets the equivalent {@link ChunkRegenerateFlag} of this flag with the
                     * {@code true}s set for this flag and the provided {@code flag}, such that
                     * only if both flags have the same {@code true} flags set will persist.
                     * <p>For example, if this flag has {@link #create()} and the incoming flag
                     * has {@link #create()} returning {@code true}, the resulting flag will
                     * have {@link #create()} return {@code true} as well. The inverse is also
                     * true. If either has differing flags for any of the above methods, the
                     * resulting flag will have a {@code false} value.</p>
                     * @param flag The incoming flag to and with this flag
                     * @return The resulting flag with matched values
                     */
                    // @ts-ignore
                    andFlag(flag: org.spongepowered.api.world.ChunkRegenerateFlag): org.spongepowered.api.world.ChunkRegenerateFlag
                    /**
                     * Gets the equivalent {@link ChunkRegenerateFlag} of this flag with the
                     * {@code true}s set for this flag and the provided {@code flag}, such that
                     * only if both flags have the same {@code true} flags set will persist.
                     * <p>For example, if this flag has {@link #create()} and the incoming flag
                     * has {@link #create()} returning {@code true}, the resulting flag will
                     * have {@link #create()} return {@code true} as well. The inverse is also
                     * true. If either has differing flags for any of the above methods, the
                     * resulting flag will have a {@code false} value.</p>
                     * @param flag The incoming flag to and with this flag
                     * @return The resulting flag with matched values
                     */
                    // @ts-ignore
                    andNotFlag(flag: org.spongepowered.api.world.ChunkRegenerateFlag): org.spongepowered.api.world.ChunkRegenerateFlag
                }
            }
        }
    }
}
