declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace tld {
                        /**
                         * Parses a Tag Library Descriptor.
                         */
                        // @ts-ignore
                        class TldParser extends java.lang.Object {
                            // @ts-ignore
                            constructor(namespaceAware: boolean, validation: boolean, blockExternal: boolean)
                            // @ts-ignore
                            constructor(namespaceAware: boolean, validation: boolean, ruleSet: org.apache.tomcat.util.digester.RuleSet, blockExternal: boolean)
                            // @ts-ignore
                            public parse(path: org.apache.tomcat.util.descriptor.tld.TldResourcePath): org.apache.tomcat.util.descriptor.tld.TaglibXml
                            // @ts-ignore
                            public setClassLoader(classLoader: java.lang.ClassLoader): void
                        }
                    }
                }
            }
        }
    }
}
