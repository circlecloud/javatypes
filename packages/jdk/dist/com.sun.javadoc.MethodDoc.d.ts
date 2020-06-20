declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents a method of a java class.
             * @since 1.2
             * @author Robert Field
             */
            // @ts-ignore
            interface MethodDoc extends com.sun.javadoc.ExecutableMemberDoc {
                /**
                 * Return true if this method is abstract
                 */
                // @ts-ignore
                isAbstract(): boolean
                /**
                 * Return true if this method is default
                 */
                // @ts-ignore
                isDefault(): boolean
                /**
                 * Get return type.
                 * @return the return type of this method, null if it
                 *  is a constructor.
                 */
                // @ts-ignore
                returnType(): com.sun.javadoc.Type
                /**
                 * Return the class containing the method that this method overrides.
                 * <p> <i>The <code>overriddenClass</code> method cannot
                 * accommodate certain generic type constructs.  The
                 * <code>overriddenType</code> method should be used instead.</i>
                 * @return a ClassDoc representing the superclass
                 *          defining a method that this method overrides, or null if
                 *          this method does not override.
                 */
                // @ts-ignore
                overriddenClass(): com.sun.javadoc.ClassDoc
                /**
                 * Return the type containing the method that this method overrides.
                 * It may be a <code>ClassDoc</code> or a <code>ParameterizedType</code>.
                 * @return the supertype whose method is overridden, or null if this
                 *          method does not override another in a superclass
                 * @since 1.5
                 */
                // @ts-ignore
                overriddenType(): com.sun.javadoc.Type
                /**
                 * Return the method that this method overrides.
                 * @return a MethodDoc representing a method definition
                 *  in a superclass this method overrides, null if
                 *  this method does not override.
                 */
                // @ts-ignore
                overriddenMethod(): com.sun.javadoc.MethodDoc
                /**
                 * Tests whether this method overrides another.
                 * The overridden method may be one declared in a superclass or
                 * a superinterface (unlike {@link #overriddenMethod()}).
                 * <p> When a non-abstract method overrides an abstract one, it is
                 * also said to <i>implement</i> the other.
                 * @param meth  the other method to examine
                 * @return <tt>true</tt> if this method overrides the other
                 * @since 1.5
                 */
                // @ts-ignore
                overrides(meth: com.sun.javadoc.MethodDoc): boolean
            }
        }
    }
}
