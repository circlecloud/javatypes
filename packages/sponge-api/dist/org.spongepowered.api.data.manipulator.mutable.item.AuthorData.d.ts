declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            // @ts-ignore
                            interface AuthorData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.item.AuthorData, org.spongepowered.api.data.manipulator.immutable.item.ImmutableAuthorData> {
                                /**
                                 * Gets the author of this item.
                                 * @return The author of the item
                                 * @see Keys#BOOK_AUTHOR
                                 */
                                // @ts-ignore
                                author(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.text.Text>
                            }
                        }
                    }
                }
            }
        }
    }
}
