declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            /**
                             * An {@link DataManipulator} handling the "generation" state of an
                             * {@link ItemStack} of the type {@link ItemTypes#WRITTEN_BOOK} such that the
                             * book can be copied until a certain generation limit has been reached.
                             */
                            // @ts-ignore
                            interface GenerationData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.item.GenerationData, org.spongepowered.api.data.manipulator.immutable.item.ImmutableGenerationData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} that represents the "generation"
                                 * state of a book.
                                 * @return The bounded value for the generation state
                                 * @see Keys#GENERATION
                                 */
                                // @ts-ignore
                                generation(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
