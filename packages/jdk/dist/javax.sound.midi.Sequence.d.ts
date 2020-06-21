declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * A <code>Sequence</code> is a data structure containing musical
             * information (often an entire song or composition) that can be played
             * back by a <code>{@link Sequencer}</code> object. Specifically, the
             * <code>Sequence</code> contains timing
             * information and one or more tracks.  Each <code>{@link Track track}</code> consists of a
             * series of MIDI events (such as note-ons, note-offs, program changes, and meta-events).
             * The sequence's timing information specifies the type of unit that is used
             * to time-stamp the events in the sequence.
             * <p>
             * A <code>Sequence</code> can be created from a MIDI file by reading the file
             * into an input stream and invoking one of the <code>getSequence</code> methods of
             * {@link MidiSystem}.  A sequence can also be built from scratch by adding new
             * <code>Tracks</code> to an empty <code>Sequence</code>, and adding
             * <code>{@link MidiEvent}</code> objects to these <code>Tracks</code>.
             * @see Sequencer#setSequence(java.io.InputStream stream)
             * @see Sequencer#setSequence(Sequence sequence)
             * @see Track#add(MidiEvent)
             * @see MidiFileFormat
             * @author Kara Kytle
             */
            // @ts-ignore
            class Sequence extends java.lang.Object {
                /**
                 * Constructs a new MIDI sequence with the specified timing division
                 * type and timing resolution.  The division type must be one of the
                 * recognized MIDI timing types.  For tempo-based timing,
                 * <code>divisionType</code> is PPQ (pulses per quarter note) and
                 * the resolution is specified in ticks per beat.  For SMTPE timing,
                 * <code>divisionType</code> specifies the number of frames per
                 * second and the resolution is specified in ticks per frame.
                 * The sequence will contain no initial tracks.  Tracks may be
                 * added to or removed from the sequence using <code>{@link #createTrack}</code>
                 * and <code>{@link #deleteTrack}</code>.
                 * @param divisionType the timing division type (PPQ or one of the SMPTE types)
                 * @param resolution the timing resolution
                 * @throws InvalidMidiDataException if <code>divisionType</code> is not valid
                 * @see #PPQ
                 * @see #SMPTE_24
                 * @see #SMPTE_25
                 * @see #SMPTE_30DROP
                 * @see #SMPTE_30
                 * @see #getDivisionType
                 * @see #getResolution
                 * @see #getTracks
                 */
                // @ts-ignore
                constructor(divisionType: number /*float*/, resolution: number /*int*/)
                /**
                 * Constructs a new MIDI sequence with the specified timing division
                 * type, timing resolution, and number of tracks.  The division type must be one of the
                 * recognized MIDI timing types.  For tempo-based timing,
                 * <code>divisionType</code> is PPQ (pulses per quarter note) and
                 * the resolution is specified in ticks per beat.  For SMTPE timing,
                 * <code>divisionType</code> specifies the number of frames per
                 * second and the resolution is specified in ticks per frame.
                 * The sequence will be initialized with the number of tracks specified by
                 * <code>numTracks</code>. These tracks are initially empty (i.e.
                 * they contain only the meta-event End of Track).
                 * The tracks may be retrieved for editing using the <code>{@link #getTracks}</code>
                 * method.  Additional tracks may be added, or existing tracks removed,
                 * using <code>{@link #createTrack}</code> and <code>{@link #deleteTrack}</code>.
                 * @param divisionType the timing division type (PPQ or one of the SMPTE types)
                 * @param resolution the timing resolution
                 * @param numTracks the initial number of tracks in the sequence.
                 * @throws InvalidMidiDataException if <code>divisionType</code> is not valid
                 * @see #PPQ
                 * @see #SMPTE_24
                 * @see #SMPTE_25
                 * @see #SMPTE_30DROP
                 * @see #SMPTE_30
                 * @see #getDivisionType
                 * @see #getResolution
                 */
                // @ts-ignore
                constructor(divisionType: number /*float*/, resolution: number /*int*/, numTracks: number /*int*/)
                /**
                 * The tempo-based timing type, for which the resolution is expressed in pulses (ticks) per quarter note.
                 * @see #Sequence(float, int)
                 */
                // @ts-ignore
                public static readonly PPQ: number /*float*/
                /**
                 * The SMPTE-based timing type with 24 frames per second (resolution is expressed in ticks per frame).
                 * @see #Sequence(float, int)
                 */
                // @ts-ignore
                public static readonly SMPTE_24: number /*float*/
                /**
                 * The SMPTE-based timing type with 25 frames per second (resolution is expressed in ticks per frame).
                 * @see #Sequence(float, int)
                 */
                // @ts-ignore
                public static readonly SMPTE_25: number /*float*/
                /**
                 * The SMPTE-based timing type with 29.97 frames per second (resolution is expressed in ticks per frame).
                 * @see #Sequence(float, int)
                 */
                // @ts-ignore
                public static readonly SMPTE_30DROP: number /*float*/
                /**
                 * The SMPTE-based timing type with 30 frames per second (resolution is expressed in ticks per frame).
                 * @see #Sequence(float, int)
                 */
                // @ts-ignore
                public static readonly SMPTE_30: number /*float*/
                /**
                 * The timing division type of the sequence.
                 * @see #PPQ
                 * @see #SMPTE_24
                 * @see #SMPTE_25
                 * @see #SMPTE_30DROP
                 * @see #SMPTE_30
                 * @see #getDivisionType
                 */
                // @ts-ignore
                divisionType: number /*float*/
                /**
                 * The timing resolution of the sequence.
                 * @see #getResolution
                 */
                // @ts-ignore
                resolution: number /*int*/
                /**
                 * The MIDI tracks in this sequence.
                 * @see #getTracks
                 */
                // @ts-ignore
                tracks: java.util.Vector<javax.sound.midi.Track>
                /**
                 * Obtains the timing division type for this sequence.
                 * @return the division type (PPQ or one of the SMPTE types)
                 * @see #PPQ
                 * @see #SMPTE_24
                 * @see #SMPTE_25
                 * @see #SMPTE_30DROP
                 * @see #SMPTE_30
                 * @see #Sequence(float, int)
                 * @see MidiFileFormat#getDivisionType()
                 */
                // @ts-ignore
                public getDivisionType(): number /*float*/
                /**
                 * Obtains the timing resolution for this sequence.
                 * If the sequence's division type is PPQ, the resolution is specified in ticks per beat.
                 * For SMTPE timing, the resolution is specified in ticks per frame.
                 * @return the number of ticks per beat (PPQ) or per frame (SMPTE)
                 * @see #getDivisionType
                 * @see #Sequence(float, int)
                 * @see MidiFileFormat#getResolution()
                 */
                // @ts-ignore
                public getResolution(): number /*int*/
                /**
                 * Creates a new, initially empty track as part of this sequence.
                 * The track initially contains the meta-event End of Track.
                 * The newly created track is returned.  All tracks in the sequence
                 * may be retrieved using <code>{@link #getTracks}</code>.  Tracks may be
                 * removed from the sequence using <code>{@link #deleteTrack}</code>.
                 * @return the newly created track
                 */
                // @ts-ignore
                public createTrack(): javax.sound.midi.Track
                /**
                 * Removes the specified track from the sequence.
                 * @param track the track to remove
                 * @return <code>true</code> if the track existed in the track and was removed,
                 *  otherwise <code>false</code>.
                 * @see #createTrack
                 * @see #getTracks
                 */
                // @ts-ignore
                public deleteTrack(track: javax.sound.midi.Track): boolean
                /**
                 * Obtains an array containing all the tracks in this sequence.
                 * If the sequence contains no tracks, an array of length 0 is returned.
                 * @return the array of tracks
                 * @see #createTrack
                 * @see #deleteTrack
                 */
                // @ts-ignore
                public getTracks(): javax.sound.midi.Track[]
                /**
                 * Obtains the duration of this sequence, expressed in microseconds.
                 * @return this sequence's duration in microseconds.
                 */
                // @ts-ignore
                public getMicrosecondLength(): number /*long*/
                /**
                 * Obtains the duration of this sequence, expressed in MIDI ticks.
                 * @return this sequence's length in ticks
                 * @see #getMicrosecondLength
                 */
                // @ts-ignore
                public getTickLength(): number /*long*/
                /**
                 * Obtains a list of patches referenced in this sequence.
                 * This patch list may be used to load the required
                 * <code>{@link Instrument}</code> objects
                 * into a <code>{@link Synthesizer}</code>.
                 * @return an array of <code>{#link Patch}</code> objects used in this sequence
                 * @see Synthesizer#loadInstruments(Soundbank, Patch[])
                 */
                // @ts-ignore
                public getPatchList(): javax.sound.midi.Patch[]
            }
        }
    }
}
