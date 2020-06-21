declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace annotation {
                /**
                 * Enables Spring's asynchronous method execution capability, similar to functionality
                 * found in Spring's {@code <task:*>} XML namespace.
                 * <p>To be used together with @{@link Configuration Configuration} classes as follows,
                 * enabling annotation-driven async processing for an entire Spring application context:
                 * <pre class="code">
                 * &#064;Configuration
                 * &#064;EnableAsync
                 * public class AppConfig {
                 * }</pre>
                 * {@code MyAsyncBean} is a user-defined type with one or more methods annotated with
                 * either Spring's {@code @Async} annotation, the EJB 3.1 {@code @javax.ejb.Asynchronous}
                 * annotation, or any custom annotation specified via the {@link #annotation} attribute.
                 * The aspect is added transparently for any registered bean, for instance via this
                 * configuration:
                 * <pre class="code">
                 * &#064;Configuration
                 * public class AnotherAppConfig {
                 * &#064;Bean
                 * public MyAsyncBean asyncBean() {
                 * return new MyAsyncBean();
                 * }
                 * }</pre>
                 * <p>By default, Spring will be searching for an associated thread pool definition:
                 * either a unique {@link org.springframework.core.task.TaskExecutor} bean in the context,
                 * or an {@link java.util.concurrent.Executor} bean named "taskExecutor" otherwise. If
                 * neither of the two is resolvable, a {@link org.springframework.core.task.SimpleAsyncTaskExecutor}
                 * will be used to process async method invocations. Besides, annotated methods having a
                 * {@code void} return type cannot transmit any exception back to the caller. By default,
                 * such uncaught exceptions are only logged.
                 * <p>To customize all this, implement {@link AsyncConfigurer} and provide:
                 * <ul>
                 * <li>your own {@link java.util.concurrent.Executor Executor} through the
                 * {@link AsyncConfigurer#getAsyncExecutor getAsyncExecutor()} method, and</li>
                 * <li>your own {@link org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler
                 * AsyncUncaughtExceptionHandler} through the {@link AsyncConfigurer#getAsyncUncaughtExceptionHandler
                 * getAsyncUncaughtExceptionHandler()}
                 * method.</li>
                 * </ul>
                 * <p><b>NOTE: {@link AsyncConfigurer} configuration classes get initialized early
                 * in the application context bootstrap. If you need any dependencies on other beans
                 * there, make sure to declare them 'lazy' as far as possible in order to let them
                 * go through other post-processors as well.</b>
                 * <pre class="code">
                 * &#064;Configuration
                 * &#064;EnableAsync
                 * public class AppConfig implements AsyncConfigurer {
                 * &#064;Override
                 * public Executor getAsyncExecutor() {
                 * ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
                 * executor.setCorePoolSize(7);
                 * executor.setMaxPoolSize(42);
                 * executor.setQueueCapacity(11);
                 * executor.setThreadNamePrefix("MyExecutor-");
                 * executor.initialize();
                 * return executor;
                 * }
                 * &#064;Override
                 * public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
                 * return new MyAsyncUncaughtExceptionHandler();
                 * }
                 * }</pre>
                 * <p>If only one item needs to be customized, {@code null} can be returned to
                 * keep the default settings. Consider also extending from {@link AsyncConfigurerSupport}
                 * when possible.
                 * <p>Note: In the above example the {@code ThreadPoolTaskExecutor} is not a fully managed
                 * Spring bean. Add the {@code @Bean} annotation to the {@code getAsyncExecutor()} method
                 * if you want a fully managed bean. In such circumstances it is no longer necessary to
                 * manually call the {@code executor.initialize()} method as this will be invoked
                 * automatically when the bean is initialized.
                 * <p>For reference, the example above can be compared to the following Spring XML
                 * configuration:
                 * <pre class="code">
                 * &lt;beans&gt;
                 * &lt;task:annotation-driven executor="myExecutor" exception-handler="exceptionHandler"/&gt;
                 * &lt;task:executor id="myExecutor" pool-size="7-42" queue-capacity="11"/&gt;
                 * &lt;bean id="asyncBean" class="com.foo.MyAsyncBean"/&gt;
                 * &lt;bean id="exceptionHandler" class="com.foo.MyAsyncUncaughtExceptionHandler"/&gt;
                 * &lt;/beans&gt;
                 * </pre>
                 * The above XML-based and JavaConfig-based examples are equivalent except for the
                 * setting of the <em>thread name prefix</em> of the {@code Executor}; this is because
                 * the {@code <task:executor>} element does not expose such an attribute. This
                 * demonstrates how the JavaConfig-based approach allows for maximum configurability
                 * through direct access to actual componentry.
                 * <p>The {@link #mode} attribute controls how advice is applied: If the mode is
                 * {@link AdviceMode#PROXY} (the default), then the other attributes control the behavior
                 * of the proxying. Please note that proxy mode allows for interception of calls through
                 * the proxy only; local calls within the same class cannot get intercepted that way.
                 * <p>Note that if the {@linkplain #mode} is set to {@link AdviceMode#ASPECTJ}, then the
                 * value of the {@link #proxyTargetClass} attribute will be ignored. Note also that in
                 * this case the {@code spring-aspects} module JAR must be present on the classpath, with
                 * compile-time weaving or load-time weaving applying the aspect to the affected classes.
                 * There is no proxy involved in such a scenario; local calls will be intercepted as well.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @author Stephane Nicoll
                 * @author Sam Brannen
                 * @since 3.1
                 * @see Async
                 * @see AsyncConfigurer
                 * @see AsyncConfigurationSelector
                 */
                // @ts-ignore
                abstract class EnableAsync implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
