declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            /**
                             * An {@link DataManipulator} handling the "durability" of an {@link ItemStack}
                             * that will "break" after a certain amount of "uses".
                             * <p>Usually, items with durability will break and disappear when their
                             * durability reaches the maximum. Examples of this include pickaxes,
                             * axes, swords, and shovels. It is recommended to retrieve the maximum
                             * durability limit from the {@link UseLimitProperty}.</p>
                             */
                            // @ts-ignore
                            interface DurabilityData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.item.DurabilityData, org.spongepowered.api.data.manipulator.immutable.item.ImmutableDurabilityData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "durability" remaining.
                                 * The durability is a number signifying how many "uses' remain on the
                                 * item. When the durability reaches 0, usually, the item breaks.
                                 * @return The immutable bounded value of durability remaining
                                 * @see Keys#ITEM_DURABILITY
                                 */
                                // @ts-ignore
                                durability(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the {@link Value} for the "unbreakable" state of the
                                 * {@link ItemStack}. While the {@link ItemStack} is "unbreakable",
                                 * the durability can not change.
                                 * @return The immutable value for the "unbreakable" state
                                 * @see Keys#UNBREAKABLE
                                 */
                                // @ts-ignore
                                unbreakable(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
