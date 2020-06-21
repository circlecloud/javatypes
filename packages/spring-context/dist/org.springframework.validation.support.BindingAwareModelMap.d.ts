declare namespace org {
    namespace springframework {
        namespace validation {
            namespace support {
                /**
                 * Subclass of {@link org.springframework.ui.ExtendedModelMap} that automatically removes
                 * a {@link org.springframework.validation.BindingResult} object if the corresponding
                 * target attribute gets replaced through regular {@link Map} operations.
                 * <p>This is the class exposed to handler methods by Spring MVC, typically consumed through
                 * a declaration of the {@link org.springframework.ui.Model} interface. There is no need to
                 * build it within user code; a plain {@link org.springframework.ui.ModelMap} or even a just
                 * a regular {@link Map} with String keys will be good enough to return a user model.
                 * @author Juergen Hoeller
                 * @since 2.5.6
                 * @see org.springframework.validation.BindingResult
                 */
                // @ts-ignore
                class BindingAwareModelMap extends org.springframework.ui.ExtendedModelMap {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public put(key: java.lang.String | string, value: java.lang.Object | any): any
                    // @ts-ignore
                    public putAll(map: java.util.Map<any, any>): void
                }
            }
        }
    }
}
