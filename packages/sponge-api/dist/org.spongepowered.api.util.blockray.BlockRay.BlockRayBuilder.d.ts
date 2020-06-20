declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace blockray {
                    namespace BlockRay {
                        /**
                         * A builder for block ray, which also implements {@link Iterable}, making it
                         * useful for 'advanced for loops'. Use {@link #from(Location)} to get an instance.
                         * @param <E> The type of the extent for the block ray
                         */
                        // @ts-ignore
                        class BlockRayBuilder<E extends org.spongepowered.api.world.extent.Extent> extends java.lang.Object implements java.lang.Iterable<org.spongepowered.api.util.blockray.BlockRayHit<E>> {
                            /**
                             * Adds the filter to the block ray.
                             * The block ray will skip over blocks that do not pass this predicate.
                             * This is optional.
                             * Multiple filters will be ANDed together.
                             * @param skipFilter The filter to add
                             * @return This for chained calls
                             */
                            // @ts-ignore
                            skipFilter(skipFilter: java.util.function.Predicate<org.spongepowered.api.util.blockray.BlockRayHit<E>> | java.util.function$.Predicate<org.spongepowered.api.util.blockray.BlockRayHit<E>>): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder<E>
                            /**
                             * Adds filters to the block ray.
                             * The block ray will skip over blocks that do not pass this predicate.
                             * This is optional.
                             * Multiple filters will be ANDed together.
                             * @param skipFilters The filters to add
                             * @return This for chained calls
                             */
                            // @ts-ignore
                            skipFilter(...skipFilters: java.util.function.Predicate[] | java.util.function$.Predicate[]): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder<E>
                            /**
                             * Adds the filter to the block ray.
                             * The block ray will end if a block does not pass this predicate.
                             * This is optional.
                             * Multiple filters will be ANDed together.
                             * @param stopFilter The filter to add
                             * @return This for chained calls
                             */
                            // @ts-ignore
                            stopFilter(stopFilter: java.util.function.Predicate<org.spongepowered.api.util.blockray.BlockRayHit<E>> | java.util.function$.Predicate<org.spongepowered.api.util.blockray.BlockRayHit<E>>): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder<E>
                            /**
                             * Adds filters to the block ray.
                             * The block ray will end if a block does not pass this predicate.
                             * This is optional.
                             * Multiple filters will be ANDed together.
                             * @param stopFilters The filters to add
                             * @return This for chained calls
                             */
                            // @ts-ignore
                            stopFilter(...stopFilters: java.util.function.Predicate[] | java.util.function$.Predicate[]): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder<E>
                            /**
                             * Sets the direction and ending location. This or setting the direction
                             * is required and can only be done once.
                             * @param end The ending location
                             * @return This for chained calls
                             */
                            // @ts-ignore
                            to(end: Vector3d): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder<E>
                            /**
                             * Sets the direction. This or setting the ending location is required
                             * and can only be done once.
                             * @param direction The direction
                             * @return This for chained calls
                             */
                            // @ts-ignore
                            direction(direction: Vector3d): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder<E>
                            /**
                             * Sets the maximum distance before stopping.
                             * This is a safeguard to prevent infinite iteration.
                             * Default value is 1000. Use a negative value to disable this.
                             * @param distanceLimit The distance limit
                             * @return This for chained calls
                             */
                            // @ts-ignore
                            distanceLimit(distanceLimit: number /*double*/): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder<E>
                            /**
                             * Sets whether or not to perform narrow phase intersections. The
                             * narrow phase performs intersections with the block selection boxes
                             * if they are smaller than a voxel. This is necessary to obtain
                             * correct intersections with small blocks like: signs, buttons,
                             * fences, etc. This is enabled by default.
                             * @param enable Whether or not to enable the narrow phase
                             * @return This for chained calls
                             */
                            // @ts-ignore
                            narrowPhase(enable: boolean): org.spongepowered.api.util.blockray.BlockRay.BlockRayBuilder<E>
                            /**
                             * Gets the starting position of the block ray. Given here since some
                             * filters might require it.
                             * @return The position of the block ray
                             */
                            // @ts-ignore
                            position(): Vector3d
                            /**
                             * Returns a block ray build from the settings. An ending location or
                             * direction needs to have been set.
                             * @return A block ray
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.util.blockray.BlockRay<E>
                            // @ts-ignore
                            iterator(): java.util.Iterator<org.spongepowered.api.util.blockray.BlockRayHit<E>>
                            /**
                             * Iterates the built block ray until the end
                             * and returns the last hit, if any.
                             * @return The last block hit, if any
                             * @see #build()
                             * @see BlockRay#end()
                             */
                            // @ts-ignore
                            end(): java.util.Optional<org.spongepowered.api.util.blockray.BlockRayHit<E>>
                        }
                    }
                }
            }
        }
    }
}
