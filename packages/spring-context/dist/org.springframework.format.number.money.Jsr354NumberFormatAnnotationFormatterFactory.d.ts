declare namespace org {
    namespace springframework {
        namespace format {
            namespace number {
                namespace money {
                    /**
                     * Formats {@link javax.money.MonetaryAmount} fields annotated
                     * with Spring's common {@link NumberFormat} annotation.
                     * @author Juergen Hoeller
                     * @since 4.2
                     * @see NumberFormat
                     */
                    // @ts-ignore
                    class Jsr354NumberFormatAnnotationFormatterFactory extends org.springframework.context.support.EmbeddedValueResolutionSupport implements org.springframework.format.AnnotationFormatterFactory<org.springframework.format.annotation.NumberFormat> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getFieldTypes(): Array<java.lang.Class<any>>
                        // @ts-ignore
                        public getPrinter(annotation: org.springframework.format.annotation.NumberFormat, fieldType: java.lang.Class<any>): org.springframework.format.Printer<MonetaryAmount>
                        // @ts-ignore
                        public getParser(annotation: org.springframework.format.annotation.NumberFormat, fieldType: java.lang.Class<any>): org.springframework.format.Parser<MonetaryAmount>
                    }
                }
            }
        }
    }
}
