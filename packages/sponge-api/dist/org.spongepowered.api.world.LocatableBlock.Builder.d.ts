declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace LocatableBlock {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.data.persistence.DataBuilder<org.spongepowered.api.world.LocatableBlock> {
                        /**
                         * Sets the {@link BlockState} for this builder.
                         * @param blockState The block state
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        state(blockState: org.spongepowered.api.block.BlockState): org.spongepowered.api.world.LocatableBlock.Builder
                        /**
                         * Sets the {@link BlockState} and {@link Vector3i position} for this
                         * builder.
                         * @param location The location containing the block state and position
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        location(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): org.spongepowered.api.world.LocatableBlock.Builder
                        /**
                         * Sets the {@link Vector3i position} for this builder.
                         * @param position The position
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        position(position: Vector3i): org.spongepowered.api.world.LocatableBlock.Builder
                        /**
                         * Sets the {@code x} {@code y} {@code z} positions for this builder.
                         * @param x The x coordinate
                         * @param y The y coordinate
                         * @param z The z coordinate
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        position(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.world.LocatableBlock.Builder
                        /**
                         * Sets the {@link World} for this builder, used to get the {@link BlockState}
                         * for a desired position.
                         * @param world The world
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        world(world: org.spongepowered.api.world.World): org.spongepowered.api.world.LocatableBlock.Builder
                        // @ts-ignore
                        reset(): org.spongepowered.api.world.LocatableBlock.Builder
                        // @ts-ignore
                        from(value: org.spongepowered.api.world.LocatableBlock): org.spongepowered.api.world.LocatableBlock.Builder
                        /**
                         * Creates a new {@link LocatableBlock}.
                         * @return The new locatable block
                         */
                        // @ts-ignore
                        build(): org.spongepowered.api.world.LocatableBlock
                    }
                }
            }
        }
    }
}
