declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            /**
                             * An {@link ImmutableDataManipulator} handling the list of {@link BlockType}s
                             * that the {@link ItemStack} can physically break. Usually this mechanic is
                             * only applicable to {@link Player}s when they are in a particular
                             * {@link GameMode}. When the {@link ItemStack} dictates that it is able to
                             * break a particular {@link BlockType}, other {@link BlockType}s can not be
                             * broken by the same {@link ItemStack}.
                             */
                            // @ts-ignore
                            interface ImmutableBreakableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.item.ImmutableBreakableData, org.spongepowered.api.data.manipulator.mutable.item.BreakableData> {
                                /**
                                 * Gets the {@link ImmutableSetValue} for all known {@link BlockType}s that
                                 * can be broken by the owning {@link ItemStack}.
                                 * @return The immutable set of block types that can be broken by the item
                                 *      stack
                                 */
                                // @ts-ignore
                                breakable(): org.spongepowered.api.data.value.immutable.ImmutableSetValue<org.spongepowered.api.block.BlockType>
                            }
                        }
                    }
                }
            }
        }
    }
}
