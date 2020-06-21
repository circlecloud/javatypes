declare namespace javax {
    namespace sound {
        namespace midi {
            namespace Sequencer {
                /**
                 * A <code>SyncMode</code> object represents one of the ways in which
                 * a MIDI sequencer's notion of time can be synchronized with a master
                 * or slave device.
                 * If the sequencer is being synchronized to a master, the
                 * sequencer revises its current time in response to messages from
                 * the master.  If the sequencer has a slave, the sequencer
                 * similarly sends messages to control the slave's timing.
                 * <p>
                 * There are three predefined modes that specify possible masters
                 * for a sequencer: <code>INTERNAL_CLOCK</code>,
                 * <code>MIDI_SYNC</code>, and <code>MIDI_TIME_CODE</code>.  The
                 * latter two work if the sequencer receives MIDI messages from
                 * another device.  In these two modes, the sequencer's time gets reset
                 * based on system real-time timing clock messages or MIDI time code
                 * (MTC) messages, respectively.  These two modes can also be used
                 * as slave modes, in which case the sequencer sends the corresponding
                 * types of MIDI messages to its receiver (whether or not the sequencer
                 * is also receiving them from a master).  A fourth mode,
                 * <code>NO_SYNC</code>, is used to indicate that the sequencer should
                 * not control its receiver's timing.
                 * @see Sequencer#setMasterSyncMode(Sequencer.SyncMode)
                 * @see Sequencer#setSlaveSyncMode(Sequencer.SyncMode)
                 */
                // @ts-ignore
                class SyncMode extends java.lang.Object {
                    /**
                     * Constructs a synchronization mode.
                     * @param name name of the synchronization mode
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    /**
                     * A master synchronization mode that makes the sequencer get
                     * its timing information from its internal clock.  This is not
                     * a legal slave sync mode.
                     */
                    // @ts-ignore
                    public static readonly INTERNAL_CLOCK: javax.sound.midi.Sequencer.SyncMode
                    /**
                     * A master or slave synchronization mode that specifies the
                     * use of MIDI clock
                     * messages.  If this mode is used as the master sync mode,
                     * the sequencer gets its timing information from system real-time
                     * MIDI clock messages.  This mode only applies as the master sync
                     * mode for sequencers that are also MIDI receivers.  If this is the
                     * slave sync mode, the sequencer sends system real-time MIDI clock
                     * messages to its receiver.  MIDI clock messages are sent at a rate
                     * of 24 per quarter note.
                     */
                    // @ts-ignore
                    public static readonly MIDI_SYNC: javax.sound.midi.Sequencer.SyncMode
                    /**
                     * A master or slave synchronization mode that specifies the
                     * use of MIDI Time Code.
                     * If this mode is used as the master sync mode,
                     * the sequencer gets its timing information from MIDI Time Code
                     * messages.  This mode only applies as the master sync
                     * mode to sequencers that are also MIDI receivers.  If this
                     * mode is used as the
                     * slave sync mode, the sequencer sends MIDI Time Code
                     * messages to its receiver.  (See the MIDI 1.0 Detailed
                     * Specification for a description of MIDI Time Code.)
                     */
                    // @ts-ignore
                    public static readonly MIDI_TIME_CODE: javax.sound.midi.Sequencer.SyncMode
                    /**
                     * A slave synchronization mode indicating that no timing information
                     * should be sent to the receiver.  This is not a legal master sync
                     * mode.
                     */
                    // @ts-ignore
                    public static readonly NO_SYNC: javax.sound.midi.Sequencer.SyncMode
                    /**
                     * Determines whether two objects are equal.
                     * Returns <code>true</code> if the objects are identical
                     * @param obj the reference object with which to compare
                     * @return <code>true</code> if this object is the same as the
                     *  <code>obj</code> argument, <code>false</code> otherwise
                     */
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    /**
                     * Finalizes the hashcode method.
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Provides this synchronization mode's name as the string
                     * representation of the mode.
                     * @return the name of this synchronization mode
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
