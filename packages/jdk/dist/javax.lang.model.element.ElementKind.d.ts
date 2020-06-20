declare namespace javax {
    namespace lang {
        namespace model {
            namespace element {
                /**
                 * The {@code kind} of an element.
                 * <p>Note that it is possible additional element kinds will be added
                 * to accommodate new, currently unknown, language structures added to
                 * future versions of the Java&trade; programming language.
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @see Element
                 * @since 1.6
                 */
                // @ts-ignore
                class ElementKind extends java.lang.Enum<javax.lang.model.element.ElementKind> {
                    // @ts-ignore
                    values(): javax.lang.model.element.ElementKind[]
                    // @ts-ignore
                    valueOf(name: string): javax.lang.model.element.ElementKind
                    /**
                     * Returns {@code true} if this is a kind of class:
                     * either {@code CLASS} or {@code ENUM}.
                     * @return {#code true} if this is a kind of class
                     */
                    // @ts-ignore
                    isClass(): boolean
                    /**
                     * Returns {@code true} if this is a kind of interface:
                     * either {@code INTERFACE} or {@code ANNOTATION_TYPE}.
                     * @return {#code true} if this is a kind of interface
                     */
                    // @ts-ignore
                    isInterface(): boolean
                    /**
                     * Returns {@code true} if this is a kind of field:
                     * either {@code FIELD} or {@code ENUM_CONSTANT}.
                     * @return {#code true} if this is a kind of field
                     */
                    // @ts-ignore
                    isField(): boolean
                }
            }
        }
    }
}
