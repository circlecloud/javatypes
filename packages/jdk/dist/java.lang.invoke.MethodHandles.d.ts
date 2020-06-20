declare namespace java {
    namespace lang {
        namespace invoke {
            /**
             * Factory class for creating and adapting MethodHandles.
             * @since 1.7
             */
            // @ts-ignore
            class MethodHandles extends java.lang.Object {
                /**
                 * Return a MethodHandles.Lookup object for the caller.
                 * @return a MethodHandles.Lookup object
                 */
                // @ts-ignore
                lookup(): java.lang.invoke.MethodHandles.Lookup
                /**
                 * Return a MethodHandles.Lookup object that is only able to access <code>public</code> members.
                 * @return a MethodHandles.Lookup object
                 */
                // @ts-ignore
                publicLookup(): java.lang.invoke.MethodHandles.Lookup
                /**
                 * Gets the underlying Member of the provided <code>target</code> MethodHandle. This is done through an unchecked crack of the MethodHandle.
                 * Calling this method is equivalent to obtaining a lookup object capable of cracking the <code>target</code> MethodHandle, calling
                 * <code>Lookup.revealDirect</code> on the <code>target</code> MethodHandle and then calling <code>MethodHandleInfo.reflectAs</code>.
                 * If a SecurityManager is present, this method requires <code>ReflectPermission("suppressAccessChecks")</code>.
                 * @param expected the expected type of the underlying member
                 * @param target the direct MethodHandle to be cracked
                 * @return the underlying member of the <code>target</code> MethodHandle
                 * @throws SecurityException if the caller does not have the required permission (<code>ReflectPermission("suppressAccessChecks")</code>)
                 * @throws NullPointerException if either of the arguments are <code>null</code>
                 * @throws IllegalArgumentException if the <code>target</code> MethodHandle is not a direct MethodHandle
                 * @throws ClassCastException if the underlying member is not of the <code>expected</code> type
                 */
                // @ts-ignore
                reflectAs<T extends java.lang.reflect.Member>(expected: java.lang.Class<T>, target: java.lang.invoke.MethodHandle): T
                /**
                 * Return a MethodHandle that is the equivalent of calling
                 * MethodHandles.lookup().findVirtual(MethodHandle.class, "invokeExact", type).
                 * <p>
                 * The MethodHandle has a method type that is the same as type except that an additional
                 * argument of MethodHandle will be added as the first parameter.
                 * <p>
                 * This method is not subject to the same security checks as a findVirtual call.
                 * @param type - the type of the invokeExact call to lookup
                 * @return a MethodHandle equivalent to calling invokeExact on the first argument.
                 * @throws IllegalArgumentException if the resulting MethodHandle would take too many parameters.
                 */
                // @ts-ignore
                exactInvoker(type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                /**
                 * Return a MethodHandle that is the equivalent of calling
                 * MethodHandles.lookup().findVirtual(MethodHandle.class, "invoke", type).
                 * <p>
                 * The MethodHandle has a method type that is the same as type except that an additional
                 * argument of MethodHandle will be added as the first parameter.
                 * <p>
                 * This method is not subject to the same security checks as a findVirtual call.
                 * @param type - the type of the invoke call to lookup
                 * @return a MethodHandle equivalent to calling invoke on the first argument.
                 * @throws IllegalArgumentException if the resulting MethodHandle would take too many parameters.
                 */
                // @ts-ignore
                invoker(type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                /**
                 * Return a MethodHandle that is able to invoke a MethodHandle of <i>type</i> as though by
                 * invoke after spreading the final Object[] parameter.
                 * <p>
                 * When the <code>MethodHandle</code> is invoked, the argument array must contain exactly <i>spreadCount</i> arguments
                 * to be passed to the original <code>MethodHandle</code>.  The array may be null in the case when <i>spreadCount</i> is zero.
                 * Incorrect argument array size will cause the method to throw an <code>IllegalArgumentException</code> instead of invoking the target.
                 * </p>
                 * @param type - the type of the invoke method to look up
                 * @param fixedArgCount - the number of fixed arguments in the methodtype
                 * @return a MethodHandle that invokes its first argument after spreading the Object array
                 * @throws IllegalArgumentException if the fixedArgCount is less than 0 or greater than type.ParameterCount(), or if the resulting MethodHandle would take too many parameters.
                 * @throws NullPointerException if the type is null
                 */
                // @ts-ignore
                spreadInvoker(type: java.lang.invoke.MethodType, fixedArgCount: number /*int*/): java.lang.invoke.MethodHandle
                /**
                 * Produce a MethodHandle that implements an if-else block.
                 * This MethodHandle is composed from three handles:
                 * <ul>
                 * <li>guard - a boolean returning handle that takes a subset of the arguments passed to the true and false targets</li>
                 * <li>trueTarget - the handle to call if the guard returns true</li>
                 * <li>falseTarget - the handle to call if the guard returns false</li>
                 * </ul>
                 * @param guard - method handle returning boolean to determine which target to call
                 * @param trueTarget - target method handle to call if guard is true
                 * @param falseTarget - target method handle to call if guard is false
                 * @return A MethodHandle that implements an if-else block.
                 * @throws NullPointerException - if any of the three method handles are null
                 * @throws IllegalArgumentException - if any of the following conditions are true:
                 *  				1) trueTarget and falseTarget have different MethodTypes
                 *  				2) the guard handle doesn't have a boolean return value
                 *  				3) the guard handle doesn't take a subset of the target handle's arguments
                 */
                // @ts-ignore
                guardWithTest(guard: java.lang.invoke.MethodHandle, trueTarget: java.lang.invoke.MethodHandle, falseTarget: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                /**
                 * Produce a MethodHandle that implements a try-catch block.
                 * This adapter acts as though the <i>tryHandle</i> were run inside a try block.  If <i>tryHandle</i>
                 * throws an exception of type <i>throwableClass</i>, the <i>catchHandle</i> is invoked with the
                 * exception instance and the original arguments.
                 * <p>
                 * The catchHandle may take a subset of the original arguments rather than the full set.  Its first
                 * argument will be the exception instance.
                 * <p>
                 * Both the catchHandle and the tryHandle must have the same return type.
                 * @param tryHandle - the method handle to wrap with the try block
                 * @param throwableClass - the class of exception to be caught and handled by catchHandle
                 * @param catchHandle - the method handle to call if an exception of type throwableClass is thrown by tryHandle
                 * @return a method handle that will call catchHandle if tryHandle throws an exception of type throwableClass
                 * @throws NullPointerException - if any of the parameters are null
                 * @throws IllegalArgumentException - if tryHandle and catchHandle have different return types, 
                 *  or the catchHandle doesn't take a throwableClass as its first argument,
                 *  of if catchHandle arguments[1-N] differ from tryHandle arguments[0-(N-1)]
                 */
                // @ts-ignore
                catchException(tryHandle: java.lang.invoke.MethodHandle, throwableClass: java.lang.Class<java.lang.Throwable>, catchHandle: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                /**
                 * Produce a MethodHandle that acts as an identity function.  It will accept a single
                 * argument and return it.
                 * @param classType - the type to use for the return and parameter types
                 * @return an identity MethodHandle that returns its argument
                 * @throws NullPointerException - if the classType is null
                 * @throws IllegalArgumentException - if the the classType is void.
                 */
                // @ts-ignore
                identity(classType: java.lang.Class<any>): java.lang.invoke.MethodHandle
                /**
                 * Create a MethodHandle that returns the <i>constantValue</i> on each invocation.
                 * <p>
                 * Conversions of the <i>constantValue</i> to the <i>returnType</i> occur if possible, otherwise
                 * a ClassCastException is thrown.  For primitive <i>returnType</i>, widening primitive conversions are
                 * attempted.  Otherwise, reference conversions are attempted.
                 * @param returnType - the return type of the MethodHandle.
                 * @param constantValue - the value to return from the MethodHandle when invoked
                 * @return a MethodHandle that always returns the <i>constantValue</i>
                 * @throws NullPointerException - if the returnType is null
                 * @throws ClassCastException - if the constantValue cannot be converted to returnType
                 * @throws IllegalArgumentException - if the returnType is void
                 */
                // @ts-ignore
                constant(returnType: java.lang.Class<any>, constantValue: any): java.lang.invoke.MethodHandle
                /**
                 * Return a MethodHandle able to read from the array.  The MethodHandle's return type will be the same as
                 * the elements of the array.  The MethodHandle will also accept two arguments - the first being the array, typed correctly,
                 * and the second will be the the <code>int</code> index into the array.
                 * @param arrayType - the type of the array
                 * @return a MethodHandle able to return values from the array
                 * @throws IllegalArgumentException - if arrayType is not actually an array
                 */
                // @ts-ignore
                arrayElementGetter(arrayType: java.lang.Class<any>): java.lang.invoke.MethodHandle
                /**
                 * Return a MethodHandle able to write to the array.  The MethodHandle will have a void return type and take three
                 * arguments: the first being the array, typed correctly, the second will be the the <code>int</code> index into the array,
                 * and the third will be the item to write into the array
                 * @param arrayType - the type of the array
                 * @return a MehtodHandle able to write into the array
                 * @throws IllegalArgumentException - if arrayType is not actually an array
                 */
                // @ts-ignore
                arrayElementSetter(arrayType: java.lang.Class<any>): java.lang.invoke.MethodHandle
                /**
                 * Return a MethodHandle that will throw the passed in Exception object.  The return type is largely
                 * irrelevant as the method never completes normally.  Any return type that is convenient can be
                 * used.
                 * @param returnType - The return type for the method
                 * @param exception - the type of Throwable to accept as an argument
                 * @return a MethodHandle that throws the passed in exception object
                 */
                // @ts-ignore
                throwException(returnType: java.lang.Class<any>, exception: java.lang.Class<java.lang.Throwable>): java.lang.invoke.MethodHandle
                /**
                 * Return a MethodHandle that will adapt the return value of <i>handle</i> by running the <i>filter</i>
                 * on it and returning the result of the filter.
                 * <p>
                 * If <i>handle</i> has a void return, <i>filter</i> must not take any parameters.
                 * @param handle - the MethodHandle that will have its return value adapted
                 * @param filter - the MethodHandle that will do the return adaption.
                 * @return a MethodHandle that will run the filter handle on the result of handle.
                 * @throws NullPointerException - if handle or filter is null
                 * @throws IllegalArgumentException - if the return type of <i>handle</i> differs from the type of the only argument to <i>filter</i>
                 */
                // @ts-ignore
                filterReturnValue(handle: java.lang.invoke.MethodHandle, filter: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                /**
                 * Produce a MethodHandle that adapts its arguments using the filter methodhandles before calling the underlying handle.
                 * <p>
                 * The type of the adapter is the type of the original handle with the filter argument types replacing their corresponding
                 * arguments.  Each of the adapters must return the correct type for their corresponding argument.
                 * <p>
                 * If the filters array is empty or contains only null filters, the original handle will be returned.
                 * @param handle - the underlying methodhandle to call with the filtered arguments
                 * @param startPosition - the position to start applying the filters at
                 * @param filters - the array of adapter handles to apply to the arguments
                 * @return a MethodHandle that modifies the arguments by applying the filters before calling the underlying handle
                 * @throws NullPointerException - if handle or filters is null
                 * @throws IllegalArgumentException - if one of the filters is not applicable to the corresponding handle argument 
                 *  				or there are more filters then arguments when starting at startPosition
                 *  				or startPosition is invalid
                 *  				or if the resulting MethodHandle would take too many parameters
                 */
                // @ts-ignore
                filterArguments(handle: java.lang.invoke.MethodHandle, startPosition: number /*int*/, ...filters: java.lang.invoke.MethodHandle[]): java.lang.invoke.MethodHandle
                /**
                 * Produce a MethodHandle that preprocesses some of the arguments by calling the preprocessor handle.
                 * If the preprocessor handle has a return type, it must be the same as the first argument type of the <i>handle</i>.
                 * If the preprocessor returns void, it does not contribute the first argument to the <i>handle</i>.
                 * In all cases, the preprocessor handle accepts a subset of the arguments for the handle.
                 * @param handle - the handle to call after preprocessing
                 * @param preprocessor - a methodhandle that preprocesses some of the incoming arguments
                 * @return a MethodHandle that preprocesses some of the arguments to the handle before calling the next handle, possibly with an additional first argument
                 * @throws NullPointerException - if any of the arguments are null
                 * @throws IllegalArgumentException - if the preprocessor's return type is not void and it differs from the first argument type of the handle,
                 *  			or if the arguments taken by the preprocessor isn't a subset of the arguments to the handle
                 */
                // @ts-ignore
                foldArguments(handle: java.lang.invoke.MethodHandle, preprocessor: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                /**
                 * Produce a MethodHandle that will permute the incoming arguments according to the
                 * permute array.  The new handle will have a type of permuteType.
                 * <p>
                 * The permutations can include duplicating or rearranging the arguments.  The permute
                 * array must have the same number of items as there are parameters in the
                 * handle's type.
                 * <p>
                 * Each argument type must exactly match - no conversions are applied.
                 * @param handle - the original handle to call after permuting the arguments
                 * @param permuteType - the new type of the adapter handle
                 * @param permute - the reordering from the permuteType to the handle type
                 * @return a MethodHandle that rearranges the arguments before calling the original handle
                 * @throws NullPointerException - if any of the arguments are null
                 * @throws IllegalArgumentException - if permute array is not the same length as handle.type().parameterCount() or
                 *  			if handle.type() and permuteType have different return types, or
                 *  			if the permute arguments don't match the handle.type()
                 */
                // @ts-ignore
                permuteArguments(handle: java.lang.invoke.MethodHandle, permuteType: java.lang.invoke.MethodType, ...permute: number /*int*/[]): java.lang.invoke.MethodHandle
                /**
                 * Produce a MethodHandle that preprocesses some of the arguments by calling the filter handle.
                 * If the <i>filter</i> handle has a return type, it must be the same as the argument type at pos in the <i>target</i> arguments.
                 * If the <i>filter</i> returns void, it does not contribute an argument to the <i>target</i> arguments at pos.
                 * The <i>filter</i> handle consumes a subset (size equal to the <i>filter's</i> arity) of the returned handle's arguments, starting at pos.
                 * @param target - the target to call after preprocessing the arguments
                 * @param pos - argument index in handle arguments where the filter will collect its arguments and/or insert its return value as an argument to the target
                 * @param filter - a MethodHandle that preprocesses some of the incoming arguments
                 * @return a MethodHandle that preprocesses some of the arguments to the handle before calling the target with the new arguments
                 * @throws NullPointerException - if either target or filter are null
                 * @throws IllegalArgumentException - if the preprocessor's return type is not void and it differs from the target argument type at pos,
                 *  			if pos is not between 0 and the target's arity (exclusive for non-void filter, inclusive for void filter), or if the generated handle would
                 *  			have too many parameters
                 */
                // @ts-ignore
                collectArguments(target: java.lang.invoke.MethodHandle, pos: number /*int*/, filter: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                /**
                 * This method returns a method handle that delegates to the original method handle,
                 * ignoring a particular range of arguments (starting at a given location and
                 * with given types).  The type of the returned method handle is the type of the original handle
                 * with the given types inserted in the parameter type list at the given location.
                 * @param originalHandle - the original method handle to be transformed
                 * @param location -  the location of the first argument to be removed
                 * @param valueTypes - an array of the argument types to be removed
                 * @return a MethodHandle - representing a transformed handle as described above
                 */
                // @ts-ignore
                dropArguments(originalHandle: java.lang.invoke.MethodHandle, location: number /*int*/, ...valueTypes: java.lang.Class[]): java.lang.invoke.MethodHandle
                /**
                 * This method returns a method handle that delegates to the original method handle,
                 * ignoring a particular range of arguments (starting at a given location and
                 * with given types).  The type of the returned method handle is the type of the original handle
                 * with the given types inserted in the parameter type list at the given location.
                 * @param originalHandle - the original method handle to be transformed
                 * @param location -  the location of the first argument to be removed
                 * @param valueTypes - a List of the argument types to be removed
                 * @return a MethodHandle - representing a transformed handle as described above
                 */
                // @ts-ignore
                dropArguments(originalHandle: java.lang.invoke.MethodHandle, location: number /*int*/, valueTypes: Array<java.lang.Class<any>>): java.lang.invoke.MethodHandle
                /**
                 * Produce an adapter that converts the incoming arguments from <i>type</i> to the underlying MethodHandle's type
                 * and converts the return value as required.
                 * <p>
                 * The following conversions, beyond those allowed by {@link MethodHandle#asType(MethodType)} are also allowed:
                 * <ul>
                 * <li>A conversion to an interface is done without a cast</li>
                 * <li>A boolean is treated as a single bit unsigned integer and may be converted to other primitive types</li>
                 * <li>A primitive can also be cast using Java casting conversion if asType would have allowed Java method invocation conversion</li>
                 * <li>An unboxing conversion, possibly followed by a widening primitive conversion</li>
                 * </ul>
                 * These additional rules match Java casting conversion and those of the bytecode verifier.
                 * @param handle - the MethodHandle to invoke after converting the arguments to its type
                 * @param type - the type to convert from
                 * @return a MethodHandle which does the required argument and return conversions, if possible
                 * @throws NullPointerException - if either of the arguments are null
                 * @throws WrongMethodTypeException - if an illegal conversion is requested
                 */
                // @ts-ignore
                explicitCastArguments(handle: java.lang.invoke.MethodHandle, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                /**
                 * This method returns a method handle that delegates to the original method handle,
                 * adding a particular range of arguments (starting at a given location and
                 * with given types).  The type of the returned method handle is the type of the original handle
                 * with the given types dropped from the parameter type list at the given location.
                 * @param originalHandle - the original method handle to be transformed
                 * @param location -  the location of the first argument to be inserted
                 * @param values - an array of the argument types to be inserted
                 * @return a MethodHandle - representing a transformed handle as described above
                 */
                // @ts-ignore
                insertArguments(originalHandle: java.lang.invoke.MethodHandle, location: number /*int*/, ...values: any[]): java.lang.invoke.MethodHandle
            }
        }
    }
}
