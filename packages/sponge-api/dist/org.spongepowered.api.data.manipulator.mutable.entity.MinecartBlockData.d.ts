declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface MinecartBlockData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.MinecartBlockData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableMinecartBlockData> {
                                /**
                                 * Gets the {@link BlockState} represented by the {@link Minecart}.
                                 * @return The represented block
                                 * @see Keys#REPRESENTED_BLOCK
                                 */
                                // @ts-ignore
                                block(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.block.BlockState>
                                /**
                                 * Gets the offset of the represented block, in "pixels".
                                 * <p>Positive values move the block upwards in relation to the minecart,
                                 * and negative values move the block downwards.</p>
                                 * @return The block offset
                                 * @see Keys#OFFSET
                                 */
                                // @ts-ignore
                                offset(): org.spongepowered.api.data.value.mutable.Value<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
