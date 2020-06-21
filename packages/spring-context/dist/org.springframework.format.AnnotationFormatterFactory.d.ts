declare namespace org {
    namespace springframework {
        namespace format {
            /**
             * A factory that creates formatters to format values of fields annotated with a particular
             * {@link Annotation}.
             * <p>For example, a {@code DateTimeFormatAnnotationFormatterFactory} might create a formatter
             * that formats {@code Date} values set on fields annotated with {@code @DateTimeFormat}.
             * @author Keith Donald
             * @since 3.0
             * @param <A> the annotation type that should trigger formatting
             */
            // @ts-ignore
            interface AnnotationFormatterFactory<A extends java.lang.annotation.Annotation> {
                /**
                 * The types of fields that may be annotated with the &lt;A&gt; annotation.
                 */
                // @ts-ignore
                getFieldTypes(): Array<java.lang.Class<any>>
                /**
                 * Get the Printer to print the value of a field of {@code fieldType} annotated with
                 * {@code annotation}.
                 * <p>If the type T the printer accepts is not assignable to {@code fieldType}, a
                 * coercion from {@code fieldType} to T will be attempted before the Printer is invoked.
                 * @param annotation the annotation instance
                 * @param fieldType the type of field that was annotated
                 * @return the printer
                 */
                // @ts-ignore
                getPrinter(annotation: A, fieldType: java.lang.Class<any>): org.springframework.format.Printer<any>
                /**
                 * Get the Parser to parse a submitted value for a field of {@code fieldType}
                 * annotated with {@code annotation}.
                 * <p>If the object the parser returns is not assignable to {@code fieldType},
                 * a coercion to {@code fieldType} will be attempted before the field is set.
                 * @param annotation the annotation instance
                 * @param fieldType the type of field that was annotated
                 * @return the parser
                 */
                // @ts-ignore
                getParser(annotation: A, fieldType: java.lang.Class<any>): org.springframework.format.Parser<any>
            }
        }
    }
}
