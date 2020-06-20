declare namespace java {
    namespace nio {
        namespace charset {
            /**
             * A typesafe enumeration for coding-error actions.
             * <p> Instances of this class are used to specify how malformed-input and
             * unmappable-character errors are to be handled by charset <a
             * href="CharsetDecoder.html#cae">decoders</a> and <a
             * href="CharsetEncoder.html#cae">encoders</a>.  </p>
             * @author Mark Reinhold
             * @author JSR-51 Expert Group
             * @since 1.4
             */
            // @ts-ignore
            class CodingErrorAction extends java.lang.Object {
                /**
                 * Action indicating that a coding error is to be handled by dropping the
                 * erroneous input and resuming the coding operation.
                 */
                // @ts-ignore
                readonly IGNORE: java.nio.charset.CodingErrorAction
                /**
                 * Action indicating that a coding error is to be handled by dropping the
                 * erroneous input, appending the coder's replacement value to the output
                 * buffer, and resuming the coding operation.
                 */
                // @ts-ignore
                readonly REPLACE: java.nio.charset.CodingErrorAction
                /**
                 * Action indicating that a coding error is to be reported, either by
                 * returning a {@link CoderResult} object or by throwing a {@link
                 * CharacterCodingException}, whichever is appropriate for the method
                 * implementing the coding process.
                 */
                // @ts-ignore
                readonly REPORT: java.nio.charset.CodingErrorAction
                /**
                 * Returns a string describing this action.
                 * @return A descriptive string
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
