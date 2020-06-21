declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace buffer {
                    /**
                     * Custom {@link List} to collect data buffers with and enforce a
                     * limit on the total number of bytes buffered. For use with "collect" or
                     * other buffering operators in declarative APIs, e.g. {@link Flux}.
                     * <p>Adding elements increases the byte count and if the limit is exceeded,
                     * {@link DataBufferLimitException} is raised.  {@link #clear()} resets the
                     * count. Remove and set are not supported.
                     * <p><strong>Note:</strong> This class does not automatically release the
                     * buffers it contains. It is usually preferable to use hooks such as
                     * {@link Flux#doOnDiscard} that also take care of cancel and error signals,
                     * or otherwise {@link #releaseAndClear()} can be used.
                     * @author Rossen Stoyanchev
                     * @since 5.1.11
                     */
                    // @ts-ignore
                    class LimitedDataBufferList extends java.util.ArrayList<org.springframework.core.io.buffer.DataBuffer> {
                        // @ts-ignore
                        constructor(maxByteCount: number /*int*/)
                        // @ts-ignore
                        public add(buffer: org.springframework.core.io.buffer.DataBuffer): boolean
                        // @ts-ignore
                        public add(index: number /*int*/, buffer: org.springframework.core.io.buffer.DataBuffer): void
                        // @ts-ignore
                        public addAll(collection: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public addAll(index: number /*int*/, collection: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public remove(index: number /*int*/): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public remove(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        removeRange(fromIndex: number /*int*/, toIndex: number /*int*/): void
                        // @ts-ignore
                        public removeAll(c: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public removeIf(filter: java.util.function$.Predicate<any>): boolean
                        // @ts-ignore
                        public set(index: number /*int*/, element: org.springframework.core.io.buffer.DataBuffer): org.springframework.core.io.buffer.DataBuffer
                        // @ts-ignore
                        public clear(): void
                        /**
                         * Shortcut to {@link DataBufferUtils#release release} all data buffers and
                         * then {@link #clear()}.
                         */
                        // @ts-ignore
                        public releaseAndClear(): void
                    }
                }
            }
        }
    }
}
