declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace multipart {
                    /**
                     * Representation for a part in a "multipart/form-data" request.
                     * <p>The origin of a multipart request may be a browser form in which case each
                     * part is either a {@link FormFieldPart} or a {@link FilePart}.
                     * <p>Multipart requests may also be used outside of a browser for data of any
                     * content type (e.g. JSON, PDF, etc).
                     * @author Sebastien Deleuze
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     * @see <a href="https://tools.ietf.org/html/rfc7578">RFC 7578 (multipart/form-data)</a>
                     * @see <a href="https://tools.ietf.org/html/rfc2183">RFC 2183 (Content-Disposition)</a>
                     * @see <a href="https://www.w3.org/TR/html5/forms.html#multipart-form-data">HTML5 (multipart forms)</a>
                     */
                    // @ts-ignore
                    interface Part {
                        /**
                         * Return the name of the part in the multipart form.
                         * @return the name of the part, never {#code null} or empty
                         */
                        // @ts-ignore
                        name(): string
                        /**
                         * Return the headers associated with the part.
                         */
                        // @ts-ignore
                        headers(): org.springframework.http.HttpHeaders
                        /**
                         * Return the content for this part.
                         * <p>Note that for a {@link FormFieldPart} the content may be accessed
                         * more easily via {@link FormFieldPart#value()}.
                         */
                        // @ts-ignore
                        content(): object
                    }
                }
            }
        }
    }
}
