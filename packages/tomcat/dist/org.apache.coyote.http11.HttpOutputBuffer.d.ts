declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                // @ts-ignore
                interface HttpOutputBuffer extends org.apache.coyote.OutputBuffer {
                    /**
                     * Finish writing the current response. It is acceptable to write extra
                     * bytes using {@link #doWrite(java.nio.ByteBuffer)} during the execution of
                     * this method.
                     * @throws IOException If an I/O error occurs while writing to the client
                     */
                    // @ts-ignore
                    end(): void
                    /**
                     * Flushes any unwritten data to the client.
                     * @throws IOException If an I/O error occurs while flushing
                     */
                    // @ts-ignore
                    flush(): void
                }
            }
        }
    }
}
