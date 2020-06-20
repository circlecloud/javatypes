declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the data for a {@link Beacon},
                             * usually applicable to the {@link PotionEffectType}s being applied to
                             * {@link Entity} instances in the region around the {@link Beacon}.
                             */
                            // @ts-ignore
                            interface ImmutableBeaconData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableBeaconData, org.spongepowered.api.data.manipulator.mutable.tileentity.BeaconData> {
                                /**
                                 * Gets the {@link ImmutableOptionalValue} for the primary
                                 * {@link PotionEffectType}.
                                 * @return The immutable optional value for the primary potion effect
                                 */
                                // @ts-ignore
                                primaryEffect(): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue<org.spongepowered.api.effect.potion.PotionEffectType>
                                /**
                                 * Gets the {@link ImmutableOptionalValue} for the secondary
                                 * {@link PotionEffectType}.
                                 * @return The immutable optional value for the secondary potion effect
                                 */
                                // @ts-ignore
                                secondaryEffect(): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue<org.spongepowered.api.effect.potion.PotionEffectType>
                                /**
                                 * Creates a new {@link ImmutableBeaconData} with {@link Optional#empty()}
                                 * values for the primary and secondary {@link PotionEffectType}s.
                                 * @return The new beacon data instance
                                 */
                                // @ts-ignore
                                clearEffects(): org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableBeaconData
                            }
                        }
                    }
                }
            }
        }
    }
}
