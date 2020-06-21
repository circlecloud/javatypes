declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace tagplugin {
                        /**
                         * Parser for Tag Plugin descriptors.
                         */
                        // @ts-ignore
                        class TagPluginParser extends java.lang.Object {
                            // @ts-ignore
                            constructor(context: javax.servlet.ServletContext, blockExternal: boolean)
                            // @ts-ignore
                            public parse(url: java.net.URL): void
                            // @ts-ignore
                            public addPlugin(tagClass: java.lang.String | string, pluginClass: java.lang.String | string): void
                            // @ts-ignore
                            public getPlugins(): java.util.Map<java.lang.String | string, java.lang.String | string>
                        }
                    }
                }
            }
        }
    }
}
