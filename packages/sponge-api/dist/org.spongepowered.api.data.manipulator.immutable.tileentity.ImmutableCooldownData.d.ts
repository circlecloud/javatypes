declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the "cooldown" information for
                             * a {@link Hopper}. While a {@link Hopper} is on "cooldown" no
                             * {@link ItemStack}s are "transferred" between {@link Inventory} instances.
                             */
                            // @ts-ignore
                            interface ImmutableCooldownData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableCooldownData, org.spongepowered.api.data.manipulator.mutable.tileentity.CooldownData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "cooldown" remaining.
                                 * @return The immutable value for the cooldown remaining
                                 */
                                // @ts-ignore
                                cooldown(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
