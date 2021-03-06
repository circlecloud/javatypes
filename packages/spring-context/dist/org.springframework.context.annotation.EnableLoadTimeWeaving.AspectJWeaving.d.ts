declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                namespace EnableLoadTimeWeaving {
                    /**
                     * AspectJ weaving enablement options.
                     */
                    // @ts-ignore
                    class AspectJWeaving extends java.lang.Enum<org.springframework.context.annotation.EnableLoadTimeWeaving.AspectJWeaving> {
                        /**
                         * Switches on Spring-based AspectJ load-time weaving.
                         */
                        // @ts-ignore
                        public static readonly ENABLED: org.springframework.context.annotation.EnableLoadTimeWeaving.AspectJWeaving
                        /**
                         * Switches off Spring-based AspectJ load-time weaving (even if a
                         * "META-INF/aop.xml" resource is present on the classpath).
                         */
                        // @ts-ignore
                        public static readonly DISABLED: org.springframework.context.annotation.EnableLoadTimeWeaving.AspectJWeaving
                        /**
                         * Switches on AspectJ load-time weaving if a "META-INF/aop.xml" resource
                         * is present in the classpath. If there is no such resource, then AspectJ
                         * load-time weaving will be switched off.
                         */
                        // @ts-ignore
                        public static readonly AUTODETECT: org.springframework.context.annotation.EnableLoadTimeWeaving.AspectJWeaving
                        // @ts-ignore
                        public static values(): org.springframework.context.annotation.EnableLoadTimeWeaving.AspectJWeaving[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.springframework.context.annotation.EnableLoadTimeWeaving.AspectJWeaving
                    }
                }
            }
        }
    }
}
