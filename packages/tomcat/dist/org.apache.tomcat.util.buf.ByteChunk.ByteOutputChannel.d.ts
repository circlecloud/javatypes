declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    namespace ByteChunk {
                        /**
                         * When we need more space we'll either grow the buffer ( up to the limit )
                         * or send it to a channel.
                         * Same as java.nio.channel.WritableByteChannel.
                         */
                        // @ts-ignore
                        interface ByteOutputChannel {
                            /**
                             * Send the bytes ( usually the internal conversion buffer ). Expect 8k
                             * output if the buffer is full.
                             * @param buf bytes that will be written
                             * @param off offset in the bytes array
                             * @param len length that will be written
                             * @throws IOException If an I/O occurs while writing the bytes
                             */
                            // @ts-ignore
                            realWriteBytes(buf: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                            /**
                             * Send the bytes ( usually the internal conversion buffer ). Expect 8k
                             * output if the buffer is full.
                             * @param from bytes that will be written
                             * @throws IOException If an I/O occurs while writing the bytes
                             */
                            // @ts-ignore
                            realWriteBytes(from: java.nio.ByteBuffer): void
                        }
                    }
                }
            }
        }
    }
}
