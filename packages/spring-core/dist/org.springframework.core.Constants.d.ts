declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * This class can be used to parse other classes containing constant definitions
             * in public static final members. The {@code asXXXX} methods of this class
             * allow these constant values to be accessed via their string names.
             * <p>Consider class Foo containing {@code public final static int CONSTANT1 = 66;}
             * An instance of this class wrapping {@code Foo.class} will return the constant value
             * of 66 from its {@code asNumber} method given the argument {@code "CONSTANT1"}.
             * <p>This class is ideal for use in PropertyEditors, enabling them to
             * recognize the same names as the constants themselves, and freeing them
             * from maintaining their own mapping.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @since 16.03.2003
             */
            // @ts-ignore
            class Constants extends java.lang.Object {
                /**
                 * Create a new Constants converter class wrapping the given class.
                 * <p>All <b>public</b> static final variables will be exposed, whatever their type.
                 * @param clazz the class to analyze
                 * @throws IllegalArgumentException if the supplied {#code clazz} is {@code null}
                 */
                // @ts-ignore
                constructor(clazz: java.lang.Class<any>)
                /**
                 * Return the name of the analyzed class.
                 */
                // @ts-ignore
                getClassName(): java.lang.String
                /**
                 * Return the number of constants exposed.
                 */
                // @ts-ignore
                getSize(): int
                /**
                 * Exposes the field cache to subclasses:
                 * a Map from String field name to object value.
                 */
                // @ts-ignore
                getFieldCache(): java.util.Map<java.lang.String, java.lang.Object>
                /**
                 * Return a constant value cast to a Number.
                 * @param code the name of the field (never {#code null})
                 * @return the Number value
                 * @throws ConstantException if the field name wasn't found
                 *  or if the type wasn't compatible with Number
                 * @see #asObject
                 */
                // @ts-ignore
                asNumber(code: string): java.lang.Number
                /**
                 * Return a constant value as a String.
                 * @param code the name of the field (never {#code null})
                 * @return the String value
                 *  Works even if it's not a string (invokes {#code toString()}).
                 * @throws ConstantException if the field name wasn't found
                 * @see #asObject
                 */
                // @ts-ignore
                asString(code: string): java.lang.String
                /**
                 * Parse the given String (upper or lower case accepted) and return
                 * the appropriate value if it's the name of a constant field in the
                 * class that we're analysing.
                 * @param code the name of the field (never {#code null})
                 * @return the Object value
                 * @throws ConstantException if there's no such field
                 */
                // @ts-ignore
                asObject(code: string): java.lang.Object
                /**
                 * Return all names of the given group of constants.
                 * <p>Note that this method assumes that constants are named
                 * in accordance with the standard Java convention for constant
                 * values (i.e. all uppercase). The supplied {@code namePrefix}
                 * will be uppercased (in a locale-insensitive fashion) prior to
                 * the main logic of this method kicking in.
                 * @param namePrefix prefix of the constant names to search (may be {#code null})
                 * @return the set of constant names
                 */
                // @ts-ignore
                getNames(namePrefix: string): java.util.Set<java.lang.String>
                /**
                 * Return all names of the group of constants for the
                 * given bean property name.
                 * @param propertyName the name of the bean property
                 * @return the set of values
                 * @see #propertyToConstantNamePrefix
                 */
                // @ts-ignore
                getNamesForProperty(propertyName: string): java.util.Set<java.lang.String>
                /**
                 * Return all names of the given group of constants.
                 * <p>Note that this method assumes that constants are named
                 * in accordance with the standard Java convention for constant
                 * values (i.e. all uppercase). The supplied {@code nameSuffix}
                 * will be uppercased (in a locale-insensitive fashion) prior to
                 * the main logic of this method kicking in.
                 * @param nameSuffix suffix of the constant names to search (may be {#code null})
                 * @return the set of constant names
                 */
                // @ts-ignore
                getNamesForSuffix(nameSuffix: string): java.util.Set<java.lang.String>
                /**
                 * Return all values of the given group of constants.
                 * <p>Note that this method assumes that constants are named
                 * in accordance with the standard Java convention for constant
                 * values (i.e. all uppercase). The supplied {@code namePrefix}
                 * will be uppercased (in a locale-insensitive fashion) prior to
                 * the main logic of this method kicking in.
                 * @param namePrefix prefix of the constant names to search (may be {#code null})
                 * @return the set of values
                 */
                // @ts-ignore
                getValues(namePrefix: string): java.util.Set<java.lang.Object>
                /**
                 * Return all values of the group of constants for the
                 * given bean property name.
                 * @param propertyName the name of the bean property
                 * @return the set of values
                 * @see #propertyToConstantNamePrefix
                 */
                // @ts-ignore
                getValuesForProperty(propertyName: string): java.util.Set<java.lang.Object>
                /**
                 * Return all values of the given group of constants.
                 * <p>Note that this method assumes that constants are named
                 * in accordance with the standard Java convention for constant
                 * values (i.e. all uppercase). The supplied {@code nameSuffix}
                 * will be uppercased (in a locale-insensitive fashion) prior to
                 * the main logic of this method kicking in.
                 * @param nameSuffix suffix of the constant names to search (may be {#code null})
                 * @return the set of values
                 */
                // @ts-ignore
                getValuesForSuffix(nameSuffix: string): java.util.Set<java.lang.Object>
                /**
                 * Look up the given value within the given group of constants.
                 * <p>Will return the first match.
                 * @param value constant value to look up
                 * @param namePrefix prefix of the constant names to search (may be {#code null})
                 * @return the name of the constant field
                 * @throws ConstantException if the value wasn't found
                 */
                // @ts-ignore
                toCode(value: any, namePrefix: string): java.lang.String
                /**
                 * Look up the given value within the group of constants for
                 * the given bean property name. Will return the first match.
                 * @param value constant value to look up
                 * @param propertyName the name of the bean property
                 * @return the name of the constant field
                 * @throws ConstantException if the value wasn't found
                 * @see #propertyToConstantNamePrefix
                 */
                // @ts-ignore
                toCodeForProperty(value: any, propertyName: string): java.lang.String
                /**
                 * Look up the given value within the given group of constants.
                 * <p>Will return the first match.
                 * @param value constant value to look up
                 * @param nameSuffix suffix of the constant names to search (may be {#code null})
                 * @return the name of the constant field
                 * @throws ConstantException if the value wasn't found
                 */
                // @ts-ignore
                toCodeForSuffix(value: any, nameSuffix: string): java.lang.String
                /**
                 * Convert the given bean property name to a constant name prefix.
                 * <p>Uses a common naming idiom: turning all lower case characters to
                 * upper case, and prepending upper case characters with an underscore.
                 * <p>Example: "imageSize" -> "IMAGE_SIZE"<br>
                 * Example: "imagesize" -> "IMAGESIZE".<br>
                 * Example: "ImageSize" -> "_IMAGE_SIZE".<br>
                 * Example: "IMAGESIZE" -> "_I_M_A_G_E_S_I_Z_E"
                 * @param propertyName the name of the bean property
                 * @return the corresponding constant name prefix
                 * @see #getValuesForProperty
                 * @see #toCodeForProperty
                 */
                // @ts-ignore
                propertyToConstantNamePrefix(propertyName: string): java.lang.String
            }
        }
    }
}
