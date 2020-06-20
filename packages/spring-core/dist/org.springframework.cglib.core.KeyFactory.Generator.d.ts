declare namespace org {
    namespace springframework {
        namespace cglib {
            namespace core {
                namespace KeyFactory {
                    // @ts-ignore
                    class Generator extends org.springframework.cglib.core.AbstractClassGenerator {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        getDefaultClassLoader(): java.lang.ClassLoader
                        // @ts-ignore
                        getProtectionDomain(): java.security.ProtectionDomain
                        /**
                         * @deprecated Use {#link #addCustomizer(KeyFactoryCustomizer)} instead.
                         */
                        // @ts-ignore
                        setCustomizer(customizer: Customizer): void
                        // @ts-ignore
                        addCustomizer(customizer: KeyFactoryCustomizer): void
                        // @ts-ignore
                        getCustomizers<T>(klass: java.lang.Class<T>): java.util.List<T>
                        // @ts-ignore
                        setInterface(keyInterface: java.lang.Class): void
                        // @ts-ignore
                        create(): org.springframework.cglib.core.KeyFactory
                        // @ts-ignore
                        setHashConstant(constant: number /*int*/): void
                        // @ts-ignore
                        setHashMultiplier(multiplier: number /*int*/): void
                        // @ts-ignore
                        firstInstance(type: java.lang.Class): java.lang.Object
                        // @ts-ignore
                        nextInstance(instance: any): java.lang.Object
                        // @ts-ignore
                        generateClass(v: org.springframework.asm.ClassVisitor): void
                    }
                }
            }
        }
    }
}
