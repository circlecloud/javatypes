declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            /**
                             * An {@link ImmutableDataManipulator} handling the {@link List} of pages of
                             * {@link Text} for an {@link ItemStack} of type {@link ItemTypes#WRITABLE_BOOK}
                             * such that the text elements are single pages.
                             */
                            // @ts-ignore
                            interface ImmutablePlainPagedData extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData<java.lang.String | string, org.spongepowered.api.data.manipulator.immutable.item.ImmutablePlainPagedData, org.spongepowered.api.data.manipulator.mutable.item.PlainPagedData> {
                                /**
                                 * Gets the {@link ImmutableListValue} for the {@link Text} pages.
                                 * @return The immutable list value of text pages
                                 */
                                // @ts-ignore
                                pages(): org.spongepowered.api.data.value.immutable.ImmutableListValue<java.lang.String | string>
                            }
                        }
                    }
                }
            }
        }
    }
}
