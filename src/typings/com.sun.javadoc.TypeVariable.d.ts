declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents a type variable.
             * For example, the generic interface {@code List<E>} has a single
             * type variable {@code E}.
             * A type variable may have explicit bounds, as in
             * {@code C<R extends Remote>}.
             * @author Scott Seligman
             * @since 1.5
             */
            // @ts-ignore
            interface TypeVariable extends com.sun.javadoc.Type {
                /**
                 * Return the bounds of this type variable.
                 * These are the types given by the <i>extends</i> clause.
                 * Return an empty array if there are no explicit bounds.
                 * @return the bounds of this type variable.
                 */
                // @ts-ignore
                bounds(): com.sun.javadoc.Type[]
                /**
                 * Return the class, interface, method, or constructor within
                 * which this type variable is declared.
                 * @return the class, interface, method, or constructor within
                 *          which this type variable is declared.
                 */
                // @ts-ignore
                owner(): com.sun.javadoc.ProgramElementDoc
                /**
                 * Get the annotations of this program element.
                 * Return an empty array if there are none.
                 */
                // @ts-ignore
                annotations(): com.sun.javadoc.AnnotationDesc[]
            }
        }
    }
}
