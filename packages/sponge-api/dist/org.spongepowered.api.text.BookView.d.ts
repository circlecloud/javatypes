declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                /**
                 * Represents a view of the Book GUI on the client. A BookView is not
                 * associated with any Book {@link ItemStack} that exists on the server and is
                 * simply for displaying {@link Text} to the player. This BookView is read-only
                 * as it is currently impossible to tell the client to open an unsigned book.
                 */
                // @ts-ignore
                class BookView extends java.lang.Object implements org.spongepowered.api.data.DataSerializable {
                    /**
                     * Returns the title of the book to be displayed.
                     * @return Title of book
                     */
                    // @ts-ignore
                    getTitle(): org.spongepowered.api.text.Text
                    /**
                     * Returns the author of the book to be displayed.
                     * @return Author of book
                     */
                    // @ts-ignore
                    getAuthor(): org.spongepowered.api.text.Text
                    /**
                     * Returns a list of pages that will be displayed to the client.
                     * @return List of pages in book
                     */
                    // @ts-ignore
                    getPages(): <any>
                    /**
                     * Returns a new {@link Builder} for chaining.
                     * @return Builder for chaining
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.text.BookView.Builder
                    // @ts-ignore
                    getContentVersion(): int
                    // @ts-ignore
                    toContainer(): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    toString(): java.lang.String
                    // @ts-ignore
                    equals(obj: any): boolean
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
