declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Complete implementation of the
                 * {@link org.springframework.beans.factory.support.AutowireCandidateResolver} strategy
                 * interface, providing support for qualifier annotations as well as for lazy resolution
                 * driven by the {@link Lazy} annotation in the {@code context.annotation} package.
                 * @author Juergen Hoeller
                 * @since 4.0
                 */
                // @ts-ignore
                class ContextAnnotationAutowireCandidateResolver extends QualifierAnnotationAutowireCandidateResolver {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getLazyResolutionProxyIfNecessary(descriptor: DependencyDescriptor, beanName: string): java.lang.Object
                    // @ts-ignore
                    isLazy(descriptor: DependencyDescriptor): boolean
                    // @ts-ignore
                    buildLazyResolutionProxy(descriptor: DependencyDescriptor, beanName: string): java.lang.Object
                }
            }
        }
    }
}
