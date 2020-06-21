declare namespace cn {
    namespace nukkit {
        namespace command {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class FormattedCommandAlias extends cn.nukkit.command.Command {
                // @ts-ignore
                constructor(alias: java.lang.String | string, formatStrings: java.lang.String[] | string[])
                // @ts-ignore
                constructor(alias: java.lang.String | string, formatStrings: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
                // @ts-ignore
                public execute(sender: cn.nukkit.command.CommandSender, commandLabel: java.lang.String | string, args: java.lang.String[] | string[]): boolean
            }
        }
    }
}
