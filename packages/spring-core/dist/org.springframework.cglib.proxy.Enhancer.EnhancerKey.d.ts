declare namespace org {
    namespace springframework {
        namespace cglib {
            namespace proxy {
                namespace Enhancer {
                    /**
                     * Internal interface, only public due to ClassLoader issues.
                     */
                    // @ts-ignore
                    interface EnhancerKey {
                        // @ts-ignore
                        newInstance(type: string, interfaces: string[], filter: object, callbackTypes: org.springframework.asm.Type[], useFactory: boolean, interceptDuringConstruction: boolean, serialVersionUID: number): java.lang.Object
                    }
                }
            }
        }
    }
}
