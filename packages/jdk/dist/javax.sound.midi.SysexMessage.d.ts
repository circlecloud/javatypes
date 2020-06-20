declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * A <code>SysexMessage</code> object represents a MIDI system exclusive message.
             * <p>
             * When a system exclusive message is read from a MIDI file, it always has
             * a defined length.  Data from a system exclusive message from a MIDI file
             * should be stored in the data array of a <code>SysexMessage</code> as
             * follows: the system exclusive message status byte (0xF0 or 0xF7), all
             * message data bytes, and finally the end-of-exclusive flag (0xF7).
             * The length reported by the <code>SysexMessage</code> object is therefore
             * the length of the system exclusive data plus two: one byte for the status
             * byte and one for the end-of-exclusive flag.
             * <p>
             * As dictated by the Standard MIDI Files specification, two status byte values are legal
             * for a <code>SysexMessage</code> read from a MIDI file:
             * <ul>
             * <li>0xF0: System Exclusive message (same as in MIDI wire protocol)</li>
             * <li>0xF7: Special System Exclusive message</li>
             * </ul>
             * <p>
             * When Java Sound is used to handle system exclusive data that is being received
             * using MIDI wire protocol, it should place the data in one or more
             * <code>SysexMessages</code>.  In this case, the length of the system exclusive data
             * is not known in advance; the end of the system exclusive data is marked by an
             * end-of-exclusive flag (0xF7) in the MIDI wire byte stream.
             * <ul>
             * <li>0xF0: System Exclusive message (same as in MIDI wire protocol)</li>
             * <li>0xF7: End of Exclusive (EOX)</li>
             * </ul>
             * The first <code>SysexMessage</code> object containing data for a particular system
             * exclusive message should have the status value 0xF0.  If this message contains all
             * the system exclusive data
             * for the message, it should end with the status byte 0xF7 (EOX).
             * Otherwise, additional system exclusive data should be sent in one or more
             * <code>SysexMessages</code> with a status value of 0xF7.  The <code>SysexMessage</code>
             * containing the last of the data for the system exclusive message should end with the
             * value 0xF7 (EOX) to mark the end of the system exclusive message.
             * <p>
             * If system exclusive data from <code>SysexMessages</code> objects is being transmitted
             * using MIDI wire protocol, only the initial 0xF0 status byte, the system exclusive
             * data itself, and the final 0xF7 (EOX) byte should be propagated; any 0xF7 status
             * bytes used to indicate that a <code>SysexMessage</code> contains continuing system
             * exclusive data should not be propagated via MIDI wire protocol.
             * @author David Rivas
             * @author Kara Kytle
             * @author Florian Bomers
             */
            // @ts-ignore
            class SysexMessage extends javax.sound.midi.MidiMessage {
                /**
                 * Constructs a new <code>SysexMessage</code>. The
                 * contents of the new message are guaranteed to specify
                 * a valid MIDI message.  Subsequently, you may set the
                 * contents of the message using one of the <code>setMessage</code>
                 * methods.
                 * @see #setMessage
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new {@code SysexMessage} and sets the data for
                 * the message. The first byte of the data array must be a valid system
                 * exclusive status byte (0xF0 or 0xF7).
                 * The contents of the message can be changed by using one of
                 * the {@code setMessage} methods.
                 * @param data the system exclusive message data including the status byte
                 * @param length the length of the valid message data in the array,
                 *      including the status byte; it should be non-negative and less than
                 *      or equal to {#code data.length}
                 * @throws InvalidMidiDataException if the parameter values
                 *      do not specify a valid MIDI meta message.
                 * @see #setMessage(byte[], int)
                 * @see #setMessage(int, byte[], int)
                 * @see #getData()
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(data: number /*byte*/[], length: number /*int*/)
                /**
                 * Constructs a new {@code SysexMessage} and sets the data for the message.
                 * The contents of the message can be changed by using one of
                 * the {@code setMessage} methods.
                 * @param status the status byte for the message; it must be a valid system
                 *      exclusive status byte (0xF0 or 0xF7)
                 * @param data the system exclusive message data (without the status byte)
                 * @param length the length of the valid message data in the array;
                 *      it should be non-negative and less than or equal to
                 *      {#code data.length}
                 * @throws InvalidMidiDataException if the parameter values
                 *      do not specify a valid MIDI meta message.
                 * @see #setMessage(byte[], int)
                 * @see #setMessage(int, byte[], int)
                 * @see #getData()
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(status: number /*int*/, data: number /*byte*/[], length: number /*int*/)
                /**
                 * Constructs a new <code>SysexMessage</code>.
                 * @param data an array of bytes containing the complete message.
                 *  The message data may be changed using the <code>setMessage</code>
                 *  method.
                 * @see #setMessage
                 */
                // @ts-ignore
                constructor(data: number /*byte*/[])
                /**
                 * Status byte for System Exclusive message (0xF0, or 240).
                 * @see MidiMessage#getStatus
                 */
                // @ts-ignore
                readonly SYSTEM_EXCLUSIVE: number /*int*/
                /**
                 * Status byte for Special System Exclusive message (0xF7, or 247), which is used
                 * in MIDI files.  It has the same value as END_OF_EXCLUSIVE, which
                 * is used in the real-time "MIDI wire" protocol.
                 * @see MidiMessage#getStatus
                 */
                // @ts-ignore
                readonly SPECIAL_SYSTEM_EXCLUSIVE: number /*int*/
                /**
                 * Sets the data for the system exclusive message.   The
                 * first byte of the data array must be a valid system
                 * exclusive status byte (0xF0 or 0xF7).
                 * @param data the system exclusive message data
                 * @param length the length of the valid message data in
                 *  the array, including the status byte.
                 */
                // @ts-ignore
                setMessage(data: number /*byte*/[], length: number /*int*/): void
                /**
                 * Sets the data for the system exclusive message.
                 * @param status the status byte for the message (0xF0 or 0xF7)
                 * @param data the system exclusive message data
                 * @param length the length of the valid message data in
                 *  the array
                 * @throws InvalidMidiDataException if the status byte is invalid for a sysex message
                 */
                // @ts-ignore
                setMessage(status: number /*int*/, data: number /*byte*/[], length: number /*int*/): void
                /**
                 * Obtains a copy of the data for the system exclusive message.
                 * The returned array of bytes does not include the status byte.
                 * @return array containing the system exclusive message data.
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
