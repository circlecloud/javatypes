declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableMinecartBlockData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableMinecartBlockData, org.spongepowered.api.data.manipulator.mutable.entity.MinecartBlockData> {
                                /**
                                 * Gets the {@link BlockState} represented by the {@link Minecart}.
                                 * @return The represented block
                                 */
                                // @ts-ignore
                                block(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.block.BlockState>
                                /**
                                 * Gets the offset of the represented block, in "pixels".
                                 * <p>Positive values move the block upwards in relation to the minecart,
                                 * and negative values move the block downwards.</p>
                                 * @return The block offset
                                 */
                                // @ts-ignore
                                offset(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
