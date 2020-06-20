declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            /**
                             * An {@link DataManipulator} handling the {@link List} of pages of
                             * {@link Text} for an {@link ItemStack} of type {@link ItemTypes#WRITTEN_BOOK}
                             * such that the text elements are single pages.
                             */
                            // @ts-ignore
                            interface PagedData extends org.spongepowered.api.data.manipulator.mutable.ListData<org.spongepowered.api.text.Text, org.spongepowered.api.data.manipulator.mutable.item.PagedData, org.spongepowered.api.data.manipulator.immutable.item.ImmutablePagedData> {
                                /**
                                 * Gets the {@link ListValue} for the {@link Text} pages.
                                 * @return The list value of text pages
                                 * @see Keys#BOOK_PAGES
                                 */
                                // @ts-ignore
                                pages(): org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.text.Text>
                            }
                        }
                    }
                }
            }
        }
    }
}
