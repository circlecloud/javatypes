declare namespace org {
    namespace apache {
        namespace naming {
            namespace factory {
                /**
                 * Factory class that creates a JNDI named javamail MimePartDataSource
                 * object which can be used for sending email using SMTP.
                 * <p>
                 * Can be configured in the Context scope
                 * of your server.xml configuration file.
                 * <p>
                 * Example:
                 * <pre>
                 * &lt;Resource name="mail/send" auth="CONTAINER"
                 * type="javax.mail.internet.MimePartDataSource"/&gt;
                 * &lt;ResourceParams name="mail/send"&gt;
                 * &lt;parameter&gt;&lt;name&gt;factory&lt;/name&gt;
                 * &lt;value&gt;org.apache.naming.factory.SendMailFactory&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;parameter&gt;&lt;name&gt;mail.smtp.host&lt;/name&gt;
                 * &lt;value&gt;your.smtp.host&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;parameter&gt;&lt;name&gt;mail.smtp.user&lt;/name&gt;
                 * &lt;value&gt;someuser&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;parameter&gt;&lt;name&gt;mail.from&lt;/name&gt;
                 * &lt;value&gt;someuser@some.host&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;parameter&gt;&lt;name&gt;mail.smtp.sendpartial&lt;/name&gt;
                 * &lt;value&gt;true&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;parameter&gt;&lt;name&gt;mail.smtp.dsn.notify&lt;/name&gt;
                 * &lt;value&gt;FAILURE&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;parameter&gt;&lt;name&gt;mail.smtp.dsn.ret&lt;/name&gt;
                 * &lt;value&gt;FULL&lt;/value&gt;
                 * &lt;/parameter&gt;
                 * &lt;/ResourceParams&gt;
                 * </pre>
                 * @author Glenn Nielsen Rich Catlett
                 */
                // @ts-ignore
                class SendMailFactory extends java.lang.Object implements javax.naming.spi.ObjectFactory {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly DataSourceClassName: java.lang.String | string
                    // @ts-ignore
                    public getObjectInstance(refObj: java.lang.Object | any, name: javax.naming.Name, ctx: javax.naming.Context, env: java.util.Hashtable<any, any>): any
                }
            }
        }
    }
}
