declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    /**
                     * A resolver for locally cached XML resources.
                     */
                    // @ts-ignore
                    class LocalResolver extends java.lang.Object implements org.xml.sax.ext.EntityResolver2 {
                        /**
                         * Constructor providing mappings of public and system identifiers to local
                         * resources. Each map contains a mapping from a well-known identifier to a
                         * URL for a local resource path.
                         * @param publicIds mapping of well-known public identifiers to local
                         *                   resources
                         * @param systemIds mapping of well-known system identifiers to local
                         *                   resources
                         * @param blockExternal are external resources blocked that are not
                         *                       well-known
                         */
                        // @ts-ignore
                        constructor(publicIds: java.util.Map<java.lang.String | string, java.lang.String | string>, systemIds: java.util.Map<java.lang.String | string, java.lang.String | string>, blockExternal: boolean)
                        // @ts-ignore
                        public resolveEntity(publicId: java.lang.String | string, systemId: java.lang.String | string): org.xml.sax.InputSource
                        // @ts-ignore
                        public resolveEntity(name: java.lang.String | string, publicId: java.lang.String | string, base: java.lang.String | string, systemId: java.lang.String | string): org.xml.sax.InputSource
                        // @ts-ignore
                        public getExternalSubset(name: java.lang.String | string, baseURI: java.lang.String | string): org.xml.sax.InputSource
                    }
                }
            }
        }
    }
}
