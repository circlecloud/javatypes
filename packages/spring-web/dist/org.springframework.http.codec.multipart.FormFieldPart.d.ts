declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace multipart {
                    /**
                     * Specialization of {@link Part} for a form field.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    interface FormFieldPart extends org.springframework.http.codec.multipart.Part {
                        /**
                         * Return the form field value.
                         */
                        // @ts-ignore
                        value(): java.lang.String
                    }
                }
            }
        }
    }
}
