declare namespace java {
    namespace lang {
        namespace invoke {
            /**
             * MethodTypes are immutable objects used to correlate MethodHandles with their invocation sites.
             * <p>
             * A MethodType is a composed of the return type and the parameter types.  These are represented using Class
             * objects of the corresponding type, be it primitive, void, or reference.
             * <p>
             * MethodTypes are interned and immutable.  As such they can be compared for instance equality (==).  Two
             * MethodTypes are equal iff they have the same classes for the their return and parameter types.
             * @since 1.7
             */
            // @ts-ignore
            class MethodType extends java.lang.Object implements java.io.Serializable {
                /**
                 * Convenience method to create a new MethodType with only the parameter at
                 * position changed to the new type.
                 * @param position - the position, starting from zero, of the parameter to be changed.
                 * @param type - the Class to change the parameter to
                 * @return a new MethodType with the parameter at position changed
                 */
                // @ts-ignore
                public changeParameterType(position: number /*int*/, type: java.lang.Class<any>): java.lang.invoke.MethodType
                /**
                 * Convenience method to create a new MethodType with a changed return type.
                 * @param type - the Class that the return type should be changed to.
                 * @return a new MethodType with a changed return type
                 */
                // @ts-ignore
                public changeReturnType(type: java.lang.Class<any>): java.lang.invoke.MethodType
                /**
                 * Convenience method to create a new MethodType after dropping the
                 * parameters between startPosition and endPosition.
                 * @param startPosition - the position, starting from zero, from which to start dropping parameters
                 * @param endPosition - the position of the first parameter not to drop.  Must be greater than startPosition.
                 * @return a new MethodType with parameters between start and end-1 position (inclusive) removed
                 * @throws IndexOutOfBoundsException if the startPosition or endPosition are not valid indexes or if the startPosition is greater than the endPosition
                 */
                // @ts-ignore
                public dropParameterTypes(startPosition: number /*int*/, endPosition: number /*int*/): java.lang.invoke.MethodType
                /**
                 * Compares the specified object with this type for equality.
                 * That is, it returns true if and only if the specified object
                 * is also a method type with exactly the same parameters and return type.
                 */
                // @ts-ignore
                public equals(x: java.lang.Object | any): boolean
                /**
                 * Convenience method erase all reference types to Object.  Primitive and void
                 * remain unchanged.
                 * @return a new MethodType with all non-primitive or void return type and parameters changed to Object.
                 */
                // @ts-ignore
                public erase(): java.lang.invoke.MethodType
                /**
                 * Convenience Method to create a MethodType from bytecode-level method descriptor.
                 * (See JVM Spec 2nd Ed. section 4.4.3).
                 * <p>
                 * All of the classes used in the method descriptor string must be reachable from a
                 * common ClassLoader or an exception will result.
                 * <p>
                 * The ClassLoader parameter may be null, in which case the System ClassLoader will be used.
                 * <p>
                 * Note, the Class names must use JVM syntax in the method descriptor String and therefore
                 * <i>java.lang.Class</i> will be represented as <i>Ljava/lang/Class;</i>
                 * <p>
                 * <b>Example method descriptors</b>
                 * <ul>
                 * <li>(II)V - method taking two ints and return void</li>
                 * <li>(I)Ljava/lang/Integer; - method taking an int and returning an Integer</li>
                 * <li>([I)I - method taking an array of ints and returning an int</li>
                 * </ul>
                 * @param methodDescriptor - the method descriptor string
                 * @param loader - the ClassLoader to be used or null for System ClassLoader
                 * @return a MethodType object representing the method descriptor string
                 * @throws IllegalArgumentException - if the string is not well-formed
                 * @throws TypeNotPresentException - if a named type cannot be found
                 */
                // @ts-ignore
                public static fromMethodDescriptorString(methodDescriptor: java.lang.String | string, loader: java.lang.ClassLoader): java.lang.invoke.MethodType
                /**
                 * Convenience method to convert all types to Object.
                 * @return a new MethodType with both return and parameter types changed to Object
                 */
                // @ts-ignore
                public generic(): java.lang.invoke.MethodType
                /**
                 * Returns the MethodType's hash code, which is defined to be
                 * the same as the hash code of a List composed of the return type
                 * followed by the parameter types.
                 * @return the MethodType's hash code
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Helper method to determine if the return type or any of the parameter types
                 * are primitives.
                 * @return whether the MethodType contains any primitive types
                 */
                // @ts-ignore
                public hasPrimitives(): boolean
                /**
                 * Helper method to determine if the return type or any of the parameter types
                 * are wrappers.  Wrappers are the boxed versions of primitives.
                 * <p>
                 * java.lang.Void is only treated as a wrapper if it occurs as the class of the
                 * return.
                 * @return whether the MethodType contains any wrapper types
                 */
                // @ts-ignore
                public hasWrappers(): boolean
                /**
                 * Return a new MethodType with an additional parameters inserted at position, which
                 * is a zero based index.
                 * @param position - the position to insert into
                 * @param types - zero or mores types for the new parameters
                 * @return a new MethodType with the additional parameters at position
                 * @throws IndexOutOfBoundsException if position is less than 0 or greater than than the number of arguments
                 */
                // @ts-ignore
                public insertParameterTypes(position: number /*int*/, ...types: java.lang.Class<any>[]): java.lang.invoke.MethodType
                /**
                 * Return a new MethodType with an additional parameters inserted at position, which
                 * is a zero based index.
                 * @param position - the position to insert into
                 * @param types - zero or mores types for the new parameters
                 * @return a new MethodType with the additional parameters at position
                 * @throws IllegalArgumentException if position is less than 0 or greater than than the number of arguments
                 */
                // @ts-ignore
                public insertParameterTypes(position: number /*int*/, types: java.util.List<java.lang.Class<any>> | Array<java.lang.Class<any>>): java.lang.invoke.MethodType
                /**
                 * Create a MethodType object with the specified return type and no parameters
                 * @param type - the return type of the MethodHandle
                 * @return a new MethodHandle object
                 */
                // @ts-ignore
                public static methodType(type: java.lang.Class<any>): java.lang.invoke.MethodType
                /**
                 * Return a MethodType object with the specified return type and a single parameter
                 * of type 'parameter0'.
                 * @param type - the return type of the MethodHandle
                 * @param parameter0 - the type of the single parameter
                 * @return a new MethodHandle object
                 */
                // @ts-ignore
                public static methodType(type: java.lang.Class<any>, parameter0: java.lang.Class<any>): java.lang.invoke.MethodType
                /**
                 * Return a MethodType object with the parameter and return types as requested.
                 * @param returnType - the MethodType's return type
                 * @param parameters - the MethodType's parameters
                 * @return the interned MethodType
                 * @throws NullPointerException - if the return type or parameters are null
                 * @throws IllegalArgumentException - if any of the parameters is void
                 */
                // @ts-ignore
                public static methodType(returnType: java.lang.Class<any>, parameters: java.lang.Class<any>[]): java.lang.invoke.MethodType
                /**
                 * Wrapper on {@link MethodType#methodType(Class, Class[])}.
                 * <br>
                 * parameter0 is appended to the remaining parameters.
                 * @param type - the return type
                 * @param parameter0 - the first parameter
                 * @param parameters - the remaining parameters
                 * @return a MethodType object
                 */
                // @ts-ignore
                public static methodType(type: java.lang.Class<any>, parameter0: java.lang.Class<any>, ...parameters: java.lang.Class<any>[]): java.lang.invoke.MethodType
                /**
                 * Wrapper on {@link MethodType#methodType(Class, Class[])}
                 * @param type - the return type
                 * @param parameters - the parameter types
                 * @return a MethodType object
                 */
                // @ts-ignore
                public static methodType(type: java.lang.Class<any>, parameters: java.util.List<java.lang.Class<any>> | Array<java.lang.Class<any>>): java.lang.invoke.MethodType
                /**
                 * Wrapper on {@link #methodType(Class, Class[])}.
                 * Return a MethodType made from the returnType and parameters of the passed in MethodType.
                 * @param returnType - the return type of the new MethodHandle
                 * @param methodType - the MethodType to take the parameter types from
                 * @return a MethodType object made by changing the return type of the passed in MethodType
                 */
                // @ts-ignore
                public static methodType(returnType: java.lang.Class<any>, methodType: java.lang.invoke.MethodType): java.lang.invoke.MethodType
                /**
                 * Static helper method to create a MethodType with only Object return type and parameters.
                 * @param numParameters - number of parameters
                 * @return a MethodType using only Object for return and parameter types.
                 * @throws IllegalArgumentException if numParameters is less than 0 or greater than the allowed number of arguments
                 */
                // @ts-ignore
                public static genericMethodType(numParameters: number /*int*/): java.lang.invoke.MethodType
                /**
                 * Wrapper on {@link #methodType(Class, Class[])}.
                 * <br>
                 * Return a MethodType with an Object return and only Object parameters.  If isVarags is true, the
                 * final parameter will be an Object[].  This Object[] parameter is NOT included in the numParameters
                 * count.
                 * @param numParameters - number of parameters not including the isVarags parameter (if requested)
                 * @param isVarargs - if the Object[] parameter should be added
                 * @return the requested MethodType object
                 * @throws IllegalArgumentException if numParameters is less than 0 or greater than the allowed number of arguments (255 or 254 if isVarargs)
                 */
                // @ts-ignore
                public static genericMethodType(numParameters: number /*int*/, isVarargs: boolean): java.lang.invoke.MethodType
                /**
                 * Helper method to return the parameter types in an array.
                 * <br>
                 * Changes to the array do not affect the MethodType object.
                 * @return the parameter types as an array
                 */
                // @ts-ignore
                public parameterArray(): java.lang.Class<any>[]
                /**
                 * Helper method to return the number of parameters
                 * @return the number of parameters
                 */
                // @ts-ignore
                public parameterCount(): number /*int*/
                /**
                 * Helper method to return the parameter types in a List.
                 * <br>
                 * Changes to the List do not affect the MethodType object.
                 * @return the parameter types as a List
                 */
                // @ts-ignore
                public parameterList(): Array<java.lang.Class<any>>
                /**
                 * Return the type of the parameter at position.
                 * @param position - the parameter to get the type of
                 * @return the parameter's type
                 * @throws IndexOutOfBoundsException if position is less than 0 or an invalid argument index.
                 */
                // @ts-ignore
                public parameterType(position: number /*int*/): java.lang.Class<any>
                /**
                 * @return the type of the return
                 */
                // @ts-ignore
                public returnType(): java.lang.Class<any>
                /**
                 * Create a method descriptor string for this MethodType.
                 * @return a method descriptor string
                 * @see #fromMethodDescriptorString(String, ClassLoader)
                 */
                // @ts-ignore
                public toMethodDescriptorString(): string
                /**
                 * Return a string representation of the MethodType in the form: '(A0,A2,A3...)R'.
                 * The simple name of each class is used.
                 * <p>
                 * Note that this is not the same as {@link #toMethodDescriptorString()}
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * Wrapper method on {@link #methodType(Class, Class[])}.  Replaces all wrapper types with
                 * the appropriate primitive types, including changing {@link java.lang.Void} to
                 * void.
                 * @return a MethodType without any wrapper types
                 * @see #wrap()
                 */
                // @ts-ignore
                public unwrap(): java.lang.invoke.MethodType
                /**
                 * Wrapper method on {@link #methodType(Class, Class[])}.  Replaces all primitive types with
                 * the appropriate wrapper types, including changing void to {@link java.lang.Void}.
                 * @return a MethodType without any primitive types
                 * @see #unwrap()
                 */
                // @ts-ignore
                public wrap(): java.lang.invoke.MethodType
                /**
                 * Returns a MethodType with the additional class types appended to the end.
                 * @param classes - the new parameter types to add to the end of the MethodType's argument types
                 * @return a MethodType with the additional argument types
                 * @throws IllegalArgumentException - if void.class is one of the classes or if the resulting MethodType would have more then 255 arguments
                 * @throws NullPointerException - if the <i>classes</i> array is null or contains null
                 */
                // @ts-ignore
                public appendParameterTypes(...classes: java.lang.Class<any>[]): java.lang.invoke.MethodType
                /**
                 * Returns a MethodType with the additional class types appended to the end.
                 * @param classes - the new parameter types to add to the end of the MethodType's argument types
                 * @return a MethodType with the additional argument types
                 * @throws IllegalArgumentException - if void.class is one of the classes or if the resulting MethodType would have more then 255 arguments
                 * @throws NullPointerException - if the <i>classes</i> is null or contains null
                 */
                // @ts-ignore
                public appendParameterTypes(classes: java.util.List<java.lang.Class<any>> | Array<java.lang.Class<any>>): java.lang.invoke.MethodType
            }
        }
    }
}
