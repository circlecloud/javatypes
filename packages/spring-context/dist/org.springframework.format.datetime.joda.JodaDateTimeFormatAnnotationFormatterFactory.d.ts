declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace joda {
                    /**
                     * Formats fields annotated with the {@link DateTimeFormat} annotation using Joda-Time.
                     * <p><b>NOTE:</b> Spring's Joda-Time support requires Joda-Time 2.x, as of Spring 4.0.
                     * @author Keith Donald
                     * @author Juergen Hoeller
                     * @since 3.0
                     * @see DateTimeFormat
                     */
                    // @ts-ignore
                    class JodaDateTimeFormatAnnotationFormatterFactory extends org.springframework.context.support.EmbeddedValueResolutionSupport implements org.springframework.format.AnnotationFormatterFactory<org.springframework.format.annotation.DateTimeFormat> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        getFieldTypes(): java.util.Set<java.lang.Class<?>>
                        // @ts-ignore
                        getPrinter(annotation: org.springframework.format.annotation.DateTimeFormat, fieldType: java.lang.Class<any>): org.springframework.format.Printer<?>
                        // @ts-ignore
                        getParser(annotation: org.springframework.format.annotation.DateTimeFormat, fieldType: java.lang.Class<any>): org.springframework.format.Parser<?>
                        /**
                         * Factory method used to create a {@link DateTimeFormatter}.
                         * @param annotation the format annotation for the field
                         * @param fieldType the type of field
                         * @return a {#link DateTimeFormatter} instance
                         * @since 3.2
                         */
                        // @ts-ignore
                        getFormatter(annotation: org.springframework.format.annotation.DateTimeFormat, fieldType: java.lang.Class<any>): DateTimeFormatter
                    }
                }
            }
        }
    }
}
