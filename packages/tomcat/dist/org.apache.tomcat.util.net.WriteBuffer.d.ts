declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Provides an expandable set of buffers for writes. Non-blocking writes can be
                     * of any size and may not be able to be written immediately or wholly contained
                     * in the buffer used to perform the writes to the next layer. This class
                     * provides a buffering capability to allow such writes to return immediately
                     * and also allows for the user provided buffers to be re-used / recycled as
                     * required.
                     */
                    // @ts-ignore
                    class WriteBuffer extends java.lang.Object {
                        // @ts-ignore
                        constructor(bufferSize: number /*int*/)
                        // @ts-ignore
                        public add(from: java.nio.ByteBuffer): void
                        // @ts-ignore
                        public isEmpty(): boolean
                        // @ts-ignore
                        public write(sink: org.apache.tomcat.util.net.WriteBuffer.Sink, blocking: boolean): boolean
                    }
                }
            }
        }
    }
}
