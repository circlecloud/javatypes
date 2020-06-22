declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace cdi {
                        /**
                         * Base class for {@link Bean} wrappers.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        abstract class CdiBean<T> extends java.lang.Object {
                            /**
                             * Creates a new {@link CdiBean}.
                             * @param qualifiers must not be {#literal null}.
                             * @param beanClass has to be an interface must not be {#literal null}.
                             * @param beanManager the CDI {#link BeanManager}, must not be {@literal null}.
                             */
                            // @ts-ignore
                            constructor(qualifiers: java.util.Set<java.lang.annotation.Annotation> | Array<java.lang.annotation.Annotation>, beanClass: java.lang.Class<T>, beanManager: BeanManager)
                            /**
                             * Creates a new {@link CdiBean}.
                             * @param qualifiers must not be {#literal null}.
                             * @param types additional bean types, must not be {#literal null}.
                             * @param beanClass must not be {#literal null}.
                             * @param beanManager the CDI {#link BeanManager}, must not be {@literal null}.
                             */
                            // @ts-ignore
                            constructor(qualifiers: java.util.Set<java.lang.annotation.Annotation> | Array<java.lang.annotation.Annotation>, types: java.util.Set<java.lang.reflect.Type> | Array<java.lang.reflect.Type>, beanClass: java.lang.Class<T>, beanManager: BeanManager)
                            // @ts-ignore
                            readonly beanManager: BeanManager
                            // @ts-ignore
                            public getTypes(): Array<java.lang.reflect.Type>
                            /**
                             * Returns an instance of the given {@link Bean} from the container.
                             * @param <S> the actual class type of the {#link Bean}.
                             * @param bean the {#link Bean} defining the instance to create.
                             * @param type the expected component type of the instance created from the {#link Bean}.
                             * @return an instance of the given {#link Bean}.
                             * @see javax.enterprise.inject.spi.BeanManager#getReference(Bean, Type, CreationalContext)
                             * @see javax.enterprise.inject.spi.Bean
                             * @see java.lang.reflect.Type
                             */
                            // @ts-ignore
                            getDependencyInstance<S>(bean: object, type: java.lang.reflect.Type): S
                            /**
                             * Forces the initialization of bean target.
                             */
                            // @ts-ignore
                            public initialize(): void
                            // @ts-ignore
                            public destroy(instance: T, creationalContext: object): void
                            // @ts-ignore
                            public getQualifiers(): Array<java.lang.annotation.Annotation>
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public getStereotypes(): Array<java.lang.Class<any>>
                            // @ts-ignore
                            public getBeanClass(): java.lang.Class<any>
                            // @ts-ignore
                            public isAlternative(): boolean
                            // @ts-ignore
                            public isNullable(): boolean
                            // @ts-ignore
                            public getInjectionPoints(): Array<InjectionPoint>
                            // @ts-ignore
                            public getScope(): java.lang.Class<any>
                            // @ts-ignore
                            public getId(): string
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
