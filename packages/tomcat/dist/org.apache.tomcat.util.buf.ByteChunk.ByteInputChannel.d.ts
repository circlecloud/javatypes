declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    namespace ByteChunk {
                        /**
                         * Input interface, used when the buffer is empty.
                         * Same as java.nio.channels.ReadableByteChannel
                         */
                        // @ts-ignore
                        interface ByteInputChannel {
                            /**
                             * Read new bytes.
                             * @return The number of bytes read
                             * @throws IOException If an I/O error occurs during reading
                             */
                            // @ts-ignore
                            realReadBytes(): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
