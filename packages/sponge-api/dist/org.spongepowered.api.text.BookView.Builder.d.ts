declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace BookView {
                    /**
                     * Builder class to assist in creation of a new {@link BookView}.
                     */
                    // @ts-ignore
                    class Builder extends java.lang.Object implements org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.text.BookView, org.spongepowered.api.text.BookView.Builder> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Sets the title of the {@link BookView}.
                         * @param title Title of BookView
                         * @return This builder
                         */
                        // @ts-ignore
                        title(title: org.spongepowered.api.text.Text): org.spongepowered.api.text.BookView.Builder
                        /**
                         * Sets the author of the {@link BookView}.
                         * @param author Author of BookView
                         * @return This builder
                         */
                        // @ts-ignore
                        author(author: org.spongepowered.api.text.Text): org.spongepowered.api.text.BookView.Builder
                        /**
                         * Adds a page to the end of the {@link BookView}.
                         * @param page Page to add
                         * @return This builder
                         */
                        // @ts-ignore
                        addPage(page: org.spongepowered.api.text.Text): org.spongepowered.api.text.BookView.Builder
                        /**
                         * Adds multiple pages to the end of the {@link BookView}.
                         * @param pages Pages to add
                         * @return This builder
                         */
                        // @ts-ignore
                        addPages(pages: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.text.BookView.Builder
                        /**
                         * Adds multiple pages to the end of the {@link BookView}.
                         * @param pages Pages to add
                         * @return This builder
                         */
                        // @ts-ignore
                        addPages(...pages: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.BookView.Builder
                        /**
                         * Inserts a page at the specified index of the {@link BookView}.
                         * @param i Index to insert page at
                         * @param page Page to insert
                         * @return This builder
                         */
                        // @ts-ignore
                        insertPage(i: number /*int*/, page: org.spongepowered.api.text.Text): org.spongepowered.api.text.BookView.Builder
                        /**
                         * Inserts multiple pages at the specified index of the
                         * {@link BookView}.
                         * @param i Index to insert pages at
                         * @param pages Pages to insert
                         * @return This builder
                         */
                        // @ts-ignore
                        insertPages(i: number /*int*/, pages: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.text.BookView.Builder
                        /**
                         * Inserts multiple pages at the specified index of the
                         * {@link BookView}.
                         * @param i Index to insert pages at
                         * @param pages Pages to insert
                         * @return This builder
                         */
                        // @ts-ignore
                        insertPages(i: number /*int*/, ...pages: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.BookView.Builder
                        /**
                         * Removes a page from the {@link BookView}.
                         * @param page Page to remove
                         * @return This builder
                         */
                        // @ts-ignore
                        removePage(page: org.spongepowered.api.text.Text): org.spongepowered.api.text.BookView.Builder
                        /**
                         * Removes the page at the specified index of the {@link BookView}.
                         * @param i Index of page to remove
                         * @return This builder
                         */
                        // @ts-ignore
                        removePage(i: number /*int*/): org.spongepowered.api.text.BookView.Builder
                        /**
                         * Removes multiple pages from the {@link BookView}.
                         * @param pages Pages to remove
                         * @return This builder
                         */
                        // @ts-ignore
                        removePages(pages: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.text.BookView.Builder
                        /**
                         * Removes multiple pages from the {@link BookView}.
                         * @param pages Pages to remove
                         * @return This builder
                         */
                        // @ts-ignore
                        removePages(...pages: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.BookView.Builder
                        /**
                         * Removes all pages from the {@link BookView}.
                         * @return This builder
                         */
                        // @ts-ignore
                        clearPages(): org.spongepowered.api.text.BookView.Builder
                        /**
                         * Creates a new {@link BookView} from the current state of this
                         * builder.
                         * @return New BookView
                         */
                        // @ts-ignore
                        build(): org.spongepowered.api.text.BookView
                        // @ts-ignore
                        from(value: org.spongepowered.api.text.BookView): org.spongepowered.api.text.BookView.Builder
                        // @ts-ignore
                        reset(): org.spongepowered.api.text.BookView.Builder
                    }
                }
            }
        }
    }
}
