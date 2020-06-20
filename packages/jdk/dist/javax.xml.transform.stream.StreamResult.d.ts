declare namespace javax {
    namespace xml {
        namespace transform {
            namespace stream {
                /**
                 * <p>Acts as an holder for a transformation result,
                 * which may be XML, plain Text, HTML, or some other form of markup.</p>
                 * @author <a href="Jeff.Suttor#Sun.com">Jeff Suttor</a>
                 */
                // @ts-ignore
                class StreamResult extends java.lang.Object implements javax.xml.transform.Result {
                    /**
                     * Zero-argument default constructor.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a StreamResult from a byte stream.  Normally,
                     * a stream should be used rather than a reader, so that
                     * the transformer may use instructions contained in the
                     * transformation instructions to control the encoding.
                     * @param outputStream A valid OutputStream reference.
                     */
                    // @ts-ignore
                    constructor(outputStream: java.io.OutputStream)
                    /**
                     * Construct a StreamResult from a character stream.  Normally,
                     * a stream should be used rather than a reader, so that
                     * the transformer may use instructions contained in the
                     * transformation instructions to control the encoding.  However,
                     * there are times when it is useful to write to a character
                     * stream, such as when using a StringWriter.
                     * @param writer  A valid Writer reference.
                     */
                    // @ts-ignore
                    constructor(writer: java.io.Writer)
                    /**
                     * Construct a StreamResult from a URL.
                     * @param systemId Must be a String that conforms to the URI syntax.
                     */
                    // @ts-ignore
                    constructor(systemId: string)
                    /**
                     * Construct a StreamResult from a File.
                     * @param f Must a non-null File reference.
                     */
                    // @ts-ignore
                    constructor(f: java.io.File)
                    /**
                     * If {@link javax.xml.transform.TransformerFactory#getFeature}
                     * returns true when passed this value as an argument,
                     * the Transformer supports Result output of this type.
                     */
                    // @ts-ignore
                    readonly FEATURE: string
                    /**
                     * Set the ByteStream that is to be written to.  Normally,
                     * a stream should be used rather than a reader, so that
                     * the transformer may use instructions contained in the
                     * transformation instructions to control the encoding.
                     * @param outputStream A valid OutputStream reference.
                     */
                    // @ts-ignore
                    setOutputStream(outputStream: java.io.OutputStream): void
                    /**
                     * Get the byte stream that was set with setOutputStream.
                     * @return The byte stream that was set with setOutputStream, or null
                     *  if setOutputStream or the ByteStream constructor was not called.
                     */
                    // @ts-ignore
                    getOutputStream(): java.io.OutputStream
                    /**
                     * Set the writer that is to receive the result.  Normally,
                     * a stream should be used rather than a writer, so that
                     * the transformer may use instructions contained in the
                     * transformation instructions to control the encoding.  However,
                     * there are times when it is useful to write to a writer,
                     * such as when using a StringWriter.
                     * @param writer  A valid Writer reference.
                     */
                    // @ts-ignore
                    setWriter(writer: java.io.Writer): void
                    /**
                     * Get the character stream that was set with setWriter.
                     * @return The character stream that was set with setWriter, or null
                     *  if setWriter or the Writer constructor was not called.
                     */
                    // @ts-ignore
                    getWriter(): java.io.Writer
                    /**
                     * Set the systemID that may be used in association
                     * with the byte or character stream, or, if neither is set, use
                     * this value as a writeable URI (probably a file name).
                     * @param systemId The system identifier as a URI string.
                     */
                    // @ts-ignore
                    setSystemId(systemId: string): void
                    /**
                     * <p>Set the system ID from a <code>File</code> reference.</p>
                     * @param f Must a non-null File reference.
                     */
                    // @ts-ignore
                    setSystemId(f: java.io.File): void
                    /**
                     * Get the system identifier that was set with setSystemId.
                     * @return The system identifier that was set with setSystemId, or null
                     *  if setSystemId was not called.
                     */
                    // @ts-ignore
                    getSystemId(): java.lang.String
                }
            }
        }
    }
}
