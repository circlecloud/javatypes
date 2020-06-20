declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace BlockSnapshot {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.data.ImmutableDataBuilder<org.spongepowered.api.block.BlockSnapshot, org.spongepowered.api.block.BlockSnapshot.Builder> {
                        /**
                         * Sets the {@link WorldProperties} for this {@link BlockSnapshot}.
                         * <p>
                         * This is used to grab the {@link UUID} of the World for this snapshot.
                         * </p>
                         * @param worldProperties The WorldProperties
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        world(worldProperties: org.spongepowered.api.world.storage.WorldProperties): org.spongepowered.api.block.BlockSnapshot.Builder
                        /**
                         * Sets the {@link BlockState} for this {@link BlockSnapshot}.
                         * @param blockState The BlockState
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        blockState(blockState: org.spongepowered.api.block.BlockState): org.spongepowered.api.block.BlockSnapshot.Builder
                        /**
                         * Sets the coordinates of this {@link BlockSnapshot} from a {@link Vector3i}.
                         * @param position The Vector3i representing the coordinates
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        position(position: Vector3i): org.spongepowered.api.block.BlockSnapshot.Builder
                        /**
                         * Copies over block data from a {@link Location}.
                         * @param location The Location to copy from
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        from(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): org.spongepowered.api.block.BlockSnapshot.Builder
                        /**
                         * Sets the {@link UUID} of the user who created this
                         * {@link BlockSnapshot}.
                         * @param uuid The {#link UUID} of the creator
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        creator(uuid: java.util.UUID): org.spongepowered.api.block.BlockSnapshot.Builder
                        /**
                         * Sets the {@link UUID} of the user who last notified this
                         * {@link BlockSnapshot}.
                         * @param uuid The {#link UUID} of the notifier
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        notifier(uuid: java.util.UUID): org.spongepowered.api.block.BlockSnapshot.Builder
                    }
                }
            }
        }
    }
}
