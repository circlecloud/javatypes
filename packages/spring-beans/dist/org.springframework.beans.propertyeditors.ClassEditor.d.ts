declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Property editor for {@link Class java.lang.Class}, to enable the direct
                 * population of a {@code Class} property without recourse to having to use a
                 * String class name property as bridge.
                 * <p>Also supports "java.lang.String[]"-style array class names, in contrast to the
                 * standard {@link Class#forName(String)} method.
                 * @author Juergen Hoeller
                 * @author Rick Evans
                 * @since 13.05.2003
                 * @see Class#forName
                 * @see org.springframework.util.ClassUtils#forName(String, ClassLoader)
                 */
                // @ts-ignore
                class ClassEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a default ClassEditor, using the thread context ClassLoader.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a default ClassEditor, using the given ClassLoader.
                     * @param classLoader the ClassLoader to use
                     *  (or {#code null} for the thread context ClassLoader)
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
