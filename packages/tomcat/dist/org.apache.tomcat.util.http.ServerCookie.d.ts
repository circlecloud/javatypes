declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    /**
                     * Server-side cookie representation.
                     * Allows recycling and uses MessageBytes as low-level
                     * representation ( and thus the byte -&gt; char conversion can be delayed
                     * until we know the charset ).
                     * Tomcat.core uses this recyclable object to represent cookies,
                     * and the facade will convert it to the external representation.
                     */
                    // @ts-ignore
                    class ServerCookie extends java.lang.Object implements java.io.Serializable {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public recycle(): void
                        // @ts-ignore
                        public getComment(): org.apache.tomcat.util.buf.MessageBytes
                        // @ts-ignore
                        public getDomain(): org.apache.tomcat.util.buf.MessageBytes
                        // @ts-ignore
                        public getPath(): org.apache.tomcat.util.buf.MessageBytes
                        // @ts-ignore
                        public getName(): org.apache.tomcat.util.buf.MessageBytes
                        // @ts-ignore
                        public getValue(): org.apache.tomcat.util.buf.MessageBytes
                        // @ts-ignore
                        public getVersion(): number /*int*/
                        // @ts-ignore
                        public setVersion(v: number /*int*/): void
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
