declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * Immutable data which represents if a mob is exhibiting "johnny" behavior.
                             * <p>In vanilla this currently only applies to {@link Vindicator}s.</p>
                             * @see <a href="https://minecraft.gamepedia.com/Vindicator#Behavior">
                             *      The Minecraft Wiki for more information about "johnny" behavior</a>
                             */
                            // @ts-ignore
                            interface ImmutableJohnnyData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableJohnnyData, org.spongepowered.api.data.manipulator.mutable.entity.JohnnyData> {
                                /**
                                 * Gets the {@link ImmutableValue} for whether this mob is exhibiting
                                 * "johnny" behavior.
                                 * @return The immutable value for whether this mob is exhibiting
                                 *      "johnny" behavior
                                 */
                                // @ts-ignore
                                johnny(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
