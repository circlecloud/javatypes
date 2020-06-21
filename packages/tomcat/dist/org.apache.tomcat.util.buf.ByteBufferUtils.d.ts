declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    // @ts-ignore
                    class ByteBufferUtils extends java.lang.Object {
                        /**
                         * Expands buffer to the given size unless it is already as big or bigger.
                         * Buffers are assumed to be in 'write to' mode since there would be no need
                         * to expand a buffer while it was in 'read from' mode.
                         * @param in        Buffer to expand
                         * @param newSize   The size t which the buffer should be expanded
                         * @return The expanded buffer with any data from the input buffer
                         *                   copied in to it or the original buffer if there was no
                         *                   need for expansion
                         */
                        // @ts-ignore
                        public static expand(input: java.nio.ByteBuffer, newSize: number /*int*/): java.nio.ByteBuffer
                        // @ts-ignore
                        public static cleanDirectBuffer(buf: java.nio.ByteBuffer): void
                    }
                }
            }
        }
    }
}
