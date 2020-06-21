declare namespace javax {
    namespace lang {
        namespace model {
            namespace type {
                /**
                 * Indicates that an unknown kind of type was encountered.  This can
                 * occur if the language evolves and new kinds of types are added to
                 * the {@code TypeMirror} hierarchy.  May be thrown by a {@linkplain
                 * TypeVisitor type visitor} to indicate that the visitor was created
                 * for a prior version of the language.
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @see TypeVisitor#visitUnknown
                 * @since 1.6
                 */
                // @ts-ignore
                class UnknownTypeException extends javax.lang.model.UnknownEntityException {
                    /**
                     * Creates a new {@code UnknownTypeException}.The {@code p}
                     * parameter may be used to pass in an additional argument with
                     * information about the context in which the unknown type was
                     * encountered; for example, the visit methods of {@link
                     * TypeVisitor} may pass in their additional parameter.
                     * @param t the unknown type, may be {#code null}
                     * @param p an additional parameter, may be {#code null}
                     */
                    // @ts-ignore
                    constructor(t: javax.lang.model.type.TypeMirror, p: java.lang.Object | any)
                    /**
                     * Returns the unknown type.
                     * The value may be unavailable if this exception has been
                     * serialized and then read back in.
                     * @return the unknown type, or {#code null} if unavailable
                     */
                    // @ts-ignore
                    getUnknownType(): javax.lang.model.type.TypeMirror
                    /**
                     * Returns the additional argument.
                     * @return the additional argument
                     */
                    // @ts-ignore
                    getArgument(): any
                }
            }
        }
    }
}
