declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            /**
                             * An {@link ImmutableDataManipulator} handling the "generation" state of an
                             * {@link ItemStack} of the type {@link ItemTypes#WRITTEN_BOOK} such that the
                             * book can be copied until a certain generation limit has been reached.
                             */
                            // @ts-ignore
                            interface ImmutableGenerationData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.item.ImmutableGenerationData, org.spongepowered.api.data.manipulator.mutable.item.GenerationData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} that represents the "generation"
                                 * state of a book.
                                 * @return The immutable bounded value for the generation state
                                 */
                                // @ts-ignore
                                generation(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
