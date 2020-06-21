declare namespace java {
    namespace nio {
        namespace charset {
            /**
             * A description of the result state of a coder.
             * <p> A charset coder, that is, either a decoder or an encoder, consumes bytes
             * (or characters) from an input buffer, translates them, and writes the
             * resulting characters (or bytes) to an output buffer.  A coding process
             * terminates for one of four categories of reasons, which are described by
             * instances of this class:
             * <ul>
             * <li><p> <i>Underflow</i> is reported when there is no more input to be
             * processed, or there is insufficient input and additional input is
             * required.  This condition is represented by the unique result object
             * {@link #UNDERFLOW}, whose {@link #isUnderflow() isUnderflow} method
             * returns <tt>true</tt>.  </p></li>
             * <li><p> <i>Overflow</i> is reported when there is insufficient room
             * remaining in the output buffer.  This condition is represented by the
             * unique result object {@link #OVERFLOW}, whose {@link #isOverflow()
             * isOverflow} method returns <tt>true</tt>.  </p></li>
             * <li><p> A <i>malformed-input error</i> is reported when a sequence of
             * input units is not well-formed.  Such errors are described by instances of
             * this class whose {@link #isMalformed() isMalformed} method returns
             * <tt>true</tt> and whose {@link #length() length} method returns the length
             * of the malformed sequence.  There is one unique instance of this class for
             * all malformed-input errors of a given length.  </p></li>
             * <li><p> An <i>unmappable-character error</i> is reported when a sequence
             * of input units denotes a character that cannot be represented in the
             * output charset.  Such errors are described by instances of this class
             * whose {@link #isUnmappable() isUnmappable} method returns <tt>true</tt> and
             * whose {@link #length() length} method returns the length of the input
             * sequence denoting the unmappable character.  There is one unique instance
             * of this class for all unmappable-character errors of a given length.
             * </p></li>
             * </ul>
             * <p> For convenience, the {@link #isError() isError} method returns <tt>true</tt>
             * for result objects that describe malformed-input and unmappable-character
             * errors but <tt>false</tt> for those that describe underflow or overflow
             * conditions.  </p>
             * @author Mark Reinhold
             * @author JSR-51 Expert Group
             * @since 1.4
             */
            // @ts-ignore
            class CoderResult extends java.lang.Object {
                /**
                 * Result object indicating underflow, meaning that either the input buffer
                 * has been completely consumed or, if the input buffer is not yet empty,
                 * that additional input is required.
                 */
                // @ts-ignore
                public static readonly UNDERFLOW: java.nio.charset.CoderResult
                /**
                 * Result object indicating overflow, meaning that there is insufficient
                 * room in the output buffer.
                 */
                // @ts-ignore
                public static readonly OVERFLOW: java.nio.charset.CoderResult
                /**
                 * Returns a string describing this coder result.
                 * @return A descriptive string
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * Tells whether or not this object describes an underflow condition.
                 * @return <tt>true</tt> if, and only if, this object denotes underflow
                 */
                // @ts-ignore
                public isUnderflow(): boolean
                /**
                 * Tells whether or not this object describes an overflow condition.
                 * @return <tt>true</tt> if, and only if, this object denotes overflow
                 */
                // @ts-ignore
                public isOverflow(): boolean
                /**
                 * Tells whether or not this object describes an error condition.
                 * @return <tt>true</tt> if, and only if, this object denotes either a
                 *           malformed-input error or an unmappable-character error
                 */
                // @ts-ignore
                public isError(): boolean
                /**
                 * Tells whether or not this object describes a malformed-input error.
                 * @return <tt>true</tt> if, and only if, this object denotes a
                 *           malformed-input error
                 */
                // @ts-ignore
                public isMalformed(): boolean
                /**
                 * Tells whether or not this object describes an unmappable-character
                 * error.
                 * @return <tt>true</tt> if, and only if, this object denotes an
                 *           unmappable-character error
                 */
                // @ts-ignore
                public isUnmappable(): boolean
                /**
                 * Returns the length of the erroneous input described by this
                 * object&nbsp;&nbsp;<i>(optional operation)</i>.
                 * @return The length of the erroneous input, a positive integer
                 * @throws UnsupportedOperationException
                 *           If this object does not describe an error condition, that is,
                 *           if the {#link #isError() isError} does not return <tt>true</tt>
                 */
                // @ts-ignore
                public length(): number /*int*/
                /**
                 * Static factory method that returns the unique object describing a
                 * malformed-input error of the given length.
                 * @param length
                 *           The given length
                 * @return The requested coder-result object
                 */
                // @ts-ignore
                public static malformedForLength(length: number /*int*/): java.nio.charset.CoderResult
                /**
                 * Static factory method that returns the unique result object describing
                 * an unmappable-character error of the given length.
                 * @param length
                 *           The given length
                 * @return The requested coder-result object
                 */
                // @ts-ignore
                public static unmappableForLength(length: number /*int*/): java.nio.charset.CoderResult
                /**
                 * Throws an exception appropriate to the result described by this object.
                 * @throws BufferUnderflowException
                 *           If this object is {#link #UNDERFLOW}
                 * @throws BufferOverflowException
                 *           If this object is {#link #OVERFLOW}
                 * @throws MalformedInputException
                 *           If this object represents a malformed-input error; the
                 *           exception's length value will be that of this object
                 * @throws UnmappableCharacterException
                 *           If this object represents an unmappable-character error; the
                 *           exceptions length value will be that of this object
                 */
                // @ts-ignore
                public throwException(): void
            }
        }
    }
}
