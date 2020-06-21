declare namespace javax {
    namespace imageio {
        namespace spi {
            /**
             * The service provider interface (SPI) for <code>ImageTranscoder</code>s.
             * For more information on service provider classes, see the class comment
             * for the <code>IIORegistry</code> class.
             * @see IIORegistry
             * @see javax.imageio.ImageTranscoder
             */
            // @ts-ignore
            abstract class ImageTranscoderSpi extends javax.imageio.spi.IIOServiceProvider {
                /**
                 * Constructs a blank <code>ImageTranscoderSpi</code>.  It is up
                 * to the subclass to initialize instance variables and/or
                 * override method implementations in order to provide working
                 * versions of all methods.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an <code>ImageTranscoderSpi</code> with a given set
                 * of values.
                 * @param vendorName the vendor name.
                 * @param version a version identifier.
                 */
                // @ts-ignore
                constructor(vendorName: java.lang.String | string, version: java.lang.String | string)
                /**
                 * Returns the fully qualified class name of an
                 * <code>ImageReaderSpi</code> class that generates
                 * <code>IIOMetadata</code> objects that may be used as input to
                 * this transcoder.
                 * @return a <code>String</code> containing the fully-qualified
                 *  class name of the <code>ImageReaderSpi</code> implementation class.
                 * @see ImageReaderSpi
                 */
                // @ts-ignore
                public abstract getReaderServiceProviderName(): string
                /**
                 * Returns the fully qualified class name of an
                 * <code>ImageWriterSpi</code> class that generates
                 * <code>IIOMetadata</code> objects that may be used as input to
                 * this transcoder.
                 * @return a <code>String</code> containing the fully-qualified
                 *  class name of the <code>ImageWriterSpi</code> implementation class.
                 * @see ImageWriterSpi
                 */
                // @ts-ignore
                public abstract getWriterServiceProviderName(): string
                /**
                 * Returns an instance of the <code>ImageTranscoder</code>
                 * implementation associated with this service provider.
                 * @return an <code>ImageTranscoder</code> instance.
                 */
                // @ts-ignore
                public abstract createTranscoderInstance(): javax.imageio.ImageTranscoder
            }
        }
    }
}
