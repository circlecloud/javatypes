declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Base implementation of the {@link TypeConverter} interface, using a package-private delegate.
             * Mainly serves as base class for {@link BeanWrapperImpl}.
             * @author Juergen Hoeller
             * @since 3.2
             * @see SimpleTypeConverter
             */
            // @ts-ignore
            class TypeConverterSupport extends org.springframework.beans.PropertyEditorRegistrySupport implements org.springframework.beans.TypeConverter {
                // @ts-ignore
                constructor()
                // @ts-ignore
                convertIfNecessary<T>(value: any, requiredType: java.lang.Class<T>): T
                // @ts-ignore
                convertIfNecessary<T>(value: any, requiredType: java.lang.Class<T>, methodParam: MethodParameter): T
                // @ts-ignore
                convertIfNecessary<T>(value: any, requiredType: java.lang.Class<T>, typeDescriptor: TypeDescriptor): T
            }
        }
    }
}
