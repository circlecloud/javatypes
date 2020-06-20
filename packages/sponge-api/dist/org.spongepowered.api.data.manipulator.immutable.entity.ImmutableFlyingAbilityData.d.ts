declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the "flying" state of an
                             * {@link Entity}. This is usually marking that an entity is capable of
                             * flying unobtrusively in the air. Usually applicable to a {@link Humanoid}
                             * while able to fly.
                             */
                            // @ts-ignore
                            interface ImmutableFlyingAbilityData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableFlyingAbilityData, org.spongepowered.api.data.manipulator.mutable.entity.FlyingAbilityData> {
                                /**
                                 * Gets the {@link ImmutableValue} for whether the owner can "fly".
                                 * @return The immutable value for being able to toggle "flying"
                                 */
                                // @ts-ignore
                                canFly(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
