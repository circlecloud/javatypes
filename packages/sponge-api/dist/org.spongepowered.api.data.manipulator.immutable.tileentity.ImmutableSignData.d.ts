declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the {@link List} of
                             * {@link Text} showing up on a {@link Sign} to a {@link Player}.
                             */
                            // @ts-ignore
                            interface ImmutableSignData extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData<org.spongepowered.api.text.Text, org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableSignData, org.spongepowered.api.data.manipulator.mutable.tileentity.SignData> {
                                /**
                                 * Gets the {@link ImmutableListValue} of {@link Text} for the {@link Sign}
                                 * to show.
                                 * @return The immutable list of text lines
                                 */
                                // @ts-ignore
                                lines(): org.spongepowered.api.data.value.immutable.ImmutableListValue<org.spongepowered.api.text.Text>
                            }
                        }
                    }
                }
            }
        }
    }
}
