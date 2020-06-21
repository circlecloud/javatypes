declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mapper {
                namespace Mapper {
                    // @ts-ignore
                    class ContextVersion extends org.apache.catalina.mapper.Mapper.MapElement<org.apache.catalina.Context> {
                        // @ts-ignore
                        constructor(version: java.lang.String | string, path: java.lang.String | string, slashCount: number /*int*/, context: org.apache.catalina.Context, resources: org.apache.catalina.WebResourceRoot, welcomeResources: java.lang.String[] | string[])
                        // @ts-ignore
                        public readonly path: java.lang.String | string
                        // @ts-ignore
                        public readonly slashCount: number /*int*/
                        // @ts-ignore
                        public readonly resources: org.apache.catalina.WebResourceRoot
                        // @ts-ignore
                        public welcomeResources: java.lang.String[] | string[]
                        // @ts-ignore
                        public defaultWrapper: org.apache.catalina.mapper.Mapper.MappedWrapper
                        // @ts-ignore
                        public exactWrappers: org.apache.catalina.mapper.Mapper.MappedWrapper[]
                        // @ts-ignore
                        public wildcardWrappers: org.apache.catalina.mapper.Mapper.MappedWrapper[]
                        // @ts-ignore
                        public extensionWrappers: org.apache.catalina.mapper.Mapper.MappedWrapper[]
                        // @ts-ignore
                        public nesting: number /*int*/
                        // @ts-ignore
                        public isPaused(): boolean
                        // @ts-ignore
                        public markPaused(): void
                    }
                }
            }
        }
    }
}
