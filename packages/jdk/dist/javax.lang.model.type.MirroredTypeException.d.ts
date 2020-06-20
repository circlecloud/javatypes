declare namespace javax {
    namespace lang {
        namespace model {
            namespace type {
                /**
                 * Thrown when an application attempts to access the {@link Class} object
                 * corresponding to a {@link TypeMirror}.
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @see MirroredTypesException
                 * @see Element#getAnnotation(Class)
                 * @since 1.6
                 */
                // @ts-ignore
                class MirroredTypeException extends javax.lang.model.type.MirroredTypesException {
                    /**
                     * Constructs a new MirroredTypeException for the specified type.
                     * @param type  the type being accessed
                     */
                    // @ts-ignore
                    constructor(type: javax.lang.model.type.TypeMirror)
                    /**
                     * Returns the type mirror corresponding to the type being accessed.
                     * The type mirror may be unavailable if this exception has been
                     * serialized and then read back in.
                     * @return the type mirror, or {#code null} if unavailable
                     */
                    // @ts-ignore
                    getTypeMirror(): javax.lang.model.type.TypeMirror
                }
            }
        }
    }
}
