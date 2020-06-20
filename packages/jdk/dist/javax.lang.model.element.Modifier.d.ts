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
                    // @ts-ignore
                    values(): javax.lang.model.element.Modifier[]
                    // @ts-ignore
                    valueOf(name: string): javax.lang.model.element.Modifier
                    /**
                     * Returns this modifier's name in lowercase.
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
