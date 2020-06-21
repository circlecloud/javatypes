declare namespace org {
    namespace springframework {
        namespace format {
            namespace number {
                /**
                 * Formats fields annotated with the {@link NumberFormat} annotation.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see NumberFormat
                 */
                // @ts-ignore
                class NumberFormatAnnotationFormatterFactory extends org.springframework.context.support.EmbeddedValueResolutionSupport implements org.springframework.format.AnnotationFormatterFactory<org.springframework.format.annotation.NumberFormat> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getFieldTypes(): Array<java.lang.Class<any>>
                    // @ts-ignore
                    public getPrinter(annotation: org.springframework.format.annotation.NumberFormat, fieldType: java.lang.Class<any>): org.springframework.format.Printer<java.lang.Number>
                    // @ts-ignore
                    public getParser(annotation: org.springframework.format.annotation.NumberFormat, fieldType: java.lang.Class<any>): org.springframework.format.Parser<java.lang.Number>
                }
            }
        }
    }
}
