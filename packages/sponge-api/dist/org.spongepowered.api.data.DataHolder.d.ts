declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                /**
                 * A data holder object allows the access of additional data on the object
                 * that is not simply expressed by its basic type.
                 */
                // @ts-ignore
                interface DataHolder extends org.spongepowered.api.data.DataSerializable, org.spongepowered.api.data.property.PropertyHolder, org.spongepowered.api.data.value.mutable.CompositeValueStore<org.spongepowered.api.data.DataHolder, org.spongepowered.api.data.manipulator.DataManipulator<any, any>> {
                    /**
                     * Validates the container with known data required to set the raw data to
                     * this {@link DataHolder}. If the container is incomplete or contains
                     * invalid data, <code>false</code> is returned.
                     * <p>This validation should be checked prior to calling
                     * {@link #setRawData(DataView)} to avoid exceptions.</p>
                     * @param container The raw data to validate
                     * @return True if the data is valid
                     */
                    // @ts-ignore
                    validateRawData(container: org.spongepowered.api.data.DataView): boolean
                    /**
                     * Attempts to set all data of this {@link DataHolder} according to the
                     * {@link DataContainer}'s held information. Using this to modify known
                     * {@link DataManipulator} is unsupported and if the data is invalid, an
                     * {@link InvalidDataException} is thrown.
                     * <p>This setter is used to provide setting custom data that is not
                     * represented by the Data API, including forge mods and other
                     * unknown data. Attempts at validating known {@link DataManipulator}s
                     * contained in the data container are made with the assumption that all
                     * necessary data exists.</p>
                     * @param container A container containing all raw data to set on this
                     *      data holder
                     * @throws InvalidDataException If the container is missing or has invalid
                     *      data that this holder will refuse
                     */
                    // @ts-ignore
                    setRawData(container: org.spongepowered.api.data.DataView): void
                }
            }
        }
    }
}
