declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * {@link java.beans.PropertyEditor Editor} for {@link MediaType}
             * descriptors, to automatically convert {@code String} specifications
             * (e.g. {@code "text/html"}) to {@code MediaType} properties.
             * @author Juergen Hoeller
             * @since 3.0
             * @see MediaType
             */
            // @ts-ignore
            class MediaTypeEditor extends java.beans.PropertyEditorSupport {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public setAsText(text: java.lang.String | string): void
                // @ts-ignore
                public getAsText(): string
            }
        }
    }
}
