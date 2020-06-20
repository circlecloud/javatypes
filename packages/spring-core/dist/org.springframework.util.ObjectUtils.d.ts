declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Miscellaneous object utility methods.
             * <p>Mainly for internal use within the framework.
             * <p>Thanks to Alex Ruiz for contributing several enhancements to this class!
             * @author Juergen Hoeller
             * @author Keith Donald
             * @author Rod Johnson
             * @author Rob Harrop
             * @author Chris Beams
             * @author Sam Brannen
             * @since 19.03.2004
             * @see ClassUtils
             * @see CollectionUtils
             * @see StringUtils
             */
            // @ts-ignore
            class ObjectUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Return whether the given throwable is a checked exception:
                 * that is, neither a RuntimeException nor an Error.
                 * @param ex the throwable to check
                 * @return whether the throwable is a checked exception
                 * @see java.lang.Exception
                 * @see java.lang.RuntimeException
                 * @see java.lang.Error
                 */
                // @ts-ignore
                isCheckedException(ex: Error): boolean
                /**
                 * Check whether the given exception is compatible with the specified
                 * exception types, as declared in a throws clause.
                 * @param ex the exception to check
                 * @param declaredExceptions the exception types declared in the throws clause
                 * @return whether the given exception is compatible
                 */
                // @ts-ignore
                isCompatibleWithThrowsClause(ex: Error, ...declaredExceptions: java.lang.Class[]): boolean
                /**
                 * Determine whether the given object is an array:
                 * either an Object array or a primitive array.
                 * @param obj the object to check
                 */
                // @ts-ignore
                isArray(obj: any): boolean
                /**
                 * Determine whether the given array is empty:
                 * i.e. {@code null} or of zero length.
                 * @param array the array to check
                 * @see #isEmpty(Object)
                 */
                // @ts-ignore
                isEmpty(array: any[]): boolean
                /**
                 * Determine whether the given object is empty.
                 * <p>This method supports the following object types.
                 * <ul>
                 * <li>{@code Optional}: considered empty if {@link Optional#empty()}</li>
                 * <li>{@code Array}: considered empty if its length is zero</li>
                 * <li>{@link CharSequence}: considered empty if its length is zero</li>
                 * <li>{@link Collection}: delegates to {@link Collection#isEmpty()}</li>
                 * <li>{@link Map}: delegates to {@link Map#isEmpty()}</li>
                 * </ul>
                 * <p>If the given object is non-null and not one of the aforementioned
                 * supported types, this method returns {@code false}.
                 * @param obj the object to check
                 * @return {#code true} if the object is {@code null} or <em>empty</em>
                 * @since 4.2
                 * @see Optional#isPresent()
                 * @see ObjectUtils#isEmpty(Object[])
                 * @see StringUtils#hasLength(CharSequence)
                 * @see StringUtils#isEmpty(Object)
                 * @see CollectionUtils#isEmpty(java.util.Collection)
                 * @see CollectionUtils#isEmpty(java.util.Map)
                 */
                // @ts-ignore
                isEmpty(obj: any): boolean
                /**
                 * Unwrap the given object which is potentially a {@link java.util.Optional}.
                 * @param obj the candidate object
                 * @return either the value held within the {#code Optional}, {@code null}
                 *  if the {@code Optional} is empty, or simply the given object as-is
                 * @since 5.0
                 */
                // @ts-ignore
                unwrapOptional(obj: any): java.lang.Object
                /**
                 * Check whether the given array contains the given element.
                 * @param array the array to check (may be {#code null},
                 *  in which case the return value will always be {@code false})
                 * @param element the element to check for
                 * @return whether the element has been found in the given array
                 */
                // @ts-ignore
                containsElement(array: any[], element: any): boolean
                /**
                 * Check whether the given array of enum constants contains a constant with the given name,
                 * ignoring case when determining a match.
                 * @param enumValues the enum values to check, typically obtained via {#code MyEnum.values()}
                 * @param constant the constant name to find (must not be null or empty string)
                 * @return whether the constant has been found in the given array
                 */
                // @ts-ignore
                containsConstant(enumValues: java.lang.Enum[], constant: string): boolean
                /**
                 * Check whether the given array of enum constants contains a constant with the given name.
                 * @param enumValues the enum values to check, typically obtained via {#code MyEnum.values()}
                 * @param constant the constant name to find (must not be null or empty string)
                 * @param caseSensitive whether case is significant in determining a match
                 * @return whether the constant has been found in the given array
                 */
                // @ts-ignore
                containsConstant(enumValues: java.lang.Enum[], constant: string, caseSensitive: boolean): boolean
                /**
                 * Case insensitive alternative to {@link Enum#valueOf(Class, String)}.
                 * @param <E> the concrete Enum type
                 * @param enumValues the array of all Enum constants in question, usually per {#code Enum.values()}
                 * @param constant the constant to get the enum value of
                 * @throws IllegalArgumentException if the given constant is not found in the given array
                 *  of enum values. Use {#link #containsConstant(Enum[], String)} as a guard to avoid this exception.
                 */
                // @ts-ignore
                caseInsensitiveValueOf<E extends java.lang.Enum<?>>(enumValues: E[], constant: string): E
                /**
                 * Append the given object to the given array, returning a new array
                 * consisting of the input array contents plus the given object.
                 * @param array the array to append to (can be {#code null})
                 * @param obj the object to append
                 * @return the new array (of the same component type; never {#code null})
                 */
                // @ts-ignore
                addObjectToArray<A, O extends A>(array: A[], obj: O extends A): A
                /**
                 * Convert the given array (which may be a primitive array) to an
                 * object array (if necessary of primitive wrapper objects).
                 * <p>A {@code null} source value will be converted to an
                 * empty Object array.
                 * @param source the (potentially primitive) array
                 * @return the corresponding object array (never {#code null})
                 * @throws IllegalArgumentException if the parameter is not an array
                 */
                // @ts-ignore
                toObjectArray(source: any): java.lang.Object[]
                /**
                 * Determine if the given objects are equal, returning {@code true} if
                 * both are {@code null} or {@code false} if only one is {@code null}.
                 * <p>Compares arrays with {@code Arrays.equals}, performing an equality
                 * check based on the array elements rather than the array reference.
                 * @param o1 first Object to compare
                 * @param o2 second Object to compare
                 * @return whether the given objects are equal
                 * @see Object#equals(Object)
                 * @see java.util.Arrays#equals
                 */
                // @ts-ignore
                nullSafeEquals(o1: any, o2: any): boolean
                /**
                 * Return as hash code for the given object; typically the value of
                 * {@code Object#hashCode()}}. If the object is an array,
                 * this method will delegate to any of the {@code nullSafeHashCode}
                 * methods for arrays in this class. If the object is {@code null},
                 * this method returns 0.
                 * @see Object#hashCode()
                 * @see #nullSafeHashCode(Object[])
                 * @see #nullSafeHashCode(boolean[])
                 * @see #nullSafeHashCode(byte[])
                 * @see #nullSafeHashCode(char[])
                 * @see #nullSafeHashCode(double[])
                 * @see #nullSafeHashCode(float[])
                 * @see #nullSafeHashCode(int[])
                 * @see #nullSafeHashCode(long[])
                 * @see #nullSafeHashCode(short[])
                 */
                // @ts-ignore
                nullSafeHashCode(obj: any): int
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                nullSafeHashCode(array: any[]): int
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                nullSafeHashCode(array: boolean[]): int
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                nullSafeHashCode(array: number /*byte*/[]): int
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                nullSafeHashCode(array: string[]): int
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                nullSafeHashCode(array: number /*double*/[]): int
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                nullSafeHashCode(array: number /*float*/[]): int
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                nullSafeHashCode(array: number /*int*/[]): int
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                nullSafeHashCode(array: number /*long*/[]): int
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                nullSafeHashCode(array: number /*short*/[]): int
                /**
                 * Return the same value as {@link Boolean#hashCode(boolean)}}.
                 * @deprecated as of Spring Framework 5.0, in favor of the native JDK 8 variant
                 */
                // @ts-ignore
                hashCode(bool: boolean): int
                /**
                 * Return the same value as {@link Double#hashCode(double)}}.
                 * @deprecated as of Spring Framework 5.0, in favor of the native JDK 8 variant
                 */
                // @ts-ignore
                hashCode(dbl: number /*double*/): int
                /**
                 * Return the same value as {@link Float#hashCode(float)}}.
                 * @deprecated as of Spring Framework 5.0, in favor of the native JDK 8 variant
                 */
                // @ts-ignore
                hashCode(flt: number /*float*/): int
                /**
                 * Return the same value as {@link Long#hashCode(long)}}.
                 * @deprecated as of Spring Framework 5.0, in favor of the native JDK 8 variant
                 */
                // @ts-ignore
                hashCode(lng: number /*long*/): int
                /**
                 * Return a String representation of an object's overall identity.
                 * @param obj the object (may be {#code null})
                 * @return the object's identity as String representation,
                 *  or an empty String if the object was {#code null}
                 */
                // @ts-ignore
                identityToString(obj: any): java.lang.String
                /**
                 * Return a hex String form of an object's identity hash code.
                 * @param obj the object
                 * @return the object's identity code in hex notation
                 */
                // @ts-ignore
                getIdentityHexString(obj: any): java.lang.String
                /**
                 * Return a content-based String representation if {@code obj} is
                 * not {@code null}; otherwise returns an empty String.
                 * <p>Differs from {@link #nullSafeToString(Object)} in that it returns
                 * an empty String rather than "null" for a {@code null} value.
                 * @param obj the object to build a display String for
                 * @return a display String representation of {#code obj}
                 * @see #nullSafeToString(Object)
                 */
                // @ts-ignore
                getDisplayString(obj: any): java.lang.String
                /**
                 * Determine the class name for the given object.
                 * <p>Returns a {@code "null"} String if {@code obj} is {@code null}.
                 * @param obj the object to introspect (may be {#code null})
                 * @return the corresponding class name
                 */
                // @ts-ignore
                nullSafeClassName(obj: any): java.lang.String
                /**
                 * Return a String representation of the specified Object.
                 * <p>Builds a String representation of the contents in case of an array.
                 * Returns a {@code "null"} String if {@code obj} is {@code null}.
                 * @param obj the object to build a String representation for
                 * @return a String representation of {#code obj}
                 */
                // @ts-ignore
                nullSafeToString(obj: any): java.lang.String
                /**
                 * Return a String representation of the contents of the specified array.
                 * <p>The String representation consists of a list of the array's elements,
                 * enclosed in curly braces ({@code "{}"}). Adjacent elements are separated
                 * by the characters {@code ", "} (a comma followed by a space).
                 * Returns a {@code "null"} String if {@code array} is {@code null}.
                 * @param array the array to build a String representation for
                 * @return a String representation of {#code array}
                 */
                // @ts-ignore
                nullSafeToString(array: any[]): java.lang.String
                /**
                 * Return a String representation of the contents of the specified array.
                 * <p>The String representation consists of a list of the array's elements,
                 * enclosed in curly braces ({@code "{}"}). Adjacent elements are separated
                 * by the characters {@code ", "} (a comma followed by a space).
                 * Returns a {@code "null"} String if {@code array} is {@code null}.
                 * @param array the array to build a String representation for
                 * @return a String representation of {#code array}
                 */
                // @ts-ignore
                nullSafeToString(array: boolean[]): java.lang.String
                /**
                 * Return a String representation of the contents of the specified array.
                 * <p>The String representation consists of a list of the array's elements,
                 * enclosed in curly braces ({@code "{}"}). Adjacent elements are separated
                 * by the characters {@code ", "} (a comma followed by a space).
                 * Returns a {@code "null"} String if {@code array} is {@code null}.
                 * @param array the array to build a String representation for
                 * @return a String representation of {#code array}
                 */
                // @ts-ignore
                nullSafeToString(array: number /*byte*/[]): java.lang.String
                /**
                 * Return a String representation of the contents of the specified array.
                 * <p>The String representation consists of a list of the array's elements,
                 * enclosed in curly braces ({@code "{}"}). Adjacent elements are separated
                 * by the characters {@code ", "} (a comma followed by a space).
                 * Returns a {@code "null"} String if {@code array} is {@code null}.
                 * @param array the array to build a String representation for
                 * @return a String representation of {#code array}
                 */
                // @ts-ignore
                nullSafeToString(array: string[]): java.lang.String
                /**
                 * Return a String representation of the contents of the specified array.
                 * <p>The String representation consists of a list of the array's elements,
                 * enclosed in curly braces ({@code "{}"}). Adjacent elements are separated
                 * by the characters {@code ", "} (a comma followed by a space).
                 * Returns a {@code "null"} String if {@code array} is {@code null}.
                 * @param array the array to build a String representation for
                 * @return a String representation of {#code array}
                 */
                // @ts-ignore
                nullSafeToString(array: number /*double*/[]): java.lang.String
                /**
                 * Return a String representation of the contents of the specified array.
                 * <p>The String representation consists of a list of the array's elements,
                 * enclosed in curly braces ({@code "{}"}). Adjacent elements are separated
                 * by the characters {@code ", "} (a comma followed by a space).
                 * Returns a {@code "null"} String if {@code array} is {@code null}.
                 * @param array the array to build a String representation for
                 * @return a String representation of {#code array}
                 */
                // @ts-ignore
                nullSafeToString(array: number /*float*/[]): java.lang.String
                /**
                 * Return a String representation of the contents of the specified array.
                 * <p>The String representation consists of a list of the array's elements,
                 * enclosed in curly braces ({@code "{}"}). Adjacent elements are separated
                 * by the characters {@code ", "} (a comma followed by a space).
                 * Returns a {@code "null"} String if {@code array} is {@code null}.
                 * @param array the array to build a String representation for
                 * @return a String representation of {#code array}
                 */
                // @ts-ignore
                nullSafeToString(array: number /*int*/[]): java.lang.String
                /**
                 * Return a String representation of the contents of the specified array.
                 * <p>The String representation consists of a list of the array's elements,
                 * enclosed in curly braces ({@code "{}"}). Adjacent elements are separated
                 * by the characters {@code ", "} (a comma followed by a space).
                 * Returns a {@code "null"} String if {@code array} is {@code null}.
                 * @param array the array to build a String representation for
                 * @return a String representation of {#code array}
                 */
                // @ts-ignore
                nullSafeToString(array: number /*long*/[]): java.lang.String
                /**
                 * Return a String representation of the contents of the specified array.
                 * <p>The String representation consists of a list of the array's elements,
                 * enclosed in curly braces ({@code "{}"}). Adjacent elements are separated
                 * by the characters {@code ", "} (a comma followed by a space).
                 * Returns a {@code "null"} String if {@code array} is {@code null}.
                 * @param array the array to build a String representation for
                 * @return a String representation of {#code array}
                 */
                // @ts-ignore
                nullSafeToString(array: number /*short*/[]): java.lang.String
            }
        }
    }
}
