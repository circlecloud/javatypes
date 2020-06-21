declare namespace org {
    namespace apache {
        namespace naming {
            namespace factory {
                /**
                 * <p>Factory class that creates a JNDI named JavaMail Session factory,
                 * which can be used for managing inbound and outbound electronic mail
                 * messages via JavaMail APIs.  All messaging environment properties
                 * described in the JavaMail Specification may be passed to the Session
                 * factory; however the following properties are the most commonly used:</p>
                 * <ul>
                 * <li>
                 * <li><strong>mail.smtp.host</strong> - Hostname for outbound transport
                 * connections.  Defaults to <code>localhost</code> if not specified.</li>
                 * </ul>
                 * <p>This factory can be configured in a
                 * <code>&lt;Context&gt;</code> element in your <code>conf/server.xml</code>
                 * configuration file.  An example of factory configuration is:</p>
                 * <pre>
                 * &lt;Resource name="mail/smtp" auth="CONTAINER"
                 * type="javax.mail.Session"/&gt;
                 * &lt;ResourceParams name="mail/smtp"&gt;
                 * &lt;parameter&gt;
                 * &lt;name&gt;factory&lt;/name&gt;
                 * &lt;value&gt;org.apache.naming.factory.MailSessionFactory&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;parameter&gt;
                 * &lt;name&gt;mail.smtp.host&lt;/name&gt;
                 * &lt;value&gt;mail.mycompany.com&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;/ResourceParams&gt;
                 * </pre>
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class MailSessionFactory extends java.lang.Object implements javax.naming.spi.ObjectFactory {
                    // @ts-ignore
                    constructor()
                    /**
                     * The Java type for which this factory knows how to create objects.
                     */
                    // @ts-ignore
                    static readonly factoryType: java.lang.String | string
                    /**
                     * Create and return an object instance based on the specified
                     * characteristics.
                     * @param refObj Reference information containing our parameters, or null
                     *   if there are no parameters
                     * @param name The name of this object, relative to context, or null
                     *   if there is no name
                     * @param context The context to which name is relative, or null if name
                     *   is relative to the default initial context
                     * @param env Environment variables, or null if there are none
                     * @exception Exception if an error occurs during object creation
                     */
                    // @ts-ignore
                    public getObjectInstance(refObj: java.lang.Object | any, name: javax.naming.Name, context: javax.naming.Context, env: java.util.Hashtable<any, any>): any
                }
            }
        }
    }
}
