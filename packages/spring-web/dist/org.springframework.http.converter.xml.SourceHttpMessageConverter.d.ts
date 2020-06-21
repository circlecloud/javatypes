declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace xml {
                    /**
                     * Implementation of {@link org.springframework.http.converter.HttpMessageConverter}
                     * that can read and write {@link Source} objects.
                     * @author Arjen Poutsma
                     * @author Rossen Stoyanchev
                     * @since 3.0
                     * @param <T> the converted object type
                     */
                    // @ts-ignore
                    class SourceHttpMessageConverter<T extends javax.xml.transform.Source> extends org.springframework.http.converter.AbstractHttpMessageConverter<T> {
                        /**
                         * Sets the {@link #setSupportedMediaTypes(java.util.List) supportedMediaTypes}
                         * to {@code text/xml} and {@code application/xml}, and {@code application/*-xml}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Indicate whether DTD parsing should be supported.
                         * <p>Default is {@code false} meaning that DTD is disabled.
                         */
                        // @ts-ignore
                        public setSupportDtd(supportDtd: boolean): void
                        /**
                         * Return whether DTD parsing is supported.
                         */
                        // @ts-ignore
                        public isSupportDtd(): boolean
                        /**
                         * Indicate whether external XML entities are processed when converting to a Source.
                         * <p>Default is {@code false}, meaning that external entities are not resolved.
                         * <p><strong>Note:</strong> setting this option to {@code true} also
                         * automatically sets {@link #setSupportDtd} to {@code true}.
                         */
                        // @ts-ignore
                        public setProcessExternalEntities(processExternalEntities: boolean): void
                        /**
                         * Return whether XML external entities are allowed.
                         */
                        // @ts-ignore
                        public isProcessExternalEntities(): boolean
                        // @ts-ignore
                        public supports(clazz: java.lang.Class<any>): boolean
                        // @ts-ignore
                        readInternal(clazz: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): T
                        // @ts-ignore
                        getContentLength(t: T, contentType: org.springframework.http.MediaType): number
                        // @ts-ignore
                        writeInternal(t: T, outputMessage: org.springframework.http.HttpOutputMessage): void
                    }
                }
            }
        }
    }
}
