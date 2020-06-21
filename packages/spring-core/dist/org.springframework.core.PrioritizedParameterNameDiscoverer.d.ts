declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * {@link ParameterNameDiscoverer} implementation that tries several discoverer
             * delegates in succession. Those added first in the {@code addDiscoverer} method
             * have highest priority. If one returns {@code null}, the next will be tried.
             * <p>The default behavior is to return {@code null} if no discoverer matches.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @since 2.0
             */
            // @ts-ignore
            class PrioritizedParameterNameDiscoverer extends java.lang.Object implements org.springframework.core.ParameterNameDiscoverer {
                // @ts-ignore
                constructor()
                /**
                 * Add a further {@link ParameterNameDiscoverer} delegate to the list of
                 * discoverers that this {@code PrioritizedParameterNameDiscoverer} checks.
                 */
                // @ts-ignore
                public addDiscoverer(pnd: org.springframework.core.ParameterNameDiscoverer): void
                // @ts-ignore
                public getParameterNames(method: java.lang.reflect.Method): string[]
                // @ts-ignore
                public getParameterNames(ctor: java.lang.reflect.Constructor<any>): string[]
            }
        }
    }
}
