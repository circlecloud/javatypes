declare namespace org {
    namespace springframework {
        namespace cglib {
            namespace core {
                /**
                 * Custom extension of CGLIB's {@link DefaultNamingPolicy}, modifying
                 * the tag in generated class names from "ByCGLIB" to "BySpringCGLIB".
                 * <p>This is primarily designed to avoid clashes between a regular CGLIB
                 * version (used by some other library) and Spring's embedded variant,
                 * in case the same class happens to get proxied for different purposes.
                 * @author Juergen Hoeller
                 * @since 3.2.8
                 */
                // @ts-ignore
                class SpringNamingPolicy extends DefaultNamingPolicy {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly INSTANCE: org.springframework.cglib.core.SpringNamingPolicy
                    // @ts-ignore
                    getTag(): java.lang.String
                }
            }
        }
    }
}
