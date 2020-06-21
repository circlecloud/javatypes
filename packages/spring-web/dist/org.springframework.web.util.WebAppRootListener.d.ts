declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Listener that sets a system property to the web application root directory.
                 * The key of the system property can be defined with the "webAppRootKey" init
                 * parameter at the servlet context level (i.e. context-param in web.xml),
                 * the default key is "webapp.root".
                 * <p>Can be used for toolkits that support substitution with system properties
                 * (i.e. System.getProperty values), like log4j's "${key}" syntax within log
                 * file locations.
                 * <p>Note: This listener should be placed before ContextLoaderListener in {@code web.xml},
                 * at least when used for log4j. Log4jConfigListener sets the system property
                 * implicitly, so there's no need for this listener in addition to it.
                 * <p><b>WARNING</b>: Some containers, e.g. Tomcat, do NOT keep system properties separate
                 * per web app. You have to use unique "webAppRootKey" context-params per web app
                 * then, to avoid clashes. Other containers like Resin do isolate each web app's
                 * system properties: Here you can use the default key (i.e. no "webAppRootKey"
                 * context-param at all) without worrying.
                 * <p><b>WARNING</b>: The WAR file containing the web application needs to be expanded
                 * to allow for setting the web app root system property. This is by default not
                 * the case when a WAR file gets deployed to WebLogic, for example. Do not use
                 * this listener in such an environment!
                 * @author Juergen Hoeller
                 * @since 18.04.2003
                 * @see WebUtils#setWebAppRootSystemProperty
                 * @see System#getProperty
                 */
                // @ts-ignore
                class WebAppRootListener extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public contextInitialized(event: ServletContextEvent): void
                    // @ts-ignore
                    public contextDestroyed(event: ServletContextEvent): void
                }
            }
        }
    }
}
