declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the various information for a
                             * {@link RideableHorse} including {@link HorseColor}, {@link HorseStyle}.
                             */
                            // @ts-ignore
                            interface ImmutableHorseData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableHorseData, org.spongepowered.api.data.manipulator.mutable.entity.HorseData> {
                                /**
                                 * Gets an {@link ImmutableValue} for the {@link HorseColor}.
                                 * @return The immutable value for the horse color
                                 */
                                // @ts-ignore
                                color(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.data.type.HorseColor>
                                /**
                                 * Gets an {@link ImmutableValue} for the {@link HorseStyle}.
                                 * @return The immutable value for the horse style
                                 */
                                // @ts-ignore
                                style(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.data.type.HorseStyle>
                            }
                        }
                    }
                }
            }
        }
    }
}
