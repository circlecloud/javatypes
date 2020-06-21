declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        // @ts-ignore
                        class WebXmlParser extends java.lang.Object {
                            // @ts-ignore
                            constructor(namespaceAware: boolean, validation: boolean, blockExternal: boolean)
                            /**
                             * Parse a web descriptor at a location.
                             * @param url the location; if null no load will be attempted
                             * @param dest the instance to be populated by the parse operation
                             * @param fragment indicate if the descriptor is a web-app or web-fragment
                             * @return true if the descriptor was successfully parsed
                             * @throws IOException if there was a problem reading from the URL
                             */
                            // @ts-ignore
                            public parseWebXml(url: java.net.URL, dest: org.apache.tomcat.util.descriptor.web.WebXml, fragment: boolean): boolean
                            // @ts-ignore
                            public parseWebXml(source: org.xml.sax.InputSource, dest: org.apache.tomcat.util.descriptor.web.WebXml, fragment: boolean): boolean
                            /**
                             * Sets the ClassLoader to be used for creating descriptor objects.
                             * @param classLoader the ClassLoader to be used for creating descriptor objects
                             */
                            // @ts-ignore
                            public setClassLoader(classLoader: java.lang.ClassLoader): void
                        }
                    }
                }
            }
        }
    }
}
