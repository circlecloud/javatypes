declare namespace javax {
    namespace imageio {
        namespace spi {
            /**
             * A superinterface for functionality common to all Image I/O service
             * provider interfaces (SPIs).  For more information on service
             * provider classes, see the class comment for the
             * <code>IIORegistry</code> class.
             * @see IIORegistry
             * @see javax.imageio.spi.ImageReaderSpi
             * @see javax.imageio.spi.ImageWriterSpi
             * @see javax.imageio.spi.ImageTranscoderSpi
             * @see javax.imageio.spi.ImageInputStreamSpi
             */
            // @ts-ignore
            abstract class IIOServiceProvider extends java.lang.Object implements javax.imageio.spi.RegisterableService {
                /**
                 * Constructs an <code>IIOServiceProvider</code> with a given
                 * vendor name and version identifier.
                 * @param vendorName the vendor name.
                 * @param version a version identifier.
                 * @exception IllegalArgumentException if <code>vendorName</code>
                 *  is <code>null</code>.
                 * @exception IllegalArgumentException if <code>version</code>
                 *  is <code>null</code>.
                 */
                // @ts-ignore
                constructor(vendorName: java.lang.String | string, version: java.lang.String | string)
                /**
                 * Constructs a blank <code>IIOServiceProvider</code>.  It is up
                 * to the subclass to initialize instance variables and/or
                 * override method implementations in order to ensure that the
                 * <code>getVendorName</code> and <code>getVersion</code> methods
                 * will return non-<code>null</code> values.
                 */
                // @ts-ignore
                constructor()
                /**
                 * A <code>String</code> to be returned from
                 * <code>getVendorName</code>, initially <code>null</code>.
                 * Constructors should set this to a non-<code>null</code> value.
                 */
                // @ts-ignore
                vendorName: java.lang.String | string
                /**
                 * A <code>String</code> to be returned from
                 * <code>getVersion</code>, initially null.  Constructors should
                 * set this to a non-<code>null</code> value.
                 */
                // @ts-ignore
                version: java.lang.String | string
                /**
                 * A callback that will be called exactly once after the Spi class
                 * has been instantiated and registered in a
                 * <code>ServiceRegistry</code>.  This may be used to verify that
                 * the environment is suitable for this service, for example that
                 * native libraries can be loaded.  If the service cannot function
                 * in the environment where it finds itself, it should deregister
                 * itself from the registry.
                 * <p> Only the registry should call this method.
                 * <p> The default implementation does nothing.
                 * @see ServiceRegistry#registerServiceProvider(Object provider)
                 */
                // @ts-ignore
                public onRegistration(registry: javax.imageio.spi.ServiceRegistry, category: java.lang.Class<any>): void
                /**
                 * A callback that will be whenever the Spi class has been
                 * deregistered from a <code>ServiceRegistry</code>.
                 * <p> Only the registry should call this method.
                 * <p> The default implementation does nothing.
                 * @see ServiceRegistry#deregisterServiceProvider(Object provider)
                 */
                // @ts-ignore
                public onDeregistration(registry: javax.imageio.spi.ServiceRegistry, category: java.lang.Class<any>): void
                /**
                 * Returns the name of the vendor responsible for creating this
                 * service provider and its associated implementation.  Because
                 * the vendor name may be used to select a service provider,
                 * it is not localized.
                 * <p> The default implementation returns the value of the
                 * <code>vendorName</code> instance variable.
                 * @return a non-<code>null</code> <code>String</code> containing
                 *  the name of the vendor.
                 */
                // @ts-ignore
                public getVendorName(): string
                /**
                 * Returns a string describing the version
                 * number of this service provider and its associated
                 * implementation.  Because the version may be used by transcoders
                 * to identify the service providers they understand, this method
                 * is not localized.
                 * <p> The default implementation returns the value of the
                 * <code>version</code> instance variable.
                 * @return a non-<code>null</code> <code>String</code> containing
                 *  the version of this service provider.
                 */
                // @ts-ignore
                public getVersion(): string
                /**
                 * Returns a brief, human-readable description of this service
                 * provider and its associated implementation.  The resulting
                 * string should be localized for the supplied
                 * <code>Locale</code>, if possible.
                 * @param locale a <code>Locale</code> for which the return value
                 *  should be localized.
                 * @return a <code>String</code> containing a description of this
                 *  service provider.
                 */
                // @ts-ignore
                public abstract getDescription(locale: java.util.Locale): string
            }
        }
    }
}
