declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Implementation of {@link ParameterNameDiscoverer} that uses the LocalVariableTable
             * information in the method attributes to discover parameter names. Returns
             * {@code null} if the class file was compiled without debug information.
             * <p>Uses ObjectWeb's ASM library for analyzing class files. Each discoverer instance
             * caches the ASM discovered information for each introspected Class, in a thread-safe
             * manner. It is recommended to reuse ParameterNameDiscoverer instances as far as possible.
             * @author Adrian Colyer
             * @author Costin Leau
             * @author Juergen Hoeller
             * @author Chris Beams
             * @author Sam Brannen
             * @since 2.0
             */
            // @ts-ignore
            class LocalVariableTableParameterNameDiscoverer extends java.lang.Object implements org.springframework.core.ParameterNameDiscoverer {
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
