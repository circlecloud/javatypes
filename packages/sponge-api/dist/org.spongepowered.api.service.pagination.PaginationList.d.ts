declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace pagination {
                    /**
                     * Represents an immutable iterable of {@link Text}s, which can be sent to
                     * a {@link MessageReceiver}.
                     * <p>An instance of this class may be obtained using {@link Builder}.</p>
                     */
                    // @ts-ignore
                    interface PaginationList {
                        /**
                         * Creates a new {@link Builder} to build a pagination list.
                         * @return The new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.service.pagination.PaginationList.Builder
                        /**
                         * Gets the contents of this pagination list.
                         * @return The contents of this pagination list
                         */
                        // @ts-ignore
                        getContents(): java.lang.Iterable<org.spongepowered.api.text.Text>
                        /**
                         * Gets the title text to be used in the title bar of this pagination.
                         * @return The title text
                         */
                        // @ts-ignore
                        getTitle(): java.util.Optional<org.spongepowered.api.text.Text>
                        /**
                         * Gets the header to be displayed for this output on all pages after the
                         * title bar but before the contents, if available.
                         * <p>Header and footer will use this Text's style and color for
                         * formatting.</p>
                         * @return The header to be displayed
                         */
                        // @ts-ignore
                        getHeader(): java.util.Optional<org.spongepowered.api.text.Text>
                        /**
                         * Gets the footer to be displayed for this output on all pages after the
                         * contents and page navigation bar, if available.
                         * @return The footer
                         */
                        // @ts-ignore
                        getFooter(): java.util.Optional<org.spongepowered.api.text.Text>
                        /**
                         * Gets the padding character to be used when centering headers and footers.
                         * @return The padding character
                         */
                        // @ts-ignore
                        getPadding(): org.spongepowered.api.text.Text
                        /**
                         * Gets the maximum amount of lines that will be sent per page.
                         * <p>This defaults to the maximum amount of lines that can be displayed
                         * on a source's screen at one time if not specified.</p>
                         * @return The maximum amount of lines that will be sent per page
                         */
                        // @ts-ignore
                        getLinesPerPage(): int
                        /**
                         * Sends the first page of the constructed pagination list
                         * to the specified message receiver.
                         * @param receiver The receiver to send the first page to
                         * @see PaginationList#sendTo(MessageReceiver, int) to send a specific page
                         */
                        // @ts-ignore
                        sendTo(receiver: org.spongepowered.api.text.channel.MessageReceiver): void
                        /**
                         * Send the specified page of the constructed pagination list
                         * to the specified message receiver.
                         * <p>A page that is out of bounds will result in a friendly
                         * error message being sent to the receiver.</p>
                         * <p>Pages start at an index of 1.</p>
                         * @param receiver The receiver to send the page to
                         * @param page The page to send, starting at an index of 1
                         */
                        // @ts-ignore
                        sendTo(receiver: org.spongepowered.api.text.channel.MessageReceiver, page: number /*int*/): void
                        /**
                         * Sends the first page of the constructed pagination list to
                         * all {@link MessageReceiver}s within an {@link Iterable}.
                         * @param receivers The message receivers to send the first page to
                         * @see PaginationList#sendTo(Iterable, int) to send a specific page
                         */
                        // @ts-ignore
                        sendTo(receivers: java.lang.Iterable<org.spongepowered.api.text.channel.MessageReceiver>): void
                        /**
                         * Sends the specified page of the constructed pagination list
                         * all {@link MessageReceiver}s within an {@link Iterable}.
                         * @param receivers The message receivers to send the page to
                         * @param page The page to send
                         */
                        // @ts-ignore
                        sendTo(receivers: java.lang.Iterable<org.spongepowered.api.text.channel.MessageReceiver>, page: number /*int*/): void
                    }
                }
            }
        }
    }
}
