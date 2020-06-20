declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * Signifies that the owning data holder is "attached" to something.
                             * <p>Examples may include: Banners being attached to a block.</p>
                             */
                            // @ts-ignore
                            interface AttachedData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.AttachedData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableAttachedData> {
                                /**
                                 * Gets the {@link Value} for the "attached" state.
                                 * @return The "attached" value state
                                 * @see Keys#ATTACHED
                                 */
                                // @ts-ignore
                                attached(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
