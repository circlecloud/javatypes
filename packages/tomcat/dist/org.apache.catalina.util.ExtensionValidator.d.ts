declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * Ensures that all extension dependencies are resolved for a WEB application
                 * are met. This class builds a master list of extensions available to an
                 * application and then validates those extensions.
                 * See http://docs.oracle.com/javase/1.4.2/docs/guide/extensions/spec.html
                 * for a detailed explanation of the extension mechanism in Java.
                 * @author Greg Murray
                 * @author Justyna Horwat
                 */
                // @ts-ignore
                class ExtensionValidator extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Runtime validation of a Web Application.
                     * This method uses JNDI to look up the resources located under a
                     * <code>DirContext</code>. It locates Web Application MANIFEST.MF
                     * file in the /META-INF/ directory of the application and all
                     * MANIFEST.MF files in each JAR file located in the WEB-INF/lib
                     * directory and creates an <code>ArrayList</code> of
                     * <code>ManifestResource</code> objects. These objects are then passed
                     * to the validateManifestResources method for validation.
                     * @param resources The resources configured for this Web Application
                     * @param context   The context from which the Logger and path to the
                     *                   application
                     * @return true if all required extensions satisfied
                     * @throws IOException Error reading resources needed for validation
                     */
                    // @ts-ignore
                    public static validateApplication(resources: org.apache.catalina.WebResourceRoot, context: org.apache.catalina.Context): boolean
                    /**
                     * Checks to see if the given system JAR file contains a MANIFEST, and adds
                     * it to the container's manifest resources.
                     * @param jarFile The system JAR whose manifest to add
                     * @throws IOException Error reading JAR file
                     */
                    // @ts-ignore
                    public static addSystemResource(jarFile: java.io.File): void
                }
            }
        }
    }
}
