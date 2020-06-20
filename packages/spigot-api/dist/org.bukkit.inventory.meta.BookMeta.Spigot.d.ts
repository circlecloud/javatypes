declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                namespace BookMeta {
                    // @ts-ignore
                    class Spigot extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Gets the specified page in the book. The given page must exist.
                         * @param page the page number to get
                         * @return the page from the book
                         */
                        // @ts-ignore
                        getPage(page: number /*int*/): BaseComponent[]
                        /**
                         * Sets the specified page in the book. Pages of the book must be
                         * contiguous.
                         * <p>
                         * The data can be up to 256 characters in length, additional characters
                         * are truncated.
                         * @param page the page number to set
                         * @param data the data to set for that page
                         */
                        // @ts-ignore
                        setPage(page: number /*int*/, ...data: BaseComponent[]): void
                        /**
                         * Gets all the pages in the book.
                         * @return list of all the pages in the book
                         */
                        // @ts-ignore
                        getPages(): java.util.List<BaseComponent[]>
                        /**
                         * Clears the existing book pages, and sets the book to use the provided
                         * pages. Maximum 50 pages with 256 characters per page.
                         * @param pages A list of pages to set the book to use
                         */
                        // @ts-ignore
                        setPages(pages: Array<BaseComponent[]>): void
                        /**
                         * Clears the existing book pages, and sets the book to use the provided
                         * pages. Maximum 50 pages with 256 characters per page.
                         * @param pages A list of component arrays, each being a page
                         */
                        // @ts-ignore
                        setPages(...pages: BaseComponent[][]): void
                        /**
                         * Adds new pages to the end of the book. Up to a maximum of 50 pages
                         * with 256 characters per page.
                         * @param pages A list of component arrays, each being a page
                         */
                        // @ts-ignore
                        addPage(...pages: BaseComponent[][]): void
                    }
                }
            }
        }
    }
}
