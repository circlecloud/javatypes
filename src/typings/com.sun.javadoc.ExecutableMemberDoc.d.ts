declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents a method or constructor of a java class.
             * @since 1.2
             * @author Robert Field
             */
            // @ts-ignore
            interface ExecutableMemberDoc extends com.sun.javadoc.MemberDoc {
                /**
                 * Return exceptions this method or constructor throws.
                 * If the type of the exception is a type variable, return the
                 * <code>ClassDoc</code> of its erasure.
                 * <p> <i>The <code>thrownExceptions</code> method cannot
                 * accommodate certain generic type constructs.  The
                 * <code>thrownExceptionTypes</code> method should be used
                 * instead.</i>
                 * @return an array of ClassDoc[] representing the exceptions
                 *          thrown by this method.
                 * @see #thrownExceptionTypes
                 */
                // @ts-ignore
                thrownExceptions(): com.sun.javadoc.ClassDoc[]
                /**
                 * Return exceptions this method or constructor throws.
                 * @return an array representing the exceptions thrown by this method.
                 *          Each array element is either a <code>ClassDoc</code> or a
                 *          <code>TypeVariable</code>.
                 * @since 1.5
                 */
                // @ts-ignore
                thrownExceptionTypes(): com.sun.javadoc.Type[]
                /**
                 * Return true if this method is native
                 */
                // @ts-ignore
                isNative(): boolean
                /**
                 * Return true if this method is synchronized
                 */
                // @ts-ignore
                isSynchronized(): boolean
                /**
                 * Return true if this method was declared to take a variable number
                 * of arguments.
                 * @since 1.5
                 */
                // @ts-ignore
                isVarArgs(): boolean
                /**
                 * Get argument information.
                 * @see Parameter
                 * @return an array of Parameter, one element per argument
                 *  in the order the arguments are present.
                 */
                // @ts-ignore
                parameters(): com.sun.javadoc.Parameter[]
                /**
                 * Get the receiver type of this executable element.
                 * @return the receiver type of this executable element.
                 * @since 1.8
                 */
                // @ts-ignore
                receiverType(): com.sun.javadoc.Type
                /**
                 * Return the throws tags in this method.
                 * @return an array of ThrowTag containing all <code>&#64;exception</code>
                 *  and <code>&#64;throws</code> tags.
                 */
                // @ts-ignore
                throwsTags(): com.sun.javadoc.ThrowsTag[]
                /**
                 * Return the param tags in this method, excluding the type
                 * parameter tags.
                 * @return an array of ParamTag containing all <code>&#64;param</code> tags
                 *  corresponding to the parameters of this method.
                 */
                // @ts-ignore
                paramTags(): com.sun.javadoc.ParamTag[]
                /**
                 * Return the type parameter tags in this method.
                 * @return an array of ParamTag containing all <code>&#64;param</code> tags
                 *  corresponding to the type parameters of this method.
                 * @since 1.5
                 */
                // @ts-ignore
                typeParamTags(): com.sun.javadoc.ParamTag[]
                /**
                 * Get the signature. It is the parameter list, type is qualified.
                 * For instance, for a method <code>mymethod(String x, int y)</code>,
                 * it will return <code>(java.lang.String,int)</code>.
                 */
                // @ts-ignore
                signature(): string
                /**
                 * get flat signature.  all types are not qualified.
                 * return a String, which is the flat signiture of this member.
                 * It is the parameter list, type is not qualified.
                 * For instance, for a method <code>mymethod(String x, int y)</code>,
                 * it will return <code>(String, int)</code>.
                 */
                // @ts-ignore
                flatSignature(): string
                /**
                 * Return the formal type parameters of this method or constructor.
                 * Return an empty array if this method or constructor is not generic.
                 * @return the formal type parameters of this method or constructor.
                 * @since 1.5
                 */
                // @ts-ignore
                typeParameters(): com.sun.javadoc.TypeVariable[]
            }
        }
    }
}
