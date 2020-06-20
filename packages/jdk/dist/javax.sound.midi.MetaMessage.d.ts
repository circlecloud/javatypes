declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * A <code>MetaMessage</code> is a <code>{@link MidiMessage}</code> that is not meaningful to synthesizers, but
             * that can be stored in a MIDI file and interpreted by a sequencer program.
             * (See the discussion in the <code>MidiMessage</code>
             * class description.)  The Standard MIDI Files specification defines
             * various types of meta-events, such as sequence number, lyric, cue point,
             * and set tempo.  There are also meta-events
             * for such information as lyrics, copyrights, tempo indications, time and key
             * signatures, markers, etc.  For more information, see the Standard MIDI Files 1.0
             * specification, which is part of the Complete MIDI 1.0 Detailed Specification
             * published by the MIDI Manufacturer's Association
             * (<a href = http://www.midi.org>http://www.midi.org</a>).
             * <p>
             * When data is being transported using MIDI wire protocol,
             * a <code>{@link ShortMessage}</code> with the status value <code>0xFF</code> represents
             * a system reset message.  In MIDI files, this same status value denotes a <code>MetaMessage</code>.
             * The types of meta-message are distinguished from each other by the first byte
             * that follows the status byte <code>0xFF</code>.  The subsequent bytes are data
             * bytes.  As with system exclusive messages, there are an arbitrary number of
             * data bytes, depending on the type of <code>MetaMessage</code>.
             * @see MetaEventListener
             * @author David Rivas
             * @author Kara Kytle
             */
            // @ts-ignore
            class MetaMessage extends javax.sound.midi.MidiMessage {
                /**
                 * Constructs a new <code>MetaMessage</code>. The contents of
                 * the message are not set here; use
                 * {@link #setMessage(int, byte[], int) setMessage}
                 * to set them subsequently.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new {@code MetaMessage} and sets the message parameters.
                 * The contents of the message can be changed by using
                 * the {@code setMessage} method.
                 * @param type   meta-message type (must be less than 128)
                 * @param data   the data bytes in the MIDI message
                 * @param length an amount of bytes in the {#code data} byte array;
                 *      it should be non-negative and less than or equal to
                 *      {@code data.length}
                 * @throws InvalidMidiDataException if the parameter values do not specify
                 *      a valid MIDI meta message
                 * @see #setMessage(int, byte[], int)
                 * @see #getType()
                 * @see #getData()
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(type: number /*int*/, data: number /*byte*/[], length: number /*int*/)
                /**
                 * Constructs a new <code>MetaMessage</code>.
                 * @param data an array of bytes containing the complete message.
                 *  The message data may be changed using the <code>setMessage</code>
                 *  method.
                 * @see #setMessage
                 */
                // @ts-ignore
                constructor(data: number /*byte*/[])
                /**
                 * Status byte for <code>MetaMessage</code> (0xFF, or 255), which is used
                 * in MIDI files.  It has the same value as SYSTEM_RESET, which
                 * is used in the real-time "MIDI wire" protocol.
                 * @see MidiMessage#getStatus
                 */
                // @ts-ignore
                readonly META: number /*int*/
                /**
                 * Sets the message parameters for a <code>MetaMessage</code>.
                 * Since only one status byte value, <code>0xFF</code>, is allowed for meta-messages,
                 * it does not need to be specified here.  Calls to <code>{@link MidiMessage#getStatus getStatus}</code> return
                 * <code>0xFF</code> for all meta-messages.
                 * <p>
                 * The <code>type</code> argument should be a valid value for the byte that
                 * follows the status byte in the <code>MetaMessage</code>.  The <code>data</code> argument
                 * should contain all the subsequent bytes of the <code>MetaMessage</code>.  In other words,
                 * the byte that specifies the type of <code>MetaMessage</code> is not considered a data byte.
                 * @param type              meta-message type (must be less than 128)
                 * @param data              the data bytes in the MIDI message
                 * @param length    the number of bytes in the <code>data</code>
                 *  byte array
                 * @throws InvalidMidiDataException  if the
                 *  parameter values do not specify a valid MIDI meta message
                 */
                // @ts-ignore
                setMessage(type: number /*int*/, data: number /*byte*/[], length: number /*int*/): void
                /**
                 * Obtains the type of the <code>MetaMessage</code>.
                 * @return an integer representing the <code>MetaMessage</code> type
                 */
                // @ts-ignore
                getType(): int
                /**
                 * Obtains a copy of the data for the meta message.  The returned
                 * array of bytes does not include the status byte or the message
                 * length data.  The length of the data for the meta message is
                 * the length of the array.  Note that the length of the entire
                 * message includes the status byte and the meta message type
                 * byte, and therefore may be longer than the returned array.
                 * @return array containing the meta message data.
                 * @see MidiMessage#getLength
                 */
                // @ts-ignore
                getData(): byte[]
                /**
                 * Creates a new object of the same class and with the same contents
                 * as this object.
                 * @return a clone of this instance
                 */
                // @ts-ignore
                clone(): java.lang.Object
            }
        }
    }
}
