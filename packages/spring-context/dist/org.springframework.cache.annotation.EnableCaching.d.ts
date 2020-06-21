declare namespace org {
    namespace springframework {
        namespace cache {
            namespace annotation {
                /**
                 * Enables Spring's annotation-driven cache management capability, similar to the
                 * support found in Spring's {@code <cache:*>} XML namespace. To be used together
                 * with @{@link org.springframework.context.annotation.Configuration Configuration}
                 * classes as follows:
                 * <pre class="code">
                 * &#064;Configuration
                 * &#064;EnableCaching
                 * public class AppConfig {
                 * &#064;Bean
                 * public MyService myService() {
                 * // configure and return a class having &#064;Cacheable methods
                 * return new MyService();
                 * }
                 * &#064;Bean
                 * public CacheManager cacheManager() {
                 * // configure and return an implementation of Spring's CacheManager SPI
                 * SimpleCacheManager cacheManager = new SimpleCacheManager();
                 * cacheManager.setCaches(Arrays.asList(new ConcurrentMapCache("default")));
                 * return cacheManager;
                 * }
                 * }</pre>
                 * <p>For reference, the example above can be compared to the following Spring XML
                 * configuration:
                 * <pre class="code">
                 * &lt;beans&gt;
                 * &lt;cache:annotation-driven/&gt;
                 * &lt;bean id="myService" class="com.foo.MyService"/&gt;
                 * &lt;bean id="cacheManager" class="org.springframework.cache.support.SimpleCacheManager"&gt;
                 * &lt;property name="caches"&gt;
                 * &lt;set&gt;
                 * &lt;bean class="org.springframework.cache.concurrent.ConcurrentMapCacheFactoryBean"&gt;
                 * &lt;property name="name" value="default"/&gt;
                 * &lt;/bean&gt;
                 * &lt;/set&gt;
                 * &lt;/property&gt;
                 * &lt;/bean&gt;
                 * &lt;/beans&gt;
                 * </pre>
                 * In both of the scenarios above, {@code @EnableCaching} and {@code
                 * <cache:annotation-driven/>} are responsible for registering the necessary Spring
                 * components that power annotation-driven cache management, such as the
                 * {@link org.springframework.cache.interceptor.CacheInterceptor CacheInterceptor} and the
                 * proxy- or AspectJ-based advice that weaves the interceptor into the call stack when
                 * {@link org.springframework.cache.annotation.Cacheable @Cacheable} methods are invoked.
                 * <p>If the JSR-107 API and Spring's JCache implementation are present, the necessary
                 * components to manage standard cache annotations are also registered. This creates the
                 * proxy- or AspectJ-based advice that weaves the interceptor into the call stack when
                 * methods annotated with {@code CacheResult}, {@code CachePut}, {@code CacheRemove} or
                 * {@code CacheRemoveAll} are invoked.
                 * <p><strong>A bean of type {@link org.springframework.cache.CacheManager CacheManager}
                 * must be registered</strong>, as there is no reasonable default that the framework can
                 * use as a convention. And whereas the {@code <cache:annotation-driven>} element assumes
                 * a bean <em>named</em> "cacheManager", {@code @EnableCaching} searches for a cache
                 * manager bean <em>by type</em>. Therefore, naming of the cache manager bean method is
                 * not significant.
                 * <p>For those that wish to establish a more direct relationship between
                 * {@code @EnableCaching} and the exact cache manager bean to be used,
                 * the {@link CachingConfigurer} callback interface may be implemented.
                 * Notice the {@code @Override}-annotated methods below:
                 * <pre class="code">
                 * &#064;Configuration
                 * &#064;EnableCaching
                 * public class AppConfig extends CachingConfigurerSupport {
                 * &#064;Bean
                 * public MyService myService() {
                 * // configure and return a class having &#064;Cacheable methods
                 * return new MyService();
                 * }
                 * &#064;Bean
                 * &#064;Override
                 * public CacheManager cacheManager() {
                 * // configure and return an implementation of Spring's CacheManager SPI
                 * SimpleCacheManager cacheManager = new SimpleCacheManager();
                 * cacheManager.setCaches(Arrays.asList(new ConcurrentMapCache("default")));
                 * return cacheManager;
                 * }
                 * &#064;Bean
                 * &#064;Override
                 * public KeyGenerator keyGenerator() {
                 * // configure and return an implementation of Spring's KeyGenerator SPI
                 * return new MyKeyGenerator();
                 * }
                 * }</pre>
                 * This approach may be desirable simply because it is more explicit, or it may be
                 * necessary in order to distinguish between two {@code CacheManager} beans present in the
                 * same container.
                 * <p>Notice also the {@code keyGenerator} method in the example above. This allows for
                 * customizing the strategy for cache key generation, per Spring's {@link
                 * org.springframework.cache.interceptor.KeyGenerator KeyGenerator} SPI. Normally,
                 * {@code @EnableCaching} will configure Spring's
                 * {@link org.springframework.cache.interceptor.SimpleKeyGenerator SimpleKeyGenerator}
                 * for this purpose, but when implementing {@code CachingConfigurer}, a key generator
                 * must be provided explicitly. Return {@code null} or {@code new SimpleKeyGenerator()}
                 * from this method if no customization is necessary.
                 * <p>{@link CachingConfigurer} offers additional customization options: it is recommended
                 * to extend from {@link org.springframework.cache.annotation.CachingConfigurerSupport
                 * CachingConfigurerSupport} that provides a default implementation for all methods which
                 * can be useful if you do not need to customize everything. See {@link CachingConfigurer}
                 * Javadoc for further details.
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
                 * @since 3.1
                 * @see CachingConfigurer
                 * @see CachingConfigurationSelector
                 * @see ProxyCachingConfiguration
                 * @see org.springframework.cache.aspectj.AspectJCachingConfiguration
                 */
                // @ts-ignore
                abstract class EnableCaching implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
