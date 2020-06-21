declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * Base class for the *Chunk implementation to reduce duplication.
                     */
                    // @ts-ignore
                    abstract class AbstractChunk extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        static readonly sm: org.apache.tomcat.util.res.StringManager
                        // @ts-ignore
                        public static readonly ARRAY_MAX_SIZE: number /*int*/
                        // @ts-ignore
                        hasHashCode: boolean
                        // @ts-ignore
                        isSet: boolean
                        // @ts-ignore
                        start: number /*int*/
                        // @ts-ignore
                        end: number /*int*/
                        /**
                         * Maximum amount of data in this buffer. If -1 or not set, the buffer will
                         * grow to {{@link #ARRAY_MAX_SIZE}. Can be smaller than the current buffer
                         * size ( which will not shrink ). When the limit is reached, the buffer
                         * will be flushed (if out is set) or throw exception.
                         * @param limit The new limit
                         */
                        // @ts-ignore
                        public setLimit(limit: number /*int*/): void
                        // @ts-ignore
                        public getLimit(): number /*int*/
                        // @ts-ignore
                        getLimitInternal(): number /*int*/
                        /**
                         * @return the start position of the data in the buffer
                         */
                        // @ts-ignore
                        public getStart(): number /*int*/
                        // @ts-ignore
                        public getEnd(): number /*int*/
                        // @ts-ignore
                        public setEnd(i: number /*int*/): void
                        // @ts-ignore
                        public getOffset(): number /*int*/
                        // @ts-ignore
                        public setOffset(off: number /*int*/): void
                        /**
                         * @return the length of the data in the buffer
                         */
                        // @ts-ignore
                        public getLength(): number /*int*/
                        // @ts-ignore
                        public isNull(): boolean
                        // @ts-ignore
                        public indexOf(src: java.lang.String | string, srcOff: number /*int*/, srcLen: number /*int*/, myOff: number /*int*/): number /*int*/
                        /**
                         * Resets the chunk to an uninitialized state.
                         */
                        // @ts-ignore
                        public recycle(): void
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public hash(): number /*int*/
                        // @ts-ignore
                        abstract getBufferElement(index: number /*int*/): number /*int*/
                    }
                }
            }
        }
    }
}
