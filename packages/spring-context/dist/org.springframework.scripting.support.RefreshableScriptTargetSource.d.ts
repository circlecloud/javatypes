declare namespace org {
    namespace springframework {
        namespace scripting {
            namespace support {
                /**
                 * Subclass of {@link BeanFactoryRefreshableTargetSource} that determines whether
                 * a refresh is required through the given {@link ScriptFactory}.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @author Mark Fisher
                 * @since 2.0
                 */
                // @ts-ignore
                class RefreshableScriptTargetSource extends BeanFactoryRefreshableTargetSource {
                    /**
                     * Create a new RefreshableScriptTargetSource.
                     * @param beanFactory the BeanFactory to fetch the scripted bean from
                     * @param beanName the name of the target bean
                     * @param scriptFactory the ScriptFactory to delegate to for determining
                     *  whether a refresh is required
                     * @param scriptSource the ScriptSource for the script definition
                     * @param isFactoryBean whether the target script defines a FactoryBean
                     */
                    // @ts-ignore
                    constructor(beanFactory: BeanFactory, beanName: java.lang.String | string, scriptFactory: org.springframework.scripting.ScriptFactory, scriptSource: org.springframework.scripting.ScriptSource, isFactoryBean: boolean)
                    /**
                     * Determine whether a refresh is required through calling
                     * ScriptFactory's {@code requiresScriptedObjectRefresh} method.
                     * @see ScriptFactory#requiresScriptedObjectRefresh(ScriptSource)
                     */
                    // @ts-ignore
                    requiresRefresh(): boolean
                    /**
                     * Obtain a fresh target object, retrieving a FactoryBean if necessary.
                     */
                    // @ts-ignore
                    obtainFreshBean(beanFactory: BeanFactory, beanName: java.lang.String | string): any
                }
            }
        }
    }
}
