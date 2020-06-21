declare namespace org {
    namespace springframework {
        namespace context {
            namespace weaving {
                /**
                 * Default {@link LoadTimeWeaver} bean for use in an application context,
                 * decorating an automatically detected internal {@code LoadTimeWeaver}.
                 * <p>Typically registered for the default bean name "{@code loadTimeWeaver}";
                 * the most convenient way to achieve this is Spring's
                 * {@code <context:load-time-weaver>} XML tag or {@code @EnableLoadTimeWeaving}
                 * on a {@code @Configuration} class.
                 * <p>This class implements a runtime environment check for obtaining the
                 * appropriate weaver implementation. As of Spring Framework 5.0, it detects
                 * Oracle WebLogic 10+, GlassFish 4+, Tomcat 8+, WildFly 8+, IBM WebSphere 8.5+,
                 * {@link InstrumentationSavingAgent Spring's VM agent}, and any {@link ClassLoader}
                 * supported by Spring's {@link ReflectiveLoadTimeWeaver} (such as Liberty's).
                 * @author Juergen Hoeller
                 * @author Ramnivas Laddad
                 * @author Costin Leau
                 * @since 2.5
                 * @see org.springframework.context.ConfigurableApplicationContext#LOAD_TIME_WEAVER_BEAN_NAME
                 */
                // @ts-ignore
                class DefaultContextLoadTimeWeaver extends java.lang.Object implements org.springframework.instrument.classloading.LoadTimeWeaver {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(beanClassLoader: java.lang.ClassLoader)
                    // @ts-ignore
                    readonly logger: Log
                    // @ts-ignore
                    public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    createServerSpecificLoadTimeWeaver(classLoader: java.lang.ClassLoader): org.springframework.instrument.classloading.LoadTimeWeaver
                    // @ts-ignore
                    public destroy(): void
                    // @ts-ignore
                    public addTransformer(transformer: java.lang.instrument.ClassFileTransformer): void
                    // @ts-ignore
                    public getInstrumentableClassLoader(): java.lang.ClassLoader
                    // @ts-ignore
                    public getThrowawayClassLoader(): java.lang.ClassLoader
                }
            }
        }
    }
}
