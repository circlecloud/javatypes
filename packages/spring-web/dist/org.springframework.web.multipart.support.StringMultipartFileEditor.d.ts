declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                namespace support {
                    /**
                     * Custom {@link java.beans.PropertyEditor} for converting
                     * {@link MultipartFile MultipartFiles} to Strings.
                     * <p>Allows one to specify the charset to use.
                     * @author Juergen Hoeller
                     * @since 13.10.2003
                     */
                    // @ts-ignore
                    class StringMultipartFileEditor extends java.beans.PropertyEditorSupport {
                        /**
                         * Create a new {@link StringMultipartFileEditor}, using the default charset.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new {@link StringMultipartFileEditor}, using the given charset.
                         * @param charsetName valid charset name
                         * @see java.lang.String#String(byte[],String)
                         */
                        // @ts-ignore
                        constructor(charsetName: java.lang.String | string)
                        // @ts-ignore
                        public setAsText(text: java.lang.String | string): void
                        // @ts-ignore
                        public setValue(value: java.lang.Object | any): void
                    }
                }
            }
        }
    }
}
