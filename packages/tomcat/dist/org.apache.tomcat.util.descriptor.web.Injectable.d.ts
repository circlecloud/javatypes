declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        // @ts-ignore
                        interface Injectable {
                            // @ts-ignore
                            getName(): string
                            // @ts-ignore
                            addInjectionTarget(injectionTargetName: java.lang.String | string, jndiName: java.lang.String | string): void
                            // @ts-ignore
                            getInjectionTargets(): Array<org.apache.tomcat.util.descriptor.web.InjectionTarget>
                        }
                    }
                }
            }
        }
    }
}
