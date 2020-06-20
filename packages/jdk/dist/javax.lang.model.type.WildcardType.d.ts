declare namespace javax {
    namespace lang {
        namespace model {
            namespace type {
                /**
                 * Represents a wildcard type argument.
                 * Examples include:    <pre><tt>
                 * ?
                 * ? extends Number
                 * ? super T
                 * </tt></pre>
                 * <p> A wildcard may have its upper bound explicitly set by an
                 * {@code extends} clause, its lower bound explicitly set by a
                 * {@code super} clause, or neither (but not both).
                 * @author Joseph D. Darcy
                 * @author Scott Seligman
                 * @author Peter von der Ah&eacute;
                 * @since 1.6
                 */
                // @ts-ignore
                interface WildcardType extends javax.lang.model.type.TypeMirror {
                    /**
                     * Returns the upper bound of this wildcard.
                     * If no upper bound is explicitly declared,
                     * {@code null} is returned.
                     * @return the upper bound of this wildcard
                     */
                    // @ts-ignore
                    getExtendsBound(): javax.lang.model.type.TypeMirror
                    /**
                     * Returns the lower bound of this wildcard.
                     * If no lower bound is explicitly declared,
                     * {@code null} is returned.
                     * @return the lower bound of this wildcard
                     */
                    // @ts-ignore
                    getSuperBound(): javax.lang.model.type.TypeMirror
                }
            }
        }
    }
}
