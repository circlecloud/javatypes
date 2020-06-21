declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace file {
                    namespace ConfigurationSource {
                        /**
                         * Represents a resource: a stream to the resource associated with
                         * its URI.
                         */
                        // @ts-ignore
                        class Resource extends java.lang.Object implements java.lang.AutoCloseable {
                            // @ts-ignore
                            constructor(inputStream: java.io.InputStream, uri: java.net.URI)
                            // @ts-ignore
                            public getInputStream(): java.io.InputStream
                            // @ts-ignore
                            public getURI(): java.net.URI
                            // @ts-ignore
                            public getLastModified(): number /*long*/
                            // @ts-ignore
                            public close(): void
                        }
                    }
                }
            }
        }
    }
}
