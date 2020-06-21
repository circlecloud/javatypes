declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * {@link java.beans.PropertyEditor Editor} for a {@link PropertyValues} object.
             * <p>The required format is defined in the {@link java.util.Properties}
             * documentation. Each property must be on a new line.
             * <p>The present implementation relies on a
             * {@link org.springframework.beans.propertyeditors.PropertiesEditor}
             * underneath.
             * @author Rod Johnson
             * @author Juergen Hoeller
             */
            // @ts-ignore
            class PropertyValuesEditor extends java.beans.PropertyEditorSupport {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public setAsText(text: java.lang.String | string): void
            }
        }
    }
}
