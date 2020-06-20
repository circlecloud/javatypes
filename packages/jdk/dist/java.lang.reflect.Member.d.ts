declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * Member is an interface that reflects identifying information about
             * a single member (a field or a method) or a constructor.
             * @see java.lang.Class
             * @see Field
             * @see Method
             * @see Constructor
             * @author Nakul Saraiya
             */
            // @ts-ignore
            interface Member {
                /**
                 * Identifies the set of all public members of a class or interface,
                 * including inherited members.
                 */
                // @ts-ignore
                
                /**
                 * Identifies the set of declared members of a class or interface.
                 * Inherited members are not included.
                 */
                // @ts-ignore
                
                /**
                 * Returns the Class object representing the class or interface
                 * that declares the member or constructor represented by this Member.
                 * @return an object representing the declaring class of the
                 *  underlying member
                 */
                // @ts-ignore
                getDeclaringClass(): java.lang.Class<?>
                /**
                 * Returns the simple name of the underlying member or constructor
                 * represented by this Member.
                 * @return the simple name of the underlying member
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Returns the Java language modifiers for the member or
                 * constructor represented by this Member, as an integer.  The
                 * Modifier class should be used to decode the modifiers in
                 * the integer.
                 * @return the Java language modifiers for the underlying member
                 * @see Modifier
                 */
                // @ts-ignore
                getModifiers(): int
                /**
                 * Returns {@code true} if this member was introduced by
                 * the compiler; returns {@code false} otherwise.
                 * @return true if and only if this member was introduced by
                 *  the compiler.
                 * @jls 13.1 The Form of a Binary
                 * @since 1.5
                 */
                // @ts-ignore
                isSynthetic(): boolean
            }
        }
    }
}
