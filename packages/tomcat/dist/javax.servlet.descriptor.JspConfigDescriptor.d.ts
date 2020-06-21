declare namespace javax {
    namespace servlet {
        namespace descriptor {
            /**
             * @since Servlet 3.0
             *  TODO SERVLET3 - Add comments
             */
            // @ts-ignore
            interface JspConfigDescriptor {
                // @ts-ignore
                getTaglibs(): Array<javax.servlet.descriptor.TaglibDescriptor>
                // @ts-ignore
                getJspPropertyGroups(): Array<javax.servlet.descriptor.JspPropertyGroupDescriptor>
            }
        }
    }
}
