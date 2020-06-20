declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace pagination {
                    namespace PaginationList {
                        /**
                         * Builds a paginated output for an iterable of {@link Text}s.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.service.pagination.PaginationList, org.spongepowered.api.service.pagination.PaginationList.Builder> {
                            /**
                             * Sets the contents of this output as an iterable.
                             * <p>If this {@link Iterable} is a {@link List}, bidirectional
                             * navigation is supported. Otherwise, only going to the next page will
                             * be supported.</p>
                             * @param contents The contents to output
                             * @return This builder
                             */
                            // @ts-ignore
                            contents(contents: java.lang.Iterable<org.spongepowered.api.text.Text>): org.spongepowered.api.service.pagination.PaginationList.Builder
                            /**
                             * Sets the contents of this output to be the given array of contents.
                             * @param contents The contents to output
                             * @return This builder
                             */
                            // @ts-ignore
                            contents(...contents: org.spongepowered.api.text.Text[]): org.spongepowered.api.service.pagination.PaginationList.Builder
                            /**
                             * Sets the title text to be used in the title bar of this pagination.
                             * <p>This should be less than one line long.</p>
                             * @param title The title to use
                             * @return This builder
                             */
                            // @ts-ignore
                            title(title: org.spongepowered.api.text.Text): org.spongepowered.api.service.pagination.PaginationList.Builder
                            /**
                             * Sets the header to be displayed for this output on all pages after
                             * the title bar but before the contents.
                             * <p>The header and footer will use this Text's style and color for
                             * formatting.</p>
                             * <p>If the header is not specified, or passed in as <code>null</code>,
                             * it will be omitted when displaying the list.</p>
                             * @param header The header to set
                             * @return This builder
                             */
                            // @ts-ignore
                            header(header: org.spongepowered.api.text.Text): org.spongepowered.api.service.pagination.PaginationList.Builder
                            /**
                             * Sets the footer to be displayed for this output on all pages after
                             * the contents and page navigation bar.
                             * <p>If the footer is not specified, or passed in as <code>null</code>,
                             * it will be omitted when displaying the list.</p>
                             * @param footer The footer to set
                             * @return This builder
                             */
                            // @ts-ignore
                            footer(footer: org.spongepowered.api.text.Text): org.spongepowered.api.service.pagination.PaginationList.Builder
                            /**
                             * Sets the padding character to be used when centering headers and
                             * footers.
                             * @param padding The padding to use
                             * @return This builder
                             */
                            // @ts-ignore
                            padding(padding: org.spongepowered.api.text.Text): org.spongepowered.api.service.pagination.PaginationList.Builder
                            /**
                             * Sets the maximum number of lines that can be displayed per page.
                             * <p>This defaults to the maximum amount of lines that can be displayed
                             * on a source's screen at one time if not specified.</p>
                             * @param linesPerPage The maximum number of lines to display per page
                             * @return This builder
                             */
                            // @ts-ignore
                            linesPerPage(linesPerPage: number /*int*/): org.spongepowered.api.service.pagination.PaginationList.Builder
                            /**
                             * Creates a {@link PaginationList} from this pagination builder.
                             * @return The pagination list
                             * @throws IllegalStateException If no contents were specified
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.service.pagination.PaginationList
                            /**
                             * Sends the constructed pagination list to the given receiver.
                             * @param receiver The receiver to send the list to
                             * @return The constructed pagination list
                             */
                            // @ts-ignore
                            sendTo(receiver: org.spongepowered.api.text.channel.MessageReceiver): org.spongepowered.api.service.pagination.PaginationList
                            /**
                             * Sends the constructed pagination list to all
                             * {@link MessageReceiver}s within an {@link Iterable}.
                             * @param receivers The message receivers to send the list to
                             * @return The constructed pagination list
                             */
                            // @ts-ignore
                            sendTo(receivers: java.lang.Iterable<org.spongepowered.api.text.channel.MessageReceiver>): org.spongepowered.api.service.pagination.PaginationList
                        }
                    }
                }
            }
        }
    }
}
