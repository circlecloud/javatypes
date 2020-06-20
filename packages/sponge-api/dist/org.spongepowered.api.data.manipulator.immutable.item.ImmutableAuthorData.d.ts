declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            /**
                             * An {@link ImmutableDataManipulator} handling the "author" of a
                             * {@link ItemTypes#WRITTEN_BOOK}.
                             */
                            // @ts-ignore
                            interface ImmutableAuthorData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.item.ImmutableAuthorData, org.spongepowered.api.data.manipulator.mutable.item.AuthorData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "author" of a book.
                                 * @return The immutable value for the author
                                 */
                                // @ts-ignore
                                author(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.text.Text>
                            }
                        }
                    }
                }
            }
        }
    }
}
