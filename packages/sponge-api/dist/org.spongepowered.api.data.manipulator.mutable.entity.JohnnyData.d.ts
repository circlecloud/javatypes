declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Data which represents if a mob is exhibiting "johnny" behavior.
                             * <p>In vanilla this currently only applies to {@link Vindicator}s.</p>
                             * @see <a href="https://minecraft.gamepedia.com/Vindicator#Behavior">
                             *      The Minecraft Wiki for more information about "johnny" behavior</a>
                             */
                            // @ts-ignore
                            interface JohnnyData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.JohnnyData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableJohnnyData> {
                                /**
                                 * Gets the {@link Value} for whether this mob is exhibiting
                                 * "johnny" behavior.
                                 * @return The value for whether this mob is exhibiting "johnny" behavior
                                 * @see Keys#IS_JOHNNY
                                 */
                                // @ts-ignore
                                johnny(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
