declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                /**
                 * Strategy interface that specifies a converter that can convert from and to HTTP requests and responses.
                 * @author Arjen Poutsma
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @param <T> the converted object type
                 */
                // @ts-ignore
                interface HttpMessageConverter<T> {
                    /**
                     * Indicates whether the given class can be read by this converter.
                     * @param clazz the class to test for readability
                     * @param mediaType the media type to read (can be {#code null} if not specified);
                     *  typically the value of a {@code Content-Type} header.
                     * @return {#code true} if readable; {@code false} otherwise
                     */
                    // @ts-ignore
                    canRead(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    /**
                     * Indicates whether the given class can be written by this converter.
                     * @param clazz the class to test for writability
                     * @param mediaType the media type to write (can be {#code null} if not specified);
                     *  typically the value of an {@code Accept} header.
                     * @return {#code true} if writable; {@code false} otherwise
                     */
                    // @ts-ignore
                    canWrite(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    /**
                     * Return the list of {@link MediaType} objects supported by this converter.
                     * @return the list of supported media types, potentially an immutable copy
                     */
                    // @ts-ignore
                    getSupportedMediaTypes(): Array<org.springframework.http.MediaType>
                    /**
                     * Read an object of the given type from the given input message, and returns it.
                     * @param clazz the type of object to return. This type must have previously been passed to the
                     *  {#link #canRead canRead} method of this interface, which must have returned {@code true}.
                     * @param inputMessage the HTTP input message to read from
                     * @return the converted object
                     * @throws IOException in case of I/O errors
                     * @throws HttpMessageNotReadableException in case of conversion errors
                     */
                    // @ts-ignore
                    read(clazz: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): T
                    /**
                     * Write an given object to the given output message.
                     * @param t the object to write to the output message. The type of this object must have previously been
                     *  passed to the {#link #canWrite canWrite} method of this interface, which must have returned {@code true}.
                     * @param contentType the content type to use when writing. May be {#code null} to indicate that the
                     *  default content type of the converter must be used. If not {@code null}, this media type must have
                     *  previously been passed to the {@link #canWrite canWrite} method of this interface, which must have
                     *  returned {@code true}.
                     * @param outputMessage the message to write to
                     * @throws IOException in case of I/O errors
                     * @throws HttpMessageNotWritableException in case of conversion errors
                     */
                    // @ts-ignore
                    write(t: T, contentType: org.springframework.http.MediaType, outputMessage: org.springframework.http.HttpOutputMessage): void
                }
            }
        }
    }
}
