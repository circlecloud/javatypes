declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Default implementation of the {@link ParameterNameDiscoverer} strategy interface,
             * using the Java 8 standard reflection mechanism (if available), and falling back
             * to the ASM-based {@link LocalVariableTableParameterNameDiscoverer} for checking
             * debug information in the class file.
             * <p>If a Kotlin reflection implementation is present,
             * {@link KotlinReflectionParameterNameDiscoverer} is added first in the list and
             * used for Kotlin classes and interfaces. When compiling or running as a GraalVM
             * native image, the {@code KotlinReflectionParameterNameDiscoverer} is not used.
             * <p>Further discoverers may be added through {@link #addDiscoverer(ParameterNameDiscoverer)}.
             * @author Juergen Hoeller
             * @author Sebastien Deleuze
             * @author Sam Brannen
             * @since 4.0
             * @see StandardReflectionParameterNameDiscoverer
             * @see LocalVariableTableParameterNameDiscoverer
             * @see KotlinReflectionParameterNameDiscoverer
             */
            // @ts-ignore
            class DefaultParameterNameDiscoverer extends org.springframework.core.PrioritizedParameterNameDiscoverer {
                // @ts-ignore
                constructor()
            }
        }
    }
}
