declare namespace org {
    namespace springframework {
        namespace cglib {
            namespace core {
                namespace KeyFactory {
                    // @ts-ignore
                    class Generator extends org.springframework.cglib.core.AbstractClassGenerator<any> {
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
                        public setCustomizer(customizer: Customizer): void
                        // @ts-ignore
                        public addCustomizer(customizer: KeyFactoryCustomizer): void
                        // @ts-ignore
                        public getCustomizers<T>(klass: java.lang.Class<T>): Array<T>
                        // @ts-ignore
                        public setInterface(keyInterface: java.lang.Class<any>): void
                        // @ts-ignore
                        public create(): org.springframework.cglib.core.KeyFactory
                        // @ts-ignore
                        public setHashConstant(constant: number /*int*/): void
                        // @ts-ignore
                        public setHashMultiplier(multiplier: number /*int*/): void
                        // @ts-ignore
                        firstInstance(type: java.lang.Class<any>): any
                        // @ts-ignore
                        nextInstance(instance: java.lang.Object | any): any
                        // @ts-ignore
                        public generateClass(v: org.springframework.asm.ClassVisitor): void
                    }
                }
            }
        }
    }
}
