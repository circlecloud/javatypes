declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace tileentity {
                            /**
                             * A {@link DataManipulator} handling the various data of a
                             * {@link Bed}.
                             * @deprecated Use {#link DyeableData} instead
                             */
                            // @ts-ignore
                            interface BedData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.tileentity.BedData, org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableBedData> {
                                /**
                                 * Gets the {@link Value} for the {@link DyeColor color}.
                                 * @return The value for the color
                                 */
                                // @ts-ignore
                                color(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.DyeColor>
                            }
                        }
                    }
                }
            }
        }
    }
}
