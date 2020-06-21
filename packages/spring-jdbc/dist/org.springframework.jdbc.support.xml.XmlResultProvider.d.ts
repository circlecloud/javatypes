declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace xml {
                    /**
                     * Interface defining handling involved with providing {@code Result}
                     * data for XML input.
                     * @author Thomas Risberg
                     * @since 2.5.5
                     * @see javax.xml.transform.Result
                     */
                    // @ts-ignore
                    interface XmlResultProvider {
                        /**
                         * Implementations must implement this method to provide the XML content
                         * for the {@code Result}. Implementations will vary depending on
                         * the {@code Result} implementation used.
                         * @param result the {#code Result} object being used to provide the XML input
                         */
                        // @ts-ignore
                        provideXml(result: javax.xml.transform.Result): void
                    }
                }
            }
        }
    }
}
