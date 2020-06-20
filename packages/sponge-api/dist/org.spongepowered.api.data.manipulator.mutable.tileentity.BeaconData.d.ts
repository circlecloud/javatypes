declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace tileentity {
                            /**
                             * An {@link DataManipulator} handling the data for a {@link Beacon},
                             * usually applicable to the {@link PotionEffectType}s being applied to
                             * {@link Entity} instances in the region around the {@link Beacon}.
                             */
                            // @ts-ignore
                            interface BeaconData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.tileentity.BeaconData, org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableBeaconData> {
                                /**
                                 * Gets the {@link OptionalValue} for the primary
                                 * {@link PotionEffectType}.
                                 * @return The optional value for the primary potion effect
                                 * @see Keys#BEACON_PRIMARY_EFFECT
                                 */
                                // @ts-ignore
                                primaryEffect(): org.spongepowered.api.data.value.mutable.OptionalValue<org.spongepowered.api.effect.potion.PotionEffectType>
                                /**
                                 * Gets the {@link OptionalValue} for the secondary
                                 * {@link PotionEffectType}.
                                 * @return The optional value for the secondary potion effect
                                 * @see Keys#BEACON_SECONDARY_EFFECT
                                 */
                                // @ts-ignore
                                secondaryEffect(): org.spongepowered.api.data.value.mutable.OptionalValue<org.spongepowered.api.effect.potion.PotionEffectType>
                                /**
                                 * Fills the primary and secondary {@link PotionEffectType}s
                                 * with {@link Optional#empty()} values as a semi "reset" state.
                                 * @return This instance, for chaining
                                 */
                                // @ts-ignore
                                clearEffects(): org.spongepowered.api.data.manipulator.mutable.tileentity.BeaconData
                            }
                        }
                    }
                }
            }
        }
    }
}
