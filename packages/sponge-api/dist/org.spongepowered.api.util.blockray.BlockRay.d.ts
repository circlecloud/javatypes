declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace blockray {
                    /**
                     * A block ray which traces a line and returns all block boundaries intersected
                     * in order, starting from the start location. If the ray starts in a block,
                     * that block is never returned because it is never entered (the ray is already
                     * inside).
                     * <p>This class implements the
                     * {@link Iterator} interface with the exception of {@link Iterator#remove()}.
                     * </p>
                     * <p>Filters determine what blocks the {@link BlockRay} should accept. First
                     * the stop filter is called. If it returns false then the iterator ends there.
                     * Otherwise the skip filter is called. If it returns false then the iterator
                     * proceeds to the next block and it is never returned. Otherwise the block is
                     * returned. If the distance limit is enabled then it is applied before both
                     * filters and acts like the stop filter.</p>
                     * <p>Any one instance of a {@link Predicate} should only be run on one path.
                     * It is not specified that {@link Predicate}s have to be stateless, pure
                     * functions. They are allowed to keep state along an individual path, based on
                     * the assertion that a single instance is only called on one path.</p>
                     * <p>Filters are most useful for limiting the target block a player is looking
                     * at based on some metric, like transparency, block model, or even distance.
                     * The standard Bukkit-like behavior for finding the target block can be
                     * achieved with using {@link BlockRay#ONLY_AIR_FILTER} as the
                     * {@code stopFilter}, combined with
                     * {@link #continueAfterFilter(Predicate, int)} with a second argument of 1, to
                     * obtain the block just after the last air.</p>
                     * <p>To get a block ray for an entities' line of sight, use
                     * <pre>{@code BlockRay.from(entity);}</pre></p>
                     * @param <E> The extent in which this ray is being cast
                     * @see BlockRayHit
                     */
                    // @ts-ignore
                    class BlockRay<E extends org.spongepowered.api.world.extent.Extent> extends java.lang.Object implements java.util.Iterator<org.spongepowered.api.util.blockray.BlockRayHit<E>> {
                        /**
                         * Resets the iterator; it will iterate from the starting location again.
                         */
                        // @ts-ignore
                        reset(): void
                        // @ts-ignore
                        hasNext(): boolean
                        // @ts-ignore
                        next(): org.spongepowered.api.util.blockray.BlockRayHit<E>
                        /**
                         * Traces the block ray to the end and returns the last block
                         * accepted by the filter, or none if the extent or block limit was reached.
                         * This advances the iterator.
                         * @return The last block of the ray, if any
                         */
                        // @ts-ignore
                        end(): java.util.Optional<org.spongepowered.api.util.blockray.BlockRayHit<E>>
                        /**
                         * Initializes a block ray builder with the given starting location.
                         * @param start The starting location
                         * @param <E> The extent to be applied in
                         * @return A new block ray builder
                         */
                        // @ts-ignore
                        from<E extends org.spongepowered.api.world.extent.Extent>(start: org.spongepowered.api.world.Location<E>): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder<E>
                        /**
                         * Initializes a block ray builder with the given starting location.
                         * @param extent The extent in which to trace the ray
                         * @param start The starting position
                         * @param <E> The extent to be applied in
                         * @return A new block ray builder
                         */
                        // @ts-ignore
                        from<E extends org.spongepowered.api.world.extent.Extent>(extent: E extends org.spongepowered.api.world.extent.Extent, start: Vector3d): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder<E>
                        /**
                         * Initializes a block ray builder for the entity's eye.
                         * If the eye location isn't defined for the entity, the
                         * regular location is used. This sets both the starting
                         * point and direction.
                         * @param entity The entity
                         * @return A new block ray builder
                         */
                        // @ts-ignore
                        from(entity: org.spongepowered.api.entity.Entity): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder<org.spongepowered.api.world.World>
                        /**
                         * A filter that accepts all blocks. A {@link BlockRay} combined with no
                         * other filter than this one could run endlessly.
                         * @param <E> The extent to be applied in
                         * @return A filter that accepts all blocks
                         */
                        // @ts-ignore
                        allFilter<E extends org.spongepowered.api.world.extent.Extent>(): java.util.function.Predicate<org.spongepowered.api.util.blockray.BlockRayHit<E>>
                        /**
                         * A block type filter that only permits air as a transparent block.
                         * <p>This is provided for convenience, as the default behavior in previous
                         * systems was to pass through air blocks only until a non-air block was
                         * hit.</p>
                         * @param <E> The extent to be applied in
                         * @return A filter that only accepts air blocks
                         */
                        // @ts-ignore
                        onlyAirFilter<E extends org.spongepowered.api.world.extent.Extent>(): java.util.function.Predicate<org.spongepowered.api.util.blockray.BlockRayHit<E>>
                        /**
                         * A filter that only allows blocks of a certain type.
                         * @param type The type of blocks to allow
                         * @param <E> The extent to be applied in
                         * @return The filter instance
                         */
                        // @ts-ignore
                        blockTypeFilter<E extends org.spongepowered.api.world.extent.Extent>(type: org.spongepowered.api.block.BlockType): java.util.function.Predicate<org.spongepowered.api.util.blockray.BlockRayHit<E>>
                        /**
                         * Extends a filter by a number of blocks, regardless of what the extended
                         * filter does.
                         * @param filter The filter to extend
                         * @param numberOfBlocks The number of blocks to extend it by
                         * @param <E> The extent to be applied in
                         * @return The extended block filter
                         */
                        // @ts-ignore
                        continueAfterFilter<E extends org.spongepowered.api.world.extent.Extent>(filter: java.util.function.Predicate<org.spongepowered.api.util.blockray.BlockRayHit<E>> | java.util.function$.Predicate<org.spongepowered.api.util.blockray.BlockRayHit<E>>, numberOfBlocks: number /*int*/): java.util.function.Predicate<org.spongepowered.api.util.blockray.BlockRayHit<E>>
                    }
                }
            }
        }
    }
}
