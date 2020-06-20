declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * Convenience methods for looking up BindingResults in a model Map.
             * @author Juergen Hoeller
             * @since 2.0
             * @see BindingResult#MODEL_KEY_PREFIX
             */
            // @ts-ignore
            class BindingResultUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Find the BindingResult for the given name in the given model.
                 * @param model the model to search
                 * @param name the name of the target object to find a BindingResult for
                 * @return the BindingResult, or {#code null} if none found
                 * @throws IllegalStateException if the attribute found is not of type BindingResult
                 */
                // @ts-ignore
                getBindingResult(model: java.util.Map<any, ?>, name: string): org.springframework.validation.BindingResult
                /**
                 * Find a required BindingResult for the given name in the given model.
                 * @param model the model to search
                 * @param name the name of the target object to find a BindingResult for
                 * @return the BindingResult (never {#code null})
                 * @throws IllegalStateException if no BindingResult found
                 */
                // @ts-ignore
                getRequiredBindingResult(model: java.util.Map<any, ?>, name: string): org.springframework.validation.BindingResult
            }
        }
    }
}
