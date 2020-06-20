declare namespace org {
    namespace springframework {
        namespace http {
            namespace StreamingHttpOutputMessage {
                /**
                 * Defines the contract for bodies that can be written directly to an
                 * {@link OutputStream}. Useful with HTTP client libraries that provide
                 * indirect access to an {@link OutputStream} via a callback mechanism.
                 */
                // @ts-ignore
                interface Body {
                    /**
                     * Write this body to the given {@link OutputStream}.
                     * @param outputStream the output stream to write to
                     * @throws IOException in case of I/O errors
                     */
                    // @ts-ignore
                    writeTo(outputStream: java.io.OutputStream): void
                }
            }
        }
    }
}
