declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace AudioFormat {
                /**
                 * The <code>Encoding</code> class  names the  specific type of data representation
                 * used for an audio stream.   The encoding includes aspects of the
                 * sound format other than the number of channels, sample rate, sample size,
                 * frame rate, frame size, and byte order.
                 * <p>
                 * One ubiquitous type of audio encoding is pulse-code modulation (PCM),
                 * which is simply a linear (proportional) representation of the sound
                 * waveform.  With PCM, the number stored in each sample is proportional
                 * to the instantaneous amplitude of the sound pressure at that point in
                 * time.  The numbers may be signed or unsigned integers or floats.
                 * Besides PCM, other encodings include mu-law and a-law, which are nonlinear
                 * mappings of the sound amplitude that are often used for recording speech.
                 * <p>
                 * You can use a predefined encoding by referring to one of the static
                 * objects created by this class, such as PCM_SIGNED or
                 * PCM_UNSIGNED.  Service providers can create new encodings, such as
                 * compressed audio formats, and make
                 * these available through the <code>{@link AudioSystem}</code> class.
                 * <p>
                 * The <code>Encoding</code> class is static, so that all
                 * <code>AudioFormat</code> objects that have the same encoding will refer
                 * to the same object (rather than different instances of the same class).
                 * This allows matches to be made by checking that two format's encodings
                 * are equal.
                 * @see AudioFormat
                 * @see javax.sound.sampled.spi.FormatConversionProvider
                 * @author Kara Kytle
                 * @since 1.3
                 */
                // @ts-ignore
                class Encoding extends java.lang.Object {
                    /**
                     * Constructs a new encoding.
                     * @param name  the name of the new type of encoding
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    /**
                     * Specifies signed, linear PCM data.
                     */
                    // @ts-ignore
                    public static readonly PCM_SIGNED: javax.sound.sampled.AudioFormat.Encoding
                    /**
                     * Specifies unsigned, linear PCM data.
                     */
                    // @ts-ignore
                    public static readonly PCM_UNSIGNED: javax.sound.sampled.AudioFormat.Encoding
                    /**
                     * Specifies floating-point PCM data.
                     * @since 1.7
                     */
                    // @ts-ignore
                    public static readonly PCM_FLOAT: javax.sound.sampled.AudioFormat.Encoding
                    /**
                     * Specifies u-law encoded data.
                     */
                    // @ts-ignore
                    public static readonly ULAW: javax.sound.sampled.AudioFormat.Encoding
                    /**
                     * Specifies a-law encoded data.
                     */
                    // @ts-ignore
                    public static readonly ALAW: javax.sound.sampled.AudioFormat.Encoding
                    /**
                     * Finalizes the equals method
                     */
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    /**
                     * Finalizes the hashCode method
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Provides the <code>String</code> representation of the encoding.  This <code>String</code> is
                     * the same name that was passed to the constructor.  For the predefined encodings, the name
                     * is similar to the encoding's variable (field) name.  For example, <code>PCM_SIGNED.toString()</code> returns
                     * the name "pcm_signed".
                     * @return the encoding name
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
