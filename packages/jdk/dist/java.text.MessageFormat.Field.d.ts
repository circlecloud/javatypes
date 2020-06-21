declare namespace java {
    namespace text {
        namespace MessageFormat {
            /**
             * Defines constants that are used as attribute keys in the
             * <code>AttributedCharacterIterator</code> returned
             * from <code>MessageFormat.formatToCharacterIterator</code>.
             * @since 1.4
             */
            // @ts-ignore
            class Field extends java.text.Format.Field {
                /**
                 * Creates a Field with the specified name.
                 * @param name Name of the attribute
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string)
                /**
                 * Constant identifying a portion of a message that was generated
                 * from an argument passed into <code>formatToCharacterIterator</code>.
                 * The value associated with the key will be an <code>Integer</code>
                 * indicating the index in the <code>arguments</code> array of the
                 * argument from which the text was generated.
                 */
                // @ts-ignore
                public static readonly ARGUMENT: java.text.MessageFormat.Field
                /**
                 * Resolves instances being deserialized to the predefined constants.
                 * @throws InvalidObjectException if the constant could not be
                 *          resolved.
                 * @return resolved MessageFormat.Field constant
                 */
                // @ts-ignore
                readResolve(): any
            }
        }
    }
}
