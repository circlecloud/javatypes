declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace tileentity {
                            /**
                             * An {@link DataManipulator} handling the {@link List} of
                             * {@link Text} showing up on a {@link Sign} to a {@link Player}.
                             * <p>In Vanilla, this is always applicable to a {@link Sign}, which
                             * always has lines present (even if they are empty). It may be present
                             * on an {@link ItemStack} of {@link ItemTypes#SIGN}, depending on whether
                             * the {@link ItemStack} has sign data stored in it.</p>
                             */
                            // @ts-ignore
                            interface SignData extends org.spongepowered.api.data.manipulator.mutable.ListData<org.spongepowered.api.text.Text, org.spongepowered.api.data.manipulator.mutable.tileentity.SignData, org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableSignData> {
                                /**
                                 * Gets the {@link ListValue} of {@link Text} for the {@link Sign}
                                 * to show.
                                 * @return The list of text lines
                                 * @see Keys#SIGN_LINES
                                 */
                                // @ts-ignore
                                lines(): org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.text.Text>
                            }
                        }
                    }
                }
            }
        }
    }
}
