declare namespace org {
    namespace springframework {
        namespace scripting {
            namespace config {
                /**
                 * {@code NamespaceHandler} that supports the wiring of
                 * objects backed by dynamic languages such as Groovy, JRuby and
                 * BeanShell. The following is an example (from the reference
                 * documentation) that details the wiring of a Groovy backed bean:
                 * <pre class="code">
                 * &lt;lang:groovy id="messenger"
                 * refresh-check-delay="5000"
                 * script-source="classpath:Messenger.groovy"&gt;
                 * &lt;lang:property name="message" value="I Can Do The Frug"/&gt;
                 * &lt;/lang:groovy&gt;
                 * </pre>
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @author Mark Fisher
                 * @since 2.0
                 */
                // @ts-ignore
                class LangNamespaceHandler extends NamespaceHandlerSupport {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    init(): void
                }
            }
        }
    }
}
