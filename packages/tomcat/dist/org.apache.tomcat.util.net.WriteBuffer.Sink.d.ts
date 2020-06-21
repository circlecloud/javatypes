declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace WriteBuffer {
                        /**
                         * Interface implemented by clients of the WriteBuffer to enable data to be
                         * written back out from the buffer.
                         */
                        // @ts-ignore
                        interface Sink {
                            // @ts-ignore
                            writeFromBuffer(buffer: java.nio.ByteBuffer, block: boolean): boolean
                        }
                    }
                }
            }
        }
    }
}
