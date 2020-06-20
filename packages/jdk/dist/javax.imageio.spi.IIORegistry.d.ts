declare namespace javax {
    namespace imageio {
        namespace spi {
            /**
             * A registry for service provider instances.  Service provider
             * classes may be detected at run time by means of meta-information in
             * the JAR files containing them.  The intent is that it be relatively
             * inexpensive to load and inspect all available service provider
             * classes.  These classes may them be used to locate and instantiate
             * more heavyweight classes that will perform actual work, in this
             * case instances of <code>ImageReader</code>,
             * <code>ImageWriter</code>, <code>ImageTranscoder</code>,
             * <code>ImageInputStream</code>, and <code>ImageOutputStream</code>.
             * <p> Service providers found on the system classpath (typically
             * the <code>lib/ext</code> directory in the Java
             * installation directory) are automatically loaded as soon as this class is
             * instantiated.
             * <p> When the <code>registerApplicationClasspathSpis</code> method
             * is called, service provider instances declared in the
             * meta-information section of JAR files on the application class path
             * are loaded.  To declare a service provider, a <code>services</code>
             * subdirectory is placed within the <code>META-INF</code> directory
             * that is present in every JAR file.  This directory contains a file
             * for each service provider interface that has one or more
             * implementation classes present in the JAR file.  For example, if
             * the JAR file contained a class named
             * <code>com.mycompany.imageio.MyFormatReaderSpi</code> which
             * implements the <code>ImageReaderSpi</code> interface, the JAR file
             * would contain a file named:
             * <pre>
             * META-INF/services/javax.imageio.spi.ImageReaderSpi
             * </pre>
             * containing the line:
             * <pre>
             * com.mycompany.imageio.MyFormatReaderSpi
             * </pre>
             * <p> The service provider classes are intended to be lightweight
             * and quick to load.  Implementations of these interfaces
             * should avoid complex dependencies on other classes and on
             * native code.
             * <p> It is also possible to manually add service providers not found
             * automatically, as well as to remove those that are using the
             * interfaces of the <code>ServiceRegistry</code> class.  Thus
             * the application may customize the contents of the registry as it
             * sees fit.
             * <p> For more details on declaring service providers, and the JAR
             * format in general, see the <a
             * href="{@docRoot}/../technotes/guides/jar/jar.html">
             * JAR File Specification</a>.
             */
            // @ts-ignore
            class IIORegistry extends javax.imageio.spi.ServiceRegistry {
                /**
                 * Returns the default <code>IIORegistry</code> instance used by
                 * the Image I/O API.  This instance should be used for all
                 * registry functions.
                 * <p> Each <code>ThreadGroup</code> will receive its own
                 * instance; this allows different <code>Applet</code>s in the
                 * same browser (for example) to each have their own registry.
                 * @return the default registry for the current
                 *  <code>ThreadGroup</code>.
                 */
                // @ts-ignore
                getDefaultInstance(): javax.imageio.spi.IIORegistry
                /**
                 * Registers all available service providers found on the
                 * application class path, using the default
                 * <code>ClassLoader</code>.  This method is typically invoked by
                 * the <code>ImageIO.scanForPlugins</code> method.
                 * @see javax.imageio.ImageIO#scanForPlugins
                 * @see ClassLoader#getResources
                 */
                // @ts-ignore
                registerApplicationClasspathSpis(): void
            }
        }
    }
}
