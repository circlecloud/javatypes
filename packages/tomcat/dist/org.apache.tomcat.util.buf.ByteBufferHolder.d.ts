declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * Simple wrapper for a {@link ByteBuffer} that remembers if the buffer has been
                     * flipped or not.
                     */
                    // @ts-ignore
                    class ByteBufferHolder extends java.lang.Object {
                        // @ts-ignore
                        constructor(buf: java.nio.ByteBuffer, flipped: boolean)
                        // @ts-ignore
                        public getBuf(): java.nio.ByteBuffer
                        // @ts-ignore
                        public isFlipped(): boolean
                        // @ts-ignore
                        public flip(): boolean
                    }
                }
            }
        }
    }
}
