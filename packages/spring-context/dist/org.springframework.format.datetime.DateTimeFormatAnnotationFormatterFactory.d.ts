declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                /**
                 * Formats fields annotated with the {@link DateTimeFormat} annotation using a {@link DateFormatter}.
                 * @author Phillip Webb
                 * @since 3.2
                 * @see org.springframework.format.datetime.joda.JodaDateTimeFormatAnnotationFormatterFactory
                 */
                // @ts-ignore
                class DateTimeFormatAnnotationFormatterFactory extends org.springframework.context.support.EmbeddedValueResolutionSupport implements org.springframework.format.AnnotationFormatterFactory<org.springframework.format.annotation.DateTimeFormat> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getFieldTypes(): java.util.Set<java.lang.Class<?>>
                    // @ts-ignore
                    getPrinter(annotation: org.springframework.format.annotation.DateTimeFormat, fieldType: java.lang.Class<any>): org.springframework.format.Printer<?>
                    // @ts-ignore
                    getParser(annotation: org.springframework.format.annotation.DateTimeFormat, fieldType: java.lang.Class<any>): org.springframework.format.Parser<?>
                    // @ts-ignore
                    getFormatter(annotation: org.springframework.format.annotation.DateTimeFormat, fieldType: java.lang.Class<any>): org.springframework.format.Formatter<java.util.Date>
                }
            }
        }
    }
}
