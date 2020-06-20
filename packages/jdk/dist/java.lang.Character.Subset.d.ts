declare namespace java {
    namespace lang {
        namespace Character {
            /**
             * Instances of this class represent particular subsets of the Unicode
             * character set.  The only family of subsets defined in the
             * {@code Character} class is {@link Character.UnicodeBlock}.
             * Other portions of the Java API may define other subsets for their
             * own purposes.
             * @since 1.2
             */
            // @ts-ignore
            class Subset extends java.lang.Object {
                /**
                 * Constructs a new {@code Subset} instance.
                 * @param name  The name of this subset
                 * @exception NullPointerException if name is {#code null}
                 */
                // @ts-ignore
                constructor(name: string)
                /**
                 * Compares two {@code Subset} objects for equality.
                 * This method returns {@code true} if and only if
                 * {@code this} and the argument refer to the same
                 * object; since this method is {@code final}, this
                 * guarantee holds for all subclasses.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns the standard hash code as defined by the
                 * {@link Object#hashCode} method.  This method
                 * is {@code final} in order to ensure that the
                 * {@code equals} and {@code hashCode} methods will
                 * be consistent in all subclasses.
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns the name of this subset.
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
