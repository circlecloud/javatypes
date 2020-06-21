declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace rewrite {
                    namespace RewriteCond {
                        // @ts-ignore
                        abstract class Condition extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public abstract evaluate(value: java.lang.String | string, resolver: org.apache.catalina.valves.rewrite.Resolver): boolean
                        }
                    }
                }
            }
        }
    }
}
