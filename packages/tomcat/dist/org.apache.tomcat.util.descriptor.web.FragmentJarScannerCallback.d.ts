declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Callback handling a web-fragment.xml descriptor.
                         */
                        // @ts-ignore
                        class FragmentJarScannerCallback extends java.lang.Object implements org.apache.tomcat.JarScannerCallback {
                            // @ts-ignore
                            constructor(webXmlParser: org.apache.tomcat.util.descriptor.web.WebXmlParser, delegate: boolean, parseRequired: boolean)
                            // @ts-ignore
                            public scan(jar: org.apache.tomcat.Jar, webappPath: java.lang.String | string, isWebapp: boolean): void
                            // @ts-ignore
                            public scan(file: java.io.File, webappPath: java.lang.String | string, isWebapp: boolean): void
                            // @ts-ignore
                            public scanWebInfClasses(): void
                            // @ts-ignore
                            public isOk(): boolean
                            // @ts-ignore
                            public getFragments(): java.util.Map<java.lang.String | string, org.apache.tomcat.util.descriptor.web.WebXml>
                        }
                    }
                }
            }
        }
    }
}
