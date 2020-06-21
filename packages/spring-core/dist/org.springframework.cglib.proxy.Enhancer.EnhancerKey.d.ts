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
                        newInstance(type: java.lang.String | string, interfaces: java.lang.String[] | string[], filter: object, callbackTypes: org.springframework.asm.Type[], useFactory: boolean, interceptDuringConstruction: boolean, serialVersionUID: java.lang.Long | number): any
                    }
                }
            }
        }
    }
}
