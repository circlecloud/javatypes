declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                namespace support {
                    /**
                     * Custom {@link java.beans.PropertyEditor} for converting
                     * {@link MultipartFile MultipartFiles} to byte arrays.
                     * @author Juergen Hoeller
                     * @since 13.10.2003
                     */
                    // @ts-ignore
                    class ByteArrayMultipartFileEditor extends ByteArrayPropertyEditor {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setValue(value: java.lang.Object | any): void
                        // @ts-ignore
                        public getAsText(): string
                    }
                }
            }
        }
    }
}
