declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            /**
                             * An {@link ImmutableDataManipulator} handling the "durability" of an
                             * {@link ItemStack} that will "break" after a certain amount of "uses".
                             * <p>Usually, items with durability will break and disappear when their
                             * durability reaches the maximum. Examples of this include pickaxes,
                             * axes, swords, and shovels. It is recommended to retrieve the maximum
                             * durability limit from the {@link UseLimitProperty}.</p>
                             */
                            // @ts-ignore
                            interface ImmutableDurabilityData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.item.ImmutableDurabilityData, org.spongepowered.api.data.manipulator.mutable.item.DurabilityData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the "durability" remaining.
                                 * The durability is a number signifying how many "uses' remain on the
                                 * item. When the durability reaches 0, usually, the item breaks.
                                 * @return The immutable bounded value of durability remaining
                                 */
                                // @ts-ignore
                                durability(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the {@link ImmutableValue} for the "unbreakable" state of the
                                 * {@link ItemStack}. While the {@link ItemStack} is "unbreakable",
                                 * the durability can not change.
                                 * @return The immutable value for the "unbreakable" state
                                 */
                                // @ts-ignore
                                unbreakable(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
