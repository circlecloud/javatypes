declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace xml {
                    /**
                     * Implementation of {@link org.springframework.http.converter.HttpMessageConverter
                     * HttpMessageConverter} that can read and write XML using JAXB2.
                     * <p>This converter can read classes annotated with {@link XmlRootElement} and
                     * {@link XmlType}, and write classes annotated with {@link XmlRootElement},
                     * or subclasses thereof.
                     * <p>Note: When using Spring's Marshaller/Unmarshaller abstractions from {@code spring-oxm},
                     * you should use the {@link MarshallingHttpMessageConverter} instead.
                     * @author Arjen Poutsma
                     * @author Sebastien Deleuze
                     * @author Rossen Stoyanchev
                     * @since 3.0
                     * @see MarshallingHttpMessageConverter
                     */
                    // @ts-ignore
                    class Jaxb2RootElementHttpMessageConverter extends org.springframework.http.converter.xml.AbstractJaxb2HttpMessageConverter<java.lang.Object> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Indicate whether DTD parsing should be supported.
                         * <p>Default is {@code false} meaning that DTD is disabled.
                         */
                        // @ts-ignore
                        setSupportDtd(supportDtd: boolean): void
                        /**
                         * Return whether DTD parsing is supported.
                         */
                        // @ts-ignore
                        isSupportDtd(): boolean
                        /**
                         * Indicate whether external XML entities are processed when converting to a Source.
                         * <p>Default is {@code false}, meaning that external entities are not resolved.
                         * <p><strong>Note:</strong> setting this option to {@code true} also
                         * automatically sets {@link #setSupportDtd} to {@code true}.
                         */
                        // @ts-ignore
                        setProcessExternalEntities(processExternalEntities: boolean): void
                        /**
                         * Return whether XML external entities are allowed.
                         */
                        // @ts-ignore
                        isProcessExternalEntities(): boolean
                        // @ts-ignore
                        canRead(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                        // @ts-ignore
                        canWrite(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                        // @ts-ignore
                        supports(clazz: java.lang.Class<any>): boolean
                        // @ts-ignore
                        readFromSource(clazz: java.lang.Class<any>, headers: org.springframework.http.HttpHeaders, source: javax.xml.transform.Source): java.lang.Object
                        // @ts-ignore
                        processSource(source: javax.xml.transform.Source): javax.xml.transform.Source
                        // @ts-ignore
                        writeToResult(o: any, headers: org.springframework.http.HttpHeaders, result: javax.xml.transform.Result): void
                    }
                }
            }
        }
    }
}
