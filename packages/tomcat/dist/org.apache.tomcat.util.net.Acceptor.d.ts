declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    // @ts-ignore
                    class Acceptor<U> extends java.lang.Object implements java.lang.Runnable {
                        // @ts-ignore
                        constructor(endpoint: org.apache.tomcat.util.net.AbstractEndpoint<any, U>)
                        // @ts-ignore
                        state: org.apache.tomcat.util.net.Acceptor.AcceptorState
                        // @ts-ignore
                        public getState(): org.apache.tomcat.util.net.Acceptor.AcceptorState
                        // @ts-ignore
                        public run(): void
                        /**
                         * Handles exceptions where a delay is required to prevent a Thread from
                         * entering a tight loop which will consume CPU and may also trigger large
                         * amounts of logging. For example, this can happen if the ulimit for open
                         * files is reached.
                         * @param currentErrorDelay The current delay being applied on failure
                         * @return The delay to apply on the next failure
                         */
                        // @ts-ignore
                        handleExceptionWithDelay(currentErrorDelay: number /*int*/): number /*int*/
                    }
                }
            }
        }
    }
}
