declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * {@link ParameterNameDiscoverer} implementation which uses JDK 8's reflection facilities
             * for introspecting parameter names (based on the "-parameters" compiler flag).
             * @author Juergen Hoeller
             * @since 4.0
             * @see java.lang.reflect.Method#getParameters()
             * @see java.lang.reflect.Parameter#getName()
             */
            // @ts-ignore
            class StandardReflectionParameterNameDiscoverer extends java.lang.Object implements org.springframework.core.ParameterNameDiscoverer {
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
