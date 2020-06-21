declare namespace java {
    namespace text {
        namespace NumberFormat {
            /**
             * Defines constants that are used as attribute keys in the
             * <code>AttributedCharacterIterator</code> returned
             * from <code>NumberFormat.formatToCharacterIterator</code> and as
             * field identifiers in <code>FieldPosition</code>.
             * @since 1.4
             */
            // @ts-ignore
            class Field extends java.text.Format.Field {
                /**
                 * Creates a Field instance with the specified
                 * name.
                 * @param name Name of the attribute
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string)
                /**
                 * Constant identifying the integer field.
                 */
                // @ts-ignore
                public static readonly INTEGER: java.text.NumberFormat.Field
                /**
                 * Constant identifying the fraction field.
                 */
                // @ts-ignore
                public static readonly FRACTION: java.text.NumberFormat.Field
                /**
                 * Constant identifying the exponent field.
                 */
                // @ts-ignore
                public static readonly EXPONENT: java.text.NumberFormat.Field
                /**
                 * Constant identifying the decimal separator field.
                 */
                // @ts-ignore
                public static readonly DECIMAL_SEPARATOR: java.text.NumberFormat.Field
                /**
                 * Constant identifying the sign field.
                 */
                // @ts-ignore
                public static readonly SIGN: java.text.NumberFormat.Field
                /**
                 * Constant identifying the grouping separator field.
                 */
                // @ts-ignore
                public static readonly GROUPING_SEPARATOR: java.text.NumberFormat.Field
                /**
                 * Constant identifying the exponent symbol field.
                 */
                // @ts-ignore
                public static readonly EXPONENT_SYMBOL: java.text.NumberFormat.Field
                /**
                 * Constant identifying the percent field.
                 */
                // @ts-ignore
                public static readonly PERCENT: java.text.NumberFormat.Field
                /**
                 * Constant identifying the permille field.
                 */
                // @ts-ignore
                public static readonly PERMILLE: java.text.NumberFormat.Field
                /**
                 * Constant identifying the currency field.
                 */
                // @ts-ignore
                public static readonly CURRENCY: java.text.NumberFormat.Field
                /**
                 * Constant identifying the exponent sign field.
                 */
                // @ts-ignore
                public static readonly EXPONENT_SIGN: java.text.NumberFormat.Field
                /**
                 * Resolves instances being deserialized to the predefined constants.
                 * @throws InvalidObjectException if the constant could not be resolved.
                 * @return resolved NumberFormat.Field constant
                 */
                // @ts-ignore
                readResolve(): any
            }
        }
    }
}
