declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Callback interface to be able to expand buffers when buffer overflow
                     * exceptions happen or to replace buffers
                     */
                    // @ts-ignore
                    interface ApplicationBufferHandler {
                        // @ts-ignore
                        setByteBuffer(buffer: java.nio.ByteBuffer): void
                        // @ts-ignore
                        getByteBuffer(): java.nio.ByteBuffer
                        // @ts-ignore
                        expand(size: number /*int*/): void
                    }
                }
            }
        }
    }
}
