declare namespace java {
    namespace lang {
        namespace invoke {
            /**
             * A MethodHandle is a reference to a Java-level method.  It is typed according to the method's signature and can be
             * invoked in three ways:
             * <ol>
             * <li>invokeExact - using the exact signature match</li>
             * <li>invoke - using a signature with the same number of arguments</li>
             * <li>invokeWithArguments - using a Object array to hold the correct number of arguments</li>
             * </ol>
             * <p>
             * In the case of #invokeExact, if the arguments do not match, based on a check of the MethodHandle's {@link #type()},
             * a WrongMethodTypeException will be thrown.
             * <p>
             * In the case of #invoke, each of the arguments will be converted to the correct type, before the call is initiated.
             * If the conversion cannot occur, a WrongMethodTypeException will be thrown.
             * <p>
             * Similar to #invoke, #invokeWithArguments will convert each of the arguments and place them on the stack before
             * the call is initiated. If the conversion cannot occur, a WrongMethodTypeException will be thrown.
             * <p>
             * A MethodHandle can be created using the MethodHandles factory.
             * @since 1.7
             */
            // @ts-ignore
            abstract class MethodHandle extends java.lang.Object {
                /**
                 * Invoke the receiver MethodHandle against the supplied arguments.  The types of the arguments
                 * must be an exact match for the MethodType of the MethodHandle.
                 * @return The return value of the method
                 * @throws Throwable - To ensure type safety, must be marked as throwing Throwable.
                 * @throws WrongMethodTypeException - If the resolved method type is not exactly equal to the MethodHandle's type
                 */
                // @ts-ignore
                public invokeExact(...args: java.lang.Object[] | any[]): any
                /**
                 * Invoke the receiver MethodHandle against the supplied arguments.  If the types of the arguments
                 * are not an exact match for the MethodType of the MethodHandle, conversions will be applied as
                 * possible.  The signature and the MethodHandle's MethodType must have the same number of arguments.
                 * @return The return value of the method.  May be converted according to the conversion rules.
                 * @throws Throwable - To ensure type safety, must be marked as throwing Throwable.
                 * @throws WrongMethodTypeException  - If the resolved method type cannot be converted to the MethodHandle's type
                 * @throws ClassCastException - if a conversion fails
                 */
                // @ts-ignore
                public invoke(...args: java.lang.Object[] | any[]): any
                /**
                 * The MethodType of the MethodHandle.  Invocation must match this MethodType.
                 * @return the MethodType of the MethodHandle.
                 */
                // @ts-ignore
                public type(): java.lang.invoke.MethodType
                /**
                 * Produce a MethodHandle that has an array of type <i>arrayClass</i> as its last argument and replaces the
                 * array with <i>spreadCount</i> arguments from the array before calling the original MethodHandle.  The
                 * MethodType of new the methodhandle and the original methodhandle will differ only in the regards to the
                 * last arguments.
                 * <p>
                 * The array must contain exactly <i>spreadCount</i> arguments to be passed to the original methodhandle.  The array
                 * may be null in the case when <i>spreadCount</i> is zero.  Incorrect argument array size will cause the method to
                 * throw an <code>IllegalArgumentException</code> instead of invoking the target.
                 * @param arrayClass - the source array for the spread arguments
                 * @param spreadCount - how many arguments to spread from the arrayClass
                 * @return a MethodHandle able to replace to the last parameter with <i>spreadCount</i> number of arguments
                 * @throws IllegalArgumentException - if arrayClass is not an array, the methodhandle has too few or too many parameters to satisfy spreadCount
                 * @throws WrongMethodTypeException - if it cannot convert from one MethodType to the new type.
                 */
                // @ts-ignore
                public asSpreader(arrayClass: java.lang.Class<any>, spreadCount: number /*int*/): java.lang.invoke.MethodHandle
                /**
                 * Returns a MethodHandle that collects the requested incoming arguments, which must match the
                 * types in MethodType incomingArgs, into an array of <i>arrayClass</i>, called T.
                 * This method can only be called on MethodHandles that have type() such that their last parameter
                 * can be assigned to from an instance of <i>arrayClass</i>.  An IllegalArgumentException will be
                 * thrown if this is not the case.
                 * This take a MH with type (Something, Something, K)R and presents a MethodType with the form
                 * (Something, Something, T, T, T)R. Where K is assignable to from an array of <i>arrayClass</i> T.
                 * @param arrayClass - the class of the collect array.  Usually matches the type of the last argument.
                 * @param collectCount - the number of arguments of type 'T' to collect
                 * @return a MethodHandle which will collect <i>collectCount</i> arguments and pass them as the final argument
                 * @throws IllegalArgumentException if arrayClass is not an array or is not assignable to the last parameter of the MethodHandle, or collectCount is an invalid array size (less than 0 or more than 254)
                 * @throws WrongMethodTypeException if an asType call would fail when converting the final parameter to arrayClass
                 * @throws NullPointerException if arrayClass is null
                 */
                // @ts-ignore
                public asCollector(arrayClass: java.lang.Class<any>, collectCount: number /*int*/): java.lang.invoke.MethodHandle
                /**
                 * Returns a MethodHandle that presents as being of MethodType newType.  It will
                 * convert the arguments used to match type().  If a conversion is invalid, a
                 * ClassCastException will be thrown.
                 * If newType == type(), then the original MethodHandle may be returned.
                 * TODO: Describe the type conversion rules here.
                 * If the return type T1 is void, any returned value is discarded
                 * If the return type T0 is void and T1 a reference, a null value is introduced.
                 * If the return type T0 is void and T1 a primitive, a zero value is introduced.
                 * @param newType the MethodType for invoking this method with
                 * @return A MethodHandle with MethodType newType
                 * @throws ClassCastException if any of the requested coercions are invalid.
                 */
                // @ts-ignore
                public asType(newType: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                /**
                 * Invoke the MethodHandle using an Object[] of arguments.  The array must contain at exactly type().parameterCount() arguments.
                 * Each of the arguments in the array will be coerced to the appropriate type, if possible, based on the MethodType.
                 * @param args An array of Arguments, with length at exactly type().parameterCount() to be used in the call.
                 * @return An Object
                 * @throws Throwable May throw anything depending on the receiver MethodHandle.
                 * @throws WrongMethodTypeException if the target cannot be adjusted to the number of Objects being passed
                 * @throws ClassCastException if an argument cannot be converted
                 */
                // @ts-ignore
                public invokeWithArguments(...args: java.lang.Object[] | any[]): any
                /**
                 * Helper method to call {@link #invokeWithArguments(Object[])}.
                 * @param args - An array of arguments, with length at exactly type().parameterCount() to be used in the call.
                 * @return An Object
                 * @throws Throwable May throw anything depending on the receiver MethodHandle.
                 * @throws WrongMethodTypeException if the target cannot be adjusted to the number of Objects being passed
                 * @throws ClassCastException if an argument cannot be converted
                 * @throws NullPointerException if the args list is null
                 */
                // @ts-ignore
                public invokeWithArguments(args: java.util.List<any> | Array<any>): any
                /**
                 * Create an varargs collector adapter on this MethodHandle.
                 * For {@link #asVarargsCollector(Class)} MethodHandles, <i>invokeExact</i> requires that the arguments
                 * exactly match the underlying MethodType.
                 * <p>
                 * <i>invoke</i> acts as normally unless the arities differ.  In that case, the trailing
                 * arguments are converted as though by a call to {@link #asCollector(int)} before invoking the underlying
                 * methodhandle.
                 * @param arrayParameter - the type of the array to collect the arguments into
                 * @return a varargs-collector methodhandle.
                 * @throws IllegalArgumentException - if the arrayParameter is not an array class or cannot be assigned to the last parameter of the MethodType
                 */
                // @ts-ignore
                public asVarargsCollector(arrayParameter: java.lang.Class<any>): java.lang.invoke.MethodHandle
                /**
                 * Determine whether this is an {@link #asVarargsCollector(Class)} MethodHandle.
                 * @return true if an {#link #asVarargsCollector(Class)} handle, false otherwise.
                 */
                // @ts-ignore
                public isVarargsCollector(): boolean
                /**
                 * Return a fixed arity version of the current MethodHandle.
                 * <p>
                 * This is identical to the current method handle if {@link #isVarargsCollector()} is false.
                 * <p>
                 * If the current method is a varargs collector, then the returned handle will be the same
                 * but without the varargs nature.
                 * @return a fixed arity version of the current method handle
                 */
                // @ts-ignore
                public asFixedArity(): java.lang.invoke.MethodHandle
                // @ts-ignore
                public bindTo(value: java.lang.Object | any): java.lang.invoke.MethodHandle
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
