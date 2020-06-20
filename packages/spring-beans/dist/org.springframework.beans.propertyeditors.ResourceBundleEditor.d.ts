declare namespace org {
    namespace springframework {
        namespace beans {
            namespace propertyeditors {
                /**
                 * {@link java.beans.PropertyEditor} implementation for standard JDK
                 * {@link java.util.ResourceBundle ResourceBundles}.
                 * <p>Only supports conversion <i>from</i> a String, but not <i>to</i> a String.
                 * Find below some examples of using this class in a (properly configured)
                 * Spring container using XML-based metadata:
                 * <pre class="code"> &lt;bean id="errorDialog" class="..."&gt;
                 * &lt;!--
                 * the 'messages' property is of type java.util.ResourceBundle.
                 * the 'DialogMessages.properties' file exists at the root of the CLASSPATH
                 * --&gt;
                 * &lt;property name="messages" value="DialogMessages"/&gt;
                 * &lt;/bean&gt;</pre>
                 * <pre class="code"> &lt;bean id="errorDialog" class="..."&gt;
                 * &lt;!--
                 * the 'DialogMessages.properties' file exists in the 'com/messages' package
                 * --&gt;
                 * &lt;property name="messages" value="com/messages/DialogMessages"/&gt;
                 * &lt;/bean&gt;</pre>
                 * <p>A 'properly configured' Spring {@link org.springframework.context.ApplicationContext container}
                 * might contain a {@link org.springframework.beans.factory.config.CustomEditorConfigurer}
                 * definition such that the conversion can be effected transparently:
                 * <pre class="code"> &lt;bean class="org.springframework.beans.factory.config.CustomEditorConfigurer"&gt;
                 * &lt;property name="customEditors"&gt;
                 * &lt;map&gt;
                 * &lt;entry key="java.util.ResourceBundle"&gt;
                 * &lt;bean class="org.springframework.beans.propertyeditors.ResourceBundleEditor"/&gt;
                 * &lt;/entry&gt;
                 * &lt;/map&gt;
                 * &lt;/property&gt;
                 * &lt;/bean&gt;</pre>
                 * <p>Please note that this {@link java.beans.PropertyEditor} is <b>not</b>
                 * registered by default with any of the Spring infrastructure.
                 * <p>Thanks to David Leal Valmana for the suggestion and initial prototype.
                 * @author Rick Evans
                 * @author Juergen Hoeller
                 * @since 2.0
                 */
                // @ts-ignore
                class ResourceBundleEditor extends java.beans.PropertyEditorSupport {
                    // @ts-ignore
                    constructor()
                    /**
                     * The separator used to distinguish between the base name and the locale
                     * (if any) when {@link #setAsText(String) converting from a String}.
                     */
                    // @ts-ignore
                    readonly BASE_NAME_SEPARATOR: string
                    // @ts-ignore
                    setAsText(text: string): void
                }
            }
        }
    }
}
