declare namespace javax {
    namespace sound {
        namespace midi {
            namespace spi {
                /**
                 * A {@code MidiFileReader} supplies MIDI file-reading services. Classes
                 * implementing this interface can parse the format information from one or more
                 * types of MIDI file, and can produce a {@link Sequence} object from files of
                 * these types.
                 * @author Kara Kytle
                 * @since 1.3
                 */
                // @ts-ignore
                abstract class MidiFileReader extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Obtains the MIDI file format of the input stream provided. The stream
                     * must point to valid MIDI file data. In general, MIDI file readers may
                     * need to read some data from the stream before determining whether they
                     * support it. These parsers must be able to mark the stream, read enough
                     * data to determine whether they support the stream, and, if not, reset the
                     * stream's read pointer to its original position. If the input stream does
                     * not support this, this method may fail with an {@code IOException}.
                     * @param stream the input stream from which file format information
                     *          should be extracted
                     * @return a {#code MidiFileFormat} object describing the MIDI file format
                     * @throws InvalidMidiDataException if the stream does not point to valid
                     *          MIDI file data recognized by the system
                     * @throws IOException if an I/O exception occurs
                     * @see InputStream#markSupported
                     * @see InputStream#mark
                     */
                    // @ts-ignore
                    public abstract getMidiFileFormat(stream: java.io.InputStream): javax.sound.midi.MidiFileFormat
                    /**
                     * Obtains the MIDI file format of the URL provided. The URL must point to
                     * valid MIDI file data.
                     * @param url the URL from which file format information should be
                     *          extracted
                     * @return a {#code MidiFileFormat} object describing the MIDI file format
                     * @throws InvalidMidiDataException if the URL does not point to valid MIDI
                     *          file data recognized by the system
                     * @throws IOException if an I/O exception occurs
                     */
                    // @ts-ignore
                    public abstract getMidiFileFormat(url: java.net.URL): javax.sound.midi.MidiFileFormat
                    /**
                     * Obtains the MIDI file format of the {@code File} provided. The
                     * {@code File} must point to valid MIDI file data.
                     * @param file the {#code File} from which file format information should
                     *          be extracted
                     * @return a {#code MidiFileFormat} object describing the MIDI file format
                     * @throws InvalidMidiDataException if the {#code File} does not point to
                     *          valid MIDI file data recognized by the system
                     * @throws IOException if an I/O exception occurs
                     */
                    // @ts-ignore
                    public abstract getMidiFileFormat(file: java.io.File): javax.sound.midi.MidiFileFormat
                    /**
                     * Obtains a MIDI sequence from the input stream provided. The stream must
                     * point to valid MIDI file data. In general, MIDI file readers may need to
                     * read some data from the stream before determining whether they support
                     * it. These parsers must be able to mark the stream, read enough data to
                     * determine whether they support the stream, and, if not, reset the
                     * stream's read pointer to its original position. If the input stream does
                     * not support this, this method may fail with an IOException.
                     * @param stream the input stream from which the {#code Sequence} should
                     *          be constructed
                     * @return a {#code Sequence} object based on the MIDI file data contained
                     *          in the input stream.
                     * @throws InvalidMidiDataException if the stream does not point to valid
                     *          MIDI file data recognized by the system
                     * @throws IOException if an I/O exception occurs
                     * @see InputStream#markSupported
                     * @see InputStream#mark
                     */
                    // @ts-ignore
                    public abstract getSequence(stream: java.io.InputStream): javax.sound.midi.Sequence
                    /**
                     * Obtains a MIDI sequence from the URL provided. The URL must point to
                     * valid MIDI file data.
                     * @param url the URL for which the {#code Sequence} should be constructed
                     * @return a {#code Sequence} object based on the MIDI file data pointed to
                     *          by the URL
                     * @throws InvalidMidiDataException if the URL does not point to valid MIDI
                     *          file data recognized by the system
                     * @throws IOException if an I/O exception occurs
                     */
                    // @ts-ignore
                    public abstract getSequence(url: java.net.URL): javax.sound.midi.Sequence
                    /**
                     * Obtains a MIDI sequence from the {@code File} provided. The {@code File}
                     * must point to valid MIDI file data.
                     * @param file the {#code File} from which the {@code Sequence} should be
                     *          constructed
                     * @return a {#code Sequence} object based on the MIDI file data pointed to
                     *          by the {@code File}
                     * @throws InvalidMidiDataException if the {#code File} does not point to
                     *          valid MIDI file data recognized by the system
                     * @throws IOException if an I/O exception occurs
                     */
                    // @ts-ignore
                    public abstract getSequence(file: java.io.File): javax.sound.midi.Sequence
                }
            }
        }
    }
}
