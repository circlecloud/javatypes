declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * Action hook. Actions represent the callback mechanism used by
             * coyote servlet containers to request operations on the coyote connectors.
             * Some standard actions are defined in ActionCode, however custom
             * actions are permitted.
             * The param object can be used to pass and return informations related with the
             * action.
             * This interface is typically implemented by ProtocolHandlers, and the param
             * is usually a Request or Response object.
             * @author Remy Maucherat
             */
            // @ts-ignore
            interface ActionHook {
                /**
                 * Send an action to the connector.
                 * @param actionCode Type of the action
                 * @param param Action parameter
                 */
                // @ts-ignore
                action(actionCode: org.apache.coyote.ActionCode, param: java.lang.Object | any): void
            }
        }
    }
}
