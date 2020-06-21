declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    // @ts-ignore
                    class SocketBufferHandler extends java.lang.Object {
                        // @ts-ignore
                        constructor(readBufferSize: number /*int*/, writeBufferSize: number /*int*/, direct: boolean)
                        // @ts-ignore
                        public configureReadBufferForWrite(): void
                        // @ts-ignore
                        public configureReadBufferForRead(): void
                        // @ts-ignore
                        public getReadBuffer(): java.nio.ByteBuffer
                        // @ts-ignore
                        public isReadBufferEmpty(): boolean
                        // @ts-ignore
                        public configureWriteBufferForWrite(): void
                        // @ts-ignore
                        public configureWriteBufferForRead(): void
                        // @ts-ignore
                        public isWriteBufferWritable(): boolean
                        // @ts-ignore
                        public getWriteBuffer(): java.nio.ByteBuffer
                        // @ts-ignore
                        public isWriteBufferEmpty(): boolean
                        // @ts-ignore
                        public reset(): void
                        // @ts-ignore
                        public expand(newSize: number /*int*/): void
                        // @ts-ignore
                        public free(): void
                    }
                }
            }
        }
    }
}
