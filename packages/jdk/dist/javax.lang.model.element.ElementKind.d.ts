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
                    /**
                     * A package.
                     */
                    // @ts-ignore
                    readonly PACKAGE: javax.lang.model.element.ElementKind
                    /**
                     * An enum type.
                     */
                    // @ts-ignore
                    readonly ENUM: javax.lang.model.element.ElementKind
                    /**
                     * A class not described by a more specific kind (like {@code ENUM}).
                     */
                    // @ts-ignore
                    readonly CLASS: javax.lang.model.element.ElementKind
                    /**
                     * An annotation type.
                     */
                    // @ts-ignore
                    readonly ANNOTATION_TYPE: javax.lang.model.element.ElementKind
                    /**
                     * An interface not described by a more specific kind (like
                     * {@code ANNOTATION_TYPE}).
                     */
                    // @ts-ignore
                    readonly INTERFACE: javax.lang.model.element.ElementKind
                    /**
                     * An enum constant.
                     */
                    // @ts-ignore
                    readonly ENUM_CONSTANT: javax.lang.model.element.ElementKind
                    /**
                     * A field not described by a more specific kind (like
                     * {@code ENUM_CONSTANT}).
                     */
                    // @ts-ignore
                    readonly FIELD: javax.lang.model.element.ElementKind
                    /**
                     * A parameter of a method or constructor.
                     */
                    // @ts-ignore
                    readonly PARAMETER: javax.lang.model.element.ElementKind
                    /**
                     * A local variable.
                     */
                    // @ts-ignore
                    readonly LOCAL_VARIABLE: javax.lang.model.element.ElementKind
                    /**
                     * A parameter of an exception handler.
                     */
                    // @ts-ignore
                    readonly EXCEPTION_PARAMETER: javax.lang.model.element.ElementKind
                    /**
                     * A method.
                     */
                    // @ts-ignore
                    readonly METHOD: javax.lang.model.element.ElementKind
                    /**
                     * A constructor.
                     */
                    // @ts-ignore
                    readonly CONSTRUCTOR: javax.lang.model.element.ElementKind
                    /**
                     * A static initializer.
                     */
                    // @ts-ignore
                    readonly STATIC_INIT: javax.lang.model.element.ElementKind
                    /**
                     * An instance initializer.
                     */
                    // @ts-ignore
                    readonly INSTANCE_INIT: javax.lang.model.element.ElementKind
                    /**
                     * A type parameter.
                     */
                    // @ts-ignore
                    readonly TYPE_PARAMETER: javax.lang.model.element.ElementKind
                    /**
                     * An implementation-reserved element.  This is not the element
                     * you are looking for.
                     */
                    // @ts-ignore
                    readonly OTHER: javax.lang.model.element.ElementKind
                    /**
                     * A resource variable.
                     * @since 1.7
                     */
                    // @ts-ignore
                    readonly RESOURCE_VARIABLE: javax.lang.model.element.ElementKind
                    // @ts-ignore
                    values(): javax.lang.model.element.ElementKind[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): javax.lang.model.element.ElementKind
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
