declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * Output buffer.
             * This class is used internally by the protocol implementation. All writes from
             * higher level code should happen via Response.doWrite().
             * @author Remy Maucherat
             */
            // @ts-ignore
            interface OutputBuffer {
                /**
                 * Write the given data to the response. The caller owns the chunks.
                 * @param chunk data to write
                 * @return The number of bytes written which may be less than available in
                 *          the input chunk
                 * @throws IOException an underlying I/O error occurred
                 */
                // @ts-ignore
                doWrite(chunk: java.nio.ByteBuffer): number /*int*/
                /**
                 * Bytes written to the underlying socket. This includes the effects of
                 * chunking, compression, etc.
                 * @return Bytes written for the current request
                 */
                // @ts-ignore
                getBytesWritten(): number /*long*/
            }
        }
    }
}
