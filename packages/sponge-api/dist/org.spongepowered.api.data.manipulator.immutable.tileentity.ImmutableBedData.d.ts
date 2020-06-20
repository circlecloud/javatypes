declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the various data of a
                             * {@link Bed}.
                             * @deprecated Use {#link ImmutableDyeableData} instead
                             */
                            // @ts-ignore
                            interface ImmutableBedData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableBedData, org.spongepowered.api.data.manipulator.mutable.tileentity.BedData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the {@link DyeColor color}.
                                 * @return The immutable value for the color
                                 */
                                // @ts-ignore
                                color(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.data.type.DyeColor>
                            }
                        }
                    }
                }
            }
        }
    }
}
