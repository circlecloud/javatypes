declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Interface for strategies that register custom
             * {@link java.beans.PropertyEditor property editors} with a
             * {@link org.springframework.beans.PropertyEditorRegistry property editor registry}.
             * <p>This is particularly useful when you need to use the same set of
             * property editors in several different situations: write a corresponding
             * registrar and reuse that in each case.
             * @author Juergen Hoeller
             * @since 1.2.6
             * @see PropertyEditorRegistry
             * @see java.beans.PropertyEditor
             */
            // @ts-ignore
            interface PropertyEditorRegistrar {
                /**
                 * Register custom {@link java.beans.PropertyEditor PropertyEditors} with
                 * the given {@code PropertyEditorRegistry}.
                 * <p>The passed-in registry will usually be a {@link BeanWrapper} or a
                 * {@link org.springframework.validation.DataBinder DataBinder}.
                 * <p>It is expected that implementations will create brand new
                 * {@code PropertyEditors} instances for each invocation of this
                 * method (since {@code PropertyEditors} are not threadsafe).
                 * @param registry the {#code PropertyEditorRegistry} to register the
                 *  custom {@code PropertyEditors} with
                 */
                // @ts-ignore
                registerCustomEditors(registry: org.springframework.beans.PropertyEditorRegistry): void
            }
        }
    }
}
