declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace tileentity {
                            /**
                             * An {@link DataManipulator} handling the "cooldown" information for
                             * a {@link Hopper}. While a {@link Hopper} is on "cooldown" no
                             * {@link ItemStack}s are "transferred" between {@link Inventory} instances.
                             */
                            // @ts-ignore
                            interface CooldownData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.tileentity.CooldownData, org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableCooldownData> {
                                /**
                                 * Gets the {@link Value} for the "cooldown" remaining.
                                 * @return The value for the cooldown remaining
                                 * @see Keys#COOLDOWN
                                 */
                                // @ts-ignore
                                cooldown(): org.spongepowered.api.data.value.mutable.Value<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
