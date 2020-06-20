declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * {@link ParameterNameDiscoverer} implementation which uses Kotlin's reflection facilities
             * for introspecting parameter names.
             * Compared to {@link StandardReflectionParameterNameDiscoverer}, it allows in addition to
             * determine interface parameter names without requiring Java 8 -parameters compiler flag.
             * @author Sebastien Deleuze
             * @since 5.0
             */
            // @ts-ignore
            class KotlinReflectionParameterNameDiscoverer extends java.lang.Object implements org.springframework.core.ParameterNameDiscoverer {
                // @ts-ignore
                constructor()
                // @ts-ignore
                getParameterNames(method: java.lang.reflect.Method): java.lang.String[]
                // @ts-ignore
                getParameterNames(ctor: java.lang.reflect.Constructor<any>): java.lang.String[]
            }
        }
    }
}
