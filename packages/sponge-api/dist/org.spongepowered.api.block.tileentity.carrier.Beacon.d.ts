declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    namespace carrier {
                        /**
                         * Represents a Beacon.
                         * <p>Beacons apply prescribed effects according to the {@link BeaconData}.
                         * Depending on the completed levels of the beacon, the effects may be applied
                         * at a further range or shorter range.</p>
                         */
                        // @ts-ignore
                        interface Beacon extends org.spongepowered.api.block.tileentity.carrier.TileEntityCarrier {
                            /**
                             * Gets the number of completed levels of valid beacon structure blocks
                             * beneath this beacon.
                             * @return The number of levels
                             */
                            // @ts-ignore
                            getCompletedLevels(): number /*int*/
                            /**
                             * Gets the current {@link BeaconData} for this beacon.
                             * @return The current beacon data for this beacon
                             */
                            // @ts-ignore
                            getBeaconData(): org.spongepowered.api.data.manipulator.mutable.tileentity.BeaconData
                            /**
                             * Gets the {@link OptionalValue} for the primary
                             * {@link PotionEffectType}.
                             * @return The optional value for the primary potion effect
                             */
                            // @ts-ignore
                            primaryEffect(): org.spongepowered.api.data.value.mutable.OptionalValue<org.spongepowered.api.effect.potion.PotionEffectType>
                            /**
                             * Gets the {@link OptionalValue} for the secondary
                             * {@link PotionEffectType}.
                             * @return The optional value for the secondary potion effect
                             */
                            // @ts-ignore
                            secondaryEffect(): org.spongepowered.api.data.value.mutable.OptionalValue<org.spongepowered.api.effect.potion.PotionEffectType>
                        }
                    }
                }
            }
        }
    }
}
