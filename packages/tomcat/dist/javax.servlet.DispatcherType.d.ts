declare namespace javax {
    namespace servlet {
        /**
         * @since Servlet 3.0
         */
        // @ts-ignore
        class DispatcherType extends java.lang.Enum<javax.servlet.DispatcherType> {
            // @ts-ignore
            readonly FORWARD: javax.servlet.DispatcherType
            // @ts-ignore
            readonly INCLUDE: javax.servlet.DispatcherType
            // @ts-ignore
            readonly REQUEST: javax.servlet.DispatcherType
            // @ts-ignore
            readonly ASYNC: javax.servlet.DispatcherType
            // @ts-ignore
            readonly ERROR: javax.servlet.DispatcherType
            // @ts-ignore
            values(): javax.servlet.DispatcherType[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): javax.servlet.DispatcherType
        }
    }
}
