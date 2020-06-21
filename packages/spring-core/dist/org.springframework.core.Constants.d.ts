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
                public getClassName(): string
                /**
                 * Return the number of constants exposed.
                 */
                // @ts-ignore
                public getSize(): number /*int*/
                /**
                 * Exposes the field cache to subclasses:
                 * a Map from String field name to object value.
                 */
                // @ts-ignore
                getFieldCache(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                /**
                 * Return a constant value cast to a Number.
                 * @param code the name of the field (never {#code null})
                 * @return the Number value
                 * @throws ConstantException if the field name wasn't found
                 *  or if the type wasn't compatible with Number
                 * @see #asObject
                 */
                // @ts-ignore
                public asNumber(code: java.lang.String | string): java.lang.Number
                /**
                 * Return a constant value as a String.
                 * @param code the name of the field (never {#code null})
                 * @return the String value
                 *  Works even if it's not a string (invokes {#code toString()}).
                 * @throws ConstantException if the field name wasn't found
                 * @see #asObject
                 */
                // @ts-ignore
                public asString(code: java.lang.String | string): string
                /**
                 * Parse the given String (upper or lower case accepted) and return
                 * the appropriate value if it's the name of a constant field in the
                 * class that we're analysing.
                 * @param code the name of the field (never {#code null})
                 * @return the Object value
                 * @throws ConstantException if there's no such field
                 */
                // @ts-ignore
                public asObject(code: java.lang.String | string): any
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
                public getNames(namePrefix: java.lang.String | string): Array<java.lang.String | string>
                /**
                 * Return all names of the group of constants for the
                 * given bean property name.
                 * @param propertyName the name of the bean property
                 * @return the set of values
                 * @see #propertyToConstantNamePrefix
                 */
                // @ts-ignore
                public getNamesForProperty(propertyName: java.lang.String | string): Array<java.lang.String | string>
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
                public getNamesForSuffix(nameSuffix: java.lang.String | string): Array<java.lang.String | string>
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
                public getValues(namePrefix: java.lang.String | string): Array<java.lang.Object | any>
                /**
                 * Return all values of the group of constants for the
                 * given bean property name.
                 * @param propertyName the name of the bean property
                 * @return the set of values
                 * @see #propertyToConstantNamePrefix
                 */
                // @ts-ignore
                public getValuesForProperty(propertyName: java.lang.String | string): Array<java.lang.Object | any>
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
                public getValuesForSuffix(nameSuffix: java.lang.String | string): Array<java.lang.Object | any>
                /**
                 * Look up the given value within the given group of constants.
                 * <p>Will return the first match.
                 * @param value constant value to look up
                 * @param namePrefix prefix of the constant names to search (may be {#code null})
                 * @return the name of the constant field
                 * @throws ConstantException if the value wasn't found
                 */
                // @ts-ignore
                public toCode(value: java.lang.Object | any, namePrefix: java.lang.String | string): string
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
                public toCodeForProperty(value: java.lang.Object | any, propertyName: java.lang.String | string): string
                /**
                 * Look up the given value within the given group of constants.
                 * <p>Will return the first match.
                 * @param value constant value to look up
                 * @param nameSuffix suffix of the constant names to search (may be {#code null})
                 * @return the name of the constant field
                 * @throws ConstantException if the value wasn't found
                 */
                // @ts-ignore
                public toCodeForSuffix(value: java.lang.Object | any, nameSuffix: java.lang.String | string): string
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
                public propertyToConstantNamePrefix(propertyName: java.lang.String | string): string
            }
        }
    }
}
