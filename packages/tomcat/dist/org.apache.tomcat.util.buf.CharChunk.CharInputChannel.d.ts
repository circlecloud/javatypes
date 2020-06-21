declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    namespace CharChunk {
                        /**
                         * Input interface, used when the buffer is empty.
                         */
                        // @ts-ignore
                        interface CharInputChannel {
                            /**
                             * Read new characters.
                             * @return The number of characters read
                             * @throws IOException If an I/O error occurs during reading
                             */
                            // @ts-ignore
                            realReadChars(): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
