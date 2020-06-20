declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} handling the various information for a
                             * {@link RideableHorse} including {@link HorseColor}, {@link HorseStyle}.
                             */
                            // @ts-ignore
                            interface HorseData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.HorseData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableHorseData> {
                                /**
                                 * Gets a {@link Value} for the {@link HorseColor}.
                                 * @return The value for the horse color
                                 * @see Keys#HORSE_COLOR
                                 */
                                // @ts-ignore
                                color(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.HorseColor>
                                /**
                                 * Gets a {@link Value} for the {@link HorseStyle}.
                                 * @return The value for the horse style
                                 * @see Keys#HORSE_STYLE
                                 */
                                // @ts-ignore
                                style(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.HorseStyle>
                            }
                        }
                    }
                }
            }
        }
    }
}
