declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace standard {
                    /**
                     * Formats fields annotated with the {@link DateTimeFormat} annotation using the
                     * JSR-310 <code>java.time</code> package in JDK 8.
                     * @author Juergen Hoeller
                     * @since 4.0
                     * @see org.springframework.format.annotation.DateTimeFormat
                     */
                    // @ts-ignore
                    class Jsr310DateTimeFormatAnnotationFormatterFactory extends org.springframework.context.support.EmbeddedValueResolutionSupport implements org.springframework.format.AnnotationFormatterFactory<org.springframework.format.annotation.DateTimeFormat> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getFieldTypes(): Array<java.lang.Class<any>>
                        // @ts-ignore
                        public getPrinter(annotation: org.springframework.format.annotation.DateTimeFormat, fieldType: java.lang.Class<any>): org.springframework.format.Printer<any>
                        // @ts-ignore
                        public getParser(annotation: org.springframework.format.annotation.DateTimeFormat, fieldType: java.lang.Class<any>): org.springframework.format.Parser<any>
                        /**
                         * Factory method used to create a {@link DateTimeFormatter}.
                         * @param annotation the format annotation for the field
                         * @param fieldType the declared type of the field
                         * @return a {#link DateTimeFormatter} instance
                         */
                        // @ts-ignore
                        getFormatter(annotation: org.springframework.format.annotation.DateTimeFormat, fieldType: java.lang.Class<any>): java.time.format.DateTimeFormatter
                    }
                }
            }
        }
    }
}
