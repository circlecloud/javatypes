declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace message {
                    namespace MessageEvent {
                        /**
                         * Formatter used for formatting messages within this event. This formatter
                         * is partitioned into three sections: header, body, and footer. This is in
                         * an effort to make formatting messages much more flexible and modular for
                         * developers allowing for appending/inserting prefixes, adding suffixes,
                         * etc.
                         */
                        // @ts-ignore
                        class MessageFormatter extends org.spongepowered.api.text.transform.FixedPartitionedTextFormatter {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            constructor(header: org.spongepowered.api.text.Text, body: org.spongepowered.api.text.Text)
                            // @ts-ignore
                            constructor(body: org.spongepowered.api.text.Text)
                            /**
                             * Returns the header partition within this formatter.
                             * @return Header partition
                             */
                            // @ts-ignore
                            getHeader(): org.spongepowered.api.text.transform.SimpleTextFormatter
                            /**
                             * Clears any existing components within the header partition and adds
                             * a new {@link TextTemplateApplier} to the partition with the
                             * specified value.
                             * @param header Header value
                             */
                            // @ts-ignore
                            setHeader(header: org.spongepowered.api.text.TextRepresentable): void
                            /**
                             * Returns the body partition within this formatter.
                             * @return Body partition
                             */
                            // @ts-ignore
                            getBody(): org.spongepowered.api.text.transform.SimpleTextFormatter
                            /**
                             * Clears any existing components within the body partition and adds
                             * a new {@link TextTemplateApplier} to the partition with the
                             * specified value.
                             * @param body Body value
                             */
                            // @ts-ignore
                            setBody(body: org.spongepowered.api.text.TextRepresentable): void
                            /**
                             * Returns the footer partition within this formatter.
                             * @return Footer partition
                             */
                            // @ts-ignore
                            getFooter(): org.spongepowered.api.text.transform.SimpleTextFormatter
                            /**
                             * Clears any existing components within the footer partition and adds
                             * a new {@link TextTemplateApplier} to the partition with the
                             * specified value.
                             * @param footer Footer value
                             */
                            // @ts-ignore
                            setFooter(footer: org.spongepowered.api.text.TextRepresentable): void
                        }
                    }
                }
            }
        }
    }
}
