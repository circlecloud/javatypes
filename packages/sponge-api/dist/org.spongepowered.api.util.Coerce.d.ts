declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * Utility class for coercing unknown values to specific target types.
                 */
                // @ts-ignore
                class Coerce extends java.lang.Object {
                    /**
                     * Coerce the supplied object to a string.
                     * @param obj Object to coerce
                     * @return Object as a string, empty string if the object is null
                     */
                    // @ts-ignore
                    public static toString(obj: java.lang.Object | any): string
                    /**
                     * Gets the given object as a {@link String}.
                     * @param obj The object to translate
                     * @return The string value, if available
                     */
                    // @ts-ignore
                    public static asString(obj: java.lang.Object | any): java.util.Optional<java.lang.String | string>
                    /**
                     * Coerce the supplied object to a list. Accepts lists and all types of 1D
                     * arrays. Also (naively) supports lists in Strings in a format like
                     * <code>{1,2,3,I,am,a,list}</code>
                     * @param obj Object to coerce
                     * @return Some kind of List filled with unimaginable horrors
                     */
                    // @ts-ignore
                    public static toList(obj: java.lang.Object | any): Array<any>
                    /**
                     * Gets the given object as a {@link List}.
                     * @param obj The object to translate
                     * @return The list, if available
                     */
                    // @ts-ignore
                    public static asList(obj: java.lang.Object | any): java.util.Optional<java.util.List<any> | Array<any>>
                    /**
                     * Coerce the specified object to a list containing only objects of type
                     * specified by <code>ofClass</code>. Also coerces list values where
                     * possible.
                     * @param obj Object to coerce
                     * @param ofClass Class to coerce to
                     * @param <T> type of list (notional)
                     * @return List of coerced values
                     */
                    // @ts-ignore
                    public static toListOf<T>(obj: java.lang.Object | any, ofClass: java.lang.Class<T>): Array<T>
                    /**
                     * Coerce the supplied object to a boolean, matches strings such as "yes" as
                     * well as literal boolean values.
                     * @param obj Object to coerce
                     * @return Object as a boolean, <code>false</code> if the object is null
                     */
                    // @ts-ignore
                    public static toBoolean(obj: java.lang.Object | any): boolean
                    /**
                     * Gets the given object as a {@link Boolean}.
                     * @param obj The object to translate
                     * @return The boolean, if available
                     */
                    // @ts-ignore
                    public static asBoolean(obj: java.lang.Object | any): java.util.Optional<java.lang.Boolean>
                    /**
                     * Coerce the supplied object to an integer, parse it if necessary.
                     * @param obj Object to coerce
                     * @return Object as an integer, <code>0</code> if the object is null or
                     *          cannot be parsed
                     */
                    // @ts-ignore
                    public static toInteger(obj: java.lang.Object | any): number /*int*/
                    /**
                     * Gets the given object as a {@link Integer}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     * @param obj The object to translate
                     * @return The integer value, if available
                     */
                    // @ts-ignore
                    public static asInteger(obj: java.lang.Object | any): java.util.Optional<java.lang.Integer | number>
                    /**
                     * Coerce the supplied object to a double-precision floating-point number,
                     * parse it if necessary.
                     * @param obj Object to coerce
                     * @return Object as a double, <code>0.0</code> if the object is null or
                     *          cannot be parsed
                     */
                    // @ts-ignore
                    public static toDouble(obj: java.lang.Object | any): number /*double*/
                    /**
                     * Gets the given object as a {@link Double}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     * @param obj The object to translate
                     * @return The double value, if available
                     */
                    // @ts-ignore
                    public static asDouble(obj: java.lang.Object | any): java.util.Optional<java.lang.Double | number>
                    /**
                     * Coerce the supplied object to a single-precision floating-point number,
                     * parse it if necessary.
                     * @param obj Object to coerce
                     * @return Object as a float, <code>0.0</code> if the object is null or
                     *          cannot be parsed
                     */
                    // @ts-ignore
                    public static toFloat(obj: java.lang.Object | any): number /*float*/
                    /**
                     * Gets the given object as a {@link Float}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     * @param obj The object to translate
                     * @return The float value, if available
                     */
                    // @ts-ignore
                    public static asFloat(obj: java.lang.Object | any): java.util.Optional<java.lang.Float | number>
                    /**
                     * Coerce the supplied object to a short number, parse it if necessary.
                     * @param obj Object to coerce
                     * @return Object as a short, <code>0</code> if the object is null or cannot
                     *          be parsed
                     */
                    // @ts-ignore
                    public static toShort(obj: java.lang.Object | any): number /*short*/
                    /**
                     * Gets the given object as a {@link Short}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     * @param obj The object to translate
                     * @return The short value, if available
                     */
                    // @ts-ignore
                    public static asShort(obj: java.lang.Object | any): java.util.Optional<java.lang.Short | number>
                    /**
                     * Coerce the supplied object to a byte number, parse it if necessary.
                     * @param obj Object to coerce
                     * @return Object as a byte, <code>0</code> if the object is null or cannot
                     *          be parsed
                     */
                    // @ts-ignore
                    public static toByte(obj: java.lang.Object | any): number /*byte*/
                    /**
                     * Gets the given object as a {@link Byte}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     * @param obj The object to translate
                     * @return The byte value, if available
                     */
                    // @ts-ignore
                    public static asByte(obj: java.lang.Object | any): java.util.Optional<java.lang.Byte | number>
                    /**
                     * Coerce the supplied object to a long number, parse it if necessary.
                     * @param obj Object to coerce
                     * @return Object as a long, <code>0</code> if the object is null or cannot
                     *          be parsed
                     */
                    // @ts-ignore
                    public static toLong(obj: java.lang.Object | any): number /*long*/
                    /**
                     * Gets the given object as a {@link Long}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     * @param obj The object to translate
                     * @return The long value, if available
                     */
                    // @ts-ignore
                    public static asLong(obj: java.lang.Object | any): java.util.Optional<java.lang.Long | number>
                    /**
                     * Coerce the supplied object to a character, parse it if necessary.
                     * @param obj Object to coerce
                     * @return Object as a character, <code>' '</code> if the object is
                     *          null or cannot be parsed
                     */
                    // @ts-ignore
                    public static toChar(obj: java.lang.Object | any): string
                    /**
                     * Gets the given object as a {@link Character}.
                     * @param obj The object to translate
                     * @return The character, if available
                     */
                    // @ts-ignore
                    public static asChar(obj: java.lang.Object | any): java.util.Optional<java.lang.Character>
                    /**
                     * Coerce the specified object to an enum of the supplied type, returns the
                     * first enum constant in the enum if parsing fails.
                     * @param obj Object to coerce
                     * @param enumClass Enum class to coerce to
                     * @param <E> enum type
                     * @return Coerced enum value
                     */
                    // @ts-ignore
                    public static toEnum<E extends java.lang.Enum<E>>(obj: java.lang.Object | any, enumClass: java.lang.Class<E>): E
                    /**
                     * Coerce the specified object to an enum of the supplied type, returns the
                     * specified default value if parsing fails.
                     * @param obj Object to coerce
                     * @param enumClass Enum class to coerce to
                     * @param defaultValue default value to return if coercion fails
                     * @param <E> enum type
                     * @return Coerced enum value
                     */
                    // @ts-ignore
                    public static toEnum<E extends java.lang.Enum<E>>(obj: java.lang.Object | any, enumClass: java.lang.Class<E>, defaultValue: E): E
                    /**
                     * Coerce the specified object to the specified pseudo-enum type using the
                     * supplied pseudo-enum dictionary class.
                     * @param obj Object to coerce
                     * @param pseudoEnumClass The pseudo-enum class
                     * @param dictionaryClass Pseudo-enum dictionary class to look in
                     * @param defaultValue Value to return if lookup fails
                     * @param <T> pseudo-enum type
                     * @return Coerced value or default if coercion fails
                     */
                    // @ts-ignore
                    public static toPseudoEnum<T>(obj: java.lang.Object | any, pseudoEnumClass: java.lang.Class<T>, dictionaryClass: java.lang.Class<any>, defaultValue: T): T
                    /**
                     * Coerce the supplied object to a Vector2i.
                     * @param obj Object to coerce
                     * @return Vector2i, returns Vector2i.ZERO if coercion failed
                     */
                    // @ts-ignore
                    public static toVector2i(obj: java.lang.Object | any): Vector2i
                }
            }
        }
    }
}
