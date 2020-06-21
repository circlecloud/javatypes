declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                namespace support {
                    /**
                     * Adapter that exposes a {@link java.beans.PropertyEditor} for any given
                     * {@link org.springframework.core.convert.ConversionService} and specific target type.
                     * @author Juergen Hoeller
                     * @since 3.0
                     */
                    // @ts-ignore
                    class ConvertingPropertyEditorAdapter extends java.beans.PropertyEditorSupport {
                        /**
                         * Create a new ConvertingPropertyEditorAdapter for a given
                         * {@link org.springframework.core.convert.ConversionService}
                         * and the given target type.
                         * @param conversionService the ConversionService to delegate to
                         * @param targetDescriptor the target type to convert to
                         */
                        // @ts-ignore
                        constructor(conversionService: org.springframework.core.convert.ConversionService, targetDescriptor: org.springframework.core.convert.TypeDescriptor)
                        // @ts-ignore
                        public setAsText(text: java.lang.String | string): void
                        // @ts-ignore
                        public getAsText(): string
                    }
                }
            }
        }
    }
}
