declare namespace org {
    namespace springframework {
        namespace validation {
            namespace support {
                /**
                 * Subclass of {@link ConcurrentModel} that automatically removes
                 * the {@link BindingResult} object when its corresponding
                 * target attribute is replaced through regular {@link Map} operations.
                 * <p>This is the class exposed to handler methods by Spring WebFlux,
                 * typically consumed through a declaration of the
                 * {@link org.springframework.ui.Model} interface as a parameter type.
                 * There is typically no need to create it within user code.
                 * If necessary a handler method can return a regular {@code java.util.Map},
                 * likely a {@code java.util.ConcurrentMap}, for a pre-determined model.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @see BindingResult
                 */
                // @ts-ignore
                class BindingAwareConcurrentModel extends org.springframework.ui.ConcurrentModel {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    put(key: string, value: any): java.lang.Object
                }
            }
        }
    }
}
