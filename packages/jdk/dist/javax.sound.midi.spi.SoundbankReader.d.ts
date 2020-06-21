declare namespace javax {
    namespace sound {
        namespace midi {
            namespace spi {
                /**
                 * A {@code SoundbankReader} supplies soundbank file-reading services. Concrete
                 * subclasses of {@code SoundbankReader} parse a given soundbank file, producing
                 * a {@link javax.sound.midi.Soundbank} object that can be loaded into a
                 * {@link javax.sound.midi.Synthesizer}.
                 * @since 1.3
                 * @author Kara Kytle
                 */
                // @ts-ignore
                abstract class SoundbankReader extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Obtains a soundbank object from the URL provided.
                     * @param url URL representing the soundbank.
                     * @return soundbank object
                     * @throws InvalidMidiDataException if the URL does not point to valid MIDI
                     *          soundbank data recognized by this soundbank reader
                     * @throws IOException if an I/O error occurs
                     */
                    // @ts-ignore
                    public abstract getSoundbank(url: java.net.URL): javax.sound.midi.Soundbank
                    /**
                     * Obtains a soundbank object from the {@code InputStream} provided.
                     * @param stream {#code InputStream} representing the soundbank
                     * @return soundbank object
                     * @throws InvalidMidiDataException if the stream does not point to valid
                     *          MIDI soundbank data recognized by this soundbank reader
                     * @throws IOException if an I/O error occurs
                     */
                    // @ts-ignore
                    public abstract getSoundbank(stream: java.io.InputStream): javax.sound.midi.Soundbank
                    /**
                     * Obtains a soundbank object from the {@code File} provided.
                     * @param file the {#code File} representing the soundbank
                     * @return soundbank object
                     * @throws InvalidMidiDataException if the file does not point to valid MIDI
                     *          soundbank data recognized by this soundbank reader
                     * @throws IOException if an I/O error occurs
                     */
                    // @ts-ignore
                    public abstract getSoundbank(file: java.io.File): javax.sound.midi.Soundbank
                }
            }
        }
    }
}
