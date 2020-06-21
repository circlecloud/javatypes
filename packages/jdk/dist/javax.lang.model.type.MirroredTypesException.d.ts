declare namespace javax {
    namespace lang {
        namespace model {
            namespace type {
                /**
                 * Thrown when an application attempts to access a sequence of {@link
                 * Class} objects each corresponding to a {@link TypeMirror}.
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @see MirroredTypeException
                 * @see Element#getAnnotation(Class)
                 * @since 1.6
                 */
                // @ts-ignore
                class MirroredTypesException extends java.lang.RuntimeException {
                    /**
                     * Constructs a new MirroredTypesException for the specified types.
                     * @param types  the types being accessed
                     */
                    // @ts-ignore
                    constructor(types: java.util.List<any> | Array<any>)
                    /**
                     * Returns the type mirrors corresponding to the types being accessed.
                     * The type mirrors may be unavailable if this exception has been
                     * serialized and then read back in.
                     * @return the type mirrors in construction order, or {#code null} if unavailable
                     */
                    // @ts-ignore
                    getTypeMirrors(): Array<any>
                }
            }
        }
    }
}
