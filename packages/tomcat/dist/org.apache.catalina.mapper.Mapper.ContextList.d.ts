declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mapper {
                namespace Mapper {
                    // @ts-ignore
                    class ContextList extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public readonly contexts: org.apache.catalina.mapper.Mapper.MappedContext[]
                        // @ts-ignore
                        public readonly nesting: number /*int*/
                        // @ts-ignore
                        public addContext(mappedContext: org.apache.catalina.mapper.Mapper.MappedContext, slashCount: number /*int*/): org.apache.catalina.mapper.Mapper.ContextList
                        // @ts-ignore
                        public removeContext(path: java.lang.String | string): org.apache.catalina.mapper.Mapper.ContextList
                    }
                }
            }
        }
    }
}
