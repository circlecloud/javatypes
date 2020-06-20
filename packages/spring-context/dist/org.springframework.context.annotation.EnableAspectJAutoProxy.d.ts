declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Enables support for handling components marked with AspectJ's {@code @Aspect} annotation,
                 * similar to functionality found in Spring's {@code <aop:aspectj-autoproxy>} XML element.
                 * To be used on @{@link Configuration} classes as follows:
                 * <pre class="code">
                 * &#064;Configuration
                 * &#064;EnableAspectJAutoProxy
                 * public class AppConfig {
                 * &#064;Bean
                 * public FooService fooService() {
                 * return new FooService();
                 * }
                 * &#064;Bean
                 * public MyAspect myAspect() {
                 * return new MyAspect();
                 * }
                 * }</pre>
                 * Where {@code FooService} is a typical POJO component and {@code MyAspect} is an
                 * {@code @Aspect}-style aspect:
                 * <pre class="code">
                 * public class FooService {
                 * // various methods
                 * }</pre>
                 * <pre class="code">
                 * &#064;Aspect
                 * public class MyAspect {
                 * &#064;Before("execution(* FooService+.*(..))")
                 * public void advice() {
                 * // advise FooService methods as appropriate
                 * }
                 * }</pre>
                 * In the scenario above, {@code @EnableAspectJAutoProxy} ensures that {@code MyAspect}
                 * will be properly processed and that {@code FooService} will be proxied mixing in the
                 * advice that it contributes.
                 * <p>Users can control the type of proxy that gets created for {@code FooService} using
                 * the {@link #proxyTargetClass()} attribute. The following enables CGLIB-style 'subclass'
                 * proxies as opposed to the default interface-based JDK proxy approach.
                 * <pre class="code">
                 * &#064;Configuration
                 * &#064;EnableAspectJAutoProxy(proxyTargetClass=true)
                 * public class AppConfig {
                 * // ...
                 * }</pre>
                 * <p>Note that {@code @Aspect} beans may be component-scanned like any other.
                 * Simply mark the aspect with both {@code @Aspect} and {@code @Component}:
                 * <pre class="code">
                 * package com.foo;
                 * &#064;Component
                 * public class FooService { ... }
                 * &#064;Aspect
                 * &#064;Component
                 * public class MyAspect { ... }</pre>
                 * Then use the @{@link ComponentScan} annotation to pick both up:
                 * <pre class="code">
                 * &#064;Configuration
                 * &#064;ComponentScan("com.foo")
                 * &#064;EnableAspectJAutoProxy
                 * public class AppConfig {
                 * // no explicit &#064Bean definitions required
                 * }</pre>
                 * <b>Note: {@code @EnableAspectJAutoProxy} applies to its local application context only,
                 * allowing for selective proxying of beans at different levels.</b> Please redeclare
                 * {@code @EnableAspectJAutoProxy} in each individual context, e.g. the common root web
                 * application context and any separate {@code DispatcherServlet} application contexts,
                 * if you need to apply its behavior at multiple levels.
                 * <p>This feature requires the presence of {@code aspectjweaver} on the classpath.
                 * While that dependency is optional for {@code spring-aop} in general, it is required
                 * for {@code @EnableAspectJAutoProxy} and its underlying facilities.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see org.aspectj.lang.annotation.Aspect
                 */
                // @ts-ignore
                class EnableAspectJAutoProxy implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
