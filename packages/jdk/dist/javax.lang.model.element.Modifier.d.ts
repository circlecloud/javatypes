declare namespace javax {
    namespace lang {
        namespace model {
            namespace element {
                /**
                 * Represents a modifier on a program element such
                 * as a class, method, or field.
                 * <p>Not all modifiers are applicable to all kinds of elements.
                 * When two or more modifiers appear in the source code of an element
                 * then it is customary, though not required, that they appear in the same
                 * order as the constants listed in the detail section below.
                 * <p>Note that it is possible additional modifiers will be added in
                 * future versions of the platform.
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @since 1.6
                 */
                // @ts-ignore
                class Modifier extends java.lang.Enum<javax.lang.model.element.Modifier> {
                    /**
                     * The modifier {@code public}
                     */
                    // @ts-ignore
                    public static readonly PUBLIC: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code protected}
                     */
                    // @ts-ignore
                    public static readonly PROTECTED: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code private}
                     */
                    // @ts-ignore
                    public static readonly PRIVATE: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code abstract}
                     */
                    // @ts-ignore
                    public static readonly ABSTRACT: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code default}
                     * @since 1.8
                     */
                    // @ts-ignore
                    public static readonly DEFAULT: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code static}
                     */
                    // @ts-ignore
                    public static readonly STATIC: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code final}
                     */
                    // @ts-ignore
                    public static readonly FINAL: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code transient}
                     */
                    // @ts-ignore
                    public static readonly TRANSIENT: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code volatile}
                     */
                    // @ts-ignore
                    public static readonly VOLATILE: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code synchronized}
                     */
                    // @ts-ignore
                    public static readonly SYNCHRONIZED: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code native}
                     */
                    // @ts-ignore
                    public static readonly NATIVE: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code strictfp}
                     */
                    // @ts-ignore
                    public static readonly STRICTFP: javax.lang.model.element.Modifier
                    // @ts-ignore
                    public static values(): javax.lang.model.element.Modifier[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): javax.lang.model.element.Modifier
                    /**
                     * Returns this modifier's name in lowercase.
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
