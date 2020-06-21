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
                    readonly PUBLIC: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code protected}
                     */
                    // @ts-ignore
                    readonly PROTECTED: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code private}
                     */
                    // @ts-ignore
                    readonly PRIVATE: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code abstract}
                     */
                    // @ts-ignore
                    readonly ABSTRACT: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code default}
                     * @since 1.8
                     */
                    // @ts-ignore
                    readonly DEFAULT: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code static}
                     */
                    // @ts-ignore
                    readonly STATIC: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code final}
                     */
                    // @ts-ignore
                    readonly FINAL: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code transient}
                     */
                    // @ts-ignore
                    readonly TRANSIENT: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code volatile}
                     */
                    // @ts-ignore
                    readonly VOLATILE: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code synchronized}
                     */
                    // @ts-ignore
                    readonly SYNCHRONIZED: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code native}
                     */
                    // @ts-ignore
                    readonly NATIVE: javax.lang.model.element.Modifier
                    /**
                     * The modifier {@code strictfp}
                     */
                    // @ts-ignore
                    readonly STRICTFP: javax.lang.model.element.Modifier
                    // @ts-ignore
                    values(): javax.lang.model.element.Modifier[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): javax.lang.model.element.Modifier
                    /**
                     * Returns this modifier's name in lowercase.
                     */
                    // @ts-ignore
                    toString(): string
                }
            }
        }
    }
}
