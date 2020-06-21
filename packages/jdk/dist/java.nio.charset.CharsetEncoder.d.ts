declare namespace java {
    namespace nio {
        namespace charset {
            /**
             * An engine that can transform a sequence of sixteen-bit Unicode characters into a sequence of
             * bytes in a specific charset.
             * <a name="steps"></a>
             * <p> The input character sequence is provided in a character buffer or a series
             * of such buffers.  The output byte sequence is written to a byte buffer
             * or a series of such buffers.  An encoder should always be used by making
             * the following sequence of method invocations, hereinafter referred to as an
             * <i>encoding operation</i>:
             * <ol>
             * <li><p> Reset the encoder via the {@link #reset reset} method, unless it
             * has not been used before; </p></li>
             * <li><p> Invoke the {@link #encode encode} method zero or more times, as
             * long as additional input may be available, passing <tt>false</tt> for the
             * <tt>endOfInput</tt> argument and filling the input buffer and flushing the
             * output buffer between invocations; </p></li>
             * <li><p> Invoke the {@link #encode encode} method one final time, passing
             * <tt>true</tt> for the <tt>endOfInput</tt> argument; and then </p></li>
             * <li><p> Invoke the {@link #flush flush} method so that the encoder can
             * flush any internal state to the output buffer. </p></li>
             * </ol>
             * Each invocation of the {@link #encode encode} method will encode as many
             * characters as possible from the input buffer, writing the resulting bytes
             * to the output buffer.  The {@link #encode encode} method returns when more
             * input is required, when there is not enough room in the output buffer, or
             * when an encoding error has occurred.  In each case a {@link CoderResult}
             * object is returned to describe the reason for termination.  An invoker can
             * examine this object and fill the input buffer, flush the output buffer, or
             * attempt to recover from an encoding error, as appropriate, and try again.
             * <a name="ce"></a>
             * <p> There are two general types of encoding errors.  If the input character
             * sequence is not a legal sixteen-bit Unicode sequence then the input is considered <i>malformed</i>.  If
             * the input character sequence is legal but cannot be mapped to a valid
             * byte sequence in the given charset then an <i>unmappable character</i> has been encountered.
             * <a name="cae"></a>
             * <p> How an encoding error is handled depends upon the action requested for
             * that type of error, which is described by an instance of the {@link
             * CodingErrorAction} class.  The possible error actions are to {@linkplain
             * CodingErrorAction#IGNORE ignore} the erroneous input, {@linkplain
             * CodingErrorAction#REPORT report} the error to the invoker via
             * the returned {@link CoderResult} object, or {@linkplain CodingErrorAction#REPLACE
             * replace} the erroneous input with the current value of the
             * replacement byte array.  The replacement
             * is initially set to the encoder's default replacement, which often
             * (but not always) has the initial value&nbsp;<tt>{</tt>&nbsp;<tt>(byte)'?'</tt>&nbsp;<tt>}</tt>;
             * its value may be changed via the {@link #replaceWith(byte[])
             * replaceWith} method.
             * <p> The default action for malformed-input and unmappable-character errors
             * is to {@linkplain CodingErrorAction#REPORT report} them.  The
             * malformed-input error action may be changed via the {@link
             * #onMalformedInput(CodingErrorAction) onMalformedInput} method; the
             * unmappable-character action may be changed via the {@link
             * #onUnmappableCharacter(CodingErrorAction) onUnmappableCharacter} method.
             * <p> This class is designed to handle many of the details of the encoding
             * process, including the implementation of error actions.  An encoder for a
             * specific charset, which is a concrete subclass of this class, need only
             * implement the abstract {@link #encodeLoop encodeLoop} method, which
             * encapsulates the basic encoding loop.  A subclass that maintains internal
             * state should, additionally, override the {@link #implFlush implFlush} and
             * {@link #implReset implReset} methods.
             * <p> Instances of this class are not safe for use by multiple concurrent
             * threads.  </p>
             * @author Mark Reinhold
             * @author JSR-51 Expert Group
             * @since 1.4
             * @see ByteBuffer
             * @see CharBuffer
             * @see Charset
             * @see CharsetDecoder
             */
            // @ts-ignore
            abstract class CharsetEncoder extends java.lang.Object {
                /**
                 * Initializes a new encoder.  The new encoder will have the given
                 * bytes-per-char and replacement values.
                 * @param cs
                 *          The charset that created this encoder
                 * @param averageBytesPerChar
                 *          A positive float value indicating the expected number of
                 *          bytes that will be produced for each input character
                 * @param maxBytesPerChar
                 *          A positive float value indicating the maximum number of
                 *          bytes that will be produced for each input character
                 * @param replacement
                 *          The initial replacement; must not be <tt>null</tt>, must have
                 *          non-zero length, must not be longer than maxBytesPerChar,
                 *          and must be {#linkplain #isLegalReplacement legal}
                 * @throws IllegalArgumentException
                 *           If the preconditions on the parameters do not hold
                 */
                // @ts-ignore
                constructor(cs: java.nio.charset.Charset, averageBytesPerChar: number /*float*/, maxBytesPerChar: number /*float*/, replacement: number /*byte*/[])
                /**
                 * Initializes a new encoder.  The new encoder will have the given
                 * bytes-per-char values and its replacement will be the
                 * byte array <tt>{</tt>&nbsp;<tt>(byte)'?'</tt>&nbsp;<tt>}</tt>.
                 * @param cs
                 *          The charset that created this encoder
                 * @param averageBytesPerChar
                 *          A positive float value indicating the expected number of
                 *          bytes that will be produced for each input character
                 * @param maxBytesPerChar
                 *          A positive float value indicating the maximum number of
                 *          bytes that will be produced for each input character
                 * @throws IllegalArgumentException
                 *           If the preconditions on the parameters do not hold
                 */
                // @ts-ignore
                constructor(cs: java.nio.charset.Charset, averageBytesPerChar: number /*float*/, maxBytesPerChar: number /*float*/)
                /**
                 * Returns the charset that created this encoder.
                 * @return This encoder's charset
                 */
                // @ts-ignore
                public charset(): java.nio.charset.Charset
                /**
                 * Returns this encoder's replacement value.
                 * @return This encoder's current replacement,
                 *           which is never <tt>null</tt> and is never empty
                 */
                // @ts-ignore
                public replacement(): number /*byte*/[]
                /**
                 * Changes this encoder's replacement value.
                 * <p> This method invokes the {@link #implReplaceWith implReplaceWith}
                 * method, passing the new replacement, after checking that the new
                 * replacement is acceptable.  </p>
                 * @param newReplacement  The replacement value
                 * 
                 * 
                 * 
                 * 
                 * 
                 * 
                 *          The new replacement; must not be <tt>null</tt>, must have
                 *          non-zero length, must not be longer than the value returned by
                 *          the {#link #maxBytesPerChar() maxBytesPerChar} method, and
                 *          must be {@link #isLegalReplacement legal}
                 * @return This encoder
                 * @throws IllegalArgumentException
                 *           If the preconditions on the parameter do not hold
                 */
                // @ts-ignore
                public replaceWith(newReplacement: number /*byte*/[]): java.nio.charset.CharsetEncoder
                /**
                 * Reports a change to this encoder's replacement value.
                 * <p> The default implementation of this method does nothing.  This method
                 * should be overridden by encoders that require notification of changes to
                 * the replacement.  </p>
                 * @param newReplacement    The replacement value
                 */
                // @ts-ignore
                implReplaceWith(newReplacement: number /*byte*/[]): void
                /**
                 * Tells whether or not the given byte array is a legal replacement value
                 * for this encoder.
                 * <p> A replacement is legal if, and only if, it is a legal sequence of
                 * bytes in this encoder's charset; that is, it must be possible to decode
                 * the replacement into one or more sixteen-bit Unicode characters.
                 * <p> The default implementation of this method is not very efficient; it
                 * should generally be overridden to improve performance.  </p>
                 * @param repl  The byte array to be tested
                 * @return <tt>true</tt> if, and only if, the given byte array
                 *           is a legal replacement value for this encoder
                 */
                // @ts-ignore
                public isLegalReplacement(repl: number /*byte*/[]): boolean
                /**
                 * Returns this encoder's current action for malformed-input errors.
                 * @return The current malformed-input action, which is never <tt>null</tt>
                 */
                // @ts-ignore
                public malformedInputAction(): java.nio.charset.CodingErrorAction
                /**
                 * Changes this encoder's action for malformed-input errors.
                 * <p> This method invokes the {@link #implOnMalformedInput
                 * implOnMalformedInput} method, passing the new action.  </p>
                 * @param newAction  The new action; must not be <tt>null</tt>
                 * @return This encoder
                 * @throws IllegalArgumentException
                 *          If the precondition on the parameter does not hold
                 */
                // @ts-ignore
                public onMalformedInput(newAction: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetEncoder
                /**
                 * Reports a change to this encoder's malformed-input action.
                 * <p> The default implementation of this method does nothing.  This method
                 * should be overridden by encoders that require notification of changes to
                 * the malformed-input action.  </p>
                 * @param newAction  The new action
                 */
                // @ts-ignore
                implOnMalformedInput(newAction: java.nio.charset.CodingErrorAction): void
                /**
                 * Returns this encoder's current action for unmappable-character errors.
                 * @return The current unmappable-character action, which is never
                 *          <tt>null</tt>
                 */
                // @ts-ignore
                public unmappableCharacterAction(): java.nio.charset.CodingErrorAction
                /**
                 * Changes this encoder's action for unmappable-character errors.
                 * <p> This method invokes the {@link #implOnUnmappableCharacter
                 * implOnUnmappableCharacter} method, passing the new action.  </p>
                 * @param newAction  The new action; must not be <tt>null</tt>
                 * @return This encoder
                 * @throws IllegalArgumentException
                 *          If the precondition on the parameter does not hold
                 */
                // @ts-ignore
                public onUnmappableCharacter(newAction: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetEncoder
                /**
                 * Reports a change to this encoder's unmappable-character action.
                 * <p> The default implementation of this method does nothing.  This method
                 * should be overridden by encoders that require notification of changes to
                 * the unmappable-character action.  </p>
                 * @param newAction  The new action
                 */
                // @ts-ignore
                implOnUnmappableCharacter(newAction: java.nio.charset.CodingErrorAction): void
                /**
                 * Returns the average number of bytes that will be produced for each
                 * character of input.  This heuristic value may be used to estimate the size
                 * of the output buffer required for a given input sequence.
                 * @return The average number of bytes produced
                 *           per character of input
                 */
                // @ts-ignore
                public averageBytesPerChar(): number /*float*/
                /**
                 * Returns the maximum number of bytes that will be produced for each
                 * character of input.  This value may be used to compute the worst-case size
                 * of the output buffer required for a given input sequence.
                 * @return The maximum number of bytes that will be produced per
                 *           character of input
                 */
                // @ts-ignore
                public maxBytesPerChar(): number /*float*/
                /**
                 * Encodes as many characters as possible from the given input buffer,
                 * writing the results to the given output buffer.
                 * <p> The buffers are read from, and written to, starting at their current
                 * positions.  At most {@link Buffer#remaining in.remaining()} characters
                 * will be read and at most {@link Buffer#remaining out.remaining()}
                 * bytes will be written.  The buffers' positions will be advanced to
                 * reflect the characters read and the bytes written, but their marks and
                 * limits will not be modified.
                 * <p> In addition to reading characters from the input buffer and writing
                 * bytes to the output buffer, this method returns a {@link CoderResult}
                 * object to describe its reason for termination:
                 * <ul>
                 * <li><p> {@link CoderResult#UNDERFLOW} indicates that as much of the
                 * input buffer as possible has been encoded.  If there is no further
                 * input then the invoker can proceed to the next step of the
                 * <a href="#steps">encoding operation</a>.  Otherwise this method
                 * should be invoked again with further input.  </p></li>
                 * <li><p> {@link CoderResult#OVERFLOW} indicates that there is
                 * insufficient space in the output buffer to encode any more characters.
                 * This method should be invoked again with an output buffer that has
                 * more {@linkplain Buffer#remaining remaining} bytes. This is
                 * typically done by draining any encoded bytes from the output
                 * buffer.  </p></li>
                 * <li><p> A {@linkplain CoderResult#malformedForLength
                 * malformed-input} result indicates that a malformed-input
                 * error has been detected.  The malformed characters begin at the input
                 * buffer's (possibly incremented) position; the number of malformed
                 * characters may be determined by invoking the result object's {@link
                 * CoderResult#length() length} method.  This case applies only if the
                 * {@linkplain #onMalformedInput malformed action} of this encoder
                 * is {@link CodingErrorAction#REPORT}; otherwise the malformed input
                 * will be ignored or replaced, as requested.  </p></li>
                 * <li><p> An {@linkplain CoderResult#unmappableForLength
                 * unmappable-character} result indicates that an
                 * unmappable-character error has been detected.  The characters that
                 * encode the unmappable character begin at the input buffer's (possibly
                 * incremented) position; the number of such characters may be determined
                 * by invoking the result object's {@link CoderResult#length() length}
                 * method.  This case applies only if the {@linkplain #onUnmappableCharacter
                 * unmappable action} of this encoder is {@link
                 * CodingErrorAction#REPORT}; otherwise the unmappable character will be
                 * ignored or replaced, as requested.  </p></li>
                 * </ul>
                 * In any case, if this method is to be reinvoked in the same encoding
                 * operation then care should be taken to preserve any characters remaining
                 * in the input buffer so that they are available to the next invocation.
                 * <p> The <tt>endOfInput</tt> parameter advises this method as to whether
                 * the invoker can provide further input beyond that contained in the given
                 * input buffer.  If there is a possibility of providing additional input
                 * then the invoker should pass <tt>false</tt> for this parameter; if there
                 * is no possibility of providing further input then the invoker should
                 * pass <tt>true</tt>.  It is not erroneous, and in fact it is quite
                 * common, to pass <tt>false</tt> in one invocation and later discover that
                 * no further input was actually available.  It is critical, however, that
                 * the final invocation of this method in a sequence of invocations always
                 * pass <tt>true</tt> so that any remaining unencoded input will be treated
                 * as being malformed.
                 * <p> This method works by invoking the {@link #encodeLoop encodeLoop}
                 * method, interpreting its results, handling error conditions, and
                 * reinvoking it as necessary.  </p>
                 * @param in
                 *          The input character buffer
                 * @param out
                 *          The output byte buffer
                 * @param endOfInput
                 *          <tt>true</tt> if, and only if, the invoker can provide no
                 *          additional input characters beyond those in the given buffer
                 * @return A coder-result object describing the reason for termination
                 * @throws IllegalStateException
                 *           If an encoding operation is already in progress and the previous
                 *           step was an invocation neither of the {#link #reset reset}
                 *           method, nor of this method with a value of <tt>false</tt> for
                 *           the <tt>endOfInput</tt> parameter, nor of this method with a
                 *           value of <tt>true</tt> for the <tt>endOfInput</tt> parameter
                 *           but a return value indicating an incomplete encoding operation
                 * @throws CoderMalfunctionError
                 *           If an invocation of the encodeLoop method threw
                 *           an unexpected exception
                 */
                // @ts-ignore
                public encode(input: java.nio.CharBuffer, out: java.nio.ByteBuffer, endOfInput: boolean): java.nio.charset.CoderResult
                /**
                 * Flushes this encoder.
                 * <p> Some encoders maintain internal state and may need to write some
                 * final bytes to the output buffer once the overall input sequence has
                 * been read.
                 * <p> Any additional output is written to the output buffer beginning at
                 * its current position.  At most {@link Buffer#remaining out.remaining()}
                 * bytes will be written.  The buffer's position will be advanced
                 * appropriately, but its mark and limit will not be modified.
                 * <p> If this method completes successfully then it returns {@link
                 * CoderResult#UNDERFLOW}.  If there is insufficient room in the output
                 * buffer then it returns {@link CoderResult#OVERFLOW}.  If this happens
                 * then this method must be invoked again, with an output buffer that has
                 * more room, in order to complete the current <a href="#steps">encoding
                 * operation</a>.
                 * <p> If this encoder has already been flushed then invoking this method
                 * has no effect.
                 * <p> This method invokes the {@link #implFlush implFlush} method to
                 * perform the actual flushing operation.  </p>
                 * @param out
                 *          The output byte buffer
                 * @return A coder-result object, either {#link CoderResult#UNDERFLOW} or
                 *           {@link CoderResult#OVERFLOW}
                 * @throws IllegalStateException
                 *           If the previous step of the current encoding operation was an
                 *           invocation neither of the {#link #flush flush} method nor of
                 *           the three-argument {@link
                 *           #encode(CharBuffer,ByteBuffer,boolean) encode} method
                 *           with a value of <tt>true</tt> for the <tt>endOfInput</tt>
                 *           parameter
                 */
                // @ts-ignore
                public flush(out: java.nio.ByteBuffer): java.nio.charset.CoderResult
                /**
                 * Flushes this encoder.
                 * <p> The default implementation of this method does nothing, and always
                 * returns {@link CoderResult#UNDERFLOW}.  This method should be overridden
                 * by encoders that may need to write final bytes to the output buffer
                 * once the entire input sequence has been read. </p>
                 * @param out
                 *          The output byte buffer
                 * @return A coder-result object, either {#link CoderResult#UNDERFLOW} or
                 *           {@link CoderResult#OVERFLOW}
                 */
                // @ts-ignore
                implFlush(out: java.nio.ByteBuffer): java.nio.charset.CoderResult
                /**
                 * Resets this encoder, clearing any internal state.
                 * <p> This method resets charset-independent state and also invokes the
                 * {@link #implReset() implReset} method in order to perform any
                 * charset-specific reset actions.  </p>
                 * @return This encoder
                 */
                // @ts-ignore
                public reset(): java.nio.charset.CharsetEncoder
                /**
                 * Resets this encoder, clearing any charset-specific internal state.
                 * <p> The default implementation of this method does nothing.  This method
                 * should be overridden by encoders that maintain internal state.  </p>
                 */
                // @ts-ignore
                implReset(): void
                /**
                 * Encodes one or more characters into one or more bytes.
                 * <p> This method encapsulates the basic encoding loop, encoding as many
                 * characters as possible until it either runs out of input, runs out of room
                 * in the output buffer, or encounters an encoding error.  This method is
                 * invoked by the {@link #encode encode} method, which handles result
                 * interpretation and error recovery.
                 * <p> The buffers are read from, and written to, starting at their current
                 * positions.  At most {@link Buffer#remaining in.remaining()} characters
                 * will be read, and at most {@link Buffer#remaining out.remaining()}
                 * bytes will be written.  The buffers' positions will be advanced to
                 * reflect the characters read and the bytes written, but their marks and
                 * limits will not be modified.
                 * <p> This method returns a {@link CoderResult} object to describe its
                 * reason for termination, in the same manner as the {@link #encode encode}
                 * method.  Most implementations of this method will handle encoding errors
                 * by returning an appropriate result object for interpretation by the
                 * {@link #encode encode} method.  An optimized implementation may instead
                 * examine the relevant error action and implement that action itself.
                 * <p> An implementation of this method may perform arbitrary lookahead by
                 * returning {@link CoderResult#UNDERFLOW} until it receives sufficient
                 * input.  </p>
                 * @param in
                 *          The input character buffer
                 * @param out
                 *          The output byte buffer
                 * @return A coder-result object describing the reason for termination
                 */
                // @ts-ignore
                abstract encodeLoop(input: java.nio.CharBuffer, out: java.nio.ByteBuffer): java.nio.charset.CoderResult
                /**
                 * Convenience method that encodes the remaining content of a single input
                 * character buffer into a newly-allocated byte buffer.
                 * <p> This method implements an entire <a href="#steps">encoding
                 * operation</a>; that is, it resets this encoder, then it encodes the
                 * characters in the given character buffer, and finally it flushes this
                 * encoder.  This method should therefore not be invoked if an encoding
                 * operation is already in progress.  </p>
                 * @param in
                 *          The input character buffer
                 * @return A newly-allocated byte buffer containing the result of the
                 *          encoding operation.  The buffer's position will be zero and its
                 *          limit will follow the last byte written.
                 * @throws IllegalStateException
                 *           If an encoding operation is already in progress
                 * @throws MalformedInputException
                 *           If the character sequence starting at the input buffer's current
                 *           position is not a legal sixteen-bit Unicode sequence and the current malformed-input action
                 *           is {#link CodingErrorAction#REPORT}
                 * @throws UnmappableCharacterException
                 *           If the character sequence starting at the input buffer's current
                 *           position cannot be mapped to an equivalent byte sequence and
                 *           the current unmappable-character action is {#link
                 *           CodingErrorAction#REPORT}
                 */
                // @ts-ignore
                public encode(input: java.nio.CharBuffer): java.nio.ByteBuffer
                /**
                 * Tells whether or not this encoder can encode the given character.
                 * <p> This method returns <tt>false</tt> if the given character is a
                 * surrogate character; such characters can be interpreted only when they
                 * are members of a pair consisting of a high surrogate followed by a low
                 * surrogate.  The {@link #canEncode(java.lang.CharSequence)
                 * canEncode(CharSequence)} method may be used to test whether or not a
                 * character sequence can be encoded.
                 * <p> This method may modify this encoder's state; it should therefore not
                 * be invoked if an <a href="#steps">encoding operation</a> is already in
                 * progress.
                 * <p> The default implementation of this method is not very efficient; it
                 * should generally be overridden to improve performance.  </p>
                 * @param c
                 *           The given character
                 * @return <tt>true</tt> if, and only if, this encoder can encode
                 *           the given character
                 * @throws IllegalStateException
                 *           If an encoding operation is already in progress
                 */
                // @ts-ignore
                public canEncode(c: string): boolean
                /**
                 * Tells whether or not this encoder can encode the given character
                 * sequence.
                 * <p> If this method returns <tt>false</tt> for a particular character
                 * sequence then more information about why the sequence cannot be encoded
                 * may be obtained by performing a full <a href="#steps">encoding
                 * operation</a>.
                 * <p> This method may modify this encoder's state; it should therefore not
                 * be invoked if an encoding operation is already in progress.
                 * <p> The default implementation of this method is not very efficient; it
                 * should generally be overridden to improve performance.  </p>
                 * @param cs
                 *           The given character sequence
                 * @return <tt>true</tt> if, and only if, this encoder can encode
                 *           the given character without throwing any exceptions and without
                 *           performing any replacements
                 * @throws IllegalStateException
                 *           If an encoding operation is already in progress
                 */
                // @ts-ignore
                public canEncode(cs: java.lang.CharSequence): boolean
            }
        }
    }
}
