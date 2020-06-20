declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            /**
                             * An {@link DataManipulator} handling the {@link List} of pages of
                             * {@link Text} for an {@link ItemStack} of type {@link ItemTypes#WRITABLE_BOOK}
                             * such that the text elements are single pages.
                             */
                            // @ts-ignore
                            interface PlainPagedData extends org.spongepowered.api.data.manipulator.mutable.ListData<java.lang.String, org.spongepowered.api.data.manipulator.mutable.item.PlainPagedData, org.spongepowered.api.data.manipulator.immutable.item.ImmutablePlainPagedData> {
                                /**
                                 * Gets the {@link ListValue} for the {@link Text} pages.
                                 * @return The list value of text pages
                                 * @see Keys#PLAIN_BOOK_PAGES
                                 */
                                // @ts-ignore
                                pages(): org.spongepowered.api.data.value.mutable.ListValue<java.lang.String>
                            }
                        }
                    }
                }
            }
        }
    }
}
