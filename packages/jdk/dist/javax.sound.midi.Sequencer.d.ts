declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * A hardware or software device that plays back a MIDI
             * <code>{@link Sequence sequence}</code> is known as a <em>sequencer</em>.
             * A MIDI sequence contains lists of time-stamped MIDI data, such as
             * might be read from a standard MIDI file.  Most
             * sequencers also provide functions for creating and editing sequences.
             * <p>
             * The <code>Sequencer</code> interface includes methods for the following
             * basic MIDI sequencer operations:
             * <ul>
             * <li>obtaining a sequence from MIDI file data</li>
             * <li>starting and stopping playback</li>
             * <li>moving to an arbitrary position in the sequence</li>
             * <li>changing the tempo (speed) of playback</li>
             * <li>synchronizing playback to an internal clock or to received MIDI
             * messages</li>
             * <li>controlling the timing of another device</li>
             * </ul>
             * In addition, the following operations are supported, either directly, or
             * indirectly through objects that the <code>Sequencer</code> has access to:
             * <ul>
             * <li>editing the data by adding or deleting individual MIDI events or entire
             * tracks</li>
             * <li>muting or soloing individual tracks in the sequence</li>
             * <li>notifying listener objects about any meta-events or
             * control-change events encountered while playing back the sequence.</li>
             * </ul>
             * @see Sequencer.SyncMode
             * @see #addMetaEventListener
             * @see ControllerEventListener
             * @see Receiver
             * @see Transmitter
             * @see MidiDevice
             * @author Kara Kytle
             * @author Florian Bomers
             */
            // @ts-ignore
            interface Sequencer extends javax.sound.midi.MidiDevice {
                /**
                 * A value indicating that looping should continue
                 * indefinitely rather than complete after a specific
                 * number of loops.
                 * @see #setLoopCount
                 * @since 1.5
                 */
                // @ts-ignore
                readonly LOOP_CONTINUOUSLY: number /*int*/
                /**
                 * Sets the current sequence on which the sequencer operates.
                 * <p>This method can be called even if the
                 * <code>Sequencer</code> is closed.
                 * @param sequence the sequence to be loaded.
                 * @throws InvalidMidiDataException if the sequence contains invalid
                 *  MIDI data, or is not supported.
                 */
                // @ts-ignore
                setSequence(sequence: javax.sound.midi.Sequence): void
                /**
                 * Sets the current sequence on which the sequencer operates.
                 * The stream must point to MIDI file data.
                 * <p>This method can be called even if the
                 * <code>Sequencer</code> is closed.
                 * @param stream stream containing MIDI file data.
                 * @throws IOException if an I/O exception occurs during reading of the stream.
                 * @throws InvalidMidiDataException if invalid data is encountered
                 *  in the stream, or the stream is not supported.
                 */
                // @ts-ignore
                setSequence(stream: java.io.InputStream): void
                /**
                 * Obtains the sequence on which the Sequencer is currently operating.
                 * <p>This method can be called even if the
                 * <code>Sequencer</code> is closed.
                 * @return the current sequence, or <code>null</code> if no sequence is currently set.
                 */
                // @ts-ignore
                getSequence(): javax.sound.midi.Sequence
                /**
                 * Starts playback of the MIDI data in the currently
                 * loaded sequence.
                 * Playback will begin from the current position.
                 * If the playback position reaches the loop end point,
                 * and the loop count is greater than 0, playback will
                 * resume at the loop start point for the number of
                 * repetitions set with <code>setLoopCount</code>.
                 * After that, or if the loop count is 0, playback will
                 * continue to play to the end of the sequence.
                 * <p>The implementation ensures that the synthesizer
                 * is brought to a consistent state when jumping
                 * to the loop start point by sending appropriate
                 * controllers, pitch bend, and program change events.
                 * @throws IllegalStateException if the <code>Sequencer</code> is
                 *  closed.
                 * @see #setLoopStartPoint
                 * @see #setLoopEndPoint
                 * @see #setLoopCount
                 * @see #stop
                 */
                // @ts-ignore
                start(): void
                /**
                 * Stops recording, if active, and playback of the currently loaded sequence,
                 * if any.
                 * @throws IllegalStateException if the <code>Sequencer</code> is
                 *  closed.
                 * @see #start
                 * @see #isRunning
                 */
                // @ts-ignore
                stop(): void
                /**
                 * Indicates whether the Sequencer is currently running.  The default is <code>false</code>.
                 * The Sequencer starts running when either <code>{@link #start}</code> or <code>{@link #startRecording}</code>
                 * is called.  <code>isRunning</code> then returns <code>true</code> until playback of the
                 * sequence completes or <code>{@link #stop}</code> is called.
                 * @return <code>true</code> if the Sequencer is running, otherwise <code>false</code>
                 */
                // @ts-ignore
                isRunning(): boolean
                /**
                 * Starts recording and playback of MIDI data.  Data is recorded to all enabled tracks,
                 * on the channel(s) for which they were enabled.  Recording begins at the current position
                 * of the sequencer.   Any events already in the track are overwritten for the duration
                 * of the recording session.  Events from the currently loaded sequence,
                 * if any, are delivered to the sequencer's transmitter(s) along with messages
                 * received during recording.
                 * <p>
                 * Note that tracks are not by default enabled for recording.  In order to record MIDI data,
                 * at least one track must be specifically enabled for recording.
                 * @throws IllegalStateException if the <code>Sequencer</code> is
                 *  closed.
                 * @see #startRecording
                 * @see #recordEnable
                 * @see #recordDisable
                 */
                // @ts-ignore
                startRecording(): void
                /**
                 * Stops recording, if active.  Playback of the current sequence continues.
                 * @throws IllegalStateException if the <code>Sequencer</code> is
                 *  closed.
                 * @see #startRecording
                 * @see #isRecording
                 */
                // @ts-ignore
                stopRecording(): void
                /**
                 * Indicates whether the Sequencer is currently recording.  The default is <code>false</code>.
                 * The Sequencer begins recording when <code>{@link #startRecording}</code> is called,
                 * and then returns <code>true</code> until <code>{@link #stop}</code> or <code>{@link #stopRecording}</code>
                 * is called.
                 * @return <code>true</code> if the Sequencer is recording, otherwise <code>false</code>
                 */
                // @ts-ignore
                isRecording(): boolean
                /**
                 * Prepares the specified track for recording events received on a particular channel.
                 * Once enabled, a track will receive events when recording is active.
                 * @param track the track to which events will be recorded
                 * @param channel the channel on which events will be received.  If -1 is specified
                 *  for the channel value, the track will receive data from all channels.
                 * @throws IllegalArgumentException thrown if the track is not part of the current
                 *  sequence.
                 */
                // @ts-ignore
                recordEnable(track: javax.sound.midi.Track, channel: number /*int*/): void
                /**
                 * Disables recording to the specified track.  Events will no longer be recorded
                 * into this track.
                 * @param track the track to disable for recording, or <code>null</code> to disable
                 *  recording for all tracks.
                 */
                // @ts-ignore
                recordDisable(track: javax.sound.midi.Track): void
                /**
                 * Obtains the current tempo, expressed in beats per minute.  The
                 * actual tempo of playback is the product of the returned value
                 * and the tempo factor.
                 * @return the current tempo in beats per minute
                 * @see #getTempoFactor
                 * @see #setTempoInBPM(float)
                 * @see #getTempoInMPQ
                 */
                // @ts-ignore
                getTempoInBPM(): number /*float*/
                /**
                 * Sets the tempo in beats per minute.   The actual tempo of playback
                 * is the product of the specified value and the tempo factor.
                 * @param bpm desired new tempo in beats per minute
                 * @see #getTempoFactor
                 * @see #setTempoInMPQ(float)
                 * @see #getTempoInBPM
                 */
                // @ts-ignore
                setTempoInBPM(bpm: number /*float*/): void
                /**
                 * Obtains the current tempo, expressed in microseconds per quarter
                 * note.  The actual tempo of playback is the product of the returned
                 * value and the tempo factor.
                 * @return the current tempo in microseconds per quarter note
                 * @see #getTempoFactor
                 * @see #setTempoInMPQ(float)
                 * @see #getTempoInBPM
                 */
                // @ts-ignore
                getTempoInMPQ(): number /*float*/
                /**
                 * Sets the tempo in microseconds per quarter note.  The actual tempo
                 * of playback is the product of the specified value and the tempo
                 * factor.
                 * @param mpq desired new tempo in microseconds per quarter note.
                 * @see #getTempoFactor
                 * @see #setTempoInBPM(float)
                 * @see #getTempoInMPQ
                 */
                // @ts-ignore
                setTempoInMPQ(mpq: number /*float*/): void
                /**
                 * Scales the sequencer's actual playback tempo by the factor provided.
                 * The default is 1.0.  A value of 1.0 represents the natural rate (the
                 * tempo specified in the sequence), 2.0 means twice as fast, etc.
                 * The tempo factor does not affect the values returned by
                 * <code>{@link #getTempoInMPQ}</code> and <code>{@link #getTempoInBPM}</code>.
                 * Those values indicate the tempo prior to scaling.
                 * <p>
                 * Note that the tempo factor cannot be adjusted when external
                 * synchronization is used.  In that situation,
                 * <code>setTempoFactor</code> always sets the tempo factor to 1.0.
                 * @param factor the requested tempo scalar
                 * @see #getTempoFactor
                 */
                // @ts-ignore
                setTempoFactor(factor: number /*float*/): void
                /**
                 * Returns the current tempo factor for the sequencer.  The default is
                 * 1.0.
                 * @return tempo factor.
                 * @see #setTempoFactor(float)
                 */
                // @ts-ignore
                getTempoFactor(): number /*float*/
                /**
                 * Obtains the length of the current sequence, expressed in MIDI ticks,
                 * or 0 if no sequence is set.
                 * @return length of the sequence in ticks
                 */
                // @ts-ignore
                getTickLength(): number /*long*/
                /**
                 * Obtains the current position in the sequence, expressed in MIDI
                 * ticks.  (The duration of a tick in seconds is determined both by
                 * the tempo and by the timing resolution stored in the
                 * <code>{@link Sequence}</code>.)
                 * @return current tick
                 * @see #setTickPosition
                 */
                // @ts-ignore
                getTickPosition(): number /*long*/
                /**
                 * Sets the current sequencer position in MIDI ticks
                 * @param tick the desired tick position
                 * @see #getTickPosition
                 */
                // @ts-ignore
                setTickPosition(tick: number /*long*/): void
                /**
                 * Obtains the length of the current sequence, expressed in microseconds,
                 * or 0 if no sequence is set.
                 * @return length of the sequence in microseconds.
                 */
                // @ts-ignore
                getMicrosecondLength(): number /*long*/
                /**
                 * Obtains the current position in the sequence, expressed in
                 * microseconds.
                 * @return the current position in microseconds
                 * @see #setMicrosecondPosition
                 */
                // @ts-ignore
                getMicrosecondPosition(): number /*long*/
                /**
                 * Sets the current position in the sequence, expressed in microseconds
                 * @param microseconds desired position in microseconds
                 * @see #getMicrosecondPosition
                 */
                // @ts-ignore
                setMicrosecondPosition(microseconds: number /*long*/): void
                /**
                 * Sets the source of timing information used by this sequencer.
                 * The sequencer synchronizes to the master, which is the internal clock,
                 * MIDI clock, or MIDI time code, depending on the value of
                 * <code>sync</code>.  The <code>sync</code> argument must be one
                 * of the supported modes, as returned by
                 * <code>{@link #getMasterSyncModes}</code>.
                 * @param sync the desired master synchronization mode
                 * @see SyncMode#INTERNAL_CLOCK
                 * @see SyncMode#MIDI_SYNC
                 * @see SyncMode#MIDI_TIME_CODE
                 * @see #getMasterSyncMode
                 */
                // @ts-ignore
                setMasterSyncMode(sync: javax.sound.midi.Sequencer.SyncMode): void
                /**
                 * Obtains the current master synchronization mode for this sequencer.
                 * @return the current master synchronization mode
                 * @see #setMasterSyncMode(Sequencer.SyncMode)
                 * @see #getMasterSyncModes
                 */
                // @ts-ignore
                getMasterSyncMode(): javax.sound.midi.Sequencer.SyncMode
                /**
                 * Obtains the set of master synchronization modes supported by this
                 * sequencer.
                 * @return the available master synchronization modes
                 * @see SyncMode#INTERNAL_CLOCK
                 * @see SyncMode#MIDI_SYNC
                 * @see SyncMode#MIDI_TIME_CODE
                 * @see #getMasterSyncMode
                 * @see #setMasterSyncMode(Sequencer.SyncMode)
                 */
                // @ts-ignore
                getMasterSyncModes(): javax.sound.midi.Sequencer.SyncMode[]
                /**
                 * Sets the slave synchronization mode for the sequencer.
                 * This indicates the type of timing information sent by the sequencer
                 * to its receiver.  The <code>sync</code> argument must be one
                 * of the supported modes, as returned by
                 * <code>{@link #getSlaveSyncModes}</code>.
                 * @param sync the desired slave synchronization mode
                 * @see SyncMode#MIDI_SYNC
                 * @see SyncMode#MIDI_TIME_CODE
                 * @see SyncMode#NO_SYNC
                 * @see #getSlaveSyncModes
                 */
                // @ts-ignore
                setSlaveSyncMode(sync: javax.sound.midi.Sequencer.SyncMode): void
                /**
                 * Obtains the current slave synchronization mode for this sequencer.
                 * @return the current slave synchronization mode
                 * @see #setSlaveSyncMode(Sequencer.SyncMode)
                 * @see #getSlaveSyncModes
                 */
                // @ts-ignore
                getSlaveSyncMode(): javax.sound.midi.Sequencer.SyncMode
                /**
                 * Obtains the set of slave synchronization modes supported by the sequencer.
                 * @return the available slave synchronization modes
                 * @see SyncMode#MIDI_SYNC
                 * @see SyncMode#MIDI_TIME_CODE
                 * @see SyncMode#NO_SYNC
                 */
                // @ts-ignore
                getSlaveSyncModes(): javax.sound.midi.Sequencer.SyncMode[]
                /**
                 * Sets the mute state for a track.  This method may fail for a number
                 * of reasons.  For example, the track number specified may not be valid
                 * for the current sequence, or the sequencer may not support this functionality.
                 * An application which needs to verify whether this operation succeeded should
                 * follow this call with a call to <code>{@link #getTrackMute}</code>.
                 * @param track the track number.  Tracks in the current sequence are numbered
                 *  from 0 to the number of tracks in the sequence minus 1.
                 * @param mute the new mute state for the track.  <code>true</code> implies the
                 *  track should be muted, <code>false</code> implies the track should be unmuted.
                 * @see #getSequence
                 */
                // @ts-ignore
                setTrackMute(track: number /*int*/, mute: boolean): void
                /**
                 * Obtains the current mute state for a track.  The default mute
                 * state for all tracks which have not been muted is false.  In any
                 * case where the specified track has not been muted, this method should
                 * return false.  This applies if the sequencer does not support muting
                 * of tracks, and if the specified track index is not valid.
                 * @param track the track number.  Tracks in the current sequence are numbered
                 *  from 0 to the number of tracks in the sequence minus 1.
                 * @return <code>true</code> if muted, <code>false</code> if not.
                 */
                // @ts-ignore
                getTrackMute(track: number /*int*/): boolean
                /**
                 * Sets the solo state for a track.  If <code>solo</code> is <code>true</code>
                 * only this track and other solo'd tracks will sound. If <code>solo</code>
                 * is <code>false</code> then only other solo'd tracks will sound, unless no
                 * tracks are solo'd in which case all un-muted tracks will sound.
                 * <p>
                 * This method may fail for a number
                 * of reasons.  For example, the track number specified may not be valid
                 * for the current sequence, or the sequencer may not support this functionality.
                 * An application which needs to verify whether this operation succeeded should
                 * follow this call with a call to <code>{@link #getTrackSolo}</code>.
                 * @param track the track number.  Tracks in the current sequence are numbered
                 *  from 0 to the number of tracks in the sequence minus 1.
                 * @param solo the new solo state for the track.  <code>true</code> implies the
                 *  track should be solo'd, <code>false</code> implies the track should not be solo'd.
                 * @see #getSequence
                 */
                // @ts-ignore
                setTrackSolo(track: number /*int*/, solo: boolean): void
                /**
                 * Obtains the current solo state for a track.  The default mute
                 * state for all tracks which have not been solo'd is false.  In any
                 * case where the specified track has not been solo'd, this method should
                 * return false.  This applies if the sequencer does not support soloing
                 * of tracks, and if the specified track index is not valid.
                 * @param track the track number.  Tracks in the current sequence are numbered
                 *  from 0 to the number of tracks in the sequence minus 1.
                 * @return <code>true</code> if solo'd, <code>false</code> if not.
                 */
                // @ts-ignore
                getTrackSolo(track: number /*int*/): boolean
                /**
                 * Registers a meta-event listener to receive
                 * notification whenever a meta-event is encountered in the sequence
                 * and processed by the sequencer. This method can fail if, for
                 * instance,this class of sequencer does not support meta-event
                 * notification.
                 * @param listener listener to add
                 * @return <code>true</code> if the listener was successfully added,
                 *  otherwise <code>false</code>
                 * @see #removeMetaEventListener
                 * @see MetaEventListener
                 * @see MetaMessage
                 */
                // @ts-ignore
                addMetaEventListener(listener: javax.sound.midi.MetaEventListener): boolean
                /**
                 * Removes the specified meta-event listener from this sequencer's
                 * list of registered listeners, if in fact the listener is registered.
                 * @param listener the meta-event listener to remove
                 * @see #addMetaEventListener
                 */
                // @ts-ignore
                removeMetaEventListener(listener: javax.sound.midi.MetaEventListener): void
                /**
                 * Registers a controller event listener to receive notification
                 * whenever the sequencer processes a control-change event of the
                 * requested type or types.  The types are specified by the
                 * <code>controllers</code> argument, which should contain an array of
                 * MIDI controller numbers.  (Each number should be between 0 and 127,
                 * inclusive.  See the MIDI 1.0 Specification for the numbers that
                 * correspond to various types of controllers.)
                 * <p>
                 * The returned array contains the MIDI controller
                 * numbers for which the listener will now receive events.
                 * Some sequencers might not support controller event notification, in
                 * which case the array has a length of 0.  Other sequencers might
                 * support notification for some controllers but not all.
                 * This method may be invoked repeatedly.
                 * Each time, the returned array indicates all the controllers
                 * that the listener will be notified about, not only the controllers
                 * requested in that particular invocation.
                 * @param listener the controller event listener to add to the list of
                 *  registered listeners
                 * @param controllers the MIDI controller numbers for which change
                 *  notification is requested
                 * @return the numbers of all the MIDI controllers whose changes will
                 *  now be reported to the specified listener
                 * @see #removeControllerEventListener
                 * @see ControllerEventListener
                 */
                // @ts-ignore
                addControllerEventListener(listener: javax.sound.midi.ControllerEventListener, controllers: number /*int*/[]): number /*int*/[]
                /**
                 * Removes a controller event listener's interest in one or more
                 * types of controller event. The <code>controllers</code> argument
                 * is an array of MIDI numbers corresponding to the  controllers for
                 * which the listener should no longer receive change notifications.
                 * To completely remove this listener from the list of registered
                 * listeners, pass in <code>null</code> for <code>controllers</code>.
                 * The returned array contains the MIDI controller
                 * numbers for which the listener will now receive events.  The
                 * array has a length of 0 if the listener will not receive
                 * change notifications for any controllers.
                 * @param listener old listener
                 * @param controllers the MIDI controller numbers for which change
                 *  notification should be cancelled, or <code>null</code> to cancel
                 *  for all controllers
                 * @return the numbers of all the MIDI controllers whose changes will
                 *  now be reported to the specified listener
                 * @see #addControllerEventListener
                 */
                // @ts-ignore
                removeControllerEventListener(listener: javax.sound.midi.ControllerEventListener, controllers: number /*int*/[]): number /*int*/[]
                /**
                 * Sets the first MIDI tick that will be
                 * played in the loop. If the loop count is
                 * greater than 0, playback will jump to this
                 * point when reaching the loop end point.
                 * <p>A value of 0 for the starting point means the
                 * beginning of the loaded sequence. The starting
                 * point must be lower than or equal to the ending
                 * point, and it must fall within the size of the
                 * loaded sequence.
                 * <p>A sequencer's loop start point defaults to
                 * start of the sequence.
                 * @param tick the loop's starting position,
                 *         in MIDI ticks (zero-based)
                 * @throws IllegalArgumentException if the requested
                 *          loop start point cannot be set, usually because
                 *          it falls outside the sequence's
                 *          duration or because the start point is
                 *          after the end point
                 * @see #setLoopEndPoint
                 * @see #setLoopCount
                 * @see #getLoopStartPoint
                 * @see #start
                 * @since 1.5
                 */
                // @ts-ignore
                setLoopStartPoint(tick: number /*long*/): void
                /**
                 * Obtains the start position of the loop,
                 * in MIDI ticks.
                 * @return the start position of the loop,
                 *                in MIDI ticks (zero-based)
                 * @see #setLoopStartPoint
                 * @since 1.5
                 */
                // @ts-ignore
                getLoopStartPoint(): number /*long*/
                /**
                 * Sets the last MIDI tick that will be played in
                 * the loop. If the loop count is 0, the loop end
                 * point has no effect and playback continues to
                 * play when reaching the loop end point.
                 * <p>A value of -1 for the ending point
                 * indicates the last tick of the sequence.
                 * Otherwise, the ending point must be greater
                 * than or equal to the starting point, and it must
                 * fall within the size of the loaded sequence.
                 * <p>A sequencer's loop end point defaults to -1,
                 * meaning the end of the sequence.
                 * @param tick the loop's ending position,
                 *         in MIDI ticks (zero-based), or
                 *         -1 to indicate the final tick
                 * @throws IllegalArgumentException if the requested
                 *          loop point cannot be set, usually because
                 *          it falls outside the sequence's
                 *          duration or because the ending point is
                 *          before the starting point
                 * @see #setLoopStartPoint
                 * @see #setLoopCount
                 * @see #getLoopEndPoint
                 * @see #start
                 * @since 1.5
                 */
                // @ts-ignore
                setLoopEndPoint(tick: number /*long*/): void
                /**
                 * Obtains the end position of the loop,
                 * in MIDI ticks.
                 * @return the end position of the loop, in MIDI
                 *          ticks (zero-based), or -1 to indicate
                 *          the end of the sequence
                 * @see #setLoopEndPoint
                 * @since 1.5
                 */
                // @ts-ignore
                getLoopEndPoint(): number /*long*/
                /**
                 * Sets the number of repetitions of the loop for
                 * playback.
                 * When the playback position reaches the loop end point,
                 * it will loop back to the loop start point
                 * <code>count</code> times, after which playback will
                 * continue to play to the end of the sequence.
                 * <p>
                 * If the current position when this method is invoked
                 * is greater than the loop end point, playback
                 * continues to the end of the sequence without looping,
                 * unless the loop end point is changed subsequently.
                 * <p>
                 * A <code>count</code> value of 0 disables looping:
                 * playback will continue at the loop end point, and it
                 * will not loop back to the loop start point.
                 * This is a sequencer's default.
                 * <p>If playback is stopped during looping, the
                 * current loop status is cleared; subsequent start
                 * requests are not affected by an interrupted loop
                 * operation.
                 * @param count the number of times playback should
                 *         loop back from the loop's end position
                 *         to the loop's start position, or
                 *         <code>{#link #LOOP_CONTINUOUSLY}</code>
                 *         to indicate that looping should
                 *         continue until interrupted
                 * @throws IllegalArgumentException if <code>count</code> is
                 *  negative and not equal to {#link #LOOP_CONTINUOUSLY}
                 * @see #setLoopStartPoint
                 * @see #setLoopEndPoint
                 * @see #getLoopCount
                 * @see #start
                 * @since 1.5
                 */
                // @ts-ignore
                setLoopCount(count: number /*int*/): void
                /**
                 * Obtains the number of repetitions for
                 * playback.
                 * @return the number of loops after which
                 *          playback plays to the end of the
                 *          sequence
                 * @see #setLoopCount
                 * @see #start
                 * @since 1.5
                 */
                // @ts-ignore
                getLoopCount(): number /*int*/
            }
        }
    }
}
