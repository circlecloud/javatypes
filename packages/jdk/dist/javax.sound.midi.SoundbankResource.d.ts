declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * A <code>SoundbankResource</code> represents any audio resource stored
             * in a <code>{@link Soundbank}</code>.  Common soundbank resources include:
             * <ul>
             * <li>Instruments.  An instrument may be specified in a variety of
             * ways.  However, all soundbanks have some mechanism for defining
             * instruments.  In doing so, they may reference other resources
             * stored in the soundbank.  Each instrument has a <code>Patch</code>
             * which specifies the MIDI program and bank by which it may be
             * referenced in MIDI messages.  Instrument information may be
             * stored in <code>{@link Instrument}</code> objects.
             * <li>Audio samples.  A sample typically is a sampled audio waveform
             * which contains a short sound recording whose duration is a fraction of
             * a second, or at most a few seconds.  These audio samples may be
             * used by a <code>{@link Synthesizer}</code> to synthesize sound in response to MIDI
             * commands, or extracted for use by an application.
             * (The terminology reflects musicians' use of the word "sample" to refer
             * collectively to a series of contiguous audio samples or frames, rather than
             * to a single, instantaneous sample.)
             * The data class for an audio sample will be an object
             * that encapsulates the audio sample data itself and information
             * about how to interpret it (the format of the audio data), such
             * as an <code>{@link javax.sound.sampled.AudioInputStream}</code>.     </li>
             * <li>Embedded sequences.  A sound bank may contain built-in
             * song data stored in a data object such as a <code>{@link Sequence}</code>.
             * </ul>
             * <p>
             * Synthesizers that use wavetable synthesis or related
             * techniques play back the audio in a sample when
             * synthesizing notes, often when emulating the real-world instrument that
             * was originally recorded.  However, there is not necessarily a one-to-one
             * correspondence between the <code>Instruments</code> and samples
             * in a <code>Soundbank</code>.  A single <code>Instrument</code> can use
             * multiple SoundbankResources (typically for notes of dissimilar pitch or
             * brightness).  Also, more than one <code>Instrument</code> can use the same
             * sample.
             * @author Kara Kytle
             */
            // @ts-ignore
            class SoundbankResource extends java.lang.Object {
                /**
                 * Constructs a new <code>SoundbankResource</code> from the given sound bank
                 * and wavetable index.  (Setting the <code>SoundbankResource's</code> name,
                 * sampled audio data, and instruments is a subclass responsibility.)
                 * @param soundBank the sound bank containing this <code>SoundbankResource</code>
                 * @param name the name of the sample
                 * @param dataClass the class used to represent the sample's data
                 * @see #getSoundbank
                 * @see #getName
                 * @see #getDataClass
                 * @see #getData
                 */
                // @ts-ignore
                constructor(soundBank: javax.sound.midi.Soundbank, name: string, dataClass: java.lang.Class<any>)
                /**
                 * Obtains the sound bank that contains this <code>SoundbankResource</code>.
                 * @return the sound bank in which this <code>SoundbankResource</code> is stored
                 */
                // @ts-ignore
                getSoundbank(): javax.sound.midi.Soundbank
                /**
                 * Obtains the name of the resource.  This should generally be a string
                 * descriptive of the resource.
                 * @return the instrument's name
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Obtains the class used by this sample to represent its data.
                 * The object returned by <code>getData</code> will be of this
                 * class.  If this <code>SoundbankResource</code> object does not support
                 * direct access to its data, returns <code>null</code>.
                 * @return the class used to represent the sample's data, or
                 *  null if the data is not accessible
                 */
                // @ts-ignore
                getDataClass(): java.lang.Class<?>
                /**
                 * Obtains the sampled audio that is stored in this <code>SoundbankResource</code>.
                 * The type of object returned depends on the implementation of the
                 * concrete class, and may be queried using <code>getDataClass</code>.
                 * @return an object containing the sampled audio data
                 * @see #getDataClass
                 */
                // @ts-ignore
                abstract getData(): java.lang.Object
            }
        }
    }
}
