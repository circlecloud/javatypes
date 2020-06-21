declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * Given a write function that accepts a source {@code Publisher<T>} to write
                     * with and returns {@code Publisher<Void>} for the result, this operator helps
                     * to defer the invocation of the write function, until we know if the source
                     * publisher will begin publishing without an error. If the first emission is
                     * an error, the write function is bypassed, and the error is sent directly
                     * through the result publisher. Otherwise the write function is invoked.
                     * @author Rossen Stoyanchev
                     * @author Stephane Maldini
                     * @since 5.0
                     * @param <T> the type of element signaled
                     */
                    // @ts-ignore
                    class ChannelSendOperator<T> extends java.lang.Object {
                        // @ts-ignore
                        constructor(source: object, writeFunction: java.util.function$.Function<object, object>)
                        // @ts-ignore
                        public scanUnsafe(key: Attr): any
                        // @ts-ignore
                        public subscribe(actual: object): void
                    }
                }
            }
        }
    }
}
