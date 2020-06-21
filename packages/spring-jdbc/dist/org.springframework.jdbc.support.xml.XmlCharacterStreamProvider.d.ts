declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace xml {
                    /**
                     * Interface defining handling involved with providing {@code Writer}
                     * data for XML input.
                     * @author Thomas Risberg
                     * @since 2.5.5
                     * @see java.io.Writer
                     */
                    // @ts-ignore
                    interface XmlCharacterStreamProvider {
                        /**
                         * Implementations must implement this method to provide the XML content
                         * for the {@code Writer}.
                         * @param writer the {#code Writer} object being used to provide the XML input
                         * @throws IOException if an I/O error occurs while providing the XML
                         */
                        // @ts-ignore
                        provideXml(writer: java.io.Writer): void
                    }
                }
            }
        }
    }
}
