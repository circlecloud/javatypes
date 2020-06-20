declare namespace java {
    namespace text {
        namespace AttributedCharacterIterator {
            /**
             * Defines attribute keys that are used to identify text attributes. These
             * keys are used in {@code AttributedCharacterIterator} and {@code AttributedString}.
             * @see AttributedCharacterIterator
             * @see AttributedString
             * @since 1.2
             */
            // @ts-ignore
            class Attribute extends java.lang.Object implements java.io.Serializable {
                /**
                 * Constructs an {@code Attribute} with the given name.
                 * @param name the name of {#code Attribute}
                 */
                // @ts-ignore
                constructor(name: string)
                /**
                 * Attribute key for the language of some text.
                 * <p> Values are instances of {@link java.util.Locale Locale}.
                 * @see java.util.Locale
                 */
                // @ts-ignore
                readonly LANGUAGE: java.text.AttributedCharacterIterator.Attribute
                /**
                 * Attribute key for the reading of some text. In languages where the written form
                 * and the pronunciation of a word are only loosely related (such as Japanese),
                 * it is often necessary to store the reading (pronunciation) along with the
                 * written form.
                 * <p>Values are instances of {@link Annotation} holding instances of {@link String}.
                 * @see Annotation
                 * @see java.lang.String
                 */
                // @ts-ignore
                readonly READING: java.text.AttributedCharacterIterator.Attribute
                /**
                 * Attribute key for input method segments. Input methods often break
                 * up text into segments, which usually correspond to words.
                 * <p>Values are instances of {@link Annotation} holding a {@code null} reference.
                 * @see Annotation
                 */
                // @ts-ignore
                readonly INPUT_METHOD_SEGMENT: java.text.AttributedCharacterIterator.Attribute
                /**
                 * Compares two objects for equality. This version only returns true
                 * for {@code x.equals(y)} if {@code x} and {@code y} refer
                 * to the same object, and guarantees this for all subclasses.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns a hash code value for the object. This version is identical to
                 * the one in {@code Object}, but is also final.
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns a string representation of the object. This version returns the
                 * concatenation of class name, {@code "("}, a name identifying the attribute
                 * and {@code ")"}.
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Returns the name of the attribute.
                 * @return the name of {#code Attribute}
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Resolves instances being deserialized to the predefined constants.
                 * @return the resolved {#code Attribute} object
                 * @throws InvalidObjectException if the object to resolve is not
                 *                                 an instance of {#code Attribute}
                 */
                // @ts-ignore
                readResolve(): java.lang.Object
            }
        }
    }
}
