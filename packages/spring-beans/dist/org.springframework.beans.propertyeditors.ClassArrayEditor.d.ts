declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Property editor for an array of {@link Class Classes}, to enable
                 * the direct population of a {@code Class[]} property without having to
                 * use a {@code String} class name property as bridge.
                 * <p>Also supports "java.lang.String[]"-style array class names, in contrast
                 * to the standard {@link Class#forName(String)} method.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 2.0
                 */
                // @ts-ignore
                class ClassArrayEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a default {@code ClassEditor}, using the thread
                     * context {@code ClassLoader}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a default {@code ClassArrayEditor}, using the given
                     * {@code ClassLoader}.
                     * @param classLoader the {#code ClassLoader} to use
                     *  (or pass {@code null} for the thread context {@code ClassLoader})
                     */
                    // @ts-ignore
                    constructor(classLoader: java.lang.ClassLoader)
                    // @ts-ignore
                    public setAsText(text: java.lang.String | string): void
                    // @ts-ignore
                    public getAsText(): string
                }
            }
        }
    }
}
