declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * Editor for a {@link Character}, to populate a property
                 * of type {@code Character} or {@code char} from a String value.
                 * <p>Note that the JDK does not contain a default
                 * {@link java.beans.PropertyEditor property editor} for {@code char}!
                 * {@link org.springframework.beans.BeanWrapperImpl} will register this
                 * editor by default.
                 * <p>Also supports conversion from a Unicode character sequence; e.g.
                 * {@code u0041} ('A').
                 * @author Juergen Hoeller
                 * @author Rob Harrop
                 * @author Rick Evans
                 * @since 1.2
                 * @see Character
                 * @see org.springframework.beans.BeanWrapperImpl
                 */
                // @ts-ignore
                class CharacterEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new CharacterEditor instance.
                     * <p>The "allowEmpty" parameter controls whether an empty String is to be
                     * allowed in parsing, i.e. be interpreted as the {@code null} value when
                     * {@link #setAsText(String) text is being converted}. If {@code false},
                     * an {@link IllegalArgumentException} will be thrown at that time.
                     * @param allowEmpty if empty strings are to be allowed
                     */
                    // @ts-ignore
                    constructor(allowEmpty: boolean)
                    // @ts-ignore
                    public setAsText(text: java.lang.String | string): void
                    // @ts-ignore
                    public getAsText(): string
                }
            }
        }
    }
}
