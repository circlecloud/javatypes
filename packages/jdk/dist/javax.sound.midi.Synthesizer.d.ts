declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * A <code>Synthesizer</code> generates sound.  This usually happens when one of
             * the <code>Synthesizer</code>'s {@link MidiChannel} objects receives a
             * {@link MidiChannel#noteOn(int, int) noteOn} message, either
             * directly or via the <code>Synthesizer</code> object.
             * Many <code>Synthesizer</code>s support <code>Receivers</code>, through which
             * MIDI events can be delivered to the <code>Synthesizer</code>.
             * In such cases, the <code>Synthesizer</code> typically responds by sending
             * a corresponding message to the appropriate <code>MidiChannel</code>, or by
             * processing the event itself if the event isn't one of the MIDI channel
             * messages.
             * <p>
             * The <code>Synthesizer</code> interface includes methods for loading and
             * unloading instruments from soundbanks.  An instrument is a specification for synthesizing a
             * certain type of sound, whether that sound emulates a traditional instrument or is
             * some kind of sound effect or other imaginary sound. A soundbank is a collection of instruments, organized
             * by bank and program number (via the instrument's <code>Patch</code> object).
             * Different <code>Synthesizer</code> classes might implement different sound-synthesis
             * techniques, meaning that some instruments and not others might be compatible with a
             * given synthesizer.
             * Also, synthesizers may have a limited amount of memory for instruments, meaning
             * that not every soundbank and instrument can be used by every synthesizer, even if
             * the synthesis technique is compatible.
             * To see whether the instruments from
             * a certain soundbank can be played by a given synthesizer, invoke the
             * {@link #isSoundbankSupported(Soundbank) isSoundbankSupported} method of
             * <code>Synthesizer</code>.
             * <p>
             * "Loading" an instrument means that that instrument becomes available for
             * synthesizing notes.  The instrument is loaded into the bank and
             * program location specified by its <code>Patch</code> object.  Loading does
             * not necessarily mean that subsequently played notes will immediately have
             * the sound of this newly loaded instrument.  For the instrument to play notes,
             * one of the synthesizer's <code>MidiChannel</code> objects must receive (or have received)
             * a program-change message that causes that particular instrument's
             * bank and program number to be selected.
             * @see MidiSystem#getSynthesizer
             * @see Soundbank
             * @see Instrument
             * @see MidiChannel#programChange(int, int)
             * @see Receiver
             * @see Transmitter
             * @see MidiDevice
             * @author Kara Kytle
             */
            // @ts-ignore
            interface Synthesizer extends javax.sound.midi.MidiDevice {
                /**
                 * Obtains the maximum number of notes that this synthesizer can sound simultaneously.
                 * @return the maximum number of simultaneous notes
                 * @see #getVoiceStatus
                 */
                // @ts-ignore
                getMaxPolyphony(): number /*int*/
                /**
                 * Obtains the processing latency incurred by this synthesizer, expressed in
                 * microseconds.  This latency measures the worst-case delay between the
                 * time a MIDI message is delivered to the synthesizer and the time that the
                 * synthesizer actually produces the corresponding result.
                 * <p>
                 * Although the latency is expressed in microseconds, a synthesizer's actual measured
                 * delay may vary over a wider range than this resolution suggests.  For example,
                 * a synthesizer might have a worst-case delay of a few milliseconds or more.
                 * @return the worst-case delay, in microseconds
                 */
                // @ts-ignore
                getLatency(): number /*long*/
                /**
                 * Obtains the set of MIDI channels controlled by this synthesizer.  Each
                 * non-null element in the returned array is a <code>MidiChannel</code> that
                 * receives the MIDI messages sent on that channel number.
                 * <p>
                 * The MIDI 1.0 specification provides for 16 channels, so this
                 * method returns an array of at least 16 elements.  However, if this synthesizer
                 * doesn't make use of all 16 channels, some of the elements of the array
                 * might be <code>null</code>, so you should check each element
                 * before using it.
                 * @return an array of the <code>MidiChannel</code> objects managed by this
                 *  <code>Synthesizer</code>.  Some of the array elements may be <code>null</code>.
                 */
                // @ts-ignore
                getChannels(): javax.sound.midi.MidiChannel[]
                /**
                 * Obtains the current status of the voices produced by this synthesizer.
                 * If this class of <code>Synthesizer</code> does not provide voice
                 * information, the returned array will always be of length 0.  Otherwise,
                 * its length is always equal to the total number of voices, as returned by
                 * <code>getMaxPolyphony()</code>.  (See the <code>VoiceStatus</code> class
                 * description for an explanation of synthesizer voices.)
                 * @return an array of <code>VoiceStatus</code> objects that supply
                 *  information about the corresponding synthesizer voices
                 * @see #getMaxPolyphony
                 * @see VoiceStatus
                 */
                // @ts-ignore
                getVoiceStatus(): javax.sound.midi.VoiceStatus[]
                /**
                 * Informs the caller whether this synthesizer is capable of loading
                 * instruments from the specified soundbank.
                 * If the soundbank is unsupported, any attempts to load instruments from
                 * it will result in an <code>IllegalArgumentException</code>.
                 * @param soundbank soundbank for which support is queried
                 * @return <code>true</code> if the soundbank is supported, otherwise <code>false</code>
                 * @see #loadInstruments
                 * @see #loadAllInstruments
                 * @see #unloadInstruments
                 * @see #unloadAllInstruments
                 * @see #getDefaultSoundbank
                 */
                // @ts-ignore
                isSoundbankSupported(soundbank: javax.sound.midi.Soundbank): boolean
                /**
                 * Makes a particular instrument available for synthesis.  This instrument
                 * is loaded into the patch location specified by its <code>Patch</code>
                 * object, so that if a program-change message is
                 * received (or has been received) that causes that patch to be selected,
                 * subsequent notes will be played using the sound of
                 * <code>instrument</code>.  If the specified instrument is already loaded,
                 * this method does nothing and returns <code>true</code>.
                 * <p>
                 * The instrument must be part of a soundbank
                 * that this <code>Synthesizer</code> supports.  (To make sure, you can use
                 * the <code>getSoundbank</code> method of <code>Instrument</code> and the
                 * <code>isSoundbankSupported</code> method of <code>Synthesizer</code>.)
                 * @param instrument instrument to load
                 * @return <code>true</code> if the instrument is successfully loaded (or
                 *  already had been), <code>false</code> if the instrument could not be
                 *  loaded (for example, if the synthesizer has insufficient
                 *  memory to load it)
                 * @throws IllegalArgumentException if this
                 *  <code>Synthesizer</code> doesn't support the specified instrument's
                 *  soundbank
                 * @see #unloadInstrument
                 * @see #loadInstruments
                 * @see #loadAllInstruments
                 * @see #remapInstrument
                 * @see SoundbankResource#getSoundbank
                 * @see MidiChannel#programChange(int, int)
                 */
                // @ts-ignore
                loadInstrument(instrument: javax.sound.midi.Instrument): boolean
                /**
                 * Unloads a particular instrument.
                 * @param instrument instrument to unload
                 * @throws IllegalArgumentException if this
                 *  <code>Synthesizer</code> doesn't support the specified instrument's
                 *  soundbank
                 * @see #loadInstrument
                 * @see #unloadInstruments
                 * @see #unloadAllInstruments
                 * @see #getLoadedInstruments
                 * @see #remapInstrument
                 */
                // @ts-ignore
                unloadInstrument(instrument: javax.sound.midi.Instrument): void
                /**
                 * Remaps an instrument. Instrument <code>to</code> takes the
                 * place of instrument <code>from</code>.<br>
                 * For example, if <code>from</code> was located at bank number 2,
                 * program number 11, remapping causes that bank and program location
                 * to be occupied instead by <code>to</code>.<br>
                 * If the function succeeds,  instrument <code>from</code> is unloaded.
                 * <p>To cancel the remapping reload instrument <code>from</code> by
                 * invoking one of {@link #loadInstrument}, {@link #loadInstruments}
                 * or {@link #loadAllInstruments}.
                 * @param from the <code>Instrument</code> object to be replaced
                 * @param to the <code>Instrument</code> object to be used in place
                 *  of the old instrument, it should be loaded into the synthesizer
                 * @return <code>true</code> if the instrument successfully remapped,
                 *  <code>false</code> if feature is not implemented by synthesizer
                 * @throws IllegalArgumentException if instrument
                 *  <code>from</code> or instrument <code>to</code> aren't supported by
                 *  synthesizer or if instrument <code>to</code> is not loaded
                 * @throws NullPointerException if <code>from</code> or
                 *  <code>to</code> parameters have null value
                 * @see #loadInstrument
                 * @see #loadInstruments
                 * @see #loadAllInstruments
                 */
                // @ts-ignore
                remapInstrument(from: javax.sound.midi.Instrument, to: javax.sound.midi.Instrument): boolean
                /**
                 * Obtains the default soundbank for the synthesizer, if one exists.
                 * (Some synthesizers provide a default or built-in soundbank.)
                 * If a synthesizer doesn't have a default soundbank, instruments must
                 * be loaded explicitly from an external soundbank.
                 * @return default soundbank, or <code>null</code> if one does not exist.
                 * @see #isSoundbankSupported
                 */
                // @ts-ignore
                getDefaultSoundbank(): javax.sound.midi.Soundbank
                /**
                 * Obtains a list of instruments that come with the synthesizer.  These
                 * instruments might be built into the synthesizer, or they might be
                 * part of a default soundbank provided with the synthesizer, etc.
                 * <p>
                 * Note that you don't use this method  to find out which instruments are
                 * currently loaded onto the synthesizer; for that purpose, you use
                 * <code>getLoadedInstruments()</code>.
                 * Nor does the method indicate all the instruments that can be loaded onto
                 * the synthesizer; it only indicates the subset that come with the synthesizer.
                 * To learn whether another instrument can be loaded, you can invoke
                 * <code>isSoundbankSupported()</code>, and if the instrument's
                 * <code>Soundbank</code> is supported, you can try loading the instrument.
                 * @return list of available instruments. If the synthesizer
                 *  has no instruments coming with it, an array of length 0 is returned.
                 * @see #getLoadedInstruments
                 * @see #isSoundbankSupported(Soundbank)
                 * @see #loadInstrument
                 */
                // @ts-ignore
                getAvailableInstruments(): javax.sound.midi.Instrument[]
                /**
                 * Obtains a list of the instruments that are currently loaded onto this
                 * <code>Synthesizer</code>.
                 * @return a list of currently loaded instruments
                 * @see #loadInstrument
                 * @see #getAvailableInstruments
                 * @see Soundbank#getInstruments
                 */
                // @ts-ignore
                getLoadedInstruments(): javax.sound.midi.Instrument[]
                /**
                 * Loads onto the <code>Synthesizer</code> all instruments contained
                 * in the specified <code>Soundbank</code>.
                 * @param soundbank the <code>Soundbank</code> whose are instruments are
                 *  to be loaded
                 * @return <code>true</code> if the instruments are all successfully loaded (or
                 *  already had been), <code>false</code> if any instrument could not be
                 *  loaded (for example, if the <code>Synthesizer</code> had insufficient memory)
                 * @throws IllegalArgumentException if the requested soundbank is
                 *  incompatible with this synthesizer.
                 * @see #isSoundbankSupported
                 * @see #loadInstrument
                 * @see #loadInstruments
                 */
                // @ts-ignore
                loadAllInstruments(soundbank: javax.sound.midi.Soundbank): boolean
                /**
                 * Unloads all instruments contained in the specified <code>Soundbank</code>.
                 * @param soundbank soundbank containing instruments to unload
                 * @throws IllegalArgumentException thrown if the soundbank is not supported.
                 * @see #isSoundbankSupported
                 * @see #unloadInstrument
                 * @see #unloadInstruments
                 */
                // @ts-ignore
                unloadAllInstruments(soundbank: javax.sound.midi.Soundbank): void
                /**
                 * Loads the instruments referenced by the specified patches, from the
                 * specified <code>Soundbank</code>.  Each of the <code>Patch</code> objects
                 * indicates a bank and program number; the <code>Instrument</code> that
                 * has the matching <code>Patch</code> is loaded into that bank and program
                 * location.
                 * @param soundbank the <code>Soundbank</code> containing the instruments to load
                 * @param patchList list of patches for which instruments should be loaded
                 * @return <code>true</code> if the instruments are all successfully loaded (or
                 *  already had been), <code>false</code> if any instrument could not be
                 *  loaded (for example, if the <code>Synthesizer</code> had insufficient memory)
                 * @throws IllegalArgumentException thrown if the soundbank is not supported.
                 * @see #isSoundbankSupported
                 * @see Instrument#getPatch
                 * @see #loadAllInstruments
                 * @see #loadInstrument
                 * @see Soundbank#getInstrument(Patch)
                 * @see Sequence#getPatchList()
                 */
                // @ts-ignore
                loadInstruments(soundbank: javax.sound.midi.Soundbank, patchList: javax.sound.midi.Patch[]): boolean
                /**
                 * Unloads the instruments referenced by the specified patches, from the MIDI sound bank specified.
                 * @param soundbank soundbank containing instruments to unload
                 * @param patchList list of patches for which instruments should be unloaded
                 * @throws IllegalArgumentException thrown if the soundbank is not supported.
                 * @see #unloadInstrument
                 * @see #unloadAllInstruments
                 * @see #isSoundbankSupported
                 * @see Instrument#getPatch
                 * @see #loadInstruments
                 */
                // @ts-ignore
                unloadInstruments(soundbank: javax.sound.midi.Soundbank, patchList: javax.sound.midi.Patch[]): void
            }
        }
    }
}
