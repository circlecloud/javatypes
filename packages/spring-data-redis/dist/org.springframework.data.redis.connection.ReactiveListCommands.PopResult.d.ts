declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveListCommands {
                        /**
                         * Result for {@link PopCommand}/{@link BPopCommand}.
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        class PopResult extends java.lang.Object {
                            // @ts-ignore
                            constructor(result: java.util.List<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>)
                            // @ts-ignore
                            public getKey(): java.nio.ByteBuffer
                            // @ts-ignore
                            public getValue(): java.nio.ByteBuffer
                            // @ts-ignore
                            public getRaw(): Array<java.nio.ByteBuffer>
                        }
                    }
                }
            }
        }
    }
}
