declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    namespace CharChunk {
                        /**
                         * When we need more space we'll either grow the buffer ( up to the limit )
                         * or send it to a channel.
                         */
                        // @ts-ignore
                        interface CharOutputChannel {
                            /**
                             * Send the bytes ( usually the internal conversion buffer ). Expect 8k
                             * output if the buffer is full.
                             * @param buf characters that will be written
                             * @param off offset in the characters array
                             * @param len length that will be written
                             * @throws IOException If an I/O occurs while writing the characters
                             */
                            // @ts-ignore
                            realWriteChars(buf: string[], off: number /*int*/, len: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
