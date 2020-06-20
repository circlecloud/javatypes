declare namespace org {
    namespace springframework {
        namespace format {
            namespace support {
                /**
                 * A {@link org.springframework.core.convert.ConversionService} implementation
                 * designed to be configured as a {@link FormatterRegistry}.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class FormattingConversionService extends GenericConversionService implements org.springframework.format.FormatterRegistry, org.springframework.context.EmbeddedValueResolverAware {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    setEmbeddedValueResolver(resolver: StringValueResolver): void
                    // @ts-ignore
                    addPrinter(printer: org.springframework.format.Printer<any>): void
                    // @ts-ignore
                    addParser(parser: org.springframework.format.Parser<any>): void
                    // @ts-ignore
                    addFormatter(formatter: org.springframework.format.Formatter<any>): void
                    // @ts-ignore
                    addFormatterForFieldType(fieldType: java.lang.Class<any>, formatter: org.springframework.format.Formatter<any>): void
                    // @ts-ignore
                    addFormatterForFieldType(fieldType: java.lang.Class<any>, printer: org.springframework.format.Printer<any>, parser: org.springframework.format.Parser<any>): void
                    // @ts-ignore
                    addFormatterForFieldAnnotation(annotationFormatterFactory: org.springframework.format.AnnotationFormatterFactory<java.lang.annotation.Annotation>): void
                }
            }
        }
    }
}
