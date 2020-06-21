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
            abstract class ObjectUtils extends java.lang.Object {
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
                public static isCheckedException(ex: java.lang.Throwable | Error): boolean
                /**
                 * Check whether the given exception is compatible with the specified
                 * exception types, as declared in a throws clause.
                 * @param ex the exception to check
                 * @param declaredExceptions the exception types declared in the throws clause
                 * @return whether the given exception is compatible
                 */
                // @ts-ignore
                public static isCompatibleWithThrowsClause(ex: java.lang.Throwable | Error, ...declaredExceptions: java.lang.Class<any>[]): boolean
                /**
                 * Determine whether the given object is an array:
                 * either an Object array or a primitive array.
                 * @param obj the object to check
                 */
                // @ts-ignore
                public static isArray(obj: java.lang.Object | any): boolean
                /**
                 * Determine whether the given array is empty:
                 * i.e. {@code null} or of zero length.
                 * @param array the array to check
                 * @see #isEmpty(Object)
                 */
                // @ts-ignore
                public static isEmpty(array: java.lang.Object[] | any[]): boolean
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
                public static isEmpty(obj: java.lang.Object | any): boolean
                /**
                 * Unwrap the given object which is potentially a {@link java.util.Optional}.
                 * @param obj the candidate object
                 * @return either the value held within the {#code Optional}, {@code null}
                 *  if the {@code Optional} is empty, or simply the given object as-is
                 * @since 5.0
                 */
                // @ts-ignore
                public static unwrapOptional(obj: java.lang.Object | any): any
                /**
                 * Check whether the given array contains the given element.
                 * @param array the array to check (may be {#code null},
                 *  in which case the return value will always be {@code false})
                 * @param element the element to check for
                 * @return whether the element has been found in the given array
                 */
                // @ts-ignore
                public static containsElement(array: java.lang.Object[] | any[], element: java.lang.Object | any): boolean
                /**
                 * Check whether the given array of enum constants contains a constant with the given name,
                 * ignoring case when determining a match.
                 * @param enumValues the enum values to check, typically obtained via {#code MyEnum.values()}
                 * @param constant the constant name to find (must not be null or empty string)
                 * @return whether the constant has been found in the given array
                 */
                // @ts-ignore
                public static containsConstant(enumValues: java.lang.Enum<any>[], constant: java.lang.String | string): boolean
                /**
                 * Check whether the given array of enum constants contains a constant with the given name.
                 * @param enumValues the enum values to check, typically obtained via {#code MyEnum.values()}
                 * @param constant the constant name to find (must not be null or empty string)
                 * @param caseSensitive whether case is significant in determining a match
                 * @return whether the constant has been found in the given array
                 */
                // @ts-ignore
                public static containsConstant(enumValues: java.lang.Enum<any>[], constant: java.lang.String | string, caseSensitive: boolean): boolean
                /**
                 * Case insensitive alternative to {@link Enum#valueOf(Class, String)}.
                 * @param <E> the concrete Enum type
                 * @param enumValues the array of all Enum constants in question, usually per {#code Enum.values()}
                 * @param constant the constant to get the enum value of
                 * @throws IllegalArgumentException if the given constant is not found in the given array
                 *  of enum values. Use {#link #containsConstant(Enum[], String)} as a guard to avoid this exception.
                 */
                // @ts-ignore
                public static caseInsensitiveValueOf<E extends java.lang.Enum<?>>(enumValues: E[], constant: java.lang.String | string): E
                /**
                 * Append the given object to the given array, returning a new array
                 * consisting of the input array contents plus the given object.
                 * @param array the array to append to (can be {#code null})
                 * @param obj the object to append
                 * @return the new array (of the same component type; never {#code null})
                 */
                // @ts-ignore
                public static addObjectToArray<A, O extends A>(array: A[], obj: O): A
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
                public static toObjectArray(source: java.lang.Object | any): any[]
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
                public static nullSafeEquals(o1: java.lang.Object | any, o2: java.lang.Object | any): boolean
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
                public static nullSafeHashCode(obj: java.lang.Object | any): number /*int*/
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                public static nullSafeHashCode(array: java.lang.Object[] | any[]): number /*int*/
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                public static nullSafeHashCode(array: boolean[]): number /*int*/
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                public static nullSafeHashCode(array: number /*byte*/[]): number /*int*/
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                public static nullSafeHashCode(array: string[]): number /*int*/
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                public static nullSafeHashCode(array: number /*double*/[]): number /*int*/
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                public static nullSafeHashCode(array: number /*float*/[]): number /*int*/
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                public static nullSafeHashCode(array: number /*int*/[]): number /*int*/
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                public static nullSafeHashCode(array: number /*long*/[]): number /*int*/
                /**
                 * Return a hash code based on the contents of the specified array.
                 * If {@code array} is {@code null}, this method returns 0.
                 */
                // @ts-ignore
                public static nullSafeHashCode(array: number /*short*/[]): number /*int*/
                /**
                 * Return the same value as {@link Boolean#hashCode(boolean)}}.
                 * @deprecated as of Spring Framework 5.0, in favor of the native JDK 8 variant
                 */
                // @ts-ignore
                public static hashCode(bool: boolean): number /*int*/
                /**
                 * Return the same value as {@link Double#hashCode(double)}}.
                 * @deprecated as of Spring Framework 5.0, in favor of the native JDK 8 variant
                 */
                // @ts-ignore
                public static hashCode(dbl: number /*double*/): number /*int*/
                /**
                 * Return the same value as {@link Float#hashCode(float)}}.
                 * @deprecated as of Spring Framework 5.0, in favor of the native JDK 8 variant
                 */
                // @ts-ignore
                public static hashCode(flt: number /*float*/): number /*int*/
                /**
                 * Return the same value as {@link Long#hashCode(long)}}.
                 * @deprecated as of Spring Framework 5.0, in favor of the native JDK 8 variant
                 */
                // @ts-ignore
                public static hashCode(lng: number /*long*/): number /*int*/
                /**
                 * Return a String representation of an object's overall identity.
                 * @param obj the object (may be {#code null})
                 * @return the object's identity as String representation,
                 *  or an empty String if the object was {#code null}
                 */
                // @ts-ignore
                public static identityToString(obj: java.lang.Object | any): string
                /**
                 * Return a hex String form of an object's identity hash code.
                 * @param obj the object
                 * @return the object's identity code in hex notation
                 */
                // @ts-ignore
                public static getIdentityHexString(obj: java.lang.Object | any): string
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
                public static getDisplayString(obj: java.lang.Object | any): string
                /**
                 * Determine the class name for the given object.
                 * <p>Returns a {@code "null"} String if {@code obj} is {@code null}.
                 * @param obj the object to introspect (may be {#code null})
                 * @return the corresponding class name
                 */
                // @ts-ignore
                public static nullSafeClassName(obj: java.lang.Object | any): string
                /**
                 * Return a String representation of the specified Object.
                 * <p>Builds a String representation of the contents in case of an array.
                 * Returns a {@code "null"} String if {@code obj} is {@code null}.
                 * @param obj the object to build a String representation for
                 * @return a String representation of {#code obj}
                 */
                // @ts-ignore
                public static nullSafeToString(obj: java.lang.Object | any): string
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
                public static nullSafeToString(array: java.lang.Object[] | any[]): string
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
                public static nullSafeToString(array: boolean[]): string
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
                public static nullSafeToString(array: number /*byte*/[]): string
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
                public static nullSafeToString(array: string[]): string
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
                public static nullSafeToString(array: number /*double*/[]): string
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
                public static nullSafeToString(array: number /*float*/[]): string
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
                public static nullSafeToString(array: number /*int*/[]): string
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
                public static nullSafeToString(array: number /*long*/[]): string
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
                public static nullSafeToString(array: number /*short*/[]): string
            }
        }
    }
}
