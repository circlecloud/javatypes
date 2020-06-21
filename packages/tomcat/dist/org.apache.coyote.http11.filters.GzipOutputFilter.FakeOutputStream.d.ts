declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace filters {
                    namespace GzipOutputFilter {
                        // @ts-ignore
                        class FakeOutputStream extends java.io.OutputStream {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            readonly outputChunk: java.nio.ByteBuffer
                            // @ts-ignore
                            public write(b: number /*int*/): void
                            // @ts-ignore
                            public write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                            // @ts-ignore
                            public flush(): void
                            // @ts-ignore
                            public close(): void
                        }
                    }
                }
            }
        }
    }
}
