declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace config {
                    /**
                     * Parse a string to a {@link WriteConcern}. If it is a well know {@link String} as identified by the
                     * {@link WriteConcern#valueOf(String)}, use the well known {@link WriteConcern} value, otherwise pass the string as is
                     * to the constructor of the write concern. There is no support for other constructor signatures when parsing from a
                     * string value.
                     * @author Mark Pollack
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    class WriteConcernPropertyEditor extends java.beans.PropertyEditorSupport {
                        // @ts-ignore
                        constructor()
                        /**
                         * Parse a string to a List<ServerAddress>
                         */
                        // @ts-ignore
                        public setAsText(writeConcernString: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
