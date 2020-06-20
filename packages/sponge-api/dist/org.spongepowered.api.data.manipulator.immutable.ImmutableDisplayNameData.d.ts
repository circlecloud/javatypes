declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutableDisplayNameData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.ImmutableDisplayNameData, org.spongepowered.api.data.manipulator.mutable.DisplayNameData> {
                            /**
                             * Gets the display name as a {@link Text}. The display name may be
                             * player set, or it may be undefined.
                             * @return The display name, if available
                             */
                            // @ts-ignore
                            displayName(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.text.Text>
                        }
                    }
                }
            }
        }
    }
}
