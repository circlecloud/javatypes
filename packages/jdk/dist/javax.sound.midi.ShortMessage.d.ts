declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * A <code>ShortMessage</code> contains a MIDI message that has at most
             * two data bytes following its status byte.  The types of MIDI message
             * that satisfy this criterion are channel voice, channel mode, system common,
             * and system real-time--in other words, everything except system exclusive
             * and meta-events.  The <code>ShortMessage</code> class provides methods
             * for getting and setting the contents of the MIDI message.
             * <p>
             * A number of <code>ShortMessage</code> methods have integer parameters by which
             * you specify a MIDI status or data byte.  If you know the numeric value, you
             * can express it directly.  For system common and system real-time messages,
             * you can often use the corresponding fields of <code>ShortMessage</code>, such as
             * {@link #SYSTEM_RESET SYSTEM_RESET}.  For channel messages,
             * the upper four bits of the status byte are specified by a command value and
             * the lower four bits are specified by a MIDI channel number. To
             * convert incoming MIDI data bytes that are in the form of Java's signed bytes,
             * you can use the <A HREF="MidiMessage.html#integersVsBytes">conversion code</A>
             * given in the <code>{@link MidiMessage}</code> class description.
             * @see SysexMessage
             * @see MetaMessage
             * @author David Rivas
             * @author Kara Kytle
             * @author Florian Bomers
             */
            // @ts-ignore
            class ShortMessage extends javax.sound.midi.MidiMessage {
                /**
                 * Constructs a new <code>ShortMessage</code>.  The
                 * contents of the new message are guaranteed to specify
                 * a valid MIDI message.  Subsequently, you may set the
                 * contents of the message using one of the <code>setMessage</code>
                 * methods.
                 * @see #setMessage
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new {@code ShortMessage} which represents a MIDI
                 * message that takes no data bytes.
                 * The contents of the message can be changed by using one of
                 * the {@code setMessage} methods.
                 * @param status the MIDI status byte
                 * @throws InvalidMidiDataException if {#code status} does not specify
                 *      a valid MIDI status byte for a message that requires no data bytes
                 * @see #setMessage(int)
                 * @see #setMessage(int, int, int)
                 * @see #setMessage(int, int, int, int)
                 * @see #getStatus()
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(status: number /*int*/)
                /**
                 * Constructs a new {@code ShortMessage} which represents a MIDI message
                 * that takes up to two data bytes. If the message only takes one data byte,
                 * the second data byte is ignored. If the message does not take
                 * any data bytes, both data bytes are ignored.
                 * The contents of the message can be changed by using one of
                 * the {@code setMessage} methods.
                 * @param status   the MIDI status byte
                 * @param data1    the first data byte
                 * @param data2    the second data byte
                 * @throws InvalidMidiDataException if the status byte or all data bytes
                 *      belonging to the message do not specify a valid MIDI message
                 * @see #setMessage(int)
                 * @see #setMessage(int, int, int)
                 * @see #setMessage(int, int, int, int)
                 * @see #getStatus()
                 * @see #getData1()
                 * @see #getData2()
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(status: number /*int*/, data1: number /*int*/, data2: number /*int*/)
                /**
                 * Constructs a new {@code ShortMessage} which represents a channel
                 * MIDI message that takes up to two data bytes. If the message only takes
                 * one data byte, the second data byte is ignored. If the message does not
                 * take any data bytes, both data bytes are ignored.
                 * The contents of the message can be changed by using one of
                 * the {@code setMessage} methods.
                 * @param command  the MIDI command represented by this message
                 * @param channel  the channel associated with the message
                 * @param data1    the first data byte
                 * @param data2    the second data byte
                 * @throws InvalidMidiDataException if the command value, channel value
                 *      or all data bytes belonging to the message do not specify
                 *      a valid MIDI message
                 * @see #setMessage(int)
                 * @see #setMessage(int, int, int)
                 * @see #setMessage(int, int, int, int)
                 * @see #getCommand()
                 * @see #getChannel()
                 * @see #getData1()
                 * @see #getData2()
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(command: number /*int*/, channel: number /*int*/, data1: number /*int*/, data2: number /*int*/)
                /**
                 * Constructs a new <code>ShortMessage</code>.
                 * @param data an array of bytes containing the complete message.
                 *  The message data may be changed using the <code>setMessage</code>
                 *  method.
                 * @see #setMessage
                 */
                // @ts-ignore
                constructor(data: number /*byte*/[])
                /**
                 * Status byte for MIDI Time Code Quarter Frame message (0xF1, or 241).
                 * @see MidiMessage#getStatus
                 */
                // @ts-ignore
                public static readonly MIDI_TIME_CODE: number /*int*/
                /**
                 * Status byte for Song Position Pointer message (0xF2, or 242).
                 * @see MidiMessage#getStatus
                 */
                // @ts-ignore
                public static readonly SONG_POSITION_POINTER: number /*int*/
                /**
                 * Status byte for MIDI Song Select message (0xF3, or 243).
                 * @see MidiMessage#getStatus
                 */
                // @ts-ignore
                public static readonly SONG_SELECT: number /*int*/
                /**
                 * Status byte for Tune Request message (0xF6, or 246).
                 * @see MidiMessage#getStatus
                 */
                // @ts-ignore
                public static readonly TUNE_REQUEST: number /*int*/
                /**
                 * Status byte for End of System Exclusive message (0xF7, or 247).
                 * @see MidiMessage#getStatus
                 */
                // @ts-ignore
                public static readonly END_OF_EXCLUSIVE: number /*int*/
                /**
                 * Status byte for Timing Clock message (0xF8, or 248).
                 * @see MidiMessage#getStatus
                 */
                // @ts-ignore
                public static readonly TIMING_CLOCK: number /*int*/
                /**
                 * Status byte for Start message (0xFA, or 250).
                 * @see MidiMessage#getStatus
                 */
                // @ts-ignore
                public static readonly START: number /*int*/
                /**
                 * Status byte for Continue message (0xFB, or 251).
                 * @see MidiMessage#getStatus
                 */
                // @ts-ignore
                public static readonly CONTINUE: number /*int*/
                /**
                 * Status byte for Stop message (0xFC, or 252).
                 * @see MidiMessage#getStatus
                 */
                // @ts-ignore
                public static readonly STOP: number /*int*/
                /**
                 * Status byte for Active Sensing message (0xFE, or 254).
                 * @see MidiMessage#getStatus
                 */
                // @ts-ignore
                public static readonly ACTIVE_SENSING: number /*int*/
                /**
                 * Status byte for System Reset message (0xFF, or 255).
                 * @see MidiMessage#getStatus
                 */
                // @ts-ignore
                public static readonly SYSTEM_RESET: number /*int*/
                /**
                 * Command value for Note Off message (0x80, or 128)
                 */
                // @ts-ignore
                public static readonly NOTE_OFF: number /*int*/
                /**
                 * Command value for Note On message (0x90, or 144)
                 */
                // @ts-ignore
                public static readonly NOTE_ON: number /*int*/
                /**
                 * Command value for Polyphonic Key Pressure (Aftertouch) message (0xA0, or 160)
                 */
                // @ts-ignore
                public static readonly POLY_PRESSURE: number /*int*/
                /**
                 * Command value for Control Change message (0xB0, or 176)
                 */
                // @ts-ignore
                public static readonly CONTROL_CHANGE: number /*int*/
                /**
                 * Command value for Program Change message (0xC0, or 192)
                 */
                // @ts-ignore
                public static readonly PROGRAM_CHANGE: number /*int*/
                /**
                 * Command value for Channel Pressure (Aftertouch) message (0xD0, or 208)
                 */
                // @ts-ignore
                public static readonly CHANNEL_PRESSURE: number /*int*/
                /**
                 * Command value for Pitch Bend message (0xE0, or 224)
                 */
                // @ts-ignore
                public static readonly PITCH_BEND: number /*int*/
                /**
                 * Sets the parameters for a MIDI message that takes no data bytes.
                 * @param status    the MIDI status byte
                 * @throws InvalidMidiDataException if <code>status</code> does not
                 *  specify a valid MIDI status byte for a message that requires no data bytes.
                 * @see #setMessage(int, int, int)
                 * @see #setMessage(int, int, int, int)
                 */
                // @ts-ignore
                public setMessage(status: number /*int*/): void
                /**
                 * Sets the  parameters for a MIDI message that takes one or two data
                 * bytes.  If the message takes only one data byte, the second data
                 * byte is ignored; if the message does not take any data bytes, both
                 * data bytes are ignored.
                 * @param status    the MIDI status byte
                 * @param data1             the first data byte
                 * @param data2             the second data byte
                 * @throws InvalidMidiDataException if the
                 *  the status byte, or all data bytes belonging to the message, do
                 *  not specify a valid MIDI message.
                 * @see #setMessage(int, int, int, int)
                 * @see #setMessage(int)
                 */
                // @ts-ignore
                public setMessage(status: number /*int*/, data1: number /*int*/, data2: number /*int*/): void
                /**
                 * Sets the short message parameters for a  channel message
                 * which takes up to two data bytes.  If the message only
                 * takes one data byte, the second data byte is ignored; if
                 * the message does not take any data bytes, both data bytes
                 * are ignored.
                 * @param command   the MIDI command represented by this message
                 * @param channel   the channel associated with the message
                 * @param data1             the first data byte
                 * @param data2             the second data byte
                 * @throws InvalidMidiDataException if the
                 *  status byte or all data bytes belonging to the message, do
                 *  not specify a valid MIDI message
                 * @see #setMessage(int, int, int)
                 * @see #setMessage(int)
                 * @see #getCommand
                 * @see #getChannel
                 * @see #getData1
                 * @see #getData2
                 */
                // @ts-ignore
                public setMessage(command: number /*int*/, channel: number /*int*/, data1: number /*int*/, data2: number /*int*/): void
                /**
                 * Obtains the MIDI channel associated with this event.  This method
                 * assumes that the event is a MIDI channel message; if not, the return
                 * value will not be meaningful.
                 * @return MIDI channel associated with the message.
                 * @see #setMessage(int, int, int, int)
                 */
                // @ts-ignore
                public getChannel(): number /*int*/
                /**
                 * Obtains the MIDI command associated with this event.  This method
                 * assumes that the event is a MIDI channel message; if not, the return
                 * value will not be meaningful.
                 * @return the MIDI command associated with this event
                 * @see #setMessage(int, int, int, int)
                 */
                // @ts-ignore
                public getCommand(): number /*int*/
                /**
                 * Obtains the first data byte in the message.
                 * @return the value of the <code>data1</code> field
                 * @see #setMessage(int, int, int)
                 */
                // @ts-ignore
                public getData1(): number /*int*/
                /**
                 * Obtains the second data byte in the message.
                 * @return the value of the <code>data2</code> field
                 * @see #setMessage(int, int, int)
                 */
                // @ts-ignore
                public getData2(): number /*int*/
                /**
                 * Creates a new object of the same class and with the same contents
                 * as this object.
                 * @return a clone of this instance.
                 */
                // @ts-ignore
                public clone(): any
                /**
                 * Retrieves the number of data bytes associated with a particular
                 * status byte value.
                 * @param status status byte value, which must represent a short MIDI message
                 * @return data length in bytes (0, 1, or 2)
                 * @throws InvalidMidiDataException if the
                 *  <code>status</code> argument does not represent the status byte for any
                 *  short message
                 */
                // @ts-ignore
                getDataLength(status: number /*int*/): number /*int*/
            }
        }
    }
}
