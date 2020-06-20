declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} for the "flying" state of an {@link Entity}. This
                             * is usually marking that an entity is capable of flying unobtrusively in the
                             * air. Usually applicable to a {@link Humanoid} while able to fly.
                             */
                            // @ts-ignore
                            interface FlyingAbilityData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.FlyingAbilityData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableFlyingAbilityData> {
                                /**
                                 * Gets the {@link Value} for whether the owner can "fly".
                                 * @return The value for being able to toggle "flying"
                                 * @see Keys#CAN_FLY
                                 */
                                // @ts-ignore
                                canFly(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
