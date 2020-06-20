declare namespace org {
    namespace springframework {
        namespace core {
            namespace style {
                /**
                 * Converts objects to String form, generally for debugging purposes,
                 * using Spring's {@code toString} styling conventions.
                 * <p>Uses the reflective visitor pattern underneath the hood to nicely
                 * encapsulate styling algorithms for each type of styled object.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 1.2.2
                 */
                // @ts-ignore
                class DefaultValueStyler extends java.lang.Object implements org.springframework.core.style.ValueStyler {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    style(value: any): java.lang.String
                }
            }
        }
    }
}
