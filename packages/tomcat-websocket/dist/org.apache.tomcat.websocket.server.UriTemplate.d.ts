declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace server {
                    /**
                     * Extracts path parameters from URIs used to create web socket connections
                     * using the URI template defined for the associated Endpoint.
                     */
                    // @ts-ignore
                    class UriTemplate extends java.lang.Object {
                        // @ts-ignore
                        constructor(path: java.lang.String | string)
                        // @ts-ignore
                        public match(candidate: org.apache.tomcat.websocket.server.UriTemplate): java.util.Map<java.lang.String | string, java.lang.String | string>
                        // @ts-ignore
                        public hasParameters(): boolean
                        // @ts-ignore
                        public getSegmentCount(): number /*int*/
                        // @ts-ignore
                        public getNormalizedPath(): string
                    }
                }
            }
        }
    }
}
