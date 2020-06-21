declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * A MIDI track is an independent stream of MIDI events (time-stamped MIDI
             * data) that can be stored along with other tracks in a standard MIDI file.
             * The MIDI specification allows only 16 channels of MIDI data, but tracks
             * are a way to get around this limitation.  A MIDI file can contain any number
             * of tracks, each containing its own stream of up to 16 channels of MIDI data.
             * <p>
             * A <code>Track</code> occupies a middle level in the hierarchy of data played
             * by a <code>{@link Sequencer}</code>: sequencers play sequences, which contain tracks,
             * which contain MIDI events.  A sequencer may provide controls that mute
             * or solo individual tracks.
             * <p>
             * The timing information and resolution for a track is controlled by and stored
             * in the sequence containing the track. A given <code>Track</code>
             * is considered to belong to the particular <code>{@link Sequence}</code> that
             * maintains its timing. For this reason, a new (empty) track is created by calling the
             * <code>{@link Sequence#createTrack}</code> method, rather than by directly invoking a
             * <code>Track</code> constructor.
             * <p>
             * The <code>Track</code> class provides methods to edit the track by adding
             * or removing <code>MidiEvent</code> objects from it.  These operations keep
             * the event list in the correct time order.  Methods are also
             * included to obtain the track's size, in terms of either the number of events
             * it contains or its duration in ticks.
             * @see Sequencer#setTrackMute
             * @see Sequencer#setTrackSolo
             * @author Kara Kytle
             * @author Florian Bomers
             */
            // @ts-ignore
            class Track extends java.lang.Object {
                /**
                 * Adds a new event to the track.  However, if the event is already
                 * contained in the track, it is not added again.  The list of events
                 * is kept in time order, meaning that this event inserted at the
                 * appropriate place in the list, not necessarily at the end.
                 * @param event the event to add
                 * @return <code>true</code> if the event did not already exist in the
                 *  track and was added, otherwise <code>false</code>
                 */
                // @ts-ignore
                public add(event: javax.sound.midi.MidiEvent): boolean
                /**
                 * Removes the specified event from the track.
                 * @param event the event to remove
                 * @return <code>true</code> if the event existed in the track and was removed,
                 *  otherwise <code>false</code>
                 */
                // @ts-ignore
                public remove(event: javax.sound.midi.MidiEvent): boolean
                /**
                 * Obtains the event at the specified index.
                 * @param index the location of the desired event in the event vector
                 * @throws ArrayIndexOutOfBoundsException  if the
                 *  specified index is negative or not less than the current size of
                 *  this track.
                 * @see #size
                 * @return the event at the specified index
                 */
                // @ts-ignore
                public get(index: number /*int*/): javax.sound.midi.MidiEvent
                /**
                 * Obtains the number of events in this track.
                 * @return the size of the track's event vector
                 */
                // @ts-ignore
                public size(): number /*int*/
                /**
                 * Obtains the length of the track, expressed in MIDI ticks.  (The
                 * duration of a tick in seconds is determined by the timing resolution
                 * of the <code>Sequence</code> containing this track, and also by
                 * the tempo of the music as set by the sequencer.)
                 * @return the duration, in ticks
                 * @see Sequence#Sequence(float, int)
                 * @see Sequencer#setTempoInBPM(float)
                 * @see Sequencer#getTickPosition()
                 */
                // @ts-ignore
                public ticks(): number /*long*/
            }
        }
    }
}
