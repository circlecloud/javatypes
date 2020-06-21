declare namespace org {
    namespace apache {
        namespace catalina {
            namespace session {
                namespace ManagerBase {
                    // @ts-ignore
                    class SessionTiming extends java.lang.Object {
                        // @ts-ignore
                        constructor(timestamp: number /*long*/, duration: number /*int*/)
                        /**
                         * @return Time stamp associated with this piece of timing information
                         *          in milliseconds.
                         */
                        // @ts-ignore
                        public getTimestamp(): number /*long*/
                        /**
                         * @return Duration associated with this piece of timing information in
                         *          seconds.
                         */
                        // @ts-ignore
                        public getDuration(): number /*int*/
                    }
                }
            }
        }
    }
}
