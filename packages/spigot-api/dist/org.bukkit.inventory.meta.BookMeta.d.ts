declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                /**
                 * Represents a book ({@link Material#WRITABLE_BOOK} or {@link
                 * Material#WRITTEN_BOOK}) that can have a title, an author, and pages.
                 */
                // @ts-ignore
                interface BookMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Checks for the existence of a title in the book.
                     * @return true if the book has a title
                     */
                    // @ts-ignore
                    hasTitle(): boolean
                    /**
                     * Gets the title of the book.
                     * <p>
                     * Plugins should check that hasTitle() returns true before calling this
                     * method.
                     * @return the title of the book
                     */
                    // @ts-ignore
                    getTitle(): java.lang.String
                    /**
                     * Sets the title of the book.
                     * <p>
                     * Limited to 32 characters. Removes title when given null.
                     * @param title the title to set
                     * @return true if the title was successfully set
                     */
                    // @ts-ignore
                    setTitle(title: string): boolean
                    /**
                     * Checks for the existence of an author in the book.
                     * @return true if the book has an author
                     */
                    // @ts-ignore
                    hasAuthor(): boolean
                    /**
                     * Gets the author of the book.
                     * <p>
                     * Plugins should check that hasAuthor() returns true before calling this
                     * method.
                     * @return the author of the book
                     */
                    // @ts-ignore
                    getAuthor(): java.lang.String
                    /**
                     * Sets the author of the book. Removes author when given null.
                     * @param author the author to set
                     */
                    // @ts-ignore
                    setAuthor(author: string): void
                    /**
                     * Checks for the existence of generation level in the book.
                     * @return true if the book has a generation level
                     */
                    // @ts-ignore
                    hasGeneration(): boolean
                    /**
                     * Gets the generation of the book.
                     * <p>
                     * Plugins should check that hasGeneration() returns true before calling
                     * this method.
                     * @return the generation of the book
                     */
                    // @ts-ignore
                    getGeneration(): org.bukkit.inventory.meta.BookMeta.Generation
                    /**
                     * Sets the generation of the book. Removes generation when given null.
                     * @param generation the generation to set
                     */
                    // @ts-ignore
                    setGeneration(generation: org.bukkit.inventory.meta.BookMeta.Generation): void
                    /**
                     * Checks for the existence of pages in the book.
                     * @return true if the book has pages
                     */
                    // @ts-ignore
                    hasPages(): boolean
                    /**
                     * Gets the specified page in the book. The given page must exist.
                     * <p>
                     * Pages are 1-indexed.
                     * @param page the page number to get, in range [1, getPageCount()]
                     * @return the page from the book
                     */
                    // @ts-ignore
                    getPage(page: number /*int*/): java.lang.String
                    /**
                     * Sets the specified page in the book. Pages of the book must be
                     * contiguous.
                     * <p>
                     * The data can be up to 256 characters in length, additional characters
                     * are truncated.
                     * <p>
                     * Pages are 1-indexed.
                     * @param page the page number to set, in range [1, getPageCount()]
                     * @param data the data to set for that page
                     */
                    // @ts-ignore
                    setPage(page: number /*int*/, data: string): void
                    /**
                     * Gets all the pages in the book.
                     * @return list of all the pages in the book
                     */
                    // @ts-ignore
                    getPages(): java.util.List<java.lang.String>
                    /**
                     * Clears the existing book pages, and sets the book to use the provided
                     * pages. Maximum 100 pages with 256 characters per page.
                     * @param pages A list of pages to set the book to use
                     */
                    // @ts-ignore
                    setPages(pages: Array<java.lang.String>): void
                    /**
                     * Clears the existing book pages, and sets the book to use the provided
                     * pages. Maximum 50 pages with 256 characters per page.
                     * @param pages A list of strings, each being a page
                     */
                    // @ts-ignore
                    setPages(...pages: string[]): void
                    /**
                     * Adds new pages to the end of the book. Up to a maximum of 50 pages with
                     * 256 characters per page.
                     * @param pages A list of strings, each being a page
                     */
                    // @ts-ignore
                    addPage(...pages: string[]): void
                    /**
                     * Gets the number of pages in the book.
                     * @return the number of pages in the book
                     */
                    // @ts-ignore
                    getPageCount(): int
                    // @ts-ignore
                    clone(): org.bukkit.inventory.meta.BookMeta
                    // @ts-ignore
                    spigot(): org.bukkit.inventory.meta.BookMeta.Spigot
                }
            }
        }
    }
}
